import React, { useEffect, useState } from 'react';
import { fetchRecentClaims } from '../../Services/PatientService';
import './ViewClaimHistory.css'; 

const ViewClaimHistory = () => {
  const [claimHistory, setClaimHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getClaimHistory = async () => {
      try {
        setLoading(true);
        const claims = await fetchRecentClaims(); 
        setClaimHistory(claims);
      } catch (err) {
        console.error('Error fetching claim history:', err);
        setError('Unable to fetch claim history. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getClaimHistory();
  }, []);

  return (
    <div className="claim-history-container">
      <h1 className="claim-history-title">Insurance Claim History</h1>

      {loading && <p className="loading-message">Loading claim history...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && claimHistory.length > 0 ? (
        <table className="claim-history-table">
          <thead>
            <tr>
              <th>Claim Id</th>
              <th>Patient Name</th>
              <th>Invoice Id</th>
              <th>Submitted Date</th>
              <th>Claim Amount</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {claimHistory.map((claim) => (
              <tr key={claim.id}>
                <td>{claim.claimNumber}</td>
                <td>{claim.patientName}</td>
                <td>{claim.invoiceNumber}</td>
                <td>{claim.submittedDate}</td>
                <td>{claim.claimAmount}</td>
                <td>
                  <span
                    className={`status-badge ${
                      claim.status.toLowerCase() === 'approved'
                        ? 'approved'
                        : claim.status.toLowerCase() === 'rejected'
                        ? 'rejected'
                        : 'pending'
                    }`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td>{claim.claimDetails}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && !error && <p className="no-data-message">No claim history available.</p>
      )}
    </div>
  );
};

export default ViewClaimHistory;
