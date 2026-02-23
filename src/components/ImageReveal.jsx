// src/components/ImageReveal.jsx
import { ArrowUpRight } from 'lucide-react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '../hooks/use-media-query';

const BASE_URL = import.meta.env.BASE_URL;

const DEFAULTS = {
  logoWidth: 33,
  revealingTime: 220,
  animationTime: 600,
  animationType: "zoom",
  wipeEnabled: true,
  wipeDuration: 1200,
  wipeAngle: -12,
  wipeColor: "rgba(0, 0, 0, 0.9)",
};

const projects = [
  {
    id: 1,
    title: "MyBeppe",
    headerImage: `${BASE_URL}MyBeppe/typography.svg`,
    subheader: "Case Study · UI Design · UX Research · Visual Identity",
    summary: `A fresh-food delivery app redesigned to recreate the trust and warmth of a local market.
Based on team research, I crafted a new interface system that blends emotional storytelling with functional clarity.`,
    logoImage: `${BASE_URL}MyBeppe/logo.png`,
    cursorImage: `${BASE_URL}MyBeppe/BeppeHomepage.png`,
    backgroundImage: `${BASE_URL}MyBeppe/bg.webp`,
    link: "/project/my-beppe",
    animationType: "zoom",
    overlayColor: "rgba(74, 222, 128, 0.16)",
  },
  {
    id: 2,
    title: "Versy",
    headerImage: `${BASE_URL}Versy/Versylogo.webp`,
      subheader: "Brand Identity · Design System · UI Foundations · Product Thinking",
      summary: `A brand built for the future of digital experiences.
I created the entire visual identity and design system, laying the foundation for a product that evolved across trends into a mature, enterprise-ready solution.`,
    logoImage: `${BASE_URL}Versy/VersyTriangleWhite.svg`,
      cursorImage: `${BASE_URL}Versy/versycover.jpg`,
    backgroundVideo: `${BASE_URL}Versy/versydemo.mp4`,
      backgroundImage: `${BASE_URL}Versy/versydesk.webp`,
    link: "/project/versy",
    animationType: "fade-left",
    overlayColor: "rgba(129, 140, 248, 0.18)",
  },
];

