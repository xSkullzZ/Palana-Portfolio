import React, { useEffect, useRef, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;
const withBase = (path) => `${BASE_URL}${path.replace(/^\//, "")}`;

const BACKGROUND_IMAGES = [
    withBase("/about/bg1.webp"),
    withBase("/about/bg2.webp"),
    withBase("/about/bg3.webp"),
    withBase("/about/bg4.webp"),
    withBase("/about/bg5.webp"),
    withBase("/about/bg6.webp"),
    withBase("/about/bg7.webp"),
    withBase("/about/bg8.webp"),
];

const BG_IMAGE_WIDTH = 2048;
const BG_IMAGE_HEIGHT = 904;

const BLEND_CONFIG = {
    widthPx: 400,
    blurPx: 6,
    opacity: 0.85,
};

const OVERLAY_CONFIG = {
    color: "#000000",
    opacity: 0.6,
    solidOpacity: 0.15,
};

const TEXT_SHADOW_CONFIG = {
    color: "#000000",
    opacity: 0.74,
    sizeRem: 1.8,
};

const HEADER_LAYOUT = {
    rightMarginVw: 16,
    maxWidthVw: 66,
    textAlign: "right",
    enterOffsetPx: 28,
    enterDurationMs: 700,
    advance: 0.12,
    timingScale: 0.97,
    typeInStart: 0.02,
    typeInEnd: 0.46,
    deleteStart: 0.66,
    floatOffsetPx: 36,
    floatEasePower: 1.6,
    letterSpacingEm: 0.01,
    lineHeight: 1.12,
};

const FOREGROUND_REVEAL = {
    timelineMax: 10000,
    leadIn: 0.06,
    leadOut: 0.08,
    enterOffsetPx: 28,
};

const BACKGROUND_BLUR_PX = 2;

const BACKGROUND_HEADERS = [
    {
        text:
            "I grew up between two worlds\n"
            + "the discipline of music and the curiosity of technology.\n"
            + "My room was my first studio, my first lab, my first universe.",
        sizeRem: 2.0,
        color: "#ffffff",
    },
    {
        text:
            "In Messina's music shop, I learned that creativity has no boundaries.\n"
            + "Every instrument was a new world\n"
            + "and I wanted to explore them all.",
        sizeRem: 2.0,
        color: "#ffffff",
    },
    {
        text:
            "At my grandma's home, the sea taught me perspective.\n"
            + "It showed me that the world was wider than the one I knew\n"
            + "and that I wanted to reach it.",
        sizeRem: 2.0,
        color: "#ffffff",
    },
    {
        text:
            "The Conservatory shaped my discipline\n"
            + "but also tested my passion.\n"
            + "Not every chapter is beautiful\n"
            + "but every chapter transforms you.",
        sizeRem: 2.0,
        color: "#ffffff",
    },
    {
        text:
            "Leaving Sicily wasn't a move.\n"
            + "It was an escape from stagnation,\n"
            + "a leap into uncertainty,\n"
            + "and the beginning of my reinvention.",
        sizeRem: 2.0,
        color: "#ffffff",
    },
    {
        text:
            "Hamburg gave me space to evolve.\n"
            + "Here I became a designer, a product leader,\n"
            + "and someone who builds AI-first experiences.",
        sizeRem: 2.0,
        color: "#ffffff",
    },
    {
        text:
            "Competition taught me strategy, resilience,\n"
            + "and how to perform under pressure.\n"
            + "Gaming wasn't a pastime\n"
            + "it was my training ground for leadership.",
        sizeRem: 2.0,
        timingOffset: 0.12,
        color: "#ffffff",
    },
    {
        text:
            "Every place shaped me.\n"
            + "Every challenge sharpened me.\n"
            + "Every passion converged into the way I build.\n"
            + "And now\n"
            + "I'm ready for what comes next.",
        sizeRem: 2.0,
        timingOffset: 0.12,
        color: "#ffffff",
    },
];

const CONFIG = {
    sectionHeightVh: 800,
    scrollVhDesktop: 800,
    mobileMultiplier: 1,
    deadzoneVh: 10,

    mobileBreakpoint: 800,

    bgWidth: BG_IMAGE_WIDTH,
    bgHeight: BG_IMAGE_HEIGHT,

    smoothing: 0.28,
    bgImages: BACKGROUND_IMAGES,

    entranceOffsetPx: -40,
    entranceDurationMs: 700,


    characters: [
        {
            path: withBase("/about/me1.webp"),
            aspectRatio: 1.25,
            position: 90,
            offsetY: -40,
            scale: 0.87,
            delayMs: -450,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me2.webp"),
            aspectRatio: 1.5,
            position: 2285,
            offsetY: -230,
            scale: 1.12,
            delayMs: 1000,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me3.webp"),
            aspectRatio: 1.5,
            position: 3150,
            offsetY: 0,
            scale: 1.05,
            delayMs: 1600,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me4.webp"),
            aspectRatio: 0.7285,
            position: 4750,
            offsetY: 0,
            scale: 1,
            delayMs: 2600,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me5.webp"),
            aspectRatio: 0.6356,
            position: 6405,
            offsetY: 345,
            scale: 0.42,
            delayMs: 3700,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me6.webp"),
            aspectRatio: 0.6113,
            position: 8800,
            offsetY: 0,
            scale: 1,
            delayMs: 5100,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me7.webp"),
            aspectRatio: 0.6113,
            position: 10700,
            offsetY: 0,
            scale: 1,
            delayMs: 6500,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me8.webp"),
            aspectRatio: 1.5,
            position: 12700,
            offsetY: 0,
            scale: 1,
            delayMs: 8300,
            skipAnimation: false,
        },
        {
            path: withBase("/about/me9.webp"),
            aspectRatio: 1.5,
            position: 14600,
            offsetY: 0,
            scale: 1,
            delayMs: 9600,
            skipAnimation: false,
        },
    ],
    characterHeightVh: 70,
    characterBottomVh: 0,
    characterBufferPx: 220,
    referenceViewportHeight: 1440,
    referenceViewportWidth: 2560,
    delayScaleMin: 0.72,
    delayScaleMax: 1,
};

function getScrollVh() {
    if (typeof window === "undefined") return CONFIG.scrollVhDesktop;
    if (typeof CONFIG.sectionHeightVh === "number") return CONFIG.sectionHeightVh;
    const isMobile = window.innerWidth < CONFIG.mobileBreakpoint;
    const base = isMobile
        ? Math.round(CONFIG.scrollVhDesktop * CONFIG.mobileMultiplier)
        : CONFIG.scrollVhDesktop;
    return base + CONFIG.deadzoneVh;
}

function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
}

