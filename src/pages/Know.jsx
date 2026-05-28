import React from 'react';
import Carshow from '../components/Carshow';
import BookGT from '../components/BookGT';
import Footer from '../components/Footer';

function Know() {
  // --- Layout Canvas Styles ---
  const containerStyle = {
    backgroundColor: '#000000',
    minHeight: '80vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 40px',
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
    marginBottom: '80px',
    textAlign: 'center'
  };

  const contentGridStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '100px',
    maxWidth: '1200px',
    width: '100%',
    flexWrap: 'wrap'
  };

  // --- Left Column: Brand Philosophy Stance ---
  const leftColumnStyle = {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  const subTitleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '4px',
    color: 'rgba(255, 255, 255, 0.4)',
    textTransform: 'uppercase'
  };

  const descriptionStyle = {
    fontSize: '24px',
    lineHeight: '1.6',
    fontWeight: '400',
    color: '#e0e0e0',
    letterSpacing: '0.5px'
  };

  const highlightTextStyle = {
    color: '#ffffff',
    fontWeight: '700',
    borderBottom: '2px solid rgba(255, 255, 255, 0.8)',
    paddingBottom: '2px'
  };

  // --- Right Column: Corporate Pillars ---
  const rightColumnStyle = {
    flex: '1',
    minWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  };

  const pillarStyle = {
    borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
    paddingLeft: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    transition: 'border-color 0.3s ease'
  };

  const pillarTitleStyle = {
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#ffffff'
  };

  const pillarDescStyle = {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#a0a0a0',
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      {/* Synchronized Section Title */}
      <h1 style={mainHeadingStyle}>Know Volkswagen</h1>

      <div style={contentGridStyle}>
        
        {/* LEFT COLUMN: Brand Essence statement */}
        <div style={leftColumnStyle}>
          <span style={subTitleStyle}>German Engineering</span>
          <p style={descriptionStyle}>
            For over a century, Volkswagen has redefined human mobility. We build vehicles that marry robust <span style={highlightTextStyle}>structural safety</span> with exhilarating, precise driving dynamics tailored for roads across the globe.
          </p>
        </div>

        {/* RIGHT COLUMN: The Pillars of Identity */}
        <div style={rightColumnStyle}>
          
          {/* Pillar 1 */}
          <div 
            style={pillarStyle}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
          >
            <h3 style={pillarTitleStyle}>The GT Legacy</h3>
            <p style={pillarDescStyle}>
              Engineered with turbocharged TSI power and flawless chassis tuning to give motoring enthusiasts raw tracking adrenaline.
            </p>
          </div>

          {/* Pillar 2 */}
          <div 
            style={pillarStyle}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
          >
            <h3 style={pillarTitleStyle}>Uncompromised Safety</h3>
            <p style={pillarDescStyle}>
              Built with premium structural high-strength steel cages ensuring multi-star adult and child occupant protection profiles.
            </p>
          </div>

          {/* Pillar 3 */}
          <div 
            style={pillarStyle}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
          >
            <h3 style={pillarTitleStyle}>Future Forward</h3>
            <p style={pillarDescStyle}>
              Pioneering sustainable architectures with eHybrid setups and intelligent assistance platforms built for modern roads.
            </p>
          </div>

        </div>

      </div>
      <Carshow />
      <BookGT />
      <Footer />
    </div>
  );
}

export default Know;