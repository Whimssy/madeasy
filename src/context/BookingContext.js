import React, { createContext, useContext, useReducer } from 'react';

const BookingContext = createContext();

const initialState = {
  currentStep: 1,
  serviceType: '',
  cleaningType: '',
  schedule: {
    date: '',
    time: '',
    frequency: 'once'
  },
  location: {
    address: '',
    city: '',
    zipCode: '',
    propertyType: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: ''
  },
  extras: {
    deepCleaning: false,
    windowCleaning: false,
    laundry: false,
    fridgeCleaning: false,
    ovenCleaning: false
  },
  contactInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialInstructions: ''
  },
  payment: {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  },
  totalPrice: 0
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'SET_SERVICE_TYPE':
      return { ...state, serviceType: action.payload };
    
    case 'SET_CLEANING_TYPE':
      return { ...state, cleaningType: action.payload };
    
    case 'SET_SCHEDULE':
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    
    case 'SET_LOCATION':
      return { ...state, location: { ...state.location, ...action.payload } };
    
    case 'SET_EXTRAS':
      return { ...state, extras: { ...state.extras, ...action.payload } };
    
    case 'SET_CONTACT_INFO':
      return { ...state, contactInfo: { ...state.contactInfo, ...action.payload } };
    
    case 'SET_PAYMENT':
      return { ...state, payment: { ...state.payment, ...action.payload } };
    
   // In your BookingContext CALCULATE_TOTAL case
case 'CALCULATE_TOTAL':
  const basePrices = {
    'standard': 2000,
    'deep': 4500, 
    'move-in': 5000,
    'move-out': 2500
  };
  
  let total = basePrices[state.cleaningType] || 2000;
  
  // Add location-based adjustments
  if (state.location.bedrooms > 2) total += (state.location.bedrooms - 2) * 500;
  if (state.location.bathrooms > 2) total += (state.location.bathrooms - 2) * 400;
  if (state.location.squareFootage > 1500) total += Math.floor((state.location.squareFootage - 1500) / 500) * 300;
  
  // Add extras
  const extrasPrices = {
    'deepCleaning': 5000,
    'windowCleaning': 3000,
    'laundry': 1500,
    'fridgeCleaning': 2000,
    'ovenCleaning': 2000
  };
  
  Object.entries(state.extras).forEach(([extra, isSelected]) => {
    if (isSelected && extrasPrices[extra]) {
      total += extrasPrices[extra];
    }
  });
  
  return { ...state, totalPrice: total };
    
    case 'RESET_BOOKING':
      return initialState;
    
    default:
      return state;
  }
};

const calculateBasePrice = (cleaningType, location) => {
  const basePrices = {
    'standard': 99,
    'deep': 199,
    'move-in': 249,
    'move-out': 249
  };
  
  let price = basePrices[cleaningType] || 99;
  
  // Adjust based on property size
  if (location.bedrooms > 2) price += (location.bedrooms - 2) * 25;
  if (location.bathrooms > 2) price += (location.bathrooms - 2) * 20;
  if (location.squareFootage > 1500) price += Math.floor((location.squareFootage - 1500) / 500) * 30;
  
  return price;
};

const calculateExtrasPrice = (extras) => {
  let extrasPrice = 0;
  if (extras.deepCleaning) extrasPrice += 50;
  if (extras.windowCleaning) extrasPrice += 30;
  if (extras.laundry) extrasPrice += 25;
  if (extras.fridgeCleaning) extrasPrice += 20;
  if (extras.ovenCleaning) extrasPrice += 20;
  return extrasPrice;
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};