function toRgba(color, opacity) {
    if (!color || typeof color !== "string") {
        return `rgba(0,0,0,${opacity})`;
    }
    if (color.startsWith("#")) {
        const hex = color.slice(1);
        const normalized =
            hex.length === 3
                ? hex
                      .split("")
                      .map((c) => c + c)
                      .join("")
                : hex;
        if (normalized.length === 6) {
            const num = Number.parseInt(normalized, 16);
            const r = (num >> 16) & 255;
            const g = (num >> 8) & 255;
            const b = num & 255;
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
    }
    return color;
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function AboutHorizontal2({ className = "" }) {
    const sectionRef = useRef(null);
    const rafRef = useRef(null);

    const [progress, setProgress] = useState(0);
    const progRef = useRef({ target: 0, current: 0 });

    const [maxShift, setMaxShift] = useState(0);
    const [bgRenderWidth, setBgRenderWidth] = useState(CONFIG.bgWidth);
    const [bgScale, setBgScale] = useState(1);
    const [offsetScale, setOffsetScale] = useState(1);
    const [viewportHeight, setViewportHeight] = useState(
        typeof window === "undefined" ? 1080 : window.innerHeight || 1080
    );
    const [scrollVh, setScrollVh] = useState(() => getScrollVh());
    const [sectionEntered, setSectionEntered] = useState(false);

    useEffect(() => {
        const onResize = () => setScrollVh(getScrollVh());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const updateMaxShift = () => {
            const viewportW = window.innerWidth;
            const viewportH = window.innerHeight || 1;
            const scale = Math.max(
                viewportW / CONFIG.bgWidth,
                viewportH / CONFIG.bgHeight
            );
            const scaledWidth = CONFIG.bgWidth * scale;
            const imageCount = Math.max(1, CONFIG.bgImages.length);
            const trackWidth = scaledWidth * imageCount;
            const shift = Math.max(0, trackWidth - viewportW);

            const hScale = clamp(
                viewportH / CONFIG.referenceViewportHeight,
                0.72,
                1.18
            );
            const wScale = clamp(
                viewportW / CONFIG.referenceViewportWidth,
                0.78,
                1.12
            );
            const composedScale = hScale * 0.75 + wScale * 0.25;

            setBgScale(scale);
            setBgRenderWidth(scaledWidth);
            setMaxShift(shift);
            setOffsetScale(composedScale);
            setViewportHeight(viewportH);
        };

        updateMaxShift();
        window.addEventListener("resize", updateMaxShift);
        return () => window.removeEventListener("resize", updateMaxShift);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionEntered(true);
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(section);

        const fallback = window.setTimeout(() => {
            setSectionEntered(true);
        }, 200);

        return () => {
            observer.disconnect();
            window.clearTimeout(fallback);
        };
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || typeof window === "undefined") return;

        const onScroll = () => {
            const r = section.getBoundingClientRect();
            const vh = window.innerHeight;

            const total = r.height - vh;
            const deadzonePx = (CONFIG.deadzoneVh / 100) * vh;
            const travel = Math.max(0, total - deadzonePx);
            const scrolled = clamp(-r.top, 0, total);
            const p = travel > 0 ? scrolled / travel : 0;

            progRef.current.target = clamp(p, 0, 1);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        const tick = () => {
            const s = progRef.current;
            const delta = s.target - s.current;
            if (Math.abs(delta) < 0.0002 || s.target <= 0.0005 || s.target >= 0.9995) {
                s.current = s.target;
            } else {
                s.current += delta * CONFIG.smoothing;
            }
            setProgress(s.current);
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const xBg = -progress * maxShift;
    const xCharacters = -progress * maxShift;
    const delayScale = clamp(
        viewportHeight / CONFIG.referenceViewportHeight,
        CONFIG.delayScaleMin,
        CONFIG.delayScaleMax
    );

    const totalBgImages = CONFIG.bgImages.length;
    const trackWidth = bgRenderWidth * Math.max(1, totalBgImages);
    const seamMask =
        "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,0) 100%)";
    const overlayOpacity = clamp(OVERLAY_CONFIG.opacity, 0, 1);
    const overlayGradient = `linear-gradient(to right, ${toRgba(
        OVERLAY_CONFIG.color,
        0
    )} 0%, ${toRgba(OVERLAY_CONFIG.color, overlayOpacity)} 100%)`;
    const overlaySolidOpacity = clamp(OVERLAY_CONFIG.solidOpacity, 0, 1);
    const overlaySolid = toRgba(OVERLAY_CONFIG.color, overlaySolidOpacity);
    const textShadowOpacity = clamp(TEXT_SHADOW_CONFIG.opacity, 0, 1);
    const shadowColor = toRgba(TEXT_SHADOW_CONFIG.color, textShadowOpacity);
    const shadowBlurRem = Math.max(0.8, TEXT_SHADOW_CONFIG.sizeRem || 1.8);
    const shadowBlurRemSecondary = Math.max(0.6, shadowBlurRem * 0.55);
    const textShadow = `0 0.45rem ${shadowBlurRem}rem ${shadowColor}, 0 0.15rem ${shadowBlurRemSecondary}rem ${shadowColor}`;
    const headerCount = BACKGROUND_HEADERS.length;
    const headerTrackCount = Math.max(1, totalBgImages || headerCount);
    const timingScale = Math.max(0.1, HEADER_LAYOUT.timingScale || 1);
    const headerIndexRaw = progress * headerTrackCount * timingScale + HEADER_LAYOUT.advance;
    const headerIndex = clamp(Math.floor(headerIndexRaw), 0, headerTrackCount - 1);
    const headerLocalT = clamp(headerIndexRaw - headerIndex, 0, 1);
    const activeHeader = BACKGROUND_HEADERS[headerIndex] || {};
    const timingOffset = typeof activeHeader.timingOffset === "number" ? activeHeader.timingOffset : 0;
    const adjustedHeaderT = clamp(headerLocalT - timingOffset, 0, 1);
    const headerText = activeHeader.text || "";
    const headerChars = headerText.length;
    const typeInStart = clamp(HEADER_LAYOUT.typeInStart, 0, 0.9);
    const typeInEnd = clamp(HEADER_LAYOUT.typeInEnd, typeInStart + 0.05, 0.95);
    const deleteStart = clamp(HEADER_LAYOUT.deleteStart, typeInEnd + 0.05, 0.98);
    const isLastHeader = headerIndex >= headerTrackCount - 1;
    let typeProgress = 0;
    if (adjustedHeaderT <= typeInStart) {
        typeProgress = 0;
    } else if (adjustedHeaderT < typeInEnd) {
        typeProgress = (adjustedHeaderT - typeInStart) / (typeInEnd - typeInStart);
    } else if (isLastHeader) {
        typeProgress = 1;
    } else if (adjustedHeaderT < deleteStart) {
        typeProgress = 1;
    } else {
        typeProgress = 1 - (adjustedHeaderT - deleteStart) / (1 - deleteStart);
    }
    const easedTypeProgress = easeInOutCubic(clamp(typeProgress, 0, 1));
    let typedChars = Math.max(0, Math.round(headerChars * easedTypeProgress));
    if (isLastHeader && progress > 0.98) {
        typedChars = headerChars;
    }
    const typedText = headerText.slice(0, typedChars);
    const floatProgress = Math.min(1, adjustedHeaderT / 0.45);
    const floatEase = easeInOutCubic(Math.pow(floatProgress, HEADER_LAYOUT.floatEasePower));
    const headerFloatY = (1 - floatEase) * HEADER_LAYOUT.floatOffsetPx;

    return (
        <section
            ref={sectionRef}
            className={`relative w-full ${className}`}
            style={{ height: `${scrollVh}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                <div className="absolute inset-0">
                    {totalBgImages > 0 && (
                        <div
                            className="absolute inset-0 transition-transform ease-out"
                            style={{
                                transform: `translate3d(${sectionEntered ? 0 : CONFIG.entranceOffsetPx}px,0,0)`,
                                transitionDuration: `${CONFIG.entranceDurationMs}ms`,
                            }}
                        >
                            <div
                                className="absolute left-0 top-0 h-full will-change-transform"
                                style={{
                                    width: `${trackWidth}px`,
                                    transform: `translate3d(${xBg}px,0,0)`,
                                    filter: `blur(${BACKGROUND_BLUR_PX}px)`,
                                }}
                            >
                                {CONFIG.bgImages.map((src, index) => (
                                    <div
                                        key={`${src}-${index}`}
                                        className="absolute top-0 h-full"
                                        style={{
                                            left: `${index * bgRenderWidth}px`,
                                            width: `${bgRenderWidth}px`,
                                            backgroundImage: `url(${src})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "left center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    />
                                ))}
                                {CONFIG.bgImages.slice(0, -1).map((src, index) => {
                                    const nextSrc = CONFIG.bgImages[index + 1];
                                    const seamLeft =
                                        (index + 1) * bgRenderWidth - BLEND_CONFIG.widthPx / 2;
                                    return (
                                        <div
                                            key={`seam-${index}`}
                                            className="absolute top-0 h-full pointer-events-none"
                                            style={{
                                                left: `${seamLeft}px`,
                                                width: `${BLEND_CONFIG.widthPx}px`,
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage: `url(${src})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "right center",
                                                    backgroundRepeat: "no-repeat",
                                                    filter: `blur(${BLEND_CONFIG.blurPx}px)`,
                                                    opacity: BLEND_CONFIG.opacity,
                                                    maskImage: seamMask,
                                                    WebkitMaskImage: seamMask,
                                                }}
                                            />
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage: `url(${nextSrc})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "left center",
                                                    backgroundRepeat: "no-repeat",
                                                    filter: `blur(${BLEND_CONFIG.blurPx}px)`,
                                                    opacity: BLEND_CONFIG.opacity,
                                                    maskImage: seamMask,
                                                    WebkitMaskImage: seamMask,
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: overlayGradient,
                            zIndex: 5,
                        }}
                    />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: overlaySolid,
                            zIndex: 6,
                        }}
                    />

                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ transform: `translate3d(${xCharacters}px,0,0)`, zIndex: 10 }}
                    >
                        {CONFIG.characters.map((item, index) => {
                            const timelineMax = Math.max(1, FOREGROUND_REVEAL.timelineMax);
                            const delayMsScaled = (item.delayMs || 0) * delayScale;
                            const scheduledProgress = delayMsScaled / timelineMax;
                            const enterStart = scheduledProgress - FOREGROUND_REVEAL.leadIn;
                            const enterEnd = scheduledProgress + FOREGROUND_REVEAL.leadOut;
                            const revealStrength = clamp(
                                (progress - enterStart) / Math.max(0.0001, enterEnd - enterStart),
                                0,
                                1
                            );
                            const entered = item.skipAnimation ? 1 : easeInOutCubic(revealStrength);
                            const revealOpacity = item.skipAnimation ? 1 : entered;
                            const baseCharacterHeightPx = (viewportHeight * CONFIG.characterHeightVh) / 100;
                            const characterHeightPx = baseCharacterHeightPx * (item.scale || 1);
                            const characterAspectRatio = item.aspectRatio || 1;
                            const characterWidthPx = characterHeightPx * characterAspectRatio;
                            return (
                                <img
                                    key={`${item.path}-${index}`}
                                    src={item.path}
                                    alt=""
                                    draggable={false}
                                    className="absolute"
                                    style={{
                                        left: item.position * bgScale,
                                        bottom: `calc(${CONFIG.characterBottomVh}vh + ${(item.offsetY || 0) * offsetScale}px)`,
                                        height: `${characterHeightPx}px`,
                                        width: `${characterWidthPx}px`,
                                        minWidth: `${characterWidthPx}px`,
                                        maxWidth: `${characterWidthPx}px`,
                                        objectFit: "contain",
                                        display: "block",
                                        opacity: revealOpacity,
                                        transform: item.skipAnimation
                                            ? "translate3d(0,0,0)"
                                            : `translate3d(0,${(1 - entered) * FOREGROUND_REVEAL.enterOffsetPx}px,0)`,
                                        transition: "none",
                                        willChange: item.skipAnimation ? "auto" : "opacity, transform",
                                    }}
                                />
                            );
                        })}
                    </div>

                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ zIndex: 30 }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                paddingRight: `${HEADER_LAYOUT.rightMarginVw}vw`,
                                paddingLeft: "6vw",
                                textAlign: HEADER_LAYOUT.textAlign,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: `clamp(1rem, 0.9vw + 0.65rem, ${activeHeader.sizeRem || 2}rem)`,
                                    color: activeHeader.color || "#ffffff",
                                    textShadow,
                                    lineHeight: HEADER_LAYOUT.lineHeight,
                                    whiteSpace: "pre-line",
                                    maxWidth: `${HEADER_LAYOUT.maxWidthVw}vw`,
                                    letterSpacing: `${HEADER_LAYOUT.letterSpacingEm}em`,
                                    transform: `translate3d(0, ${headerFloatY}px, 0)`,
                                    opacity: typedChars > 0 ? 1 : 0,
                                    transition: `transform ${HEADER_LAYOUT.enterDurationMs}ms ease, opacity ${HEADER_LAYOUT.enterDurationMs}ms ease`,
                                }}
                            >
                                {typedText}
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className="absolute bottom-10 left-10 text-left max-w-xl"
                    style={{ textShadow, zIndex: 40 }}
                >
                    <div className="text-xs tracking-[0.35em] text-white/60 uppercase">
                        About me
                    </div>
                    <div className="mt-3 text-3xl md:text-4xl font-semibold text-white">
                        From Sicily to Hamburg.
                    </div>
                    <div className="mt-3 text-sm text-white/70 leading-relaxed">
                        A story of craft, systems, and curiosity — built by shipping, learning,
                        and leading.
                    </div>
                </div>

                <div
                    className="absolute bottom-10 right-10 text-xs tracking-widest text-white/50 uppercase"
                    style={{ zIndex: 40 }}
                >
                    Scroll to travel →
                </div>
            </div>
        </section>
    );
}

export default AboutHorizontal2;
