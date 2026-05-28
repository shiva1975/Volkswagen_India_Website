import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import car1 from '../assets/car1.png'; 
import car2 from '../assets/car2.png'; 
import car3 from '../assets/car3.png'; 
import car4 from '../assets/car4.png'; // Tayron
import car5 from '../assets/car5.png'; // Tiguan

function About() {
  const carData = [
    {
      id: 0,
      title: 'VIRTUS',
      image: car1,
      specs: [
        'Is offered with smooth and peppy powertrains, and has a premium buyer appeal.',
        'Is engaging to drive due to the road stability and progressive but quick steering.',
        'It is surprisingly more spacious than the external stance/size suggests.',
        'Excellent build and quality, and is comfortable for long-distance driving.'
      ]
    },
    {
      id: 1,
      title: 'POLO',
      image: car2, 
      specs: [
        'Engineered with nimble handling metrics perfect for tight urban track routes.',
        'Features an iconic timeless hatchback profile with modern daily driver appeal.',
        'Highly customisable cockpit configurations equipped with intuitive dashboard metrics.',
        'Renowned build integrity delivering legendary stability at high speeds.'
      ]
    },
    {
      id: 2,
      title: 'TAIGUN',
      image: car3, 
      specs: [
        'Boasts a commanding elevated SUV stance with distinct European design elements.',
        'Features a robust GT badge layout coupled with sharp LED lighting modules.',
        'Delivers outstanding structural integrity, making it safe and steady at speed.',
        'Spacious ergonomics optimized with bold colorways and high road visibility.'
      ]
    },
    {
      id: 3,
      title: 'TAYRON',
      image: car4,
      specs: [
        'Premium premium mid-size SUV positioning bridging the premium segments.',
        'Available with advanced eHybrid plug-in systems for high-range efficiency.',
        'Massive utility space configured with up to seven flexible passenger seats.',
        'Equipped with a cutting-edge cockpit dashboard alongside ambient light motifs.'
      ]
    },
    {
      id: 4,
      title: 'TIGUAN',
      image: car5,
      specs: [
        'Legendary all-rounder capability utilizing robust 4MOTION all-wheel-drive configurations.',
        'Features high-definition IQ.LIGHT HD matrix headlight elements.',
        'Adaptive chassis controller systems dampening road paths dynamically.',
        'Ergonomic massage seating profiles optimized for long global cruising routes.'
      ]
    }
  ];

  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const currentCar = carData[currentCarIndex];

  const handleNextCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };

  const handlePrevCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length);
  };

  // --- Theme Style Setup ---
  const containerStyle = {
    backgroundColor: '#000000',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#ffffff',
    fontFamily: "'Chakra Petch', sans-serif", 
    padding: '140px 40px',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    fontSize: '56px',
    fontWeight: '700',
    letterSpacing: '6px',
    marginBottom: '80px',
    zIndex: 2,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: "'Chakra Petch', sans-serif"
  };

  const imageContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '700px',
    height: '420px'
  };

  const carImageStyle = {
    width: '85%', 
    height: 'auto',
    zIndex: 1,
    filter: 'drop-shadow(0px 10px 30px rgba(255,255,255,0.05))',
    transition: 'all 0.4s ease-in-out',
    objectFit: 'contain'
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '50%',
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: '24px',
    transition: 'all 0.3s ease',
    zIndex: 5
  };

  const wrapperStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    zIndex: 4,
    transition: 'all 0.3s ease'
  };

  const commonBoxStyle = {
    backgroundColor: '#121212',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '12px', 
    padding: '18px 24px',
    fontSize: '13px',
    lineHeight: '1.6',
    fontWeight: '500',
    letterSpacing: '0.3px',
    color: '#e0e0e0',
    minHeight: '90px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    boxShadow: '0px 10px 25px rgba(0,0,0,0.5)',
    fontFamily: "'Chakra Petch', sans-serif"
  };

  const svgLineStyle = {
    width: '100%',
    height: '40px',
    opacity: 0.8
  };

  return (
    <div style={containerStyle}>
        <h1>Line Up </h1>

      {/* Dynamic Title */}
      <h1 style={titleStyle}>{currentCar.title}</h1>

      {/* Main Interactive Stage */}
      <div style={imageContainerStyle}>
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={handlePrevCar}
          style={{ ...arrowStyle, left: '-180px' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
        >
          <FiChevronLeft />
        </button>

        {/* Dynamic Center Car Asset */}
        <img 
          src={currentCar.image} 
          alt={`Volkswagen ${currentCar.title}`} 
          style={carImageStyle}
        />

        {/* Right Navigation Arrow */}
        <button 
          onClick={handleNextCar}
          style={{ ...arrowStyle, right: '-180px' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
        >
          <FiChevronRight />
        </button>

        {/* ================= DYNAMIC FEATURE CALLOUTS ================= */}

        {/* Top Left Feature */}
        <div style={{ ...wrapperStyle, top: '-110px', left: '-290px' }}>
          <div style={commonBoxStyle}>
            {currentCar.specs[0]}
          </div>
          <svg style={svgLineStyle} viewBox="0 0 320 40">
            <polyline points="262,0 262,20 310,20" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="310" cy="20" r="3" fill="white" />
          </svg>
        </div>

        {/* Top Right Feature */}
        <div style={{ ...wrapperStyle, top: '-110px', right: '-290px' }}>
          <div style={commonBoxStyle}>
            {currentCar.specs[1]}
          </div>
          <svg style={svgLineStyle} viewBox="0 0 320 40">
            <polyline points="58,0 58,20 10,20" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="10" cy="20" r="3" fill="white" />
          </svg>
        </div>

        {/* Bottom Left Feature */}
        <div style={{ ...wrapperStyle, bottom: '-150px', left: '-290px' }}>
          <svg style={svgLineStyle} viewBox="0 0 320 40">
            <circle cx="310" cy="20" r="3" fill="white" />
            <polyline points="310,20 262,20 262,40" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          <div style={commonBoxStyle}>
            {currentCar.specs[2]}
          </div>
        </div>

        {/* Bottom Right Feature */}
        <div style={{ ...wrapperStyle, bottom: '-150px', right: '-290px' }}>
          <svg style={svgLineStyle} viewBox="0 0 320 40">
            <circle cx="10" cy="20" r="3" fill="white" />
            <polyline points="10,20 58,20 58,40" fill="none" stroke="white" strokeWidth="1" />
          </svg>
          <div style={commonBoxStyle}>
            {currentCar.specs[3]}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;