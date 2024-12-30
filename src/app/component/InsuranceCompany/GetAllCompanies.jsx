import React from 'react';
import './GetAllCompanies.css'; 

const GetAllCompanies = () => {
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

  return (
    <div className="insurance-companies-container">
      <h1>Available Insurance Companies</h1>
      <div className="companies-grid">
        {insuranceCompanies.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.image} alt={`${company.name}`} className="company-image" />
            <h2>{company.name}</h2>
            <p><strong>Email:</strong> {company.email}</p>
            <p><strong>Contact:</strong> {company.contact}</p>
            <p><strong>Established:</strong> {company.startYear}</p>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllCompanies;
