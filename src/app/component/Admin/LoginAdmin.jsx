import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './LoginAdmin.css'; 

function LoginAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/admin/authenticate', {
        username,
        password,
      });

      const token = response.data;

      localStorage.setItem('authToken', token);

      alert('Login successful! Redirecting to Admin Dashboard...');

      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-admin-page">
      <header>
        <Link to="/">
          <img className="img-responsive" src="/assets/logo1.png" alt="CareAssist Logo" />
        </Link>
        <nav>
          <ul className="nav-links">
          <li><strong><Link to="/">Home</Link></strong></li>
          </ul>
        </nav>
      </header>

      <div className="login-container">
        <div className="login-image">
          <img src="/assets/loginpic.png" alt="Login Illustration" />
        </div>

        <div className="login-form">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Enter Your Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Enter your username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter Your Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-login">Login</button>
              <Link to="/forgetpassword">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; CareAssist - Made By JuberiyaZaheer ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default LoginAdmin;
