import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CompanyDashboard.css'; 
import AddPlans from '../InsurancePlans/AddPlans';
import ViewClaimHistory from '../InsuranceClaims/ViewClaimHistory';
import UpdateClaims from '../InsuranceClaims/UpdateClaims';
import UpdateCompany from '../InsuranceCompany/UpdateCompany';

function CompanyDashboard() {
  const [currentTab, setCurrentTab] = useState('dashboard'); 

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="company-dashboard">
      <div className="sidebar" role="navigation">
        <div className="logo">
          <img src="/assets/logo1.png" alt="CareAssist Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li onClick={() => handleTabChange('dashboard')}>
              <i className="fas fa-home"></i> <span>Dashboard</span>
            </li>
            <li onClick={() => handleTabChange('addPlans')}>
              <i className="fas fa-list"></i> <span>Add New Insurance Plan</span>
            </li>
            <li onClick={() => handleTabChange('viewClaims')}>
              <i className="fas fa-search"></i> <span>View Claims</span>
            </li>
            <li onClick={() => handleTabChange('updateClaim')}>
              <i className="fas fa-edit"></i> <span>Update Claim</span>
            </li>
            <li onClick={() => handleTabChange('updateCompany')}>
              <i className="fas fa-building"></i> <span>Update Company</span>
            </li>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <li className="logout-item">
              <Link to="/">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content-area">
        {currentTab === 'dashboard' && (
          <div className="dashboard-welcome">
            <h1>Welcome to the Company Dashboard !</h1>
            <br></br>
            <img 
              src="/assets/tenor.gif" 
              alt="Welcome to Company Dashboard" 
              className="welcome-image" 
            />
          </div>
        )}
        {currentTab === 'addPlans' && <AddPlans />}
        {currentTab === 'viewClaims' && <ViewClaimHistory />}
        {currentTab === 'updateClaim' && <UpdateClaims />}
        {currentTab === 'updateCompany' && <UpdateCompany />}
      </div>
    </div>
  );
}

export default CompanyDashboard;
