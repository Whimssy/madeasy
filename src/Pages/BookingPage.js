import React from 'react';
import { BookingProvider, useBooking } from '../context/BookingContext';
import BookingLayout from '../components/Booking/BookingLayout';
import ServiceStep from '../components/Booking/steps/ServiceStep';
import ScheduleStep from '../components/Booking/steps/ScheduleStep';
import LocationStep from '../components/Booking/steps/LocationStep';
import ExtraSteps from '../components/Booking/steps/ExtraSteps';    
import ContactStep from '../components/Booking/steps/ContactStep';
import PaymentStep from '../components/Booking/steps/PaymentStep';
import ConfirmationStep from '../components/Booking/steps/ConfirmationStep';
import './BookingPage.css';

const BookingContent = () => {
  const { state } = useBooking();

  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <ServiceStep />;
      case 2:
        return <ScheduleStep />;
      case 3:
        return <LocationStep />;
      case 4:
        return <ExtraSteps />;
      case 5:
        return <ContactStep />;
      case 6:
        return <PaymentStep />;
      case 7:
        return <ConfirmationStep />;
      default:
        return <ServiceStep />;
    }
  };

  return (
    <div className="booking-page">
      <BookingLayout>
        {renderStep()}
      </BookingLayout>
    </div>
  );
};

const BookingPage = () => {
  return (
    <BookingProvider>
      <BookingContent />
    </BookingProvider>
  );
};

export default BookingPage;