export function ImageReveal({
  className = "",
  style,
  logoWidth = DEFAULTS.logoWidth,
  revealingTime = DEFAULTS.revealingTime,
  animationTime = DEFAULTS.animationTime,
  animationType = DEFAULTS.animationType,
  wipeEnabled = DEFAULTS.wipeEnabled,
  wipeDuration = DEFAULTS.wipeDuration,
  wipeAngle = DEFAULTS.wipeAngle,
  wipeColor = DEFAULTS.wipeColor,
  items = projects,
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isMobile = !isDesktop;
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorScale, setCursorScale] = useState(0.5);
  const [cursorTilt, setCursorTilt] = useState({ x: 0, y: 0 });
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [headerErrors, setHeaderErrors] = useState({});
  const [sectionEntered, setSectionEntered] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const sectionRef = useRef(null);
  const requestRef = useRef(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = items.reduce((sum, project) => {
      const base = 0
        + (project.backgroundImage ? 1 : 0)
        + (project.cursorImage ? 1 : 0)
        + (project.logoImage ? 1 : 0);
      const video = project.backgroundVideo ? 1 : 0;
      return sum + base + video;
    }, 0);

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    items.forEach(project => {
      const bgImg = project.backgroundImage ? new Image() : null;
      const cursorImg = project.cursorImage ? new Image() : null;
      const logoImg = project.logoImage ? new Image() : null;
      const bgVideo = project.backgroundVideo ? document.createElement("video") : null;
      
      const handleLoaded = () => {
        loadedCount++;
        if (loadedCount >= totalImages) setImagesLoaded(true);
      };

      if (bgImg) {
        bgImg.onload = handleLoaded;
        bgImg.onerror = handleLoaded;
        bgImg.src = project.backgroundImage;
      }
      if (cursorImg) {
        cursorImg.onload = handleLoaded;
        cursorImg.onerror = handleLoaded;
        cursorImg.src = project.cursorImage;
      }
      if (logoImg) {
        logoImg.onload = handleLoaded;
        logoImg.onerror = handleLoaded;
        logoImg.src = project.logoImage;
      }
      if (bgVideo) {
        bgVideo.onloadeddata = handleLoaded;
        bgVideo.onerror = handleLoaded;
        bgVideo.src = project.backgroundVideo;
      }
    });
  }, [items]);

  // Mouse move handling
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;

    const easeAmount = 0.2;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;

    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };

    const vw = window.innerWidth || 1;
    const vh = window.innerHeight || 1;
    const nx = (clientX / vw - 0.5) * 2;
    const ny = (clientY / vh - 0.5) * 2;
    setCursorTilt({ x: ny * 14, y: nx * 22 });
    setBgOffset({ x: -nx * 16, y: -ny * 12 });
  }, []);

  useEffect(() => {
    if (!isDesktop) return undefined;

    const updateCursorPosition = (e) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove, isDesktop]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionEntered(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // REMOVED: All scroll hijacking logic for snap-scroll compatibility

  const handleProjectHover = useCallback((project, index) => {
    setIsHovering(true);
    setHoveredProject(project);
    
    if (currentIndex !== index) {
      setBackgroundOpacity(0);
      setTimeout(() => {
        setCurrentIndex(index);
        setBackgroundOpacity(1);
      }, revealingTime);
    }

    setCursorOpacity(1);
    setCursorScale(1);
  }, [currentIndex, revealingTime]);

  const handleMouseLeaveProject = useCallback(() => {
    setIsHovering(false);
    setHoveredProject(null);
    setCursorOpacity(0);
    setCursorScale(0.5);
  }, []);

  const handleProjectClick = useCallback((link) => {
    if (!link) return;
    navigate(link);
  }, [navigate]);

  const activeProject = hoveredProject || items[currentIndex];
  const safeLogoWidth = Math.min(60, Math.max(18, logoWidth));

  const handleHeaderError = useCallback((id) => {
    setHeaderErrors((prev) => ({ ...prev, [id]: true }));
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-screen flex ${isDesktop ? "items-end" : "items-stretch"} overflow-hidden ${className}`}
      style={style}
    >
      {/* Loading State */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a] z-50">
          <div className="text-white text-xl">Loading projects...</div>
        </div>
      )}

      {/* Background Image with Dissolve Effect (Desktop) */}
      {isDesktop && activeProject && imagesLoaded && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {activeProject.backgroundVideo ? (
            <video
              className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
              style={{
                opacity: backgroundOpacity * 0.4,
                transitionDuration: `${animationTime}ms`,
                transform: `translate3d(${bgOffset.x}px, ${bgOffset.y}px, 0) scale(1.04)`,
              }}
              src={activeProject.backgroundVideo}
              poster={activeProject.backgroundPoster || activeProject.backgroundImage}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity ease-in-out"
              style={{
                backgroundImage: `url(${activeProject.backgroundImage})`,
                opacity: backgroundOpacity * 0.4,
                transitionDuration: `${animationTime}ms`,
                transform: `translate3d(${bgOffset.x}px, ${bgOffset.y}px, 0) scale(1.04)`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
          {wipeEnabled && (
            <div
              className={`ir-wipe-layer ${sectionEntered ? "ir-wipe-play" : ""}`}
              style={{
                "--ir-wipe-duration": `${wipeDuration}ms`,
                "--ir-wipe-angle": `${wipeAngle}deg`,
                "--ir-wipe-color": wipeColor,
              }}
            />
          )}
        </div>
      )}

      {/* Section Header */}
      <div className="absolute top-8 left-8 z-20">
        <h3 className="text-xs uppercase tracking-widest text-gray-500">Selected Works</h3>
      </div>

      {/* Project Index Indicator */}
      <div className="absolute top-8 right-8 z-20 text-white/50 text-sm font-light">
        {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </div>

      {/* Project List - Full Width */}
      <div
        className={`relative z-10 w-full pb-0 flex justify-start transition-all duration-700 ease-out ${
          sectionEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col w-full">
          {items.map((project, index) => (
            <div
              key={project.id}
              className={`cursor-pointer relative flex group overflow-hidden ${isDesktop ? "items-center justify-between" : "items-stretch justify-start"}`}
              style={{ 
                height: isDesktop ? `${100 / items.length}vh` : "auto",
                minHeight: isDesktop ? "auto" : "50vh",
                borderBottom: index < items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
              role="link"
              tabIndex={0}
              aria-label={`Open project ${project.title}`}
              onMouseEnter={isDesktop ? () => handleProjectHover(project, index) : undefined}
              onMouseLeave={isDesktop ? handleMouseLeaveProject : undefined}
              onTouchStart={isMobile ? () => setCurrentIndex(index) : undefined}
              onFocus={isDesktop ? () => handleProjectHover(project, index) : undefined}
              onBlur={isDesktop ? handleMouseLeaveProject : undefined}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleProjectClick(project.link);
                }
              }}
              onClick={() => handleProjectClick(project.link)}
            >
              {isMobile && imagesLoaded && (
                <div className="absolute inset-0 pointer-events-none z-0">
                  {project.backgroundVideo ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src={project.backgroundVideo}
                      poster={project.backgroundPoster || project.backgroundImage}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.backgroundImage})` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/55" />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: project.overlayColor || "rgba(37, 99, 235, 0.15)" }}
                  />
                </div>
              )}

              <div className={`relative z-10 flex w-full ${isDesktop ? "items-center gap-8" : "flex-col items-center justify-center gap-6 px-[5%] py-5"}`}>
                <div
                  className={`flex items-center justify-center shrink-0 ${isDesktop ? "pl-10 pr-2" : "w-full px-0"}`}
                  style={{ width: isDesktop ? `${safeLogoWidth}%` : "100%" }}
                >
                  <img
                    src={project.logoImage}
                    alt=""
                    className={`w-full ${isDesktop ? "max-w-[240px]" : "max-w-[256px] max-h-[128px]"} h-auto object-contain transition-all duration-500 ${
                      isDesktop
                        ? currentIndex === index
                          ? "opacity-100"
                          : isHovering
                            ? "opacity-40 blur-[0px]"
                            : "opacity-60"
                        : "opacity-100"
                    } ${
                      currentIndex === index && isDesktop
                        ? `ir-anim-${project.animationType || animationType}`
                        : ""
                    }`}
                    style={{
                      animationDuration: `${animationTime}ms`,
                    }}
                    draggable="false"
                  />
                </div>

                <div
                  className={`${isDesktop ? "flex-1 pr-6" : "w-full px-0 text-center"} transition-all duration-500 ${
                    isDesktop
                      ? currentIndex === index
                        ? "opacity-100"
                        : isHovering
                          ? "opacity-80 blur-[2px]"
                          : "opacity-90"
                      : "opacity-100"
                  }`}
                >
                  <div className={`text-[10px] md:text-xs uppercase tracking-[0.28em] md:tracking-[0.35em] text-white/50 ${isDesktop ? "" : "text-center"}`}>
                    {project.subheader}
                  </div>
                  <div className={`mt-2 ${isDesktop ? "" : "flex justify-center"}`}>
                    {project.headerImage && !headerErrors[project.id] ? (
                      <img
                        src={project.headerImage}
                        alt={project.title || ""}
                        className={`${isDesktop ? "h-10 md:h-12 lg:h-14" : "h-8"} w-auto object-contain`}
                        draggable="false"
                        onError={() => handleHeaderError(project.id)}
                      />
                    ) : (
                      <div className="text-3xl md:text-4xl font-semibold text-white">
                        {project.title}
                      </div>
                    )}
                  </div>
                  <p className={`mt-3 text-sm md:text-base text-white/70 whitespace-pre-line ${isDesktop ? "max-w-2xl" : "max-w-full text-center"}`}>
                    {project.summary}
                  </p>
                </div>

                {isDesktop && (
                <div
                  className={`transition-all duration-500 z-20 pr-10 ${
                    currentIndex === index
                      ? "text-white scale-100 opacity-100"
                      : isHovering
                        ? "text-white/60 scale-90 opacity-40 blur-[1px]"
                        : "scale-75 opacity-0"
                  }`}
                >
                  <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                )}
              </div>

              {/* Active Project Highlight */}
              <div
                className={`absolute inset-0 transition-all ease-out ${
                  isDesktop && currentIndex === index ? "opacity-100" : "opacity-0"
                } ${
                  hoveredProject?.id === project.id ? "backdrop-blur-0" : "backdrop-blur-[1px]"
                }`}
                style={{
                  transitionDuration: `${animationTime}ms`,
                  backgroundColor: project.overlayColor || "rgba(37, 99, 235, 0.15)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className={`absolute bottom-8 right-8 z-20 text-gray-500 text-xs uppercase tracking-widest ${isDesktop ? "" : "hidden"}`}>
          Scroll to explore
        </div>

      {/* Floating Cursor Image (Desktop Only) */}
      {isDesktop && hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-300"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${cursorScale}) rotate(2deg)`
              + ` perspective(900px) translateZ(40px) rotateX(${cursorTilt.x}deg) rotateY(${cursorTilt.y}deg)`,
            opacity: cursorOpacity,
            transitionDuration: `${animationTime}ms`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative w-[280px] h-[560px] rounded-[38px] bg-[#0b0f1a] border border-white/10 shadow-[0_35px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full bg-white/10" />
            <div className="absolute inset-3 rounded-[28px] overflow-hidden bg-black">
              <img
                src={hoveredProject.cursorImage}
                alt={hoveredProject.title}
                className="w-full h-full object-cover"
                style={{
                  transform: `translate3d(${cursorTilt.y * -0.45}px, ${cursorTilt.x * -0.45}px, 0) scale(1.03)`,
                }}
                draggable="false"
              />
            </div>
            <div className="absolute inset-0 rounded-[36px] pointer-events-none [background:linear-gradient(130deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_45%)]" />
          </div>
        </div>
      )}

      <style>{`
        .ir-wipe-layer {
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          background: var(--ir-wipe-color, rgba(0, 0, 0, 0.9));
          transform: rotate(var(--ir-wipe-angle, -12deg)) translateX(0%);
          transform-origin: 50% 50%;
          opacity: 1;
        }
        .ir-wipe-play {
          animation: ir-diagonal-wipe var(--ir-wipe-duration, 1200ms)
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes ir-diagonal-wipe {
          0% { transform: rotate(var(--ir-wipe-angle, -12deg)) translateX(0%); opacity: 1; }
          100% { transform: rotate(var(--ir-wipe-angle, -12deg)) translateX(120%); opacity: 0; }
        }
        @keyframes ir-zoom {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes ir-fade-left {
          from { transform: translateX(-32px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes ir-fade-right {
          from { transform: translateX(32px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes ir-fade-up {
          from { transform: translateY(28px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes ir-fade-down {
          from { transform: translateY(-28px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes ir-rocket-left {
          0% { transform: translateX(-140px) translateY(40px) rotate(-6deg); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 1; }
        }
        @keyframes ir-rocket-right {
          0% { transform: translateX(140px) translateY(40px) rotate(6deg); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 1; }
        }
        .ir-anim-zoom { animation-name: ir-zoom; animation-fill-mode: both; }
        .ir-anim-fade-left { animation-name: ir-fade-left; animation-fill-mode: both; }
        .ir-anim-fade-right { animation-name: ir-fade-right; animation-fill-mode: both; }
        .ir-anim-fade-up { animation-name: ir-fade-up; animation-fill-mode: both; }
        .ir-anim-fade-down { animation-name: ir-fade-down; animation-fill-mode: both; }
        .ir-anim-rocket-left { animation-name: ir-rocket-left; animation-fill-mode: both; }
        .ir-anim-rocket-right { animation-name: ir-rocket-right; animation-fill-mode: both; }
      `}</style>
    </section>
  );
}

export default ImageReveal;
