import React, { useEffect, useState } from 'react';
import { fetchInvoices } from '../../Services/PatientService.jsx';
import './GetAllInvoices.css'; 

const GetAllInvoices = ({ setCurrentTab, setSelectedInvoice, actionType }) => {
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState('all'); 

  useEffect(() => {
    fetchInvoices()
      .then(setInvoices)
      .catch((err) => console.error('Error fetching invoices:', err));
  }, []);

  const handleMarkAsPaid = (invoiceId) => {
    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === invoiceId
          ? { ...invoice, status: 'Paid' } 
          : invoice
      )
    );
  };

  const handleDeleteInvoice = (invoiceId) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the invoice with ID ${invoiceId}? This action cannot be undone.`
    );

    if (isConfirmed) {
      console.log(`Deleting invoice with ID: ${invoiceId}`);
      setInvoices((prev) => prev.filter((invoice) => invoice.id !== invoiceId));
      alert(`Invoice with ID ${invoiceId} has been successfully deleted.`);
    }
  };

  const filteredInvoices = invoices.filter((invoice) => {
    if (filter === 'all') return true; 
    return filter === 'paid' ? invoice.status === 'Paid' : invoice.status !== 'Paid'; 
  });

  return (
    <div className="invoices-container">
      <h1 className="title">All Invoices</h1>

      <div className="filter-buttons">
        <button
          onClick={() => setFilter('all')}
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('paid')}
          className={`filter-button ${filter === 'paid' ? 'active' : ''}`}
        >
          Paid
        </button>
        <button
          onClick={() => setFilter('unpaid')}
          className={`filter-button ${filter === 'unpaid' ? 'active' : ''}`}
        >
          Unpaid
        </button>
      </div>

      <div className="table-container">
        <table className="invoices-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>₹{invoice.amount}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.status}</td>
                  <td>
                    {actionType === 'admin' && ( 
                      <button
                        onClick={() => handleDeleteInvoice(invoice.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    )}
                    {actionType === 'patient' && ( 
                      <>
                        {invoice.status !== 'Paid' && ( 
                          <button
                            onClick={() => handleMarkAsPaid(invoice.id)} 
                            className="mark-paid-button"
                          >
                            Mark as Paid
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-invoices">
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllInvoices;
