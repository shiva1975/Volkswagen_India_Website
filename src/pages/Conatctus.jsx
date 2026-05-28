import React, { useState } from 'react';
import Showroom from '../components/Showroom';
import Carshow from '../components/Carshow';
import BookGT from '../components/BookGT';
import Footer from '../components/Footer';

function Contactus() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API form dispatch action
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  // --- Layout Canvas Styles ---
  const containerStyle = {
    backgroundColor: '#000000',
    minHeight: '90vh',
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '100px',
    maxWidth: '1200px',
    width: '100%',
    flexWrap: 'wrap'
  };

  // --- Left Column: Info Metrics ---
  const leftColumnStyle = {
    flex: '1',
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  };

  const infoGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const infoLabelStyle = {
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '3px',
    color: 'rgba(255, 255, 255, 0.4)',
    textTransform: 'uppercase'
  };

  const infoValueStyle = {
    fontSize: '20px',
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: '1.5',
    letterSpacing: '0.5px'
  };

  // Custom configuration extending the primary metric styles safely for the hot-green timeline hotline
  const hotlineValueStyle = {
    ...infoValueStyle,
    color: '#00ff66',
    fontWeight: '600'
  };

  // --- Right Column: Interactive Input Form ---
  const rightColumnStyle = {
    flex: '1',
    minWidth: '380px',
    backgroundColor: '#050505',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    padding: '40px',
    boxSizing: 'border-box',
    boxShadow: '0px 20px 40px rgba(0,0,0,0.6)'
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '25px'
  };

  const inputLabelStyle = {
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    color: '#a0a0a0',
    textTransform: 'uppercase'
  };

  const inputStyle = {
    backgroundColor: '#121212',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    padding: '14px 18px',
    color: '#ffffff',
    fontFamily: "'Chakra Petch', sans-serif",
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '8px',
    padding: '16px',
    fontFamily: "'Chakra Petch', sans-serif",
    fontSize: '15px',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px'
  };

  const successMessageStyle = {
    color: '#00ff66',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '15px'
  };

  return (
    <div style={containerStyle}>
        <Showroom />
      <style>
        {`
          input:focus, textarea:focus {
            border-color: #ffffff !important;
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.15) !important;
          }
          button:hover {
            background-color: #e0e0e0 !important;
            transform: translateY(-2px);
          }
          button:active {
            transform: translateY(0px);
          }
        `}
      </style>

      {/* Synchronized Section Title */}
      <h1 style={mainHeadingStyle}>Connect With Us</h1>

      <div style={contentGridStyle}>
        
        {/* LEFT COLUMN: Corporate Support HQ Info Desk */}
        <div style={leftColumnStyle}>
          
          <div style={infoGroupStyle}>
            <span style={infoLabelStyle}>Corporate Headquarters</span>
            <p style={infoValueStyle}>
              Volkswagen Passenger Cars India<br />
              Technical Engineering Zone, Bandra Kurla Complex,<br />
              Mumbai, Maharashtra - 400051
            </p>
          </div>

          <div style={infoGroupStyle}>
            <span style={infoLabelStyle}>Customer Care Hotline</span>
            <p style={hotlineValueStyle}>
              1800 102 0909 (Toll Free)
            </p>
          </div>

          <div style={infoGroupStyle}>
            <span style={infoLabelStyle}>Digital Desk</span>
            <p style={infoValueStyle}>
              customer.care@volkswagen.co.in
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Input Lead Form */}
        <div style={rightColumnStyle}>
          <form onSubmit={handleSubmit}>
            
            <div style={formGroupStyle}>
              <label style={inputLabelStyle}>Full Name</label>
              <input 
                type="text" 
                required
                style={inputStyle}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={inputLabelStyle}>Email Address</label>
              <input 
                type="email" 
                required
                style={inputStyle}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
              />
            </div>

            <div style={formGroupStyle}>
              <label style={inputLabelStyle}>Message / Inquiry</label>
              <textarea 
                rows="4"
                required
                style={{ ...inputStyle, resize: 'none' }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify your variant or layout interest..."
              />
            </div>

            <button type="submit" style={buttonStyle}>
              Submit Inquiry
            </button>

            {isSubmitted && (
              <div style={successMessageStyle}>
                TRANSMISSION SUCCESSFUL. WE WILL CONNECT SHORTLY.
              </div>
            )}

          </form>
        </div>

      </div>
      <Carshow />
        <BookGT />
        <Footer />
    </div>
  );
}

export default Contactus;