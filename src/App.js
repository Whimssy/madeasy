import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './Pages/homepage';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import BookingPage from './Pages/BookingPage';
import FindClient from './Pages/FindClients';
import './App.css';

// Layout component that wraps all pages with Header and Footer
const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Auth Layout without Header/Footer
const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
};

// FindClient Layout without Header/Footer (similar to AuthLayout)
const FindClientLayout = ({ children }) => {
  return (
    <div className="find-client-layout">
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage Route */}
          <Route 
            path="/" 
            element={
              <Layout>
                <Homepage />
              </Layout>
            } 
          />
          
          {/* Auth Routes */}
          <Route 
            path="/signup" 
            element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            } 
          />
          
          <Route 
            path="/signin" 
            element={
              <AuthLayout>
                <SignIn />
              </AuthLayout>
            } 
          />

          {/* Booking Route */}
          <Route 
            path="/booking" 
            element={
              <Layout>
                <BookingPage />
              </Layout>
            } 
          />

          {/* FindClient Route - UPDATED with FindClientLayout */}
          <Route 
            path="/find-client" 
            element={
              <FindClientLayout>
                <FindClient />
              </FindClientLayout>
            } 
          />
                    
          {/* 404 Not Found Route */}
          <Route 
            path="*" 
            element={
              <Layout>
                <div className="not-found-page">
                  <div className="not-found-content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you're looking for doesn't exist.</p>
                    <a href="/" className="home-link">Go Back Home</a>
                  </div>
                </div>
              </Layout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;