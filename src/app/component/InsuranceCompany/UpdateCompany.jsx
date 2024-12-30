import React, { useState } from 'react';
import './UpdateCompany.css'; 

const insuranceCompanies = [
  {
    name: "HDFC Life Insurance",
    email: "contact@hdfcinsurance.com",
    contact: "+1 800 123 4567",
    startYear: 1995,
    description: "Providing comprehensive health insurance solutions for over 25 years.",
    image: "/assets/IC1.png",
  },
  {
    name: "HealthGuard Insurance",
    email: "support@healthguardinsurance.com",
    contact: "+1 800 765 4321",
    startYear: 2005,
    description: "Specializing in individual and family health plans.",
    image: "/assets/IC2.png",
  },
  {
    name: "CarePlus Insurance",
    email: "info@careplus.com",
    contact: "+1 800 987 6543",
    startYear: 2010,
    description: "Focused on providing affordable and reliable insurance policies.",
    image: "/assets/IC3.png",
  },
  {
    name: "LifeCare Assurance",
    email: "service@lifecare.com",
    contact: "+1 800 654 7890",
    startYear: 2000,
    description: "Dedicated to delivering exceptional health and life insurance services.",
    image: "/assets/IC4.png",
  },
  {
    name: "InjurySafe Insurance",
    email: "service@injurysafe.com",
    contact: "+1 800 234 6587",
    startYear: 2000,
    description: "Safeguard your loved ones against injuries and accidents.",
    image: "/assets/IC5.png",
  },
  {
    name: "ICICI Life Insurance",
    email: "service@icicilife.com",
    contact: "+1 800 987 6789",
    startYear: 2000,
    description: "Protect your life with premium policies at ICICI Life Insurance Private Ltd.",
    image: "/assets/IC6.png",
  },
];

const UpdateCompany = () => {
  const [companies, setCompanies] = useState(insuranceCompanies);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    startYear: '',
    description: ''
  });
  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    setFormData({
      name: company.name,
      email: company.email,
      contact: company.contact,
      startYear: company.startYear,
      description: company.description
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (selectedCompany) {
      const updatedCompanies = companies.map((company) =>
        company.name === selectedCompany.name
          ? { ...company, ...formData }
          : company
      );
      setCompanies(updatedCompanies);
      alert('Company updated successfully!');
      setSelectedCompany(null); 
    }
  };

  return (
    <div className="update-company-container">
      <h2>Update Insurance Company</h2>

      <div className="company-list">
        {companies.length > 0 ? (
          companies.map((company) => (
            <div
              key={company.name}
              className="company-item"
              onClick={() => handleSelectCompany(company)}
            >
              <img src={company.image} alt={company.name} />
              <div className="company-details">
                <h3>{company.name}</h3>
                <p>{company.description}</p>
                <p>Contact: {company.contact}</p>
                <p>Email: {company.email}</p>
                <p>Founded: {company.startYear}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No companies found.</p>
        )}
      </div>

      {selectedCompany && (
        <div className="update-form-container">
          <h3>Edit Company Details</h3>
          <form className="update-company-form" onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact:</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Start Year:</label>
              <input
                type="number"
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="update-btn">Update Company</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateCompany;
