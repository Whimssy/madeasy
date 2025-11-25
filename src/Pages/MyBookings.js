import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyBookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserBookings();
  }, []);

  const fetchUserBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('token');

      if (!user) {
        navigate('/login');
        return;
      }

      // FIXED: Correct endpoint for getting user's bookings
      const response = await fetch('http://localhost:5000/api/bookings/my-bookings', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data = await response.json();
      console.log('Fetched bookings:', data); // Debug log
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Failed to load bookings: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`1970-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { class: 'status-pending', text: 'Pending' },
      confirmed: { class: 'status-confirmed', text: 'Confirmed' },
      completed: { class: 'status-completed', text: 'Completed' },
      cancelled: { class: 'status-cancelled', text: 'Cancelled' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return <span className={`status-badge ${config.class}`}>{config.text}</span>;
  };

  if (loading) {
    return (
      <div className="my-bookings-container">
        <div className="loading-spinner">Loading your bookings...</div>
      </div>
    );
  }

  return (
    <div className="my-bookings-container">
      <div className="bookings-header">
        <h1>My Bookings</h1>
        <button 
          className="new-booking-btn"
          onClick={() => navigate('/booking')}
        >
          + New Booking
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {bookings.length === 0 ? (
        <div className="no-bookings">
          <h2>No bookings yet</h2>
          <p>Schedule your first cleaning service to get started!</p>
          <button 
            className="cta-button"
            onClick={() => navigate('/booking')}
          >
            Book Your First Cleaning
          </button>
        </div>
      ) : (
        <div className="bookings-list">
          {bookings.map(booking => (
            <div key={booking._id || booking.id} className="booking-card">
              <div className="booking-header">
                <h3>{booking.serviceType} Cleaning</h3>
                {getStatusBadge(booking.status)}
              </div>
              
              <div className="booking-details">
                <div className="detail-row">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{formatDate(booking.date)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Time:</span>
                  <span className="detail-value">{formatTime(booking.time)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{booking.duration} hours</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{booking.address}</span>
                </div>
                {booking.cleanerId && (
                  <div className="detail-row">
                    <span className="detail-label">Cleaner:</span>
                    <span className="detail-value">{booking.cleanerId.name}</span>
                  </div>
                )}
                {booking.specialInstructions && (
                  <div className="detail-row">
                    <span className="detail-label">Instructions:</span>
                    <span className="detail-value">{booking.specialInstructions}</span>
                  </div>
                )}
              </div>

              <div className="booking-actions">
                {booking.status === 'pending' && (
                  <>
                    <button className="btn-secondary">Modify</button>
                    <button className="btn-danger">Cancel</button>
                  </>
                )}
                {booking.status === 'confirmed' && (
                  <button className="btn-primary">View Details</button>
                )}
                {booking.status === 'completed' && (
                  <button className="btn-primary">Leave Review</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;