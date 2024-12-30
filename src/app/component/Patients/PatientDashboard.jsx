import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PatientDashboard.css'; 
import GetAllPlans from '../InsurancePlans/GetAllPlans';
import GetAllInvoices from '../InvoiceDetails/GetAllInvoices';
import UpdatePatient from './UpdatePatient';
import ViewClaimHistory from '../InsuranceClaims/ViewClaimHistory';

function PatientDashboard() {
  const [currentTab, setCurrentTab] = useState('dashboard'); 

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="patient-dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src="/assets/logo1.png" alt="CareAssist Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li onClick={() => handleTabChange('dashboard')}>
              <i className="fas fa-home"></i> <span>Dashboard</span>
            </li>
            <li onClick={() => handleTabChange('viewInsurancePlans')}>
              <i className="fas fa-file-alt"></i> <span>View Insurance Plans</span>
            </li>
            <li onClick={() => handleTabChange('viewInvoiceGenerated')}>
              <i className="fas fa-file-invoice-dollar"></i> <span>View Invoice Generated</span>
            </li>
            <li onClick={() => handleTabChange('viewClaimHistory')}>
              <i className="fas fa-history"></i> <span>View Claim History</span>
            </li>
            <li onClick={() => handleTabChange('updateDetails')}>
              <i className="fas fa-user-edit"></i> <span>Update Details</span>
            </li>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <li className="logout-item">
              <Link to="/">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content-item">
        {currentTab === 'dashboard' && (
          <div className="dashboard-welcome">
            <h1>Welcome to Patient Dashboard!</h1>
            <img
              src="/assets/340B_Video_patient.gif"
              alt="Welcome to Patient Dashboard"
              className="welcome-image"
            />
          </div>
        )}
        {currentTab === 'viewInsurancePlans' && <GetAllPlans actionType="patient" />}
        {currentTab === 'viewInvoiceGenerated' && (
          <GetAllInvoices actionType="patient" />
        )}
        {currentTab === 'viewClaimHistory' && <ViewClaimHistory/>}
        {currentTab === 'updateDetails' && <UpdatePatient/>}
      </div>
    </div>
  );
}

export default PatientDashboard;

