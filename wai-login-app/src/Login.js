import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock} from 'lucide-react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    name: '',
    preferences: {
      dietType: 'Veg',
      servingSize: 2,
      allergies: [],
      cuisinePreferences: [],
      budgetRange: {
        min: 0,
        max: 1000
      },
      cookingTime: 'any'
    }
  });
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    setTimeout(() => {
      setSuccess(isRegister ? 'Account created successfully!' : 'Welcome back!');
      setLoading(false);
      
      setTimeout(() => {
        onLogin && onLogin({ name: formData.name || 'Demo User', email: formData.email }, 'demo-token');
      }, 1000);
    }, 1500);
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setError('');
    setSuccess('');
    setFormData({ 
      email: '', 
      password: '', 
      name: '',
      preferences: {
        dietType: 'Veg',
        servingSize: 2,
        allergies: [],
        cuisinePreferences: [],
        budgetRange: {
          min: 0,
          max: 1000
        },
        cookingTime: 'any'
      }
    });
  };

  const handleDemoLogin = () => {
    setFormData({
      ...formData,
      email: 'demo@walai.com',
      password: 'demo123'
    });
  };

  const WAILogo = ({ size = 120 }) => (
    <div className="logo-container">
      <div 
        className="logo-wrapper"
        style={{
          background: 'rgba(0, 113, 206, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 113, 206, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        <div className="logo-gradient"></div>
        <div 
          className="logo-text"
          style={{ fontSize: `${size * 0.25}px`, letterSpacing: '-0.05em' }}
        >
          <span className="logo-w">W</span>
          <span className="logo-a">A</span>
          <span className="logo-i">I</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="login-container">
      {/* Animated Background */}
      <div className="animated-background" />
      
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element-1" />
        <div className="floating-element-2" />
        <div className="floating-element-3" />
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="form-container">
          <div className="form-card">
            {/* Header */}
            <div className="form-header">
              <WAILogo size={100} />
              <h1 className="form-title">
                Sign in or create your account
              </h1>
              <p className="form-subtitle">
                {isRegister 
                  ? 'Create your account to get started with WAI' 
                  : 'Not sure if you have an account? Enter your phone number or email and we\'ll check for you.'
                }
              </p>
            </div>

            <div className="form-content">
              {/* Error Message */}
              {error && (
                <div className="message error-message">
                  <div className="message-content">
                    <div className="message-text">{error}</div>
                    <button 
                      onClick={() => setError('')}
                      className="message-close"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
              
              {/* Success Message */}
              {success && (
                <div className="message success-message">
                  <div className="message-text">{success}</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name Field for Registration */}
                {isRegister && (
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <div className="input-container">
                      <User className="input-icon" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="form-group">
                  <label className="form-label">Phone number or email</label>
                  <div className="input-container">
                    <Mail className="input-icon" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="form-input email-input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                {(isRegister || formData.email) && (
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <div className="input-container">
                      <Lock className="input-icon" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required
                        className="form-input"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="password-toggle"
                      >
                        {showPassword ? <EyeOff className="icon" /> : <Eye className="icon" />}
                      </button>
                    </div>
                    {isRegister && (
                      <p className="password-hint">Minimum 6 characters</p>
                    )}
                  </div>
                )}

                {/* Preferences Section for Registration */}
                {isRegister && (
                  <div className="preferences-section">
                    <h3 className="preferences-title">Preferences (Optional)</h3>
                    
                    <div className="preferences-grid">
                      <div className="preference-item">
                        <label className="preference-label">Diet Type</label>
                        <select
                          value={formData.preferences.dietType}
                          onChange={(e) => handleInputChange('preferences.dietType', e.target.value)}
                          className="preference-select"
                        >
                          <option value="Veg">🥕 Vegetarian</option>
                          <option value="Non-Veg">🍖 Non-Vegetarian</option>
                          <option value="Vegan">🌱 Vegan</option>
                        </select>
                      </div>

                      <div className="preference-item">
                        <label className="preference-label">Serving Size</label>
                        <select
                          value={formData.preferences.servingSize}
                          onChange={(e) => handleInputChange('preferences.servingSize', e.target.value)}
                          className="preference-select"
                        >
                          <option value={1}>1 person</option>
                          <option value={2}>2 people</option>
                          <option value={4}>4 people</option>
                          <option value={6}>6 people</option>
                          <option value={8}>8 people</option>
                        </select>
                      </div>
                    </div>

                    <div className="preference-item">
                      <label className="preference-label">Cooking Time Preference</label>
                      <select
                        value={formData.preferences.cookingTime}
                        onChange={(e) => handleInputChange('preferences.cookingTime', e.target.value)}
                        className="preference-select full-width"
                      >
                        <option value="quick">⚡ Quick (Under 30 min)</option>
                        <option value="medium">🕐 Medium (30-60 min)</option>
                        <option value="long">🕑 Long (Over 60 min)</option>
                        <option value="any">🍳 Any Duration</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Privacy Notice */}
                <div className="privacy-notice">
                  <p className="privacy-text">
                    Securing your personal information is our priority.
                  </p>
                  <a href="#" className="privacy-link">
                    See our privacy measures.
                  </a>
                </div>

                {/* Continue Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`continue-button ${loading ? 'loading' : ''}`}
                >
                  {loading ? (
                    <div className="loading-spinner">
                      <div className="spinner"></div>
                    </div>
                  ) : (
                    'Continue'
                  )}
                </button>
              </form>

              {/* Switch Mode */}
              <div className="switch-mode">
                <p className="switch-text">
                  {isRegister ? 'Already have an account?' : "Don't have an account?"}
                </p>
                <button
                  type="button"
                  onClick={switchMode}
                  className="switch-button"
                >
                  {isRegister ? 'Sign In' : 'Create Account'}
                </button>
              </div>

              {/* Demo Account */}
              <div className="demo-account">
                <p className="demo-title">Demo Account for Testing:</p>
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="demo-button"
                >
                  Use Demo Account
                </button>
                <p className="demo-credentials">
                  Email: demo@walai.com | Password: demo123
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="form-footer">
              <p className="footer-copyright">© 2025 WAI. All Rights Reserved.</p>
              <div className="footer-links">
                <a href="#" className="footer-link">Give feedback</a>
                <a href="#" className="footer-link">Privacy Rights</a>
                <a href="#" className="footer-link">Your Privacy Choices</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;