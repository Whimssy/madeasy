import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './Pages/homepage';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Homepage Route - Now includes services */}
          <Route 
            path="/" 
            element={
              <Layout>
                <Homepage />
              </Layout>
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