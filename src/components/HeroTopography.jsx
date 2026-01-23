import React, { useEffect, useMemo, useRef, useState } from "react";

const CONFIG = {
    src: "/Topography.svg",

    // Parallax strength per group id (px)
    parallax: {
        "Very-Far": 2,
        Far: 5,
        Medium: 8,
        Near: 12,

        "Face-Far": 15,
        "Face-Medium": 20,
        "Face-Main": 25,

        "Silhouette-far": 17,
        "Silhouette-Medium": 23,
        Silhouette: 30,

        "Details-Dotted": 6,
        Last: 0, // tienilo fermo se è una cornice/finale
    },

    // Slow continuous motion
    breathe: {
        amp: 0.025,     // scale: 1.012
        speed: 0.0005,  // lower = slower
    },
    drift: {
        amp: 20,         // px
        speed: 0.00055,
    },

    // Optional: animate dashed/dotted lines by shifting dash offset
    dottedDashDrift: {
        enabled: true,
        speed: 0.9,     // dashoffset per frame-ish (scaled by time)
    },

    // Smoothing for mouse parallax
    smoothing: 0.12,
};

function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
}

export default function HeroTopography({ className = "", style }) {
    const rootRef = useRef(null);
    const svgWrapRef = useRef(null);
    const rafRef = useRef(null);

    const mouseRef = useRef({ tx: 0, ty: 0, x: 0, y: 0 });
    const [svgMarkup, setSvgMarkup] = useState("");

    // Load SVG as text and inject inline (so we can query groups by id)
    useEffect(() => {
        let cancelled = false;
        fetch(CONFIG.src)
            .then((r) => r.text())
            .then((txt) => {
                if (!cancelled) setSvgMarkup(txt);
            })
            .catch((e) => console.error("Failed to load SVG:", e));
        return () => {
            cancelled = true;
        };
    }, []);

    // Mouse tracking relative to component
    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;

        const onMove = (e) => {
            const r = el.getBoundingClientRect();
            const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
            const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
            mouseRef.current.tx = clamp(nx || 0, -1, 1);
            mouseRef.current.ty = clamp(ny || 0, -1, 1);
        };

        const onLeave = () => {
            mouseRef.current.tx = 0;
            mouseRef.current.ty = 0;
        };

        window.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);

        return () => {
            window.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    // Animation loop (parallax + breathing + dashed drift)
    useEffect(() => {
        const wrap = svgWrapRef.current;
        if (!wrap) return;

        const svg = wrap.querySelector("svg");
        if (!svg) return;

        // Collect <g> elements by id
        const layers = new Map();
        Object.keys(CONFIG.parallax).forEach((id) => {
            const node = svg.querySelector(`#${CSS.escape(id)}`);
            if (node) {
                layers.set(id, node);
                // Helps SVG transforms behave more predictably
                node.style.transformBox = "fill-box";
                node.style.transformOrigin = "50% 50%";
            }
        });

        const silhouette = svg.querySelector(`#${CSS.escape("Silhouette")}`);
        const faceMain = svg.querySelector(`#${CSS.escape("Face-Main")}`);
        const dotted = svg.querySelector(`#${CSS.escape("Details-Dotted")}`);

        const start = performance.now();

        const tick = (t) => {
            const dt = t - start;

            // smooth mouse
            const m = mouseRef.current;
            m.x += (m.tx - m.x) * CONFIG.smoothing;
            m.y += (m.ty - m.y) * CONFIG.smoothing;

            // base parallax
            layers.forEach((node, id) => {
                const s = CONFIG.parallax[id] ?? 0;
                const tx = m.x * s;
                const ty = m.y * s;
                node.style.transform = `translate(${tx}px, ${ty}px)`;
            });

            // breathing/drift for identity layers
            const breathe = 1 + Math.sin(dt * CONFIG.breathe.speed) * CONFIG.breathe.amp;
            const driftY = Math.sin(dt * CONFIG.drift.speed) * CONFIG.drift.amp;

            if (silhouette) {
                // append to existing translate from parallax
                const base = silhouette.style.transform || "";
                silhouette.style.transform = `${base} translate(0px, ${driftY}px) scale(${breathe})`;
                silhouette.style.transformOrigin = "60% 55%";
            }

            if (faceMain) {
                const faceScale =
                    1 + Math.sin(dt * (CONFIG.breathe.speed * 1.15)) * (CONFIG.breathe.amp * 0.6);
                const base = faceMain.style.transform || "";
                faceMain.style.transform = `${base} scale(${faceScale})`;
                faceMain.style.transformOrigin = "60% 45%";
            }

            // dashed drift on dotted details (if your dotted paths use dasharray in SVG)
            if (CONFIG.dottedDashDrift.enabled && dotted) {
                const dashOffset = (dt * 0.001) * 120 * CONFIG.dottedDashDrift.speed;
                // Apply to all paths inside dotted group
                dotted.querySelectorAll("path").forEach((p) => {
                    p.style.strokeDashoffset = `${dashOffset}`;
                });
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [svgMarkup]);

    return (
        <div
            ref={rootRef}
            className={`relative overflow-hidden ${className}`}
            style={{
                width: "100vw",
                height: "100vh",
                background: "#050608",
                ...style,
            }}
            aria-hidden="true"
        >
            <div
                ref={svgWrapRef}
                className="absolute inset-0"
                dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />

            <style>{`
                /* Force the injected SVG to behave like background-cover */
                .hero-topo svg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                }
                /* Cover behavior */
                .hero-topo svg {
                    width: 100vw;
                    height: 100vh;
                }
            `}</style>

            <div className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_70%_45%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]" />
        </div>
    );
}
