import React, { useState } from 'react';
import './UpdateClaims.css'; 

const recentClaimsData = [
  {
    id: 1,
    claimNumber: 'CLM001',
    status: 'Approved',
    claimAmount: 250000,
    submittedDate: '2024-11-10',
    approvedDate: '2024-12-01',
    patientName: 'Juberiya Zaheer',
    invoiceNumber: 'INV12345',
    claimDetails: 'Claim for hospitalization due to surgery.'
  },
  {
    id: 2,
    claimNumber: 'CLM002',
    status: 'Rejected',
    claimAmount: 50000,
    submittedDate: '2024-11-15',
    approvedDate: '2024-11-20',
    patientName: 'Ananya Patel',
    invoiceNumber: 'INV12346',
    claimDetails: 'Claim for outpatient treatment not covered under plan.'
  },
  {
    id: 3,
    claimNumber: 'CLM003',
    status: 'Pending',
    claimAmount: 120000,
    submittedDate: '2024-11-22',
    patientName: 'Satyam Gurjar',
    invoiceNumber: 'INV12347',
    claimDetails: 'Claim for surgical procedure under the premium health plan.'
  }
];

const UpdateClaim = () => {
  const [claims, setClaims] = useState(recentClaimsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [formData, setFormData] = useState({
    claimAmount: '',
    status: '',
    claimDetails: ''
  });

  const handleSearch = () => {
    const foundClaim = claims.find((claim) => claim.claimNumber === searchQuery.trim());
    if (foundClaim) {
      setSelectedClaim(foundClaim);
      setFormData({
        claimAmount: foundClaim.claimAmount,
        status: foundClaim.status,
        claimDetails: foundClaim.claimDetails
      });
    } else {
      alert('Claim not found!');
      setSelectedClaim(null);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (selectedClaim) {
      const updatedClaims = claims.map((claim) =>
        claim.claimNumber === selectedClaim.claimNumber
          ? { ...claim, ...formData }
          : claim
      );
      setClaims(updatedClaims);
      alert('Claim updated successfully!');
    }
  };

  return (
    <div className="update-claim-container">
      <h2>Update Claim</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Claim ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>

      {selectedClaim ? (
        <form className="update-claim-form" onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Claim Amount:</label>
            <input
              type="number"
              name="claimAmount"
              value={formData.claimAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="claimDetails"
              value={formData.claimDetails}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="update-btn">Update Claim</button>
        </form>
      ) : (
        <p>Search for a claim to update its details.</p>
      )}
    </div>
  );
};

export default UpdateClaim;
