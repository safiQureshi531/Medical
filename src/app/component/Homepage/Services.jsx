import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; 

function Services() {
  return (
    <div className="services-page">
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

      <div className="services-container">
      <h1>Our Services</h1>
      <p>
        We offer a range of services to streamline your healthcare billing and claims process, including:<br></br>
        <br />
        <strong>- Claims Processing:</strong> Seamless claims submission and tracking for timely payments and transparent billing.
        <br />
        <strong>- Patient Invoicing:</strong> Automated invoice generation to help healthcare providers manage patient billing with ease.
        <br />
        <strong>- Insurance Plan Integration:</strong> Smooth claims processing and payment tracking with integrated insurance companies.
        <br />
        <strong>- Real-time Notifications:</strong> Automated notifications for claim statuses, payment updates, and billing reminders.
        <br />
        <strong>- Data Security and Compliance:</strong> Compliance with healthcare regulations and maintaining high standards of data security.
        <br />
        <strong>- Analytics and Reporting:</strong> Comprehensive reports on claims, payments, and operational efficiency for better decision-making.
      </p>

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

export default Services;
