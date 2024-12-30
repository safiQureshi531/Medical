import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
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

      <div className="about-content">
        <h1>About CareAssist</h1>
        <p>
          CareAssist is a comprehensive medical billing and claims management system designed to streamline the entire healthcare billing process. It provides healthcare providers, insurance companies, and patients with a reliable platform to manage claims, invoices, and reimbursements. The system's architecture prioritizes security, scalability, and seamless API integration for enhanced performance. CareAssist is the result of the efforts of <strong>'Juberiya Zaheer'</strong>.
        </p>
        <h2>Features of CareAssist</h2>
<p>
  CareAssist offers a range of powerful features. 
  It enables <strong>efficient claims processing</strong>, ensuring seamless submission and tracking of claims for timely payments. 
  The platform simplifies <strong>patient invoicing</strong> by automatically generating and managing invoices, helping healthcare providers track patient billing effortlessly. 
  With <strong>insurance plan management</strong>, CareAssist integrates with insurance companies to handle claims, payment processing, and plan details effectively. 
  Users benefit from <strong>real-time notifications</strong>, including updates on claim status, billing reminders, and payments. 
  CareAssist prioritizes <strong>security and compliance</strong>, employing advanced authentication mechanisms and adhering to healthcare regulations. 
  Additionally, it offers <strong>analytics and reporting</strong>, providing actionable insights on claims, payments, and operational performance.
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

export default About;
