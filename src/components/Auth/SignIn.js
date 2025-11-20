import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Signin data:', formData);
      // Here you would typically make an API call to your backend
      alert('Signed in successfully!');
    } catch (error) {
      console.error('Signin error:', error);
      setErrors({ submit: 'Invalid email or password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Implement forgot password logic here
    alert('Forgot password functionality would open here.');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <span className="logo-text">MadEasy</span>
          </Link>
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
            
            <a href="#forgot-password" onClick={handleForgotPassword} className="forgot-password">
              Forgot password?
            </a>
          </div>

          {/* Submit Error */}
          {errors.submit && <div className="submit-error">{errors.submit}</div>}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>

          {/* Sign Up Link */}
          <div className="auth-switch">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="auth-link">Sign Up</Link>
            </p>
          </div>
        </form>

        {/* Social Login (Optional) */}
        <div className="social-login">
          <div className="divider">
            <span>Or continue with</span>
          </div>
          
          <div className="social-buttons">
            <button type="button" className="social-btn google-btn">
              <span className="social-icon">🔍</span>
              Google
            </button>
            <button type="button" className="social-btn facebook-btn">
              <span className="social-icon">📘</span>
              Facebook
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="auth-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;