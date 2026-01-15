// src/App.jsx
import { useState } from 'react'
import './App.css'
import HeroSection from "./components/HeroSection"
import ImageReveal from "./components/ImageReveal"
import Timeline from "./components/Timeline"
import ParticleHero from "./components/ParticleHero"
import Skills from "./components/Skills";

function App() {
  return (
    // FIXED: Removed overflow-y-scroll to prevent double scrollbar
    <div 
      className="snap-y snap-mandatory font-display full-width h-screen overflow-hidden"
      style={{ 
        scrollBehavior: 'smooth',
        overflowY: 'scroll',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none' // IE/Edge
      }}
    >
      {/* Hide scrollbar for Chrome/Safari */}
      <style>{`
        .snap-y::-webkit-scrollbar {
          display: none;
        }
      `}</style>

         {/* Hero Section - Full Screen */}
       <section className="snap-start snap-always h-screen">
  <ParticleHero />
</section>
      
      <section className="snap-start snap-always h-screen">
        <HeroSection />
      </section>
      
      {/* Projects Section - Full Screen */}
      <section className="snap-start snap-always h-screen">
        <ImageReveal />
      </section>
      
      {/* About Me Section - Full Screen */}
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
      
      {/* Footer/Contact Section - Optional */}
      <section className="snap-start snap-always h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400">Contact section</p>
        </div>
      </section>
    </div>
  );
}

export default App