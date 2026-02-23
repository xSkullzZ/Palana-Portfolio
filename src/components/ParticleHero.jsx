import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * ParticleHero — HEADER ONLY (Plasmic-friendly)
 * - accepts className/style so Plasmic can size & style it
 * - canvas fits the component's box (ResizeObserver)
 */

// =======================
// CONFIG (edit here)
// =======================
const DEFAULT_TEXTS = [
    "I CRAFT HUMAN-AI INTERFACES",
    "I DESIGN COMPLEX TOOLS THAT FEEL EFFORTLESS",
    "I SHAPE SYSTEMS PEOPLE CAN TRUST",
    "WHERE AI, INTERFACES, AND SOUND MEET",
];

const DEFAULTS = {
    background: "transparent", // set "#000" if you want the component to paint background
    particleColor: "#06b6d4",
    particleSize: 1.7,
    spacing: 5,
    alphaThreshold: 128,

    mouseRadius: 80,
    densityMin: 1,
    densityMax: 31,
    transitionSpeed: 0.10,

    fontFamily:
        "Outfit, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontWeight: 800,
    baseFontSize: 84,
    minFontSize: 28,

    changeInterval: 6000,
    dprMax: 2,
};

export default function ParticleHero({
    // Plasmic styling hooks:
    className,
    style,

    // Optional props (you can ignore for now):
    texts = DEFAULT_TEXTS,
    background = DEFAULTS.background,
    particleColor = DEFAULTS.particleColor,
    particleSize = DEFAULTS.particleSize,
    spacing = DEFAULTS.spacing,
    alphaThreshold = DEFAULTS.alphaThreshold,

    mouseRadius = DEFAULTS.mouseRadius,
    densityMin = DEFAULTS.densityMin,
    densityMax = DEFAULTS.densityMax,
    transitionSpeed = DEFAULTS.transitionSpeed,

    fontFamily = DEFAULTS.fontFamily,
    fontWeight = DEFAULTS.fontWeight,
    baseFontSize = DEFAULTS.baseFontSize,
    minFontSize = DEFAULTS.minFontSize,

    changeInterval = DEFAULTS.changeInterval,
    dprMax = DEFAULTS.dprMax,
}) {
    const canvasRef = useRef(null);
    const wrapRef = useRef(null);
    const rafRef = useRef(null);

    const [index, setIndex] = useState(0);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    const safeTexts = useMemo(
        () => (Array.isArray(texts) && texts.length ? texts : DEFAULT_TEXTS),
        [texts]
    );

    useEffect(() => {
        const el = wrapRef.current;
        const canvas = canvasRef.current;
        if (!el || !canvas) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        let width = 1;
        let height = 1;

        const getDpr = () => Math.min(window.devicePixelRatio || 1, dprMax);

        function resizeToParent() {
            const rect = el.getBoundingClientRect();
            width = Math.max(1, Math.floor(rect.width));
            height = Math.max(1, Math.floor(rect.height));

            const dpr = getDpr();
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        class Particle {
            constructor(x, y, tx, ty) {
                this.x = x;
                this.y = y;
                this.targetX = tx;
                this.targetY = ty;
                this.baseX = tx;
                this.baseY = ty;
                this.size = particleSize;
                this.density = Math.random() * (densityMax - densityMin) + densityMin;
                this.used = false;
            }

            update() {
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;

                if (dist < mouseRadius) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    const dirX = (dx / dist) * force * this.density;
                    const dirY = (dy / dist) * force * this.density;
                    this.x -= dirX;
                    this.y -= dirY;
                } else {
                    this.x -= (this.x - this.baseX) * transitionSpeed;
                    this.y -= (this.y - this.baseY) * transitionSpeed;
                }

                this.baseX += (this.targetX - this.baseX) * transitionSpeed;
                this.baseY += (this.targetY - this.baseY) * transitionSpeed;
            }

            draw() {
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function drawTextToBuffer(text) {
            // background (optional)
            ctx.clearRect(0, 0, width, height);
            if (background && background !== "transparent") {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, width, height);
            }

            let fontSize = baseFontSize;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#ffffff";

            while (fontSize > minFontSize) {
                ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
                const w = ctx.measureText(text).width;
                if (w <= width * 0.92) break;
                fontSize -= 4;
            }

            ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
            ctx.fillText(text, width / 2, height / 2);
        }

        function createParticlesFromText(text) {
            drawTextToBuffer(text);

            const img = ctx.getImageData(0, 0, width, height);
            const data = img.data;

            particlesRef.current.forEach((p) => (p.used = false));
            const next = [];

            for (let y = 0; y < height; y += spacing) {
                for (let x = 0; x < width; x += spacing) {
                    const i = (y * width + x) * 4;
                    const alpha = data[i + 3];
                    if (alpha > alphaThreshold) {
                        const existing = particlesRef.current.find((p) => !p.used);
                        if (existing) {
                            existing.targetX = x;
                            existing.targetY = y;
                            existing.used = true;
                            next.push(existing);
                        } else {
                            next.push(
                                new Particle(Math.random() * width, Math.random() * height, x, y)
                            );
                        }
                    }
                }
            }

            ctx.clearRect(0, 0, width, height);
            particlesRef.current = next;
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            if (background && background !== "transparent") {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, width, height);
            }

            const arr = particlesRef.current;
            for (let i = 0; i < arr.length; i++) {
                arr[i].update();
                arr[i].draw();
            }

            rafRef.current = requestAnimationFrame(animate);
        }

        function onMouseMove(e) {
            const rect = el.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        }

        function onMouseLeave() {
            mouseRef.current = { x: -9999, y: -9999 };
        }

        const ro = new ResizeObserver(() => {
            resizeToParent();
            createParticlesFromText(safeTexts[index]);
        });

        // init
        resizeToParent();
        createParticlesFromText(safeTexts[index]);
        animate();

        ro.observe(el);
        el.addEventListener("mousemove", onMouseMove, { passive: true });
        el.addEventListener("mouseleave", onMouseLeave, { passive: true });

        return () => {
            ro.disconnect();
            el.removeEventListener("mousemove", onMouseMove);
            el.removeEventListener("mouseleave", onMouseLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        index,
        safeTexts,
        background,
        particleColor,
        particleSize,
        spacing,
        alphaThreshold,
        mouseRadius,
        densityMin,
        densityMax,
        transitionSpeed,
        fontFamily,
        fontWeight,
        baseFontSize,
        minFontSize,
        dprMax,
    ]);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % safeTexts.length);
        }, changeInterval);
        return () => clearInterval(id);
    }, [changeInterval, safeTexts.length]);

    return (
        <div
            ref={wrapRef}
            className={className}
            style={{
                // ✅ default sizing if Plasmic doesn't set it yet
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                ...style,
            }}
        >
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
}
