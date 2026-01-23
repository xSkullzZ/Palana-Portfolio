import { useEffect, useRef, useState } from "react";
import "./App.css";

import ImageReveal from "./components/ImageReveal";
import Timeline from "./components/Timeline";
import ParticleHero from "./components/ParticleHero";
import Skills from "./components/Skills";
import SkillsHeroSelect from "./components/SkillsHeroSelect";
import AboutHorizontal from "./components/AboutHorizontal";

import "./plasmic-init";
import { PlasmicHomepage } from "./components/plasmic/portfolio/PlasmicHomepage";
import PlasmicHost from "./plasmic-host";

/** Video background helper */
function VideoBackground({ src, poster, isHeroSection = false }) {
    const containerRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(isHeroSection);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || isHeroSection) return;

        if (navigator.connection?.saveData) return;
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        obs.disconnect();
                    }
                });
            },
            { rootMargin: "200px" }
        );

        if (containerRef.current) obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, [isHeroSection]);

    const handleVideoError = () => {
        console.error("Video failed to load. Check the file path:", src);
        setVideoError(true);
    };

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full z-10">
            {shouldLoad && !videoError ? (
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    onError={handleVideoError}
                >
                    <source src={src} type="video/mp4" />
                </video>
            ) : poster ? (
                <img src={poster} alt="" className="w-full h-full object-cover" />
            ) : null}
        </div>
    );
}

export default function App() {
    // ✅ Route speciale per Plasmic Canvas Host
    if (window.location.pathname === "/plasmic-host") {
        return <PlasmicHost />;
    }

    const videoSrc = "/hero.mp4";
    const posterSrc = "/hero-poster.jpg";

    return (
        <div
            className="snap-y snap-mandatory font-display full-width h-screen overflow-hidden"
            style={{
                scrollBehavior: "smooth",
                overflowY: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
        >
            <style>{`
        .snap-y::-webkit-scrollbar { display: none; }
      `}</style>

            {/* HERO */}
            <section className="snap-start snap-always h-screen relative z-30">
                <VideoBackground src={videoSrc} poster={posterSrc} isHeroSection={true} />
                <div className="absolute inset-0 bg-black/30 z-20 pointer-events-none" />

                <div className="relative z-40">
                    <PlasmicHomepage />
                </div>
            </section>

            {/* PARTICLE HERO */}
            <section className="snap-start snap-always h-screen">
                <ParticleHero />
            </section>

            <section className="snap-start snap-always h-screen">
                <ImageReveal />
            </section>

            <section className="snap-start snap-always h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-6xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-xl text-gray-400">Your about section content here</p>
                </div>
            </section>

            <section className="snap-start snap-always h-screen">
                <Timeline />
            </section>

            <section className="snap-start snap-always h-screen">
                <Skills />
            </section>

            <section className="snap-start snap-always h-screen">
                <SkillsHeroSelect />
            </section>

            <section className="snap-start snap-always h-screen">
                <AboutHorizontal />
            </section>

            <section className="snap-start snap-always h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-400">Contact section</p>
                </div>
            </section>
        </div>
    );
}
