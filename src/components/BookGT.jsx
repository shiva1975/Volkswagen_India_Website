import React from 'react';
import { Link } from 'react-router-dom';
// Replace this with your actual close-up headlight asset path
import headlightBg from '../assets/book.png'; 

function BookGT() {
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
    userSelect: 'none'
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          /* Targets the arrow span specifically when the parent Link is hovered */
          .arrow-trigger {
            transition: transform 0.3s ease, color 0.3s ease;
            display: inline-block;
          }
          .nav-link:hover .arrow-trigger {
            transform: translateX(15px);
            color: #00ff66; /* Subtle green highlight on hover */
          }
        `}
      </style>

      <div style={overlayStyle} />

      <Link to="/contact" className="nav-link" style={linkStyle}>
        <span>Book Your GT</span>
        <span className="arrow-trigger">&rarr;</span>
      </Link>
    </div>
  );
}

export default BookGT;