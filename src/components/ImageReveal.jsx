// src/components/ImageReveal.jsx
import { ArrowUpRight } from 'lucide-react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useMediaQuery } from '../hooks/use-media-query';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    cursorImage: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=1274&auto=format&fit=crop',
    backgroundImage: 'https://images.unsplash.com/photo-1682806816936-c3ac11f65112?q=80&w=2000&auto=format&fit=crop',
    link: '/projects/project-1',
  },
  {
    id: 2,
    title: 'Project 2',
    cursorImage: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=1274&auto=format&fit=crop',
    backgroundImage: 'https://images.unsplash.com/photo-1681063762354-d542c03bbfc5?q=80&w=2000&auto=format&fit=crop',
    link: '/projects/project-2',
  },
  {
    id: 3,
    title: 'Project 3',
    cursorImage: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=1274&auto=format&fit=crop',
    backgroundImage: 'https://images.unsplash.com/photo-1679640034489-a6db1f096b70?q=80&w=2000&auto=format&fit=crop',
    link: '/projects/project-3',
  },
  {
    id: 4,
    title: 'Project 4',
    cursorImage: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=1274&auto=format&fit=crop',
    backgroundImage: 'https://images.unsplash.com/photo-1679482451632-b2e126da7142?q=80&w=2000&auto=format&fit=crop',
    link: '/projects/project-4',
  },
];

const ImageReveal = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [cursorScale, setCursorScale] = useState(0.5);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const sectionRef = useRef(null);
  const requestRef = useRef(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = projects.length * 2;

    projects.forEach(project => {
      const bgImg = new Image();
      const cursorImg = new Image();
      
      bgImg.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) setImagesLoaded(true);
      };
      cursorImg.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) setImagesLoaded(true);
      };
      
      bgImg.src = project.backgroundImage;
      cursorImg.src = project.cursorImage;
    });
  }, []);

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
  }, []);

  useEffect(() => {
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
  }, [handleMouseMove]);

  // REMOVED: All scroll hijacking logic for snap-scroll compatibility

  const handleProjectHover = useCallback((project, index) => {
    setIsHovering(true);
    setHoveredProject(project);
    
    if (currentIndex !== index) {
      setBackgroundOpacity(0);
      setTimeout(() => {
        setCurrentIndex(index);
        setBackgroundOpacity(1);
      }, 200);
    }

    setCursorOpacity(1);
    setCursorScale(1);
  }, [currentIndex]);

  const handleMouseLeaveProject = useCallback(() => {
    setIsHovering(false);
    setHoveredProject(null);
    setCursorOpacity(0);
    setCursorScale(0.5);
  }, []);

  const handleProjectClick = useCallback((link) => {
    window.location.href = link;
  }, []);

  const activeProject = hoveredProject || projects[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className='relative w-full h-screen flex items-end overflow-hidden'
    >
      {/* Loading State */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a] z-50">
          <div className="text-white text-xl">Loading projects...</div>
        </div>
      )}

      {/* Background Image with Dissolve Effect */}
      {activeProject && imagesLoaded && (
        // Lowered to z-[-10] so it won't cover hero/video sections
        <div className="fixed inset-0 pointer-events-none z-[-10]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${activeProject.backgroundImage})`,
              opacity: backgroundOpacity * 0.4,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
      )}

      {/* Section Header */}
      <div className="absolute top-8 left-8 z-20">
        <h3 className="text-xs uppercase tracking-widest text-gray-500">
          Selected Works
        </h3>
      </div>

      {/* Project Index Indicator */}
      <div className="absolute top-8 right-8 z-20 text-white/50 text-sm font-light">
        {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
      </div>

      {/* Project List - Full Width */}
      <div className="relative z-10 w-full pb-0 flex justify-start">
        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="cursor-pointer relative flex items-center justify-between group overflow-hidden"
              style={{ 
                height: `${100 / projects.length}vh`,
                borderBottom: index < projects.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
              }}
              onMouseEnter={() => handleProjectHover(project, index)}
              onMouseLeave={handleMouseLeaveProject}
              onClick={() => handleProjectClick(project.link)}
            >
              <h2
                className={`uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-500 relative z-20 px-12 ${
                  currentIndex === index 
                    ? 'text-white' 
                    : 'text-gray-600'
                }`}
              >
                {project.title}
              </h2>
              
              <div className={`transition-all duration-500 z-20 px-12 ${
                  currentIndex === index ? 'text-white scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}>
                <ArrowUpRight className='w-12 h-12' />
              </div>

              {/* Active Project Highlight */}
              <div
                className={`absolute inset-0 bg-blue-600/15 backdrop-blur-[1px] transition-all duration-500 ease-out ${
                  currentIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 right-8 z-20 text-gray-500 text-xs uppercase tracking-widest">
        Scroll to explore
      </div>

      {/* Floating Cursor Image (Desktop Only) */}
      {isDesktop && hoveredProject && (
        <img
          src={hoveredProject.cursorImage}
          alt={hoveredProject.title}
          className="fixed pointer-events-none z-50 w-[280px] h-[380px] rounded-lg object-cover shadow-2xl transition-opacity duration-300"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${cursorScale}) rotate(3deg)`,
            opacity: cursorOpacity,
          }}
        />
      )}
    </section>
  );
};

export default ImageReveal;