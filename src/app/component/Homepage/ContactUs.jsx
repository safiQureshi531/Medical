import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css'; 

function Contact() {
  return (
    <div className="contact-page">
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

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We are here to assist you. Reach out to us through any of the following channels:
        </p>
        <div className="contact-details">
          <h3>Email:</h3>
          <p>support@careassist.com</p>

          <h3>Phone:</h3>
          <p>+1 234 567 890</p>

          <h3>Address:</h3>
          <p>
            CareAssist Headquarters<br />
            123 Healthcare Lane,<br />
            MedCity, State 56789
          </p>
        </div>
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

export default Contact;
