import React, { useState } from "react";
import "./UpdatePatient.css";

const patients = [
  {
    id: 4,
    name: "Juberiya Zaheer",
    email: "juberiya.zaheer@gmail.com",
    dob: "2002-09-10",
    gender: "Female",
    phone: "9876543210",
    address: "Bangalore, Karnataka, India",
    disease: "Asthma",
    bloodGroup: "B+",
    specialCharacteristics: "Allergic to peanuts",
    medicalHistory: [
      "Diagnosed with Asthma in 2021",
      "Vitamin A supplements prescribed",
    ],
    description:
      "Currently under treatment for Asthma. Showing improvement with prescribed supplements.",
  },
  {
    id: 9,
    name: "Satyam Gurjar",
    email: "satyam.gurjar@gmail.com",
    dob: "2000-01-12",
    gender: "Male",
    phone: "9854321076",
    address: "52, Patel Nagar, Bhopal, India",
    disease: "Diabetes",
    bloodGroup: "A+",
    specialCharacteristics: "None",
    medicalHistory: ["Hospitalized for Diabetes in 2023", "Recovered fully"],
    description: "Fully recovered from Diabetes. No ongoing health concerns.",
  },
];

const UpdatePatient = () => {
  const [searchId, setSearchId] = useState(""); 
  const [patientData, setPatientData] = useState(null); 
  const [formData, setFormData] = useState(null); 
  const [message, setMessage] = useState(""); 

  const handleSearch = () => {
    const patient = patients.find((p) => p.id === parseInt(searchId));
    if (patient) {
      setPatientData(patient);
      setFormData({ ...patient }); 
      setMessage("");
    } else {
      setMessage("Patient not found. Please check the ID.");
      setPatientData(null);
      setFormData(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPatients = patients.map((p) =>
      p.id === parseInt(searchId) ? { ...p, ...formData } : p
    );
    console.log("Updated Patients List:", updatedPatients);
    setMessage("Patient details updated successfully!");
  };

  return (
    <div className="update-patient-container">
      <h2>Search and Update Patient Details</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {message && <p className="message">{message}</p>}

      {patientData ? (
        <form className="update-patient-form" onSubmit={handleSubmit}>
          <h3>Editing Patient: {patientData.name}</h3>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupp">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupp">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupp">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupp">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-groupp">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-groupp">
            <label>Disease:</label>
            <input
              type="text"
              name="disease"
              value={formData.disease}
              onChange={handleChange}
            />
          </div>
          <button type="submitt" className="submit-btnn">
            Update Patient
          </button>
        </form>
      ) : (
        <p>Enter a Patient ID to search and update their details.</p>
      )}
    </div>
  );
};

export default UpdatePatient;
