import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * ProjectReveal (wrapper version)
 * Keeps your Plasmic-built layout.
 *
 * Mark your project rows in Plasmic with HTML attributes:
 *  - data-project-id="..."
 *  - data-mockup-src="/projects/..png"
 *  - data-bg-src="/projects/..jpg" (optional)
 *
 * Mark the chevron element:
 *  - data-project-chevron="1"
 *
 * Mark the expandable details block inside each row:
 *  - data-project-details="1"
 *
 * Behavior:
 *  - Hover: cursor mockup + dim/blur others + background change + parallax
 *  - Click chevron: expand project; others compact
 */

const CFG = {
    minDesktop: 768,

    // cursor mockup
    mockupW: 280,
    mockupH: 380,
    mockupRadius: 14,
    mockupRotateDeg: 3,
    mockupOffsetX: 18,
    mockupOffsetY: 18,

    // hover smoothing
    cursorEase: 0.2,

    // background
    bgOpacity: 0.35,
    bgDissolveMs: 180,
    parallaxStrength: 18, // px

    // dim / blur
    dimOpacity: 0.28,
    blurPx: 2,

    // compact when expanded
    compactScale: 0.92,
    compactOpacity: 0.35,

    // details animation
    detailsOpenMs: 220,
};

function isDesktop(minWidth) {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.(`(min-width:${minWidth}px)`).matches ?? false;
}

