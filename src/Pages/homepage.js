import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import OurServices from '../components/ourservices';
import './homepage.css';

const Homepage = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();

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

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Request your trusted 
            <span className="gradient-text"> cleaners</span>
          </h1>
          <p className="hero-subtitle">
            Experience premium cleaning services with verified professionals. 
            Book instantly or join our network of trusted cleaners.
          </p>
          
          <div className="hero-buttons">
            <button className="hero-btn booking-btn">
              <span className="btn-text">Book Cleaning</span>
              <div className="btn-hover-effect"></div>
            </button>
            
            <button className="hero-btn client-btn">
              <span className="btn-text">Find Clients</span>
              <div className="btn-hover-effect"></div>
            </button>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">
                About <span className="gradient-text">MadEasy</span>
              </h2>
              <p className="about-description">
                MadEasy is revolutionizing the cleaning industry by connecting homeowners 
                with trusted, professional cleaners. We believe that finding reliable 
                cleaning services should be simple, transparent, and stress-free.
              </p>
              
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">✨</div>
                  <div className="feature-content">
                    <h3>Premium Quality</h3>
                    <p>All our cleaners are thoroughly vetted and trained to deliver exceptional service</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h3>Instant Booking</h3>
                    <p>Book your cleaning service in minutes with our streamlined booking process</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-content">
                    <h3>Fully Insured</h3>
                    <p>Your peace of mind is our priority. All services are backed by our insurance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="visual-card card-1">
                <div className="card-content">
                  <h4>500+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="visual-card card-2">
                <div className="card-content">
                  <h4>50+</h4>
                  <p>Trusted Cleaners</p>
                </div>
              </div>
              <div className="visual-card card-3">
                <div className="card-content">
                  <h4>98%</h4>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
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