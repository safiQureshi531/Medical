import React, { useState, useEffect } from "react";
import axios from "axios";
import './GetAllPatients.css';

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/patients/get/allPatients", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbjIiLCJpYXQiOjE3MzI1NDU5NjgsImV4cCI6MTczNjAwMTk2OH0.q0arkC5eHnQGDziZAafu0viaXEj33AexCmCwQ8XlAfA`, // Replace <your-token-here> with your valid JWT token
        },
      })
      .then((response) => {
        setPatients(response.data); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
        setError("Failed to fetch patient data. Please try again."); 
        setLoading(false); 
      });
  }, []);

  const handleDelete = (patientId, patientName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${patientName}?`);
    if (confirmDelete) {

      axios
        .delete(`http://localhost:8080/api/v1/patients/delete/patient/${patientId}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbjIiLCJpYXQiOjE3MzI1NDU5NjgsImV4cCI6MTczNjAwMTk2OH0.q0arkC5eHnQGDziZAafu0viaXEj33AexCmCwQ8XlAfA`, // Replace <your-token-here> with your valid JWT token
          },
        })
        .then(() => {
          alert(`${patientName} has been successfully deleted.`);
          
          setPatients(patients.filter((patient) => patient.patientId !== patientId));
        })
        .catch((err) => {
          console.error("Error deleting patient:", err);
          alert("Failed to delete the patient. Please try again.");
        });
    }
  };

  return (
    <div className="patients-container">
      <h2>All Patients List</h2>

      {loading ? (
        <p>Loading patients...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p> 
      ) : patients.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Disease</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient.patientId}>
                <td>{index + 1}</td>
                <td>{patient.patientId}</td>
                <td>{patient.patientName}</td>
                <td>{patient.patientEmail}</td>
                <td>{patient.patientDOB}</td>
                <td>{patient.patientGender}</td>
                <td>{patient.patientContact}</td>
                <td>{patient.patientAddress}</td>
                <td>{patient.patientDisease}</td>
                <td>
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDelete(patient.patientId, patient.patientName)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patients found.</p> 
      )}
    </div>
  );
};

export default PatientsList;
