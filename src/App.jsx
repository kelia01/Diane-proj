import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        isSignup ? (
          <Signup toggleSignup={toggleSignup} handleLogin={handleLogin} />
        ) : (
          <Login toggleSignup={toggleSignup} handleLogin={handleLogin} />
        )
      ) : (
        <AdminDashboard handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;