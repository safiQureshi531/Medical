import React, { useState } from "react";
import "./AddPlans.css"; 

const AddPlan = ({ onSubmitPlan }) => {
  const [planDetails, setPlanDetails] = useState({
    planName: "",
    planType: "",
    coverage: "",
    premium: "",
    duration: "",
    description: "",
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!planDetails.planName || !planDetails.planType || !planDetails.coverage || !planDetails.premium || !planDetails.duration) {
      setMessage("Please fill in all required fields.");
      return;
    }
    if (onSubmitPlan) {
      onSubmitPlan(planDetails);
    }

    setPlanDetails({
      planName: "",
      planType: "",
      coverage: "",
      premium: "",
      duration: "",
      description: "",
    });
    setMessage("Plan added successfully!");
  };

  return (
    <div className="add-plan-container">
      <h2 className="add-plan-title">Add New Insurance Plan</h2>

      {message && <p className="add-plan-message">{message}</p>}

      <form className="add-plan-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="planName">Plan Name</label>
          <input
            type="text"
            id="planName"
            name="planName"
            value={planDetails.planName}
            onChange={handleChange}
            placeholder="Enter plan name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="planName">Plan Type</label>
          <input
            type="text"
            id="planType"
            name="planType"
            value={planDetails.planType}
            onChange={handleChange}
            placeholder="Enter plan type"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverage">Coverage</label>
          <input
            type="text"
            id="coverage"
            name="coverage"
            value={planDetails.coverage}
            onChange={handleChange}
            placeholder="Enter coverage details"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="premium">Premium (in Rs.)</label>
          <input
            type="number"
            id="premium"
            name="premium"
            value={planDetails.premium}
            onChange={handleChange}
            placeholder="Enter premium amount"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration (in months)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={planDetails.duration}
            onChange={handleChange}
            placeholder="Enter duration"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={planDetails.description}
            onChange={handleChange}
            placeholder="Enter plan description"
          ></textarea>
        </div>

        <button type="submit" className="add-plan-button">
          Add Plan
        </button>
      </form>
    </div>
  );
};

export default AddPlan;
