import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindClient.css';

const FindClient = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    services: [],
    availability: '',
    vehicle: false,
    equipment: false
  });

  const services = [
    'Standard Cleaning',
    'Deep Cleaning',
    'Move-in/Move-out Cleaning',
    'Laundry Services',
    'Window Cleaning',
    'Carpet Cleaning',
    'Office Cleaning'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleNext = () => {
    setActiveStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    // Show success message
    alert('Application submitted successfully! We will contact you soon.');
    navigate('/');
  };

  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Services' },
    { number: 3, title: 'Availability' },
    { number: 4, title: 'Review' }
  ];

  return (
    <div className="find-client-page">
      {/* Header */}
      <header className="find-client-header">
        <div className="header-content">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back
          </button>
          <h1>Join Our Cleaning Team</h1>
          <p>Start earning with MadEasy - Apply in just a few steps</p>
        </div>
      </header>

      <div className="find-client-container">
        {/* Progress Steps */}
        <div className="progress-steps">
          {steps.map((step, index) => (
            <div key={step.number} className="step-container">
              <div className={`step ${activeStep >= step.number ? 'active' : ''} ${activeStep > step.number ? 'completed' : ''}`}>
                <div className="step-number">
                  {activeStep > step.number ? '✓' : step.number}
                </div>
                <span className="step-title">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`step-connector ${activeStep > step.number ? 'active' : ''}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {activeStep === 1 && (
              <div className="form-step">
                <h2>Personal Information</h2>
                <p className="step-description">Tell us about yourself to get started</p>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location *</label>
                    <input
                      type="text"
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Enter your city or area"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">Cleaning Experience *</label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="none">No experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Services */}
            {activeStep === 2 && (
              <div className="form-step">
                <h2>Services You Offer</h2>
                <p className="step-description">Select the cleaning services you can provide</p>
                
                <div className="services-grid">
                  {services.map((service, index) => (
                    <div
                      key={service}
                      className={`service-option ${formData.services.includes(service) ? 'selected' : ''}`}
                      onClick={() => handleServiceToggle(service)}
                    >
                      <div className="service-checkbox">
                        <div className="checkbox-indicator">
                          {formData.services.includes(service) && '✓'}
                        </div>
                      </div>
                      <span className="service-name">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="equipment-section">
                  <h3>Equipment & Transportation</h3>
                  <div className="equipment-options">
                    <label className="equipment-option">
                      <input
                        type="checkbox"
                        checked={formData.vehicle}
                        onChange={(e) => handleInputChange('vehicle', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      I have reliable transportation
                    </label>
                    
                    <label className="equipment-option">
                      <input
                        type="checkbox"
                        checked={formData.equipment}
                        onChange={(e) => handleInputChange('equipment', e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      I have basic cleaning equipment
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Availability */}
            {activeStep === 3 && (
              <div className="form-step">
                <h2>Availability</h2>
                <p className="step-description">When are you available to work?</p>
                
                <div className="availability-options">
                  <div className="availability-group">
                    <label>Preferred Schedule</label>
                    <div className="schedule-options">
                      {['Weekdays', 'Weekends', 'Both', 'Flexible'].map(option => (
                        <label key={option} className="schedule-option">
                          <input
                            type="radio"
                            name="availability"
                            value={option}
                            checked={formData.availability === option}
                            onChange={(e) => handleInputChange('availability', e.target.value)}
                          />
                          <span className="radio-indicator"></span>
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="availability-group">
                    <label>Hours Per Week</label>
                    <div className="hours-options">
                      {['1-10 hours', '10-20 hours', '20-30 hours', '30+ hours', 'Flexible'].map(hours => (
                        <label key={hours} className="hours-option">
                          <input
                            type="radio"
                            name="hours"
                            value={hours}
                            onChange={(e) => handleInputChange('hoursPerWeek', e.target.value)}
                          />
                          <span className="radio-indicator"></span>
                          {hours}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {activeStep === 4 && (
              <div className="form-step">
                <h2>Review Your Application</h2>
                <p className="step-description">Please review your information before submitting</p>
                
                <div className="review-section">
                  <div className="review-card">
                    <h3>Personal Information</h3>
                    <div className="review-item">
                      <span>Name:</span>
                      <span>{formData.fullName || 'Not provided'}</span>
                    </div>
                    <div className="review-item">
                      <span>Email:</span>
                      <span>{formData.email || 'Not provided'}</span>
                    </div>
                    <div className="review-item">
                      <span>Phone:</span>
                      <span>{formData.phone || 'Not provided'}</span>
                    </div>
                    <div className="review-item">
                      <span>Location:</span>
                      <span>{formData.location || 'Not provided'}</span>
                    </div>
                    <div className="review-item">
                      <span>Experience:</span>
                      <span>{formData.experience ? `${formData.experience} years` : 'Not provided'}</span>
                    </div>
                  </div>

                  <div className="review-card">
                    <h3>Services & Equipment</h3>
                    <div className="review-item">
                      <span>Services:</span>
                      <span>{formData.services.length > 0 ? formData.services.join(', ') : 'None selected'}</span>
                    </div>
                    <div className="review-item">
                      <span>Transportation:</span>
                      <span>{formData.vehicle ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="review-item">
                      <span>Equipment:</span>
                      <span>{formData.equipment ? 'Yes' : 'No'}</span>
                    </div>
                  </div>

                  <div className="review-card">
                    <h3>Availability</h3>
                    <div className="review-item">
                      <span>Schedule:</span>
                      <span>{formData.availability || 'Not specified'}</span>
                    </div>
                  </div>
                </div>

                <div className="consent-section">
                  <label className="consent-checkbox">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    I agree to the terms of service and privacy policy
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {activeStep > 1 && (
                <button type="button" className="btn-secondary" onClick={handleBack}>
                  Back
                </button>
              )}
              
              {activeStep < 4 ? (
                <button type="button" className="btn-primary" onClick={handleNext}>
                  Continue
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Benefits Sidebar */}
        <div className="benefits-sidebar">
          <h3>Why Join MadEasy?</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h4>Competitive Earnings</h4>
                <p>Earn up to KSh 3,000 per day with flexible hours</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🛡️</div>
              <div className="benefit-content">
                <h4>Insurance Coverage</h4>
                <p>We provide liability insurance for all our cleaners</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <div className="benefit-content">
                <h4>Easy Booking</h4>
                <p>Get matched with clients through our smart platform</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">⭐</div>
              <div className="benefit-content">
                <h4>Build Reputation</h4>
                <p>Grow your cleaning business with client reviews</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <div className="benefit-content">
                <h4>Training & Support</h4>
                <p>Access to cleaning resources and customer support</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h4>Our Cleaners Love Us</h4>
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Active Cleaners</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8★</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat">
                <div className="stat-number">95%</div>
                <div className="stat-label">Repeat Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindClient;