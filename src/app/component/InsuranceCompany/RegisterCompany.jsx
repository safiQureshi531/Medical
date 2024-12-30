import React, { useState } from "react";
import axios from "axios";
import "./RegisterCompany.css";

const RegisterCompany = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    companyPassword: "",
    companyEmail: "",
    companyContact: "",
    companyStartYears: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/companies/add/company",
        companyData
      );
      setMessage(`Company ${response.data.companyName} registered successfully!`);
      setError("");
      setCompanyData({
        companyName: "",
        companyPassword: "",
        companyEmail: "",
        companyContact: "",
        companyStartYears: "",
      });
    } catch (err) {
      console.error("Error registering company:", err.response || err.message);
      setError(err.response?.data?.message || "Company Registered Successfully!");
      setMessage("");
    }
  };

  return (
    <div className="register-company">
      <h2>Register New Insurance Company</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyPassword">Password:</label>
          <input
            type="password"
            id="companyPassword"
            name="companyPassword"
            value={companyData.companyPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyEmail">Email:</label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={companyData.companyEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyContact">Contact:</label>
          <input
            type="text"
            id="companyContact"
            name="companyContact"
            value={companyData.companyContact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyStartYears">Start Year:</label>
          <input
            type="text"
            id="companyStartYears"
            name="companyStartYears"
            value={companyData.companyStartYears}
            onChange={handleChange}
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
  );
};

export default RegisterCompany;
