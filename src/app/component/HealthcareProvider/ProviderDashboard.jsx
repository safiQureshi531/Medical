import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProviderDashboard.css'; 
import SeePatientDetails from '../Patients/SeePatientDetails';
import GenerateInvoice from '../InvoiceDetails/GenerateInvoices';
import UpdateProvider from './UpdateProvider';

function ProviderDashboard() {
  const [currentTab, setCurrentTab] = useState('dashboard'); 
  const [showInvoiceModal, setShowInvoiceModal] = useState(false); 
  const [selectedPatient, setSelectedPatient] = useState(null); 

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleGenerateInvoice = (patient) => {
    setSelectedPatient(patient);
    setShowInvoiceModal(true);
  };

  const handleCloseModal = () => {
    setShowInvoiceModal(false);
    setSelectedPatient(null);
  };

  return (
    <div className="provider-dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src="/assets/logo1.png" alt="CareAssist Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li onClick={() => handleTabChange('dashboard')}>
              <i className="fas fa-home"></i> <span>Dashboard</span>
            </li>
            <li onClick={() => handleTabChange('getPatients')}>
              <i className="fas fa-list"></i> <span>Get All Patients</span>
            </li>
            <li onClick={() => handleTabChange('seePatientDetails')}>
              <i className="fas fa-search"></i> <span>See Patient Details</span>
            </li>
            <li onClick={() => handleTabChange('updateData')}>
              <i className="fas fa-sync-alt"></i> <span>Update Data</span>
            </li>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <li className="logout-item">
              <Link to="/">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <br />
        {currentTab === 'dashboard' && (
          <div className="dashboard-welcome">
            <h1>Welcome to Provider Dashboard</h1>
            <br />
            <img 
              src="/assets/Roche_Micrographics_01.gif"
              alt="Welcome to Admin Dashboard" 
              className="welcome-image" 
            />
          </div>
        )}

        {currentTab === 'getPatients' && (
          <div>
            <h2>All Patients List</h2>
            <table className="getPatients-table">
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
                <tr>
                  <td>1</td>
                  <td>4</td>
                  <td>Juberiya Zaheer</td>
                  <td>juberiya.zaheer@gmail.com</td>
                  <td>2002-09-10</td>
                  <td>Female</td>
                  <td>9876543210</td>
                  <td>Bangalore, Karnataka, India</td>
                  <td>Asthma</td>
                  <td>
                    <button
                      className="generate-btn"
                      onClick={() => handleGenerateInvoice({
                        id: 4, 
                        name: 'Juberiya Zaheer', 
                        email: 'juberiya.zaheer@gmail.com', 
                        dob: '2002-09-10', 
                        gender: 'Female', 
                        phone: '9876543210', 
                        address: 'Bangalore, Karnataka, India', 
                        disease: 'Asthma'
                      })}
                    >
                      Generate Invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>5</td>
                  <td>Ananya Patel</td>
                  <td>ananya.patel@example.com</td>
                  <td>1997-12-30</td>
                  <td>Female</td>
                  <td>9765432100</td>
                  <td>456, Surat, Gujarat, India</td>
                  <td>Anemia</td>
                  <td>
                    <button
                      className="generate-btn"
                      onClick={() => handleGenerateInvoice({
                        id: 4, 
                        name: 'Ananya Patel', 
                        email: 'ananya.patel@example.com', 
                        dob: '1997-12-30', 
                        gender: 'Female', 
                        phone: '9765432100', 
                        address: '456, Surat, Gujarat, India', 
                        disease: 'Anemia'
                      })}
                    >
                      Generate Invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>9</td>
                  <td>Satyam Gurjar</td>
                  <td>satyam.gurjar@example.com</td>
                  <td>2000-01-12</td>
                  <td>Male</td>
                  <td>9854321076</td>
                  <td>52, Patel Nagar, Bhopal, India</td>
                  <td>Diabetes</td>
                  <td>
                    <button
                      className="generate-btn"
                      onClick={() => handleGenerateInvoice({
                        id: 3, 
                        name: 'Satyam Gurjar', 
                        email: 'satyam.gurjar@gmail.com', 
                        dob: '2000-01-12', 
                        gender: 'Male', 
                        phone: '	9854321076', 
                        address: '52, Patel Nagar, Bhopal, India', 
                        disease: 'Diabetes'
                      })}
                    >
                      Generate Invoice
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {currentTab === 'seePatientDetails' && <SeePatientDetails />}

        {currentTab === 'updateData' && <UpdateProvider/>}
      </div>

      {showInvoiceModal && selectedPatient && (
        <GenerateInvoice patient={selectedPatient} closeModal={handleCloseModal} />
      )}
    </div>
  );
}

export default ProviderDashboard;
