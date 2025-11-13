import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>WELCOME TO MADEASY</h2>
      <p>your trusted cleaning partner<br/></p>
      
      <div className="features">
        <div className="feature-card">
          <button className="button" onClick={() => navigate('/signin')}>
            Book a Cleaner
          </button>
        </div>

        <div className="feature-card">
          
          <button className="button" onClick={() => navigate('/register')}>
            Be a Cleaner
          </button>
        </div>
        <div className="feature-card">
          
          <button className="button" onClick={() => navigate('/servicepage')}>
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;