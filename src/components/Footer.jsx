import React from 'react';

function Footer() {
  // --- Style Layout Configuration ---
  const footerStyle = {
    backgroundColor: '#000000',
    width: '100%',
    padding: '40px 0 60px 0', // Vertical breathing room matching the screenshot stance
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    fontFamily: "'Chakra Petch', sans-serif"
  };

  const lineStyle = {
    width: '90%', // Leaves clean edge boundaries exactly like the layout image
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)', // High contrast thin dividing line
    border: 'none',
    marginBottom: '45px'
  };

  const textStyle = {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '1px', // Maintains standard geometric typography spacing
    textAlign: 'center',
    opacity: 0.95,
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'text'
  };

  return (
    <footer style={footerStyle}>
      {/* Structural divider element mirroring the layout canvas */}
      <div style={lineStyle} />
      
      {/* Centered Identity Block */}
      <div style={textStyle}>
        <span>@2025</span>
        <span>||</span>
        <span style={{ fontWeight: '600' }}>Shiva Dheeraj</span>
        <span>||</span>
        <span style={{ color: '#e0e0e0' }}>shivadheeraj90@gmail.com</span>
      </div>
    </footer>
  );
}

export default Footer;