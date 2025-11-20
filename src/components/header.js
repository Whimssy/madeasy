import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (link) => {
    setActiveTooltip(link);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      // If we're on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    {
      name: 'Our Services',
      path: '#services',
      tooltip: 'Discover our professional services and solutions tailored for your success',
      onClick: (e) => {
        e.preventDefault();
        handleSectionClick('services');
      }
    },
    {
      name: 'About',
      path: '#about',
      tooltip: 'Learn more about our story, mission, and the team behind MadEasy',
      onClick: (e) => {
        e.preventDefault();
        handleSectionClick('about');
      }
    }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-text">MadEasy</span>
          <div className="logo-underline"></div>
        </Link>

        {/* Navigation Links */}
        <nav className="nav">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href={link.path} 
                className="nav-link"
                onClick={link.onClick}
              >
                {link.name}
              </a>
              {/* Tooltip */}
              <div className={`tooltip ${activeTooltip === link.name ? 'tooltip-visible' : ''}`}>
                {link.tooltip}
              </div>
            </div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/signin" className="auth-btn sign-in">
            Sign In
          </Link>
          <Link to="/signup" className="auth-btn sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;