export default function ProjectReveal({ className, style, children }) {
    const rootRef = useRef(null);

    const desktop = useMemo(() => isDesktop(CFG.minDesktop), []);

    const [hoverId, setHoverId] = useState(null);
    const [hoverMockup, setHoverMockup] = useState(null);
    const [bgSrc, setBgSrc] = useState(null);
    const [bgFade, setBgFade] = useState(1);

    const [expandedId, setExpandedId] = useState(null);

    // cursor position (smoothed)
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const prev = useRef({ x: 0, y: 0 });
    const raf = useRef(null);

    useEffect(() => {
        if (!desktop) return;

        const onMove = (e) => {
            if (raf.current) return;
            raf.current = requestAnimationFrame(() => {
                raf.current = null;
                const dx = e.clientX - prev.current.x;
                const dy = e.clientY - prev.current.y;
                const nx = prev.current.x + dx * CFG.cursorEase;
                const ny = prev.current.y + dy * CFG.cursorEase;
                prev.current = { x: nx, y: ny };
                setPos({ x: nx, y: ny });
            });
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [desktop]);

    // background parallax from cursor
    const parallax = useMemo(() => {
        const w = typeof window !== "undefined" ? window.innerWidth : 1;
        const h = typeof window !== "undefined" ? window.innerHeight : 1;
        const x = ((pos.x / (w || 1)) - 0.5) * CFG.parallaxStrength;
        const y = ((pos.y / (h || 1)) - 0.5) * CFG.parallaxStrength;
        return { x, y };
    }, [pos.x, pos.y]);

    // Event delegation: hover + click chevron
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const getRow = (target) => target?.closest?.("[data-project-id]");

        const onOver = (e) => {
            const row = getRow(e.target);
            if (!row) return;

            const id = row.getAttribute("data-project-id");
            const mockup = row.getAttribute("data-mockup-src");
            const bg = row.getAttribute("data-bg-src");

            setHoverId(id || null);
            setHoverMockup(mockup || null);

            if (bg && bg !== bgSrc) {
                setBgFade(0);
                window.setTimeout(() => {
                    setBgSrc(bg);
                    setBgFade(1);
                }, CFG.bgDissolveMs);
            } else if (!bgSrc && bg) {
                setBgSrc(bg);
            }
        };

        const onOut = (e) => {
            const row = getRow(e.target);
            if (!row) return;

            const related = e.relatedTarget;
            if (related && row.contains(related)) return;

            setHoverId(null);
            setHoverMockup(null);
            // keep background as last hovered (premium feel)
        };

        const onClick = (e) => {
            const row = getRow(e.target);
            if (!row) return;

            const chevron = e.target.closest?.("[data-project-chevron]");
            if (!chevron) return;

            e.preventDefault();
            e.stopPropagation();

            const id = row.getAttribute("data-project-id");
            setExpandedId((prevId) => (prevId === id ? null : id));
        };

        root.addEventListener("mouseover", onOver);
        root.addEventListener("mouseout", onOut);
        root.addEventListener("click", onClick);

        return () => {
            root.removeEventListener("mouseover", onOver);
            root.removeEventListener("mouseout", onOut);
            root.removeEventListener("click", onClick);
        };
    }, [bgSrc]);

    // Apply dim/blur/compact and details show/hide
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const rows = Array.from(root.querySelectorAll("[data-project-id]"));

        rows.forEach((row) => {
            const id = row.getAttribute("data-project-id");
            const isHovered = hoverId && id === hoverId;
            const someoneHovered = !!hoverId;

            const isExpanded = expandedId && id === expandedId;
            const someoneExpanded = !!expandedId;

            // baseline transition
            row.style.transition = "filter 220ms ease, opacity 220ms ease, transform 220ms ease";
            row.style.willChange = "transform, opacity, filter";

            // details block inside this row
            const details = row.querySelector("[data-project-details]");

            // Hide details by default unless expanded
            if (details) {
                details.style.overflow = "hidden";
                details.style.willChange = "height, opacity";
                details.style.transition = `height ${CFG.detailsOpenMs}ms ease, opacity ${CFG.detailsOpenMs}ms ease`;

                if (isExpanded) {
                    // expand
                    details.style.display = "block";
                    details.style.opacity = "1";
                    details.style.height = details.scrollHeight + "px";
                } else {
                    // collapse
                    details.style.opacity = "0";
                    details.style.height = "0px";
                    // keep it in flow for measurement; set display none after transition for accessibility
                    window.setTimeout(() => {
                        // only if still not expanded
                        if (!(expandedId && id === expandedId)) details.style.display = "none";
                    }, CFG.detailsOpenMs);
                }
            }

            // states
            if (someoneExpanded) {
                if (isExpanded) {
                    row.style.opacity = "1";
                    row.style.transform = "scale(1)";
                    row.style.filter = "none";
                } else {
                    row.style.opacity = String(CFG.compactOpacity);
                    row.style.transform = `scale(${CFG.compactScale})`;
                    row.style.filter = `blur(${CFG.blurPx}px)`;
                }
                return;
            }

            if (someoneHovered) {
                if (isHovered) {
                    row.style.opacity = "1";
                    row.style.transform = "scale(1)";
                    row.style.filter = "none";
                } else {
                    row.style.opacity = String(CFG.dimOpacity);
                    row.style.transform = "scale(0.985)";
                    row.style.filter = `blur(${CFG.blurPx}px)`;
                }
            } else {
                row.style.opacity = "1";
                row.style.transform = "scale(1)";
                row.style.filter = "none";
            }
        });
    }, [hoverId, expandedId]);

    return (
        <div
            ref={rootRef}
            className={className}
            style={{ position: "relative", width: "100%", ...style }}
        >
            {/* Background layer */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 0,
                    overflow: "hidden",
                }}
            >
                <AnimatePresence initial={false}>
                    {bgSrc ? (
                        <motion.div
                            key={bgSrc}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: bgFade * CFG.bgOpacity }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            style={{
                                position: "absolute",
                                inset: "-6%",
                                backgroundImage: `url(${bgSrc})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
                                filter: "saturate(1.05) contrast(1.05)",
                            }}
                        />
                    ) : null}
                </AnimatePresence>

                {/* Dark overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0.55), rgba(0,0,0,0.78))",
                    }}
                />
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

            {/* Cursor mockup */}
            {desktop && hoverMockup ? (
                <img
                    src={hoverMockup}
                    alt=""
                    draggable={false}
                    style={{
                        position: "fixed",
                        left: pos.x + CFG.mockupOffsetX,
                        top: pos.y + CFG.mockupOffsetY,
                        width: CFG.mockupW,
                        height: CFG.mockupH,
                        objectFit: "cover",
                        borderRadius: CFG.mockupRadius,
                        boxShadow: "0 30px 90px rgba(0,0,0,0.55)",
                        transform: `translate(-50%,-50%) rotate(${CFG.mockupRotateDeg}deg)`,
                        pointerEvents: "none",
                        zIndex: 9999,
                    }}
                />
            ) : null}
        </div>
    );
}
