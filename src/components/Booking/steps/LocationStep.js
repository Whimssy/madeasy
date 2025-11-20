import React from 'react';
import { useBooking } from '../../../context/BookingContext';
import './BookingSteps.css';

const LocationStep = () => {
  const { state, dispatch } = useBooking();

  const propertyTypes = [
    { id: 'apartment', label: 'Apartment/Condo', icon: '🏢' },
    { id: 'house', label: 'House', icon: '🏠' },
    { id: 'townhouse', label: 'Townhouse', icon: '🏘️' },
    { id: 'office', label: 'Office', icon: '💼' }
  ];

  const handleInputChange = (field, value) => {
    dispatch({ 
      type: 'SET_LOCATION', 
      payload: { [field]: value } 
    });
  };

  const handleContinue = () => {
    if (state.location.address && state.location.city && state.location.zipCode) {
      dispatch({ type: 'CALCULATE_TOTAL' });
      dispatch({ type: 'SET_STEP', payload: 4 });
    }
  };

  return (
    <div className="booking-step">
      <div className="step-header">
        <h2>Property Details</h2>
        <p>Tell us about the space we'll be cleaning</p>
      </div>

      <div className="location-content">
        {/* Property Type */}
        <div className="form-section">
          <label>Property Type</label>
          <div className="property-type-options">
            {propertyTypes.map((type) => (
              <div
                key={type.id}
                className={`property-type-option ${state.location.propertyType === type.id ? 'selected' : ''}`}
                onClick={() => handleInputChange('propertyType', type.id)}
              >
                <span className="property-icon">{type.icon}</span>
                <span>{type.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Address Information */}
        <div className="form-section">
          <label>Address</label>
          <input
            type="text"
            placeholder="Street address"
            value={state.location.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-row">
          <div className="form-section">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={state.location.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-section">
            <label>ZIP Code</label>
            <input
              type="text"
              placeholder="ZIP Code"
              value={state.location.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              className="form-input"
            />
          </div>
        </div>

        {/* Property Details */}
        <div className="form-section">
          <label>Property Details</label>
          <div className="property-details">
            <div className="detail-input">
              <label>Bedrooms</label>
              <div className="number-selector">
                <button 
                  onClick={() => handleInputChange('bedrooms', Math.max(1, state.location.bedrooms - 1))}
                  className="number-btn"
                >
                  -
                </button>
                <span className="number-display">{state.location.bedrooms}</span>
                <button 
                  onClick={() => handleInputChange('bedrooms', state.location.bedrooms + 1)}
                  className="number-btn"
                >
                  +
                </button>
              </div>
            </div>

            <div className="detail-input">
              <label>Bathrooms</label>
              <div className="number-selector">
                <button 
                  onClick={() => handleInputChange('bathrooms', Math.max(1, state.location.bathrooms - 1))}
                  className="number-btn"
                >
                  -
                </button>
                <span className="number-display">{state.location.bathrooms}</span>
                <button 
                  onClick={() => handleInputChange('bathrooms', state.location.bathrooms + 1)}
                  className="number-btn"
                >
                  +
                </button>
              </div>
            </div>

            <div className="detail-input">
              <label>Square Footage</label>
              <input
                type="number"
                placeholder="e.g., 1500"
                value={state.location.squareFootage}
                onChange={(e) => handleInputChange('squareFootage', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="form-section">
          <label>Special Instructions (Optional)</label>
          <textarea
            placeholder="Any specific areas you want us to focus on? Access instructions? Pet information?"
            value={state.location.specialInstructions}
            onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
            className="form-textarea"
            rows="4"
          />
        </div>
      </div>

      <div className="step-actions">
        <button 
          className="btn-secondary"
          onClick={() => dispatch({ type: 'SET_STEP', payload: 2 })}
        >
          Back
        </button>
        <button 
          className="btn-primary"
          onClick={handleContinue}
          disabled={!state.location.address || !state.location.city || !state.location.zipCode}
        >
          Continue to Extras
        </button>
      </div>
    </div>
  );
};

export default LocationStep;