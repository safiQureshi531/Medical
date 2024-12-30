import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPatient.css';

function RegisterPatient() {
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPassword, setPatientPassword] = useState('');
  const [patientDOB, setPatientDOB] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [patientContact, setPatientContact] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [patientDisease, setPatientDisease] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const patientData = {
      patientName,
      patientEmail,
      patientPassword,
      patientDOB,
      patientGender,
      patientContact,
      patientAddress,
      patientDisease,
    };

    try {
      await axios.post('http://localhost:8080/api/v1/patients/add/new', patientData);
      alert('Successfully registered!'); 
      
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Successfully registered!');
    }
  };

  return (
    <div className="register-container">
      <h1>Register New Patient</h1>
      <div className="register-form">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="patientName">Name</label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientEmail">Email</label>
            <input
              type="email"
              id="patientEmail"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientPassword">Password</label>
            <input
              type="password"
              id="patientPassword"
              value={patientPassword}
              onChange={(e) => setPatientPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientDOB">Date of Birth</label>
            <input
              type="date"
              id="patientDOB"
              value={patientDOB}
              onChange={(e) => setPatientDOB(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientGender">Gender</label>
            <select
              id="patientGender"
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="patientContact">Contact Number</label>
            <input
              type="tel"
              id="patientContact"
              value={patientContact}
              onChange={(e) => setPatientContact(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientAddress">Address</label>
            <input
              type="text"
              id="patientAddress"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientDisease">Disease</label>
            <input
              type="text"
              id="patientDisease"
              value={patientDisease}
              onChange={(e) => setPatientDisease(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-register">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPatient;
