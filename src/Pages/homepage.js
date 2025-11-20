import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import OurServices from '../components/ourservices';
import './homepage.css';

const Homepage = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to sections if URL hash matches
  React.useEffect(() => {
    if (location.hash === '#about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (location.hash === '#services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [location]);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookNow = () => {
    navigate('/booking');
  };

  const handleFindClients = () => {
    // Navigate to cleaner registration or show modal
    alert('Cleaner registration coming soon!');
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
              <div className="text-wrapper">
                <div className="hero-badge">
                  <span>Premium Cleaning Services</span>
                </div>
                <h1 className="hero-title">
                  Request your trusted 
                  <span className="gradient-text"> cleaners</span>
                </h1>
                <p className="hero-subtitle">
                  Experience premium cleaning services with verified professionals. 
                  Book instantly or join our network of trusted cleaners.
                </p>
                
                <div className="hero-buttons">
                  <button onClick={handleBookNow} className="hero-btn booking-btn">
                    <span className="btn-text">Book Cleaning</span>
                    <div className="btn-hover-effect"></div>
                    <div className="btn-sparkle"></div>
                  </button>
                  
                    <button onClick={handleFindClients} className="hero-btn client-btn">
                    <span className="btn-text">Find Clients</span>
                    <div className="btn-hover-effect"></div>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  <div className="trust-item">
                    <div className="trust-icon"></div>
                    <span>Verified Professionals</span>
                  </div>
                  <div className="trust-item">
                    <div className="trust-icon"></div>
                    <span>Fully Insured</span>
                  </div>
                  <div className="trust-item">
                    <div className="trust-icon"></div>
                    <span>5-Star Rated</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`hero-visual ${isVisible ? 'animate-in' : ''}`}>
              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Discover More</span>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-badge">
                <span>About Us</span>
              </div>
              <h2 className="about-title">
                Revolutionizing <span className="gradient-text">Cleaning</span> Services
              </h2>
              <p className="about-description">
                MadEasy is transforming the cleaning industry by connecting homeowners with trusted, 
                professional cleaners. We believe that finding reliable cleaning services should be 
                simple, transparent, and completely stress-free.
              </p>
              
              <div className="about-features">
                <div className="visual-card card-1">
                  <div className="card-content">
                    <h4>Quality Guaranteed</h4>
                    <p>100% satisfaction guarantee with professional-grade cleaning standards</p>
                  </div>
                  <div className="card-glow"></div>
                </div>
                
               <div className="visual-card card-2">
                  <div className="card-content">
                    <h4>Trust & Safety</h4>
                    <p>Every cleaner is thoroughly vetted, background-checked, and insured</p>
                  </div>
                  <div className="card-glow"></div>
                </div>
                
                  <div className="visual-card card-3">
                  <div className="card-content">
                    <h4>Modern Solution</h4>
                    <p>Cutting-edge platform that makes booking cleaners effortless and reliable</p>
                  </div>
                  <div className="card-glow"></div>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
             
              <div className="floating-dots"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div ref={servicesRef}>
        <OurServices />
      </div>
    </div>
  );
};

export default Homepage;