import React, { useState } from 'react';
import './SeePatientDetails.css';

function SeePatientDetails() {
  const [searchId, setSearchId] = useState('');
  const [filteredPatient, setFilteredPatient] = useState(null);

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
      age: calculateAge("2002-09-10"),
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
      age: calculateAge("2000-01-12"),
      bloodGroup: "A+",
      specialCharacteristics: "None",
      medicalHistory: ["Hospitalized for Diabetes in 2023", "Recovered fully"],
      description:
        "Fully recovered from Diabetes. No ongoing health concerns.",
    },
  ];

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const handleSearch = () => {
    const patient = patients.find((patient) => patient.id === parseInt(searchId));
    setFilteredPatient(patient || null);
  };

  return (
    <div className="patient-details-container">
      <h1>Patient Details</h1>
      
      <h3>Search Patient Here:</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredPatient ? (
        <div className="patient-card">
          <h2>Patient: {filteredPatient.name}</h2>
          <br></br>
          <p><strong>ID:</strong> {filteredPatient.id}</p>
          <p><strong>Email:</strong> {filteredPatient.email}</p>
          <p><strong>Date of Birth:</strong> {filteredPatient.dob}</p>
          <p><strong>Age:</strong> {filteredPatient.age} years</p>
          <p><strong>Gender:</strong> {filteredPatient.gender}</p>
          <p><strong>Phone:</strong> {filteredPatient.phone}</p>
          <p>
            <strong>Address:</strong>{" "}
            {`${filteredPatient.address.line}, ${filteredPatient.address.city}, ${filteredPatient.address.state} - ${filteredPatient.address.pincode}`}
          </p>
          <p><strong>Disease:</strong> {filteredPatient.disease}</p>
          <p><strong>Blood Group:</strong> {filteredPatient.bloodGroup}</p>
          <p><strong>Special Characteristics:</strong> {filteredPatient.specialCharacteristics}</p>
          <p><strong>Medical History:</strong></p>
          <ul>
            {filteredPatient.medicalHistory.map((history, idx) => (
              <li key={idx}>{history}</li>
            ))}
          </ul>
          <p><strong>Description:</strong> {filteredPatient.description}</p>
        </div>
      ) : (
        <p>No patient found with the provided ID.</p>
      )}
    </div>
  );
}

export default SeePatientDetails;
