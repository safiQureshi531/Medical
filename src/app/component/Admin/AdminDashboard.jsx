import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; 
import GetAllCompanies from '../InsuranceCompany/GetAllCompanies';
import GetAllPatients from '../Patients/GetAllPatients';
import GetAllProviders from '../HealthcareProvider/GetAllProviders';
import GetAllPlans from '../InsurancePlans/GetAllPlans';
import AddAdmin from './AddAdmin';
import GetAllInvoices from '../InvoiceDetails/GetAllInvoices';
import ViewClaimHistory from '../InsuranceClaims/ViewClaimHistory';

function AdminDashboard() {
  const [currentTab, setCurrentTab] = useState('dashboard'); 
  const [selectedInvoice, setSelectedInvoice] = useState(null); 

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src="/assets/logo1.png" alt="CareAssist Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li onClick={() => handleTabChange('dashboard')}>
              <i className="fas fa-home"></i> <span>Dashboard</span>
            </li>
            <li onClick={() => handleTabChange('patients')}>
              <i className="fas fa-users"></i> <span>Patients</span>
            </li>
            <li onClick={() => handleTabChange('healthcareProviders')}>
              <i className="fas fa-user-md"></i> <span>Healthcare Providers</span>
            </li>
            <li onClick={() => handleTabChange('insuranceCompanies')}>
              <i className="fas fa-building"></i> <span>Insurance Companies</span>
            </li>
            <li onClick={() => handleTabChange('insurancePlans')}>
              <i className="fas fa-file-alt"></i> <span>Insurance Plans</span>
            </li>
            <li onClick={() => handleTabChange('invoiceDetails')}>
              <i className="fas fa-file-invoice-dollar"></i> <span>Invoice Details</span>
            </li>
            <li onClick={() => handleTabChange('claimHistory')}>
              <i className="fas fa-history"></i> <span>Claim History</span>
            </li>
            <li onClick={() => handleTabChange('addNewAdmin')}>
              <i className="fas fa-user-plus"></i> <span>Add New Admin</span>
            </li>
            <br></br>
            <li className="logout-item">
              <Link to="/">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        {currentTab === 'dashboard' && (
          <div className="dashboard-welcome">
            <h1>Welcome to Admin Dashboard !</h1>
            <img
              src="/assets/img 1.gif"
              alt="Welcome to Admin Dashboard"
              className="welcome-image"
            />
          </div>
        )}

        {currentTab === 'patients' && <GetAllPatients />}
        {currentTab === 'healthcareProviders' && <GetAllProviders />}
        {currentTab === 'insuranceCompanies' && <GetAllCompanies />}
        {currentTab === 'insurancePlans' && (
          <GetAllPlans actionType="admin" /> 
        )}
        {currentTab === 'invoiceDetails' && (
          <GetAllInvoices
            setCurrentTab={setCurrentTab}
            setSelectedInvoice={setSelectedInvoice}
            actionType="admin" 
          />
        )}
        {currentTab === 'invoiceDetailView' && selectedInvoice && (
          <div>
            <h2>Invoice Details</h2>
            <p><strong>ID:</strong> {selectedInvoice.id}</p>
            <p><strong>Amount:</strong> ₹{selectedInvoice.amount}</p>
            <p><strong>Due Date:</strong> {selectedInvoice.dueDate}</p>
            <p><strong>Status:</strong> {selectedInvoice.status}</p>
            <button onClick={() => handleTabChange('invoiceDetails')}>Back to Invoices</button>
          </div>
        )}
        {currentTab === 'claimHistory' && <ViewClaimHistory/>}
        {currentTab === 'addNewAdmin' && <AddAdmin />}
      </div>
    </div>
  );
}

export default AdminDashboard;
