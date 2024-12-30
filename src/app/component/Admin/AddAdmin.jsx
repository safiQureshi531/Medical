import React, { useState } from 'react';
import './AddAdmin.css'; 

function AddAdmin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Details:', formData);
    alert('New Admin Added Successfully!');
  };

  return (
    <div className="add-admin-container">
      <div className="add-admin-panel">
        <form className="add-admin-form" onSubmit={handleSubmit}>
          <h1>Add New Admin</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter admin name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter admin email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Add Admin</button>
        </form>
        <div className="add-admin-image-container">
          <img
            src="/assets/admin.gif" 
            alt="Add New Admin"
            className="add-admin-image"
          />
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
