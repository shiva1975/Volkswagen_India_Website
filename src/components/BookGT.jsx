import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Replace this with your actual close-up headlight asset path
import headlightBg from '../assets/book.png'; 

function BookGT() {
  const [isHovered, setIsHovered] = useState(false);

  // --- Layout Canvas Styles ---
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '600px',
    backgroundColor: '#000000',
    backgroundImage: `url(${headlightBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '80px 120px',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
    zIndex: 1,
    pointerEvents: 'none'
  };

  const linkStyle = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    textDecoration: 'none',
    color: '#ffffff',
    fontFamily: "'Chakra Petch', sans-serif",
    fontSize: '48px',
    fontWeight: '700',
    letterSpacing: '2px',
    userSelect: 'none',
    transition: 'color 0.3s ease'
  };

  const arrowStyle = {
    display: 'inline-block',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateX(15px)' : 'translateX(0px)'
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle} />

      <Link 
        to="/contact" 
        style={{
          ...linkStyle,
          color: isHovered ? '#00ff66' : '#ffffff'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>Book Your GT</span>
        <span style={arrowStyle}>&rarr;</span>
      </Link>
    </div>
  );
}

export default BookGT;