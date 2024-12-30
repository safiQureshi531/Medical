import React, { useState } from "react";
import "./UpdateProvider.css";

const mockProviders = [
  { providerId: "100", providerName: "Dr. Priya Iyer", providerEmail: "priya.iyer@example.com", providerGender: "Female", providerSpeciality: "Physician", providerDesignation: "Consultant", providerExperience: "12", providerQualification: "MD" },
  { providerId: "101", providerName: "Dr. Aarav Sharma", providerEmail: "aarav.sharma@example.com", providerGender: "Male", providerSpeciality: "Cardiologist", providerDesignation: "Consultant", providerExperience: "10", providerQualification: "MD (Cardiology)" },
  { providerId: "102", providerName: "Dr. Santosh Jain", providerEmail: "santosh.jain@example.com", providerGender: "Male", providerSpeciality: "Dermatology", providerDesignation: "Senior Consultant", providerExperience: "16", providerQualification: "MD (Dermatology)" },
];

const UpdateProvider = () => {
  

  const [searchId, setSearchId] = useState(""); 
  const [formData, setFormData] = useState({
    providerName: "",
    providerEmail: "",
    providerGender: "",
    providerSpeciality: "",
    providerDesignation: "",
    providerExperience: "",
    providerQualification: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [found, setFound] = useState(false); 

  const handleSearch = () => {
    setLoading(true);
    setError(null);

    const provider = mockProviders.find((p) => p.providerId === searchId);
    if (provider) {
      setFormData({
        providerName: provider.providerName,
        providerEmail: provider.providerEmail,
        providerGender: provider.providerGender,
        providerSpeciality: provider.providerSpeciality,
        providerDesignation: provider.providerDesignation,
        providerExperience: provider.providerExperience,
        providerQualification: provider.providerQualification,
      });
      setFound(true);
    } else {
      setError("Provider not found. Please check the Provider ID.");
      setFormData({
        providerName: "",
        providerEmail: "",
        providerGender: "",
        providerSpeciality: "",
        providerDesignation: "",
        providerExperience: "",
        providerQualification: "",
      });
      setFound(false);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProviders = mockProviders.map((provider) =>
      provider.providerId === searchId ? { ...provider, ...formData } : provider
    );
    console.log("Updated Providers:", updatedProviders);
    alert("Provider updated successfully!");

    setFormData({
      providerName: "",
      providerEmail: "",
      providerGender: "",
      providerSpeciality: "",
      providerDesignation: "",
      providerExperience: "",
      providerQualification: "",
    });
    setSearchId("");
    setFound(false);
  };
  

  return (
    <div className="update-provider-container">
      <h2>Search and Update Provider Details</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Provider ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : found ? (
        <form className="update-provider-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="providerName"
              value={formData.providerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="providerEmail"
              value={formData.providerEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="providerGender"
              value={formData.providerGender}
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
            <label>Speciality:</label>
            <input
              type="text"
              name="providerSpeciality"
              value={formData.providerSpeciality}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="providerDesignation"
              value={formData.providerDesignation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Experience:</label>
            <input
              type="number"
              name="providerExperience"
              value={formData.providerExperience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Qualification:</label>
            <input
              type="text"
              name="providerQualification"
              value={formData.providerQualification}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Update Provider
          </button>
        </form>
      ) : (
        <p>Enter a Provider ID to search and update their details.</p>
      )}
    </div>
  );
};

export default UpdateProvider;
