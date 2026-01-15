// src/components/ParticleHero.jsx
import React, { useEffect, useRef, useState } from 'react';

// 🎯 CONFIGURAZIONE - Modifica questi testi
const TEXTS = [
  'I CRAFT HUMAN-AI INTERFACES',
  'UI DESIGNER',
  'AUDIO ENGINEER',
  'CREATIVE DEVELOPER'
];

const CONFIG = {
  particleSize: 1.7,         // Dimensione particella
  particleColor: '#06b6d4',  // Colore particelle (cyan)
  spacing: 5,                // Spazio tra particelle
  mouseRadius: 80,           // Raggio interazione mouse
  changeInterval: 6000,      // Millisecondi tra cambi testo
  transitionSpeed: 0.10      // Velocità transizione (0.01-0.1)
};

const ParticleHero = () => {
  const canvasRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Particle class
    class Particle {
      constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.baseX = targetX;
        this.baseY = targetY;
        this.size = CONFIG.particleSize;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        // Mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = CONFIG.mouseRadius;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to base position
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx * CONFIG.transitionSpeed;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy * CONFIG.transitionSpeed;
          }
        }

        // Smooth transition to target position
        const targetDx = this.targetX - this.baseX;
        const targetDy = this.targetY - this.baseY;
        this.baseX += targetDx * CONFIG.transitionSpeed;
        this.baseY += targetDy * CONFIG.transitionSpeed;
      }

      draw() {
        ctx.fillStyle = CONFIG.particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create text particles
    const createParticles = (text) => {
      ctx.font = 'bold 80px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const textWidth = ctx.measureText(text).width;
      const x = (width - textWidth) / 2;
      const y = height / 2;
      
      ctx.fillText(text, width / 2, y);
      
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      const newParticles = [];

      for (let y = 0; y < height; y += CONFIG.spacing) {
        for (let x = 0; x < width; x += CONFIG.spacing) {
          const index = (y * width + x) * 4;
          const alpha = pixels[index + 3];
          
          if (alpha > 128) {
            const posX = x;
            const posY = y;
            
            // Reuse existing particle or create new
            const existingParticle = particlesRef.current.find(p => !p.used);
            if (existingParticle) {
              existingParticle.targetX = posX;
              existingParticle.targetY = posY;
              existingParticle.used = true;
              newParticles.push(existingParticle);
            } else {
              newParticles.push(new Particle(
                Math.random() * width,
                Math.random() * height,
                posX,
                posY
              ));
            }
          }
        }
      }

      ctx.clearRect(0, 0, width, height);
      
      // Mark unused particles
      particlesRef.current.forEach(p => p.used = false);
      particlesRef.current = newParticles;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    // 🔥 FIX: Crea particelle quando cambia il testo
    createParticles(TEXTS[currentTextIndex]);
    animate();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles(TEXTS[currentTextIndex]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [currentTextIndex]); // 🔥 FIX: Aggiungi currentTextIndex come dipendenza

  // Text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % TEXTS.length);
    }, CONFIG.changeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas per particelle */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Subtitle */}
      <div className="absolute bottom-20 left-0 right-0 text-center z-10">
        <p className="text-gray-400 text-lg mb-8">
          Designer • Engineer • Creator
        </p>
        <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase text-sm tracking-widest">
          Explore my work →
        </button>
      </div>

      {/* Gradient overlay per depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};

export default ParticleHero;