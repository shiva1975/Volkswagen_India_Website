import React from 'react';
// Import your actual combined showcase landscape asset path
import groupCarImg from '../assets/rooms.png'; 

function Showroom() {
  // --- Layout Canvas Styles ---
  const pageWrapperStyle = {
    backgroundColor: '#000000',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Vertically stack heading above content block
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 40px',
    boxSizing: 'border-box',
    fontFamily: "'Chakra Petch', sans-serif",
    color: '#ffffff'
  };

  const mainHeadingStyle = {
    fontSize: '56px',
    fontWeight: '700',
    letterSpacing: '6px',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginBottom: '80px', // Uniform separation matching your other sections
    textAlign: 'center'
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '120px', // Preserved wide-distribution styling from your original frame
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap' // Graceful wrapping on smaller screens
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
  };

  const imageWrapperStyle = {
    position: 'relative',
    width: '680px', 
    height: '380px',
    borderRadius: '32px', 
    overflow: 'hidden',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.03)'
  };

  const mainImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  // --- Right Side Analytics Timeline Styles ---
  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '350px'
  };

  const statGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  };

  const numberStyle = {
    fontSize: '52px', 
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#ffffff',
    lineHeight: '1'
  };

  const labelStyle = {
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '6px', 
    color: '#ffffff',
    marginTop: '12px',
    textTransform: 'uppercase'
  };

  const verticalLineStyle = {
    width: '1px',
    height: '80px', 
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: '30px 0'
  };

  return (
    <div style={pageWrapperStyle}>
      {/* Styled Section Heading */}
      <h1 style={mainHeadingStyle}>Service Center and Showroom in India</h1>

      {/* Structural Data Split Layout Container */}
      <div style={contentContainerStyle}>
        
        {/* LEFT SIDE: Rounded Media Display Canvas */}
        <div style={leftColumnStyle}>
          <div style={imageWrapperStyle}>
            <img 
              src={groupCarImg} 
              alt="Volkswagen Fleet Showcase" 
              style={mainImageStyle} 
            />
          </div>
        </div>

        {/* RIGHT SIDE: Technical Metrics Timeline Vertical System */}
        <div style={rightColumnStyle}>
          
          {/* Stat Block 1 */}
          <div style={statGroupStyle}>
            <span style={numberStyle}>5</span>
            <span style={labelStyle}>Total Models</span>
          </div>

          <div style={verticalLineStyle}></div>

          {/* Stat Block 2 */}
          <div style={statGroupStyle}>
            <span style={numberStyle}>148</span>
            <span style={labelStyle}>Service Center</span>
          </div>

          <div style={verticalLineStyle}></div>

          {/* Stat Block 3 */}
          <div style={statGroupStyle}>
            <span style={numberStyle}>257</span>
            <span style={labelStyle}>Showrooms</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Showroom;