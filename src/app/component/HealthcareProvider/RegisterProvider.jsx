import React, { useState } from "react";
import axios from "axios";
import "./RegisterProvider.css";

const RegisterProvider = () => {
  const [providerData, setProviderData] = useState({
    providerName: "",
    providerPassword: "",
    providerEmail: "",
    providerGender: "",
    providerSpeciality: "",
    providerDesignation: "",
    providerExperience: "",
    providerQualification: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProviderData({ ...providerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/provider/add/provider",
        providerData
      );
      setMessage(`Provider ${response.data.providerName} registered successfully!`);
      setError("");
      setProviderData({
        providerName: "",
        providerPassword: "",
        providerEmail: "",
        providerGender: "",
        providerSpeciality: "",
        providerDesignation: "",
        providerExperience: "",
        providerQualification: "",
      });
    } catch (err) {
      setError("Error registering provider. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="register-provider-container">
      <h2>Register New Provider</h2>
      <form className="register-provider-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Provider Name</label>
          <input
            type="text"
            name="providerName"
            value={providerData.providerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="providerPassword"
            value={providerData.providerPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="providerEmail"
            value={providerData.providerEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            name="providerGender"
            value={providerData.providerGender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Speciality</label>
          <input
            type="text"
            name="providerSpeciality"
            value={providerData.providerSpeciality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            name="providerDesignation"
            value={providerData.providerDesignation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience (in years)</label>
          <input
            type="number"
            name="providerExperience"
            value={providerData.providerExperience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Qualification</label>
          <input
            type="text"
            name="providerQualification"
            value={providerData.providerQualification}
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
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RegisterProvider;
