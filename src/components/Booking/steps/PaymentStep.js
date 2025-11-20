import React, { useState } from 'react';
import { useBooking } from '../../../context/BookingContext';
import './BookingSteps.css';

const PaymentStep = () => {
  const { state, dispatch } = useBooking();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field, value) => {
    dispatch({
      type: 'SET_PAYMENT',
      payload: { [field]: value }
    });
  };

  const handlePayment = async () => {
    if (!state.payment.cardNumber || !state.payment.expiryDate || 
        !state.payment.cvv || !state.payment.nameOnCard) {
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      dispatch({ type: 'SET_STEP', payload: 7 });
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Format as groups of 4 digits
    const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Limit to 16 digits (19 characters with spaces)
    return formatted.slice(0, 19);
  };

  const formatExpiryDate = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Format as MM/YY
    if (digitsOnly.length >= 2) {
      return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2, 4)}`;
    }
    return digitsOnly;
  };

  return (
    <div className="booking-step">
      <div className="step-header">
        <h2>Payment Details</h2>
        <p>Secure payment processed with encryption</p>
      </div>

      <div className="payment-content">
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-details">
            <div className="summary-item">
              <span>Service</span>
              <span>{getServiceName(state.cleaningType)}</span>
            </div>
            <div className="summary-item">
              <span>Date & Time</span>
              <span>{state.schedule.date} at {state.schedule.time}</span>
            </div>
            <div className="summary-item">
              <span>Frequency</span>
              <span>{state.schedule.frequency === 'once' ? 'One Time' : 
                    state.schedule.frequency === 'weekly' ? 'Weekly' :
                    state.schedule.frequency === 'biweekly' ? 'Bi-Weekly' : 'Monthly'}</span>
            </div>
            <div className="summary-total">
              <span>Total Amount</span>
              <span>KSh {state.totalPrice?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="payment-form">
          <div className="form-section">
            <label htmlFor="nameOnCard">Name on Card *</label>
            <input
              type="text"
              id="nameOnCard"
              value={state.payment.nameOnCard}
              onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
              className="form-input"
              placeholder="Enter name as shown on card"
            />
          </div>

          <div className="form-section">
            <label htmlFor="cardNumber">Card Number *</label>
            <input
              type="text"
              id="cardNumber"
              value={state.payment.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
              className="form-input"
              placeholder="1234 5678 9012 3456"
              maxLength="19"
            />
          </div>

          <div className="form-row">
            <div className="form-section">
              <label htmlFor="expiryDate">Expiry Date *</label>
              <input
                type="text"
                id="expiryDate"
                value={state.payment.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                className="form-input"
                placeholder="MM/YY"
                maxLength="5"
              />
            </div>

            <div className="form-section">
              <label htmlFor="cvv">CVV *</label>
              <input
                type="text"
                id="cvv"
                value={state.payment.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                className="form-input"
                placeholder="123"
                maxLength="4"
              />
            </div>
          </div>

          <div className="security-notice">
            <div className="secure-badge"> Secure</div>
            <p>Your payment information is encrypted and secure. We don't store your card details.</p>
          </div>
        </div>
      </div>

      <div className="step-actions">
        <button 
          className="btn-secondary"
          onClick={() => dispatch({ type: 'SET_STEP', payload: 5 })}
          disabled={isProcessing}
        >
          Back
        </button>
        <button 
          className="btn-primary"
          onClick={handlePayment}
          disabled={isProcessing || !state.payment.cardNumber || !state.payment.expiryDate || 
                   !state.payment.cvv || !state.payment.nameOnCard}
        >
          {isProcessing ? (
            <>
              <div className="spinner"></div>
              Processing...
            </>
          ) : (
            `Pay KSh ${state.totalPrice?.toLocaleString()}`
          )}
        </button>
      </div>
    </div>
  );
};

const getServiceName = (cleaningType) => {
  const names = {
    'standard': 'Standard Cleaning',
    'deep': 'Deep Cleaning',
    'move-in': 'Move-In Cleaning',
    'move-out': 'Move-Out Cleaning'
  };
  return names[cleaningType] || 'Standard Cleaning';
};

export default PaymentStep;