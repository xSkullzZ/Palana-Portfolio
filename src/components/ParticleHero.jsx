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
    particleColor: "#FFBB33",
    particleSize: 1.2,
    spacing: 6,
    alphaThreshold: 128,

    mouseRadius: 80,
    densityMin: 1,
    densityMax: 32,
    transitionSpeed: 0.20,

    fontFamily:
        "Outfit, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    fontWeight: 800,
    baseFontSize: 84,
    minFontSize: 28,

    changeInterval: 6000,
    dprMax: 2,
};

const PARTICLE_SIZE_SCALE = {
    baseWidth: 1200,
    minScale: 0.75,
    maxScale: 1.25,
};

const RESPONSIVE_CONFIG = {
    mobileBreakpoint: 768,
    desktop: {
        textMaxWidthRatio: 0.92,
        textMaxHeightRatio: 0.6,
        lineHeight: 1.1,
    },
    mobile: {
        particleSize: 1.0,
        spacing: 3,
        baseFontSize: 32,
        minFontSize: 14,
        textMaxWidthRatio: 0.88,
        textMaxHeightRatio: 0.65,
        lineHeight: 1.15,
    },
};

function clampValue(n, min, max) {
    return Math.max(min, Math.min(max, n));
}

export function ParticleHero({
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
    const responsiveRef = useRef(null);

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

        const getResponsiveConfig = (isMobile, currentWidth) => {
            const baseConfig = {
                particleSize,
                spacing,
                baseFontSize,
                minFontSize,
            };
            let responsive = isMobile
                ? { ...RESPONSIVE_CONFIG.mobile }
                : { ...RESPONSIVE_CONFIG.desktop };
            
            if (isMobile && currentWidth < 400) {
                responsive.baseFontSize = Math.min(responsive.baseFontSize || 32, 26);
                responsive.minFontSize = Math.min(responsive.minFontSize || 14, 12);
                responsive.textMaxWidthRatio = Math.min(responsive.textMaxWidthRatio || 0.88, 0.85);
            }
            
            const baseSize =
                typeof responsive.particleSize === "number"
                    ? responsive.particleSize
                    : baseConfig.particleSize;
            const scale = clampValue(
                (currentWidth || 1) / PARTICLE_SIZE_SCALE.baseWidth,
                PARTICLE_SIZE_SCALE.minScale,
                PARTICLE_SIZE_SCALE.maxScale
            );
            return { ...baseConfig, ...responsive, particleSize: baseSize * scale };
        };

        function resizeToParent() {
            const rect = el.getBoundingClientRect();
            width = Math.max(1, Math.floor(rect.width));
            height = Math.max(1, Math.floor(rect.height));

            const isMobile = width < RESPONSIVE_CONFIG.mobileBreakpoint;
            responsiveRef.current = getResponsiveConfig(isMobile, width);

            const dpr = getDpr();
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function createParticle(x, y, tx, ty, size) {
            return {
                x,
                y,
                targetX: tx,
                targetY: ty,
                baseX: tx,
                baseY: ty,
                size,
                density: Math.random() * (densityMax - densityMin) + densityMin,
                used: false,
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
                },
                draw() {
                    ctx.fillStyle = particleColor;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                },
            };
        }

        function wrapLines(ctx2d, text, maxWidth) {
            const words = text.split(" ");
            const lines = [];
            let line = "";

            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                const test = line ? `${line} ${word}` : word;
                const metrics = ctx2d.measureText(test);
                if (metrics.width > maxWidth && line) {
                    lines.push(line);
                    line = word;
                } else {
                    line = test;
                }
            }
            if (line) lines.push(line);
            return lines;
        }

        function drawTextToBuffer(text) {
            // background (optional)
            ctx.clearRect(0, 0, width, height);
            if (background && background !== "transparent") {
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, width, height);
            }

            const cfg = responsiveRef.current || getResponsiveConfig(false);
            let fontSize = cfg.baseFontSize;
            const maxWidth = width * cfg.textMaxWidthRatio;
            const maxHeight = height * cfg.textMaxHeightRatio;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#FFBB33";

            while (fontSize > cfg.minFontSize) {
                ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
                const lines = wrapLines(ctx, text, maxWidth);
                if (!lines.length) break;
                const lineHeight = fontSize * cfg.lineHeight;
                const totalHeight = lines.length * lineHeight;
                const widest = lines.reduce(
                    (max, line) => Math.max(max, ctx.measureText(line).width),
                    0
                );
                if (widest <= maxWidth && totalHeight <= maxHeight) break;
                fontSize -= fontSize > 24 ? 3 : 2;
            }

            ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
            const lines = wrapLines(ctx, text, maxWidth);
            if (!lines.length) return;
            const lineHeight = fontSize * cfg.lineHeight;
            const totalHeight = lines.length * lineHeight;
            const startY = height / 2 - totalHeight / 2 + lineHeight / 2;
            for (let i = 0; i < lines.length; i++) {
                ctx.fillText(lines[i], width / 2, startY + i * lineHeight);
            }
        }

        function createParticlesFromText(text) {
            drawTextToBuffer(text);

            const img = ctx.getImageData(0, 0, width, height);
            const data = img.data;
            const cfg = responsiveRef.current || getResponsiveConfig(false);
            const step = Math.max(1, cfg.spacing);
            const pSize = cfg.particleSize;

            particlesRef.current.forEach((p) => (p.used = false));
            const next = [];

            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    const i = (y * width + x) * 4;
                    const alpha = data[i + 3];
                    if (alpha > alphaThreshold) {
                        const existing = particlesRef.current.find((p) => !p.used);
                        if (existing) {
                            existing.targetX = x;
                            existing.targetY = y;
                            existing.size = pSize;
                            existing.used = true;
                            next.push(existing);
                        } else {
                            next.push(
                                createParticle(
                                    Math.random() * width,
                                    Math.random() * height,
                                    x,
                                    y,
                                    pSize
                                )
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

export default ParticleHero;
