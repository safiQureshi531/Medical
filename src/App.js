import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Homepage from './app/component/Homepage/Homepage';
import About from './app/component/Homepage/About';
import Services from './app/component/Homepage/Services';
import Contact from './app/component/Homepage/ContactUs'; 
import LoginAdmin from "./app/component/Admin/LoginAdmin";
import LoginProvider from "./app/component/HealthcareProvider/LoginProvider";
import LoginCompany from "./app/component/InsuranceCompany/LoginCompany";
import LoginPatients from './app/component/Patients/LoginPatients';
import RegisterPatient from './app/component/Patients/RegisterPatient';
import AdminDashboard from './app/component/Admin/AdminDashboard';
import ProviderDashboard from './app/component/HealthcareProvider/ProviderDashboard';
import CompanyDashboard from './app/component/InsuranceCompany/CompanyDashboard';
import GetAllPatients from './app/component/Patients/GetAllPatients';
import UpdatePatients from './app/component/Patients/UpdatePatient';
import PatientDashboard from './app/component/Patients/PatientDashboard';
import SubmitClaim from './app/component/InsuranceClaims/SubmitClaim';
import RegisterProvider from './app/component/HealthcareProvider/RegisterProvider';
import RegisterCompany from './app/component/InsuranceCompany/RegisterCompany';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login/admin" element={<LoginAdmin />} /> 
        <Route path="/login/provider" element={<LoginProvider />} /> 
        <Route path="/login/company" element={<LoginCompany />} /> 
        <Route path="/login/patient" element={<LoginPatients />} /> 
        <Route path="/registerpatient" element={<RegisterPatient />} />
        <Route path="/registerprovider" element={<RegisterProvider />} />
        <Route path="/registercompany" element={<RegisterCompany />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<GetAllPatients />} />
        <Route path="/edit-patient/:id" element={<UpdatePatients />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/submit-claim" element={<SubmitClaim />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact Us />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
