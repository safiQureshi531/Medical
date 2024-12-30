import React, { useState, useEffect } from "react";
import axios from "axios";
import './GetAllProviders.css';

const ProvidersList = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/provider/getall/provider", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbjIiLCJpYXQiOjE3MzI1NDU5NjgsImV4cCI6MTczNjAwMTk2OH0.q0arkC5eHnQGDziZAafu0viaXEj33AexCmCwQ8XlAfA`, // Replace <your-token-here> with your valid JWT token
        },
      })
      .then((response) => {
        const filteredProviders = response.data.map((provider) => ({
          providerId: provider.providerId,
          providerName: provider.providerName,
          providerEmail: provider.providerEmail,
          providerGender: provider.providerGender,
          providerSpeciality: provider.providerSpeciality,
          providerDesignation: provider.providerDesignation,
          providerExperience: provider.providerExperience,
          providerQualification: provider.providerQualification,
        }));
        setProviders(filteredProviders); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching providers:", err);
        setError("Failed to fetch provider data. Please try again."); 
        setLoading(false); 
      });
  }, []);

 
  const handleDelete = (providerId, providerName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${providerName}?`);
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8080/api/v1/provider/delete/provider/${providerId}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbjIiLCJpYXQiOjE3MzI1NDU5NjgsImV4cCI6MTczNjAwMTk2OH0.q0arkC5eHnQGDziZAafu0viaXEj33AexCmCwQ8XlAfA`, // Replace <your-token-here> with your valid JWT token
          },
        })
        .then(() => {
          alert(`${providerName} has been successfully deleted.`);
         
          setProviders(providers.filter((provider) => provider.providerId !== providerId));
        })
        .catch((err) => {
          console.error("Error deleting provider:", err);
          alert("Failed to delete the provider. Please try again.");
        });
    }
  };

  return (
    <div className="providers-container">
      <h2>All Providers List</h2>

      {loading ? (
        <p>Loading providers...</p> 
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p> 
      ) : providers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Speciality</th>
              <th>Designation</th>
              <th>Experience</th>
              <th>Qualification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider, index) => (
              <tr key={provider.providerId}>
                <td>{index + 1}</td>
                <td>{provider.providerId}</td>
                <td>{provider.providerName}</td>
                <td>{provider.providerEmail}</td>
                <td>{provider.providerGender}</td>
                <td>{provider.providerSpeciality}</td>
                <td>{provider.providerDesignation}</td>
                <td>{provider.providerExperience} years</td>
                <td>{provider.providerQualification}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(provider.providerId, provider.providerName)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No providers found.</p> 
      )}
    </div>
  );
};

export default ProvidersList;
