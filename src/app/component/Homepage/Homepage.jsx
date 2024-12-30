import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleRegisterDropdown = (e) => {
    e.stopPropagation();
    setShowRegister((prev) => !prev);
    setShowLogin(false); 
  };

  const toggleLoginDropdown = (e) => {
    e.stopPropagation(); 
    setShowLogin((prev) => !prev);
    setShowRegister(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setShowRegister(false);
        setShowLogin(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="homepage">
      <header>
        <Link to="/">
          <img className="img-responsive" src="/assets/logo1.png" alt="CareAssist Logo" />
        </Link>
        <nav>
          <ul className="nav-links-item">
            <li><strong><Link to="/about">About</Link></strong></li>
            <li><strong><Link to="/services">Services</Link></strong></li>
            <li><strong><Link to="/contact">Contact Us</Link></strong></li>
            <li>
              <div className="dropdown">
                <button className="dropdown-toggle" onClick={toggleRegisterDropdown}>
                  <strong>Register</strong>
                </button>
                {showRegister && (
                  <ul className="dropdown-menu">
                    <li><Link to="/registerpatient" onClick={(e) => e.stopPropagation()}>Patient</Link></li>
                    <li><Link to="/registerprovider" onClick={(e) => e.stopPropagation()}>Healthcare Provider</Link></li>
                    <li><Link to="/registercompany" onClick={(e) => e.stopPropagation()}>Insurance Company</Link></li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropdown-toggle" onClick={toggleLoginDropdown}>
                  <strong>Login</strong>
                </button>
                {showLogin && (
                  <ul className="dropdown-menu">
                    <li><Link to="/login/admin" onClick={(e) => e.stopPropagation()}>Admin</Link></li>
                    <li><Link to="/login/patient" onClick={(e) => e.stopPropagation()}>Patient</Link></li>
                    <li><Link to="/login/provider" onClick={(e) => e.stopPropagation()}>Healthcare Provider</Link></li>
                    <li><Link to="/login/company" onClick={(e) => e.stopPropagation()}>Insurance Company</Link></li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <div className="background-container">
        <div className="welcome-text">
          <br></br>
          <h1>Welcome to CareAssist</h1>
          <p>Your trusted solution for medical billing and claims management</p>
        </div>
        <img className="background-image" src="/assets/medicalback.png" alt="Hospital Background" />
      </div>
      <br></br>
      <br></br>
      <footer className="footer">
        <div className="footer-content">
        <p>&copy; CareAssist - Made By JuberiyaZaheer ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
