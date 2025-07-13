import React, { useState } from 'react';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData, token) => {
    setUser(userData);
    // Here you would typically store the token and user data
    console.log('Login successful:', userData, token);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div className="App">
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0071ce 0%, #004c91 25%, #ffc220 50%, #0071ce 75%, #004c91 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to WAI! 🎉</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Hello, {user.name || 'User'}! You have successfully logged in.
          </p>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
            Email: {user.email}
          </p>
          <button 
            onClick={handleLogout}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: 'rgba(255, 194, 32, 0.2)',
              color: 'white',
              border: '1px solid rgba(255, 194, 32, 0.5)',
              borderRadius: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backdropFilter: 'blur(20px)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.backgroundColor = 'rgba(255, 194, 32, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = 'rgba(255, 194, 32, 0.2)';
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
