import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { fetchInsurancePlans } from '../../Services/PatientService';
import './GetAllPlans.css';

const GetAllPlans = ({ actionType }) => {
  const [insurancePlans, setInsurancePlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInsurancePlans()
      .then((data) => setInsurancePlans(data))
      .catch((error) => console.error('Error fetching insurance plans:', error));
  }, []);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleClaimPlan = (plan) => {
    navigate('/submit-claim', { state: { plan } });
  };

  return (
    <div className="plans-container">
      <h1 className="plans-title">Available Insurance Plans</h1>

      <div className="plans-grid">
        {insurancePlans.length === 0 ? (
          <p>No insurance plans available at the moment.</p>
        ) : (
          insurancePlans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${selectedPlan?.id === plan.id ? 'selected' : 'hoverable'}`}
              onClick={() => handleSelectPlan(plan)}
            >
              <img
                src={plan.imageUrl}
                alt={plan.planName}
                className="plan-image"
              />
              <h2 className="plan-name">{plan.planName}</h2>
              <p className="plan-detail">Type: {plan.planType}</p>
              <p className="plan-detail">Cover Amount: ₹{plan.planCoverAmount}</p>
              <p className="plan-detail">EMI: ₹{plan.planEmi}</p>
              <p className="plan-detail">{plan.planDetails}</p>

              {actionType === 'patient' && ( 
                <button
                  className="claim-button"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleClaimPlan(plan);
                  }}
                >
                  Claim Plan
                </button>
              )}
            </div>
          ))
        )}
      </div>

      {selectedPlan && (
        <div className="selected-plan-details">
          <h2>Selected Plan Details</h2>
          <p><strong>Plan Name:</strong> {selectedPlan.planName}</p>
          <p><strong>Cover Amount:</strong> ₹{selectedPlan.planCoverAmount}</p>
          <p><strong>EMI:</strong> ₹{selectedPlan.planEmi}</p>
          <p><strong>Details:</strong> {selectedPlan.planDetails}</p>
        </div>
      )}
    </div>
  );
};

export default GetAllPlans;
