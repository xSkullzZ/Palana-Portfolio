import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function PortfolioHero() {
  const mountRef = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: false 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 8000;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      sizes[i] = Math.random() * 2;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Ambient nebula effect
    const nebulaGeometry = new THREE.SphereGeometry(15, 32, 32);
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a1929,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0002;
        particlesRef.current.rotation.x += 0.0001;
      }
      
      nebula.rotation.y += 0.0001;
      
      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParallaxOffset = (section, intensity = 1) => {
    if (hoveredSection !== section) return { x: 0, y: 0 };
    return {
      x: mousePosition.x * 20 * intensity,
      y: mousePosition.y * 20 * intensity
    };
  };

  const designOffset = getParallaxOffset('design', 1.5);
  const musicOffset = getParallaxOffset('music', 1.5);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        
        {/* Name Header */}
        <div className="absolute top-16 left-0 right-0 text-center">
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.25em] text-transparent select-none"
            style={{
              WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.15)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.25em'
            }}>
            CLAUDIO PALANA
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="flex items-center justify-center w-full max-w-[1400px] gap-24 lg:gap-32">
          
          {/* Design Section */}
          <div 
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoveredSection('design')}
            onMouseLeave={() => setHoveredSection(null)}
            style={{
              transform: `translate(${designOffset.x}px, ${designOffset.y}px)`,
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="relative">
              <h2 className={`text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight transition-all duration-500 ease-out ${
                hoveredSection === 'design' 
                  ? 'text-white scale-105' 
                  : 'text-white/60'
              }`}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 200
              }}>
                Design
              </h2>
              <div className={`absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-white/80 to-transparent transition-all duration-500 ${
                hoveredSection === 'design' ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`} />
            </div>
            <p className={`mt-4 text-sm tracking-widest uppercase text-white/40 transition-all duration-500 ${
              hoveredSection === 'design' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              UI/UX Specialist
            </p>
          </div>

          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div 
              className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden"
              style={{
                transform: hoveredSection ? 'scale(0.95)' : 'scale(1)',
                transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                filter: 'grayscale(30%) contrast(1.1)',
                boxShadow: '0 0 60px rgba(255, 255, 255, 0.05), inset 0 0 40px rgba(0, 0, 0, 0.4)'
              }}
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23111' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23333' font-size='48' font-family='system-ui'%3EYour Photo%3C/text%3E%3C/svg%3E"
                alt="Claudio Palana"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                opacity: hoveredSection ? 0.6 : 0,
                filter: 'blur(20px)'
              }}
            />
          </div>

          {/* Music Section */}
          <div 
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoveredSection('music')}
            onMouseLeave={() => setHoveredSection(null)}
            style={{
              transform: `translate(${musicOffset.x}px, ${musicOffset.y}px)`,
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="relative">
              <h2 className={`text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight transition-all duration-500 ease-out ${
                hoveredSection === 'music' 
                  ? 'text-white scale-105' 
                  : 'text-white/60'
              }`}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 200
              }}>
                Music
              </h2>
              <div className={`absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-white/80 to-transparent transition-all duration-500 ${
                hoveredSection === 'music' ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`} />
            </div>
            <p className={`mt-4 text-sm tracking-widest uppercase text-white/40 transition-all duration-500 ${
              hoveredSection === 'music' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              Audio Engineer
            </p>
          </div>
        </div>

        {/* About Me */}
        <div 
          className="absolute bottom-24 cursor-pointer group"
          onMouseEnter={() => setHoveredSection('about')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="relative">
            <h2 className={`text-5xl lg:text-6xl font-light tracking-tight transition-all duration-500 ease-out ${
              hoveredSection === 'about' 
                ? 'text-white scale-105' 
                : 'text-white/50'
            }`}
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontWeight: 200
            }}>
              About Me
            </h2>
            <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-all duration-500 ${
              hoveredSection === 'about' ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`} />
          </div>
        </div>

      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="absolute inset-0 pointer-events-none" 
           style={{
             background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)'
           }} />
    </div>
  );
}