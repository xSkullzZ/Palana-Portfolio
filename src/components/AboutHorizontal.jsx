import React, { useEffect, useRef, useState } from "react";

const CONFIG = {
    scrollVhDesktop: 600,
    mobileMultiplier: 0.5, // 450 * 0.5 = 225
    deadzoneVh: 60,

    mobileBreakpoint: 768, // px
    
    // Add the actual image dimensions
    bgWidth: 4950,
    bgHeight: 1024,

    layers: {
        bg: 1.0,
        mid: 1.25,
        front: 1.6,
        people: 1.45,
    },

    smoothing: 0.1,
    bgSrc: "/about/about-bg.webp",
    midSrc: null,
    frontSrc: null,
    characters: [
        {
            path: "/about/me1.webp",
            position: 600,
            delayMs: 0,
            skipAnimation: false,
        },
        {
            path: "/about/step-2.png",
            position: 1800,
            delayMs: 100,
            skipAnimation: false,
        },
        {
            path: "/about/step-3.png",
            position: 3200,
            delayMs: 200,
            skipAnimation: false,
        },
    ],
    characterHeightVh: 70,
    characterBottomVh: 0,
    characterBufferPx: 220,
};

function getScrollVh() {
    if (typeof window === "undefined") return CONFIG.scrollVhDesktop;
    const isMobile = window.innerWidth < CONFIG.mobileBreakpoint;
    const base = isMobile
        ? Math.round(CONFIG.scrollVhDesktop * CONFIG.mobileMultiplier)
        : CONFIG.scrollVhDesktop;
    return base + CONFIG.deadzoneVh;
}

function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
}

export function AboutHorizontal({ className = "" }) {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const rafRef = useRef(null);

    const [progress, setProgress] = useState(0); // 0..1
    const progRef = useRef({ target: 0, current: 0 });

                // calcolo maxShift in base alla larghezza dell'immagine/track
    const [maxShift, setMaxShift] = useState(0);
    const [bgRenderWidth, setBgRenderWidth] = useState(CONFIG.bgWidth);

    const [scrollVh, setScrollVh] = useState(() => getScrollVh());

    useEffect(() => {
        const onResize = () => setScrollVh(getScrollVh());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const updateMaxShift = () => {
            const viewportW = window.innerWidth;
            const viewportH = window.innerHeight || 1;
            const scaledWidth = (CONFIG.bgWidth / CONFIG.bgHeight) * viewportH;
            const shift = Math.max(0, scaledWidth - viewportW);
            setBgRenderWidth(scaledWidth);
            setMaxShift(shift);
        };

        updateMaxShift();
        window.addEventListener("resize", updateMaxShift);
        return () => window.removeEventListener("resize", updateMaxShift);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const onScroll = () => {
            const r = section.getBoundingClientRect();
            const vh = window.innerHeight;

            // quando r.top = 0 -> inizio
            // quando r.bottom = 0 -> fine
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
            s.current += (s.target - s.current) * CONFIG.smoothing;
            setProgress(s.current);
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const xBg = -progress * maxShift * CONFIG.layers.bg;
    const xMid = -progress * maxShift * CONFIG.layers.mid;
    const xFront = -progress * maxShift * CONFIG.layers.front;
    const xPeople = -progress * maxShift * CONFIG.layers.people;
    const xCharacters = -progress * maxShift * CONFIG.layers.people;

    const viewportW = typeof window !== "undefined" ? window.innerWidth : 0;
    const windowLeft = progress * maxShift;
    const windowRight = windowLeft + viewportW;

    return (
        <section
            ref={sectionRef}
            className={`relative w-full ${className}`}
            style={{ height: `${scrollVh}vh` }}
        >
            {/* sticky viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                {/* Track wrapper: usiamo un contenitore largo quanto l'immagine */}
                <div ref={trackRef} className="absolute inset-0">
                    {/* BG */}
                    <div
                        className="absolute inset-0 will-change-transform"
                        style={{
                            transform: `translate3d(${xBg}px,0,0)`,
                            backgroundImage: `url(${CONFIG.bgSrc})`,
                            backgroundSize: "100% 100%",
                            backgroundPosition: "left center",
                            width: `${bgRenderWidth}px`,
                            height: "100%",
                        }}
                    />

                    {/* MID (opzionale) */}
                    {CONFIG.midSrc && (
                        <img
                            src={CONFIG.midSrc}
                            alt=""
                            className="absolute inset-0 h-full object-cover pointer-events-none will-change-transform"
                            style={{ transform: `translate3d(${xMid}px,0,0)` }}
                            draggable="false"
                        />
                    )}

                    {/* PEOPLE (placeholder — ci metterai te stesso per step) */}
                    {/* Esempio: 3 silhouette in posizioni diverse */}
                    <div
                        className="absolute inset-0 pointer-events-none will-change-transform"
                        style={{ transform: `translate3d(${xPeople}px,0,0)` }}
                    >
                        {/* Qui puoi mettere immagini PNG trasparenti con te che evolvi */}
                        {/* <img src="/about/me-1.png" className="absolute bottom-0 left-[20vw] h-[70vh]" /> */}
                    </div>

                    {/* CHARACTERS */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ transform: `translate3d(${xCharacters}px,0,0)` }}
                    >
                        {CONFIG.characters.map((item, index) => {
                            const isVisible =
                                item.skipAnimation ||
                                (item.position >= windowLeft - CONFIG.characterBufferPx &&
                                    item.position <= windowRight + CONFIG.characterBufferPx);
                            return (
                                <img
                                    key={`${item.path}-${index}`}
                                    src={item.path}
                                    alt=""
                                    draggable={false}
                                    className="absolute"
                                    style={{
                                        left: item.position,
                                        bottom: `${CONFIG.characterBottomVh}vh`,
                                        height: `${CONFIG.characterHeightVh}vh`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: item.skipAnimation
                                            ? "translate3d(0,0,0)"
                                            : isVisible
                                                ? "translate3d(0,0,0)"
                                                : "translate3d(0,24px,0)",
                                        transition: item.skipAnimation
                                            ? "none"
                                            : `opacity 360ms ease ${item.delayMs || 0}ms, transform 420ms ease ${item.delayMs || 0}ms`,
                                        willChange: item.skipAnimation ? "auto" : "opacity, transform",
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* FRONT (maschera tagli / transizioni) */}
                    {CONFIG.frontSrc && (
                        <img
                            src={CONFIG.frontSrc}
                            alt=""
                            className="absolute inset-0 h-full object-cover pointer-events-none will-change-transform"
                            style={{ transform: `translate3d(${xFront}px,0,0)` }}
                            draggable="false"
                        />
                    )}

                    {/* vignette + gradient per leggibilità */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                    <div className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_20%_30%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_70%)]" />
                </div>

                {/* UI overlay (Plasmic può metterla sopra al componente, oppure qui) */}
                <div className="absolute bottom-10 left-10 text-left max-w-xl">
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

                <div className="absolute bottom-10 right-10 text-xs tracking-widest text-white/50 uppercase">
                    Scroll to travel →
                </div>
            </div>
        </section>
    );
}

export default AboutHorizontal;
