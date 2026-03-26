// src/components/HeroSection.jsx
import React, { useState } from 'react';

const options = [
  { id: 'design', title: 'DESIGN', color: '#1e3a8a' }, // Blue
  { id: 'about', title: 'ABOUT ME', color: '#1e293b' }, // Slate
  { id: 'music', title: 'MUSIC', color: '#312e81' }  // Indigo
];

const HeroSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      height: '100vh',
      backgroundColor: 'black',
      overflow: 'hidden'
    }}>
      {options.map((option) => (
        <div
          key={option.id}
          onMouseEnter={() => setHoveredId(option.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            // FIX 1: position was written as 'relative: position' (wrong order)
            position: 'relative',
            flex: hoveredId === option.id ? 3 : 1,
            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            cursor: 'pointer',
            display: 'flex',
            // FIX 2: align-items needs camelCase
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: option.color,
            overflow: 'hidden',
            filter: hoveredId && hoveredId !== option.id ? 'brightness(0.4)' : 'none'
          }}
        >
          {/* Titolo */}
          <h2 style={{
            color: 'white',
            fontSize: hoveredId === option.id ? '3rem' : '1.5rem',
            fontWeight: '700',
            letterSpacing: '0.3em',
            transition: 'all 0.5s ease',
            zIndex: 10,
            textTransform: 'uppercase',
            textAlign: 'center'
          }}>
            {option.title}
          </h2>

          {/* Sottile linea CoD */}
          <div style={{
            position: 'absolute',
            bottom: '45%',
            height: '2px',
            backgroundColor: 'white',
            width: hoveredId === option.id ? '60%' : '0%',
            transition: 'width 0.5s ease',
            opacity: 0.5
          }} />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;