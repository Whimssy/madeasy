import React from 'react';
import { useBooking } from '../../../context/BookingContext';
import './BookingSteps.css';

const ContactStep = () => {
  const { state, dispatch } = useBooking();

  const handleInputChange = (field, value) => {
    dispatch({
      type: 'SET_CONTACT_INFO',
      payload: { [field]: value }
    });
  };

  const handleContinue = () => {
    if (state.contactInfo.firstName && state.contactInfo.lastName && 
        state.contactInfo.email && state.contactInfo.phone) {
      dispatch({ type: 'SET_STEP', payload: 6 });
    }
  };

  return (
    <div className="booking-step">
      <div className="step-header">
        <h2>Contact Information</h2>
        <p>Tell us how we can reach you</p>
      </div>

      <div className="contact-content">
        <div className="form-row">
          <div className="form-section">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              value={state.contactInfo.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="form-input"
              placeholder="Enter your first name"
            />
          </div>

          <div className="form-section">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              value={state.contactInfo.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="form-input"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="form-section">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            value={state.contactInfo.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-section">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            value={state.contactInfo.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="form-input"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-section">
          <label htmlFor="specialInstructions">Special Instructions (Optional)</label>
          <textarea
            id="specialInstructions"
            value={state.contactInfo.specialInstructions}
            onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
            className="form-textarea"
            placeholder="Any special instructions for our cleaners? Access codes? Pet information?"
            rows="4"
          />
        </div>

        <div className="contact-notes">
          <h4>📝 Important Notes:</h4>
          <ul>
            <li>We'll send booking confirmation to your email</li>
            <li>Cleaner will call 30 minutes before arrival</li>
            <li>Please ensure someone is home during the cleaning</li>
            <li>Cancel or reschedule up to 24 hours in advance</li>
          </ul>
        </div>
      </div>

      <div className="step-actions">
        <button 
          className="btn-secondary"
          onClick={() => dispatch({ type: 'SET_STEP', payload: 4 })}
        >
          Back
        </button>
        <button 
          className="btn-primary"
          onClick={handleContinue}
          disabled={!state.contactInfo.firstName || !state.contactInfo.lastName || 
                   !state.contactInfo.email || !state.contactInfo.phone}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default ContactStep;