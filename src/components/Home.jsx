import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Carshow from './Carshow';
import Showroom from './Showroom';
import BookGT from './BookGT';
import Footer from './Footer';

// Imported the image file from your assets folder
import backgroundImage from '../assets/background.png';

function Home() {
  // --- Restructured Layout Spacing Metrics ---
  const styles = {
    mainContainer: {
      backgroundColor: '#000000',
      minHeight: '100vh', 
      width: '100%',
      overflowX: 'hidden', 
    },
    heroSection: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 'calc(100vh - 70px)', 
      width: '100%',
    },
    // Standardized section wrapper to keep layout distribution balanced
    sectionContainer: {
      width: '100%',
      paddingTop: '60px',
      paddingBottom: '60px',
      boxSizing: 'border-box',
    },
    sectionSpacer: {
      width: '100%',
      height: '1px',
      // Subtle neon path divider
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%)',
    }
  };

  return (
    <div style={styles.mainContainer}>
      {/* Navigation Bar */}
      
      
      {/* Hero Section with Local Asset Background */}
      <div style={styles.heroSection} />

      <div style={styles.sectionSpacer} />

      {/* About Section: Features technical corner overlays */}
      <div style={styles.sectionContainer}>
        <About />
      </div>

      <div style={styles.sectionSpacer} />

      {/* Carshow Section: Features 360-degree interactive hover frames */}
      <div style={styles.sectionContainer}>
        <Carshow />
      </div>

      <div style={styles.sectionSpacer} />

      {/* Showroom Section: Features metrics timeline from Screenshot 2026-05-28 231451.jpg */}
      <div style={styles.sectionContainer}>
        <Showroom />
      </div>

      <div style={styles.sectionSpacer} />

      {/* BookGT Section: Immersive cinematic headlight banner from Screenshot 2026-05-28 231512.jpg */}
      <div>
        <BookGT />
        <Footer />
        
      </div>
    </div>
  );
}

export default Home;