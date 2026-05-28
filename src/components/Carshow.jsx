import React, { useState } from 'react';
// Import your asset frames here
import car1 from '../assets/car1.png'; // Virtus
import car2 from '../assets/car2.png'; // Polo
import car3 from '../assets/car3.png'; // Taigun
import car4 from '../assets/car4.png'; // Tayron
import car5 from '../assets/car5.png'; // Tiguan

// NOTE: Replace these placeholder arrays with your sequential rotation asset frames when available
const VIRTUS_FRAMES = [car1, car1, car1, car1];
const POLO_FRAMES = [car2, car2, car2, car2];
const TAIGUN_FRAMES = [car3, car3, car3, car3];
const TAYRON_FRAMES = [car4, car4, car4, car4];
const TIGUAN_FRAMES = [car5, car5, car5, car5];

function Carshow() {
  // Track hover states separately for each card slot
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Track the currently active spin frame index for the hovered car
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  // Structural dataset expanded to handle all 5 vehicle segments
  const showcaseData = [
    {
      id: 1,
      title: 'VIRTUS',
      frames: VIRTUS_FRAMES,
      engine: '1.0L / 1.5L TSI',
      fuel: 'Petrol'
    },
    {
      id: 2,
      title: 'POLO',
      frames: POLO_FRAMES,
      engine: '1.0L TSI Hatch',
      fuel: 'Petrol'
    },
    {
      id: 3,
      title: 'TAIGUN',
      frames: TAIGUN_FRAMES,
      engine: '1.0L / 1.5L Dynamic',
      fuel: 'Petrol'
    },
    {
      id: 4,
      title: 'TAYRON',
      frames: TAYRON_FRAMES,
      engine: '2.0L TSI / eHybrid',
      fuel: 'Petrol'
    },
    {
      id: 5,
      title: 'TIGUAN',
      frames: TIGUAN_FRAMES,
      engine: '2.0L TSI 4MOTION',
      fuel: 'Petrol'
    }
  ];

  // --- Dynamic 360 Frame Index Math ---
  const handleMouseMove = (e, totalFrames) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    
    // Calculate mouse horizontal position relative to card edge (0 to card width)
    const relativeX = e.clientX - box.left;
    
    // Convert position to a precise percentage value ranging from 0.0 to 1.0
    const percentageX = Math.max(0, Math.min(1, relativeX / box.width));
    
    // Calculate frame target index based on mouse position percentage
    const frameTarget = Math.floor(percentageX * (totalFrames - 1));
    
    setCurrentFrameIndex(frameTarget);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setCurrentFrameIndex(0); // Snap back to the front default frame on leave
  };

  // --- Layout Canvas Styles ---
  const pageContainerStyle = {
    backgroundColor: '#000000',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Switched to column to place heading cleanly above the grid
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 40px',
    boxSizing: 'border-box'
  };

  const mainHeadingStyle = {
    fontFamily: "'Chakra Petch', sans-serif",
    fontSize: '56px',
    fontWeight: '700',
    letterSpacing: '6px',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginBottom: '80px', // Creates identical separation spacing matching your About section
    textAlign: 'center'
  };

  const gridContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Auto-wraps 5 items beautifully depending on viewport limits
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px', 
    width: '100%'
  };

  const getCardStyle = (cardId) => {
    const isHovered = hoveredCard === cardId;
    return {
      backgroundColor: '#050505',
      width: '380px', // Optimized slightly to handle 5 cards gracefully in row groups
      height: '500px',
      borderRadius: '16px',
      border: isHovered ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.4)',
      padding: '35px 24px 25px 24px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      cursor: 'ew-resize', 
      
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)',
      boxShadow: isHovered 
        ? '0 20px 40px rgba(255, 255, 255, 0.1)' 
        : '0 15px 35px rgba(0, 0, 0, 0.8)',
      transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
    };
  };

  const imgContainerStyle = {
    width: '100%',
    height: '180px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const carImgStyle = {
    width: '95%',
    height: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5))',
    userSelect: 'none', 
    pointerEvents: 'none' 
  };

  const modelTitleStyle = {
    fontFamily: "'Chakra Petch', sans-serif",
    fontSize: '36px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: '#ffffff',
    margin: 'auto 0 0 0', 
    textAlign: 'center'
  };

  const footerRowStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    marginTop: '30px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
  };

  const badgeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#e0e0e0',
    fontFamily: "'Chakra Petch', sans-serif",
    fontSize: '13px',
    letterSpacing: '0.5px'
  };

  const EngineIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
      <path d="M10 2h4M12 2v4M4 11h16M4 15h16M8 6h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    </svg>
  );

  const PetrolIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
      <path d="M3 22h12M4 2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM19 7h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3M16 9h3" />
    </svg>
  );

  return (
    <div style={pageContainerStyle}>
      {/* Styled Section Heading */}
      <h1 style={mainHeadingStyle}>Car Line-Up In India</h1>
         
      {/* Wrapped Grid Content Area */}
      <div style={gridContainerStyle}>
        {showcaseData.map((car) => {
          const isCurrentCardHovered = hoveredCard === car.id;
          const activeFrame = isCurrentCardHovered ? currentFrameIndex : 0;

          return (
            <div 
              key={car.id}
              style={getCardStyle(car.id)}
              onMouseEnter={() => setHoveredCard(car.id)}
              onMouseMove={(e) => handleMouseMove(e, car.frames.length)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={imgContainerStyle}>
                <img 
                  src={car.frames[activeFrame]} 
                  alt={`Volkswagen ${car.title} 360 View`} 
                  style={carImgStyle} 
                />
              </div>
              
              <h2 style={modelTitleStyle}>{car.title}</h2>
              
              <div style={footerRowStyle}>
                <div style={badgeStyle}>
                  <EngineIcon />
                  <span>{car.engine}</span>
                </div>
                <div style={badgeStyle}>
                  <PetrolIcon />
                  <span>{car.fuel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carshow;