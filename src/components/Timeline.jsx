// src/components/Timeline.jsx
import React, { useRef, useEffect, useState } from 'react';

// 🎯 CONFIGURAZIONE SCROLL - MODIFICA QUI
const SCROLL_CONFIG = {
  scrollSpeed: 2.0,        // Moltiplicatore velocità scroll (1 = normale, 3 = triplo)
  exitThreshold: 0,       // Pixel dalla fine per permettere uscita (più alto = esci prima)
  smoothTransition: true   // Abilita transizioni smooth sulle card
};

const timelineData = [
  {
    year: 2015,
    title: 'Lorem Adipiscing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: '🎓',
    color: '#ef4444',
    category: 'Education'
  },
  {
    year: 2016,
    title: 'Dolor Sit Amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.',
    icon: '💼',
    color: '#f97316',
    category: 'Career'
  },
  {
    year: 2017,
    title: 'Minim Quis Exerci',
    description: 'Minim quis exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    icon: '⏱️',
    color: '#eab308',
    category: 'Achievement'
  },
  {
    year: 2018,
    title: 'Diquisisim Blandit',
    description: 'Diquisisim et blandit volutpat nibh. Eros elementum eros. Eros elementum eros.',
    icon: '🌟',
    color: '#22c55e',
    category: 'Project'
  },
  {
    year: 2019,
    title: 'Quis Nibh Vexiam',
    description: 'Quis nibh vexiam dolor sit amet. Excepteur sint occaecat cupidatat non proident.',
    icon: '✈️',
    color: '#06b6d4',
    category: 'Experience'
  },
  {
    year: 2020,
    title: 'Blandit Quis Execution',
    description: 'Blandit quis execution volutpat. Sed ut perspiciatis unde omnis iste natus error.',
    icon: '🚀',
    color: '#3b82f6',
    category: 'Launch'
  },
  {
    year: 2022,
    title: 'Minim Quis Exerci',
    description: 'Minim quis exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    icon: '⏱️',
    color: '#eab308',
    category: 'Achievement'
  },
  {
    year: 2023,
    title: 'Started my journey with Synergeticon',
    description: 'As a hybrid professional, I led the design and product strategy for an AI and Computer Vision-based SaaS platform, serving as the key liaison between external project requirements and the development team.',
    icon: '✈️',
    color: '#06b6d4',
    category: 'Experience'
  },
  {
    year: 2025,
    title: 'Veterinary Antimicrobial Stewardship Community of Practice',
    description: 'I had the honour to collaborate with the University of Liverpool, designing and deploying the Website vethubams.org',
    icon: '📱',
    color: '#3b82f6',
    category: 'Launch'
  },
  {
    year: 2025,
    title: 'Looking for the next Experience!',
    description: 'Always eager to write the next chapter of my life, to add valuable knowledge to my existence.',
    icon: '🚀',
    color: '#06b6d4',
    category: 'Projects'
  }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isInViewport) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      const isAtStart = currentScroll <= SCROLL_CONFIG.exitThreshold;
      const isAtEnd = currentScroll >= maxScroll - SCROLL_CONFIG.exitThreshold;

      if (e.deltaY < 0 && isAtStart) {
        return;
      }

      if (e.deltaY > 0 && isAtEnd) {
        return;
      }

      e.preventDefault();
      
      const scrollAmount = e.deltaY * SCROLL_CONFIG.scrollSpeed;
      container.scrollLeft += scrollAmount;

      const progress = (container.scrollLeft / maxScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Detect visible cards for entrance animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const cards = container.querySelectorAll('[data-timeline-card]');

      const visible = [];
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const isVisible = cardRect.left < containerRect.right - 100 && cardRect.right > containerRect.left + 100;
        if (isVisible && !visibleCards.includes(index)) {
          visible.push(index);
        }
      });

      if (visible.length > 0) {
        setVisibleCards(prev => [...new Set([...prev, ...visible])]);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [visibleCards]);

  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Header */}
      <div className="absolute top-8 left-0 right-0 z-20 text-center">
        <h2 className="text-sm uppercase tracking-widest text-cyan-400 mb-2">
          Timeline Infographic
        </h2>
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-red-500"></div>
            <span className="text-xs text-gray-400 uppercase">Lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-orange-500"></div>
            <span className="text-xs text-gray-400 uppercase">Dolor Sit Amet</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-cyan-400"></div>
            <span className="text-xs text-gray-400 uppercase">Adipiscing</span>
          </div>
        </div>
      </div>

      {/* Scroll Progress */}
      <div className="absolute top-32 left-0 right-0 z-20 px-20">
        <div className="w-full h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="absolute inset-0 overflow-x-auto overflow-y-hidden pt-48 pb-20 px-20 scrollbar-hide"
        style={{
          scrollBehavior: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="relative flex items-center min-w-max h-full">
          {/* Timeline Line - Continuous */}
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-cyan-400 to-blue-500 transform -translate-y-1/2"
            style={{ 
              width: `${timelineData.length * 450}px`,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}
          />

          {/* Timeline Items */}
          {timelineData.map((item, index) => {
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index} 
                className="relative flex flex-col items-center justify-center h-full"
                style={{ 
                  marginRight: index < timelineData.length - 1 ? '200px' : '0',
                  minWidth: '320px'
                }}
                data-timeline-card
              >
                {/* Card */}
                <div 
                  className={`w-80 group absolute ${isEven ? 'top-0' : 'bottom-0'}`}
                  style={{
                    transform: isVisible 
                      ? 'translateY(0) rotateX(0deg) scale(1)' 
                      : `translateY(${isEven ? '-50px' : '50px'}) rotateX(${isEven ? '10deg' : '-10deg'}) scale(0.9)`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: `${index * 0.1}s`,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <div 
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 relative"
                    style={{
                      boxShadow: isVisible ? '0 10px 40px rgba(0,0,0,0.3)' : 'none',
                      transform: 'translateZ(20px)'
                    }}
                  >
                    {/* Connecting Line to Timeline */}
                    <div 
                      className="absolute left-1/2 w-0.5 bg-gradient-to-b from-gray-600 to-transparent"
                      style={{
                        height: isEven ? '60px' : '60px',
                        top: isEven ? '100%' : 'auto',
                        bottom: isEven ? 'auto' : '100%',
                        transform: 'translateX(-50%)'
                      }}
                    />
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-xs uppercase tracking-wider text-gray-500">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    <div className="mt-4 w-20 h-1 rounded" style={{ backgroundColor: item.color }} />
                  </div>
                </div>

                {/* Year Circle - ON the timeline */}
                <div 
                  className="relative z-10"
                  style={{
                    transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: `${index * 0.1 + 0.2}s`
                  }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold border-4 border-gray-900 shadow-xl transition-all duration-300 hover:scale-125 cursor-pointer"
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: `0 0 30px ${item.color}80, 0 10px 20px rgba(0,0,0,0.3)`
                    }}
                  >
                    <span className="text-sm">{item.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 right-8 z-20 text-gray-500 text-xs uppercase tracking-widest flex items-center gap-2">
        <span>Scroll horizontally</span>
        <span className="text-cyan-400 animate-pulse">→</span>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Timeline;