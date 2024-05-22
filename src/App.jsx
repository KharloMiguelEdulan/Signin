import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="form-box">
        {isLogin ? (
          <form className="form">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Login</button>
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={toggleForm}>
                Register
              </a>
            </p>
          </form>
        ) : (
          <form className="form">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Register</button>
            <p>
              Already have an account?{' '}
              <a href="#" onClick={toggleForm}>
                Login
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;