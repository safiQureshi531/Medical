import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { submitClaim } from '../../Services/PatientService';
import './SubmitClaim.css'; 

const SubmitClaim = () => {
  const location = useLocation();
  const prefilledData = location.state?.plan || {}; 

  const [formData, setFormData] = useState({
    invoiceId: '',
    patientName: '',
    dateOfBirth: '',
    address: '',
    insuranceInfo: prefilledData.planName || '',
    diagnosis: '',
    treatment: '',
    dateOfService: '',
    claimAmount: prefilledData.planCoverAmount || '',
  });

  const [file, setFile] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus('');

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (file) {
        data.append('medicalDocument', file);
      }

      const response = await submitClaim(data);
      setSubmissionStatus(`Claim submitted successfully! Reference ID: ${response.referenceId}`);
    } catch (error) {
      console.error('Error submitting claim:', error);
      setSubmissionStatus('Error submitting claim. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="claim-container">
      <div className="claim-form">
        <h1 className="form-title">Submit Claim</h1>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Invoice ID"
            id="invoiceId"
            name="invoiceId"
            type="text"
            value={formData.invoiceId}
            placeholder="Enter Invoice ID"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Patient Name"
            id="patientName"
            name="patientName"
            type="text"
            value={formData.patientName}
            placeholder="Enter Patient Name"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Date of Birth"
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Address"
            id="address"
            name="address"
            type="text"
            value={formData.address}
            placeholder="Enter Address"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Insurance Information"
            id="insuranceInfo"
            name="insuranceInfo"
            type="text"
            value={formData.insuranceInfo}
            placeholder="Enter Insurance Information"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Diagnosis"
            id="diagnosis"
            name="diagnosis"
            type="text"
            value={formData.diagnosis}
            placeholder="Enter Diagnosis"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Treatment"
            id="treatment"
            name="treatment"
            type="text"
            value={formData.treatment}
            placeholder="Enter Treatment"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Date of Service"
            id="dateOfService"
            name="dateOfService"
            type="date"
            value={formData.dateOfService}
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Claim Amount"
            id="claimAmount"
            name="claimAmount"
            type="number"
            value={formData.claimAmount}
            placeholder="Enter Claim Amount"
            onChange={handleInputChange}
            required
          />
          <div className="form-group">
            <label htmlFor="medicalDocument" className="form-label">
              Attach Medical Document
            </label>
            <input
              type="file"
              id="medicalDocument"
              onChange={handleFileChange}
              className="file-input"
            />
          </div>
          <button
            type="submit"
            className={`submit-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Claim'}
          </button>
        </form>
        {submissionStatus && (
          <div
            className={`status-message ${
              submissionStatus.includes('successfully') ? 'success' : 'error'
            }`}
          >
            {submissionStatus}
          </div>
        )}
      </div>
    </div>
  );
};

const FormField = ({ label, id, type, value, placeholder, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="form-input"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default SubmitClaim;
