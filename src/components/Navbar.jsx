import React from 'react';
import { SiVolkswagen } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // Navigation bar container styles
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Pushes brand to left and links to far right
    backgroundColor: 'black', 
    padding: '40px 40px', // Slightly adjusted padding for a cleaner look
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
    width: '100%',
    boxSizing: 'border-box',
  
   
    
  };

  // Brand container (Logo + Text) remains on the left
  const brandStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    textDecoration: 'none',
    marginLeft: '45px',
  };

  const logoStyle = {
    color: '#ffffff',
    fontSize: '40px',
    marginLeft: '45px',
  };

  const brandTextStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: 'white',
     marginRight: '45px',
  };

  // Links list container - now aligned to the right side of the navbar
  const linksContainerStyle = {
    display: 'flex', 
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '180px',
    marginRight: '45px' // Clean spacing between links
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'color 0.2s ease'
  };

  return (
    <nav style={navStyle}>
      
      {/* Brand Group (Left Side) */}
      <div style={brandStyle}>
        <SiVolkswagen style={logoStyle} />
        <span style={brandTextStyle}>Volkswagen</span>
      </div>

      {/* Navigation Links Group (Right Side End) */}
      <ul style={linksContainerStyle}>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? { ...linkStyle, color: '#87CEEB', textDecoration: 'underline' } : linkStyle)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/know" style={({ isActive }) => (isActive ? { ...linkStyle, color: '#87CEEB', textDecoration: 'underline' } : linkStyle)}>
            Know More
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? { ...linkStyle, color: '#87CEEB', textDecoration: 'underline' } : linkStyle)}>
            Contact
          </NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;