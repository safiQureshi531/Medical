import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './GenerateInvoices.css';

function GenerateInvoice({ patient, closeModal }) {
  const [invoiceId, setInvoiceId] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [consultationFees, setConsultationFees] = useState('');
  const [testFees, setTestFees] = useState('');
  const [scanFees, setScanFees] = useState('');
  const [tax, setTax] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleGenerateInvoice = () => {
  const doc = new jsPDF();

  const logoUrl = "/assets/logo1.png";
  doc.addImage(logoUrl, 'PNG', 14, 10, 50, 20); 

    doc.text("INVOICE DETAILS - ", 14, 40);
    <br></br>
    doc.text(`Invoice Id: ${invoiceId}`, 12, 50);
    doc.text(`Invoice Date: ${invoiceDate}`, 12, 60);
    doc.text(`Invoice Due Date: ${dueDate}`, 12, 70);
    doc.text(`Patient Id: ${patient.id}`, 12, 80);
    doc.text(`Patient Name: ${patient.name}`, 12, 90);
    doc.text(`Patient Address: ${patient.address}`, 12, 100);
    doc.text(`Invoice Tax: ${tax}`, 12, 120);
    doc.text(`Consultation Fees: ${consultationFees}`, 12, 130);
    doc.text(`Diagnostic Test Fees: ${testFees}`, 12, 140);
    doc.text(`Diagnostic Scan Fees: ${scanFees}`, 12, 150);

    doc.text(`Calculated Amount: ${calculatedAmount}`, 12, 160);
    doc.text(`Total Bill Amount: ${totalAmount}`, 12, 170);

    doc.save(`Invoice_${invoiceId}.pdf`);
    closeModal();  
  };

  return (
    <div className="invoice-modal">
      <h2>Generate Invoice for {patient.name}</h2>
      <form>
        <div className="form-grid">
         
          <div className="half-width">
            <label>Invoice ID: </label>
            <input 
              type="text" 
              value={invoiceId} 
              onChange={(e) => setInvoiceId(e.target.value)} 
              placeholder="Enter Invoice ID"
            />
            <label>Invoice Date: </label>
            <input 
              type="date" 
              value={invoiceDate} 
              onChange={(e) => setInvoiceDate(e.target.value)} 
            />
            <label>Invoice Due Date: </label>
            <input 
              type="date" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
            />
            <label>Invoice Tax: </label>
            <input 
              type="number" 
              value={tax} 
              onChange={(e) => setTax(e.target.value)} 
              placeholder="Enter Invoice Tax"
            />
            <label>Calculated Amount: </label>
            <input 
              type="number" 
              value={calculatedAmount} 
              onChange={(e) => setCalculatedAmount(e.target.value)} 
              placeholder="Enter Calculated Amount"
            />
          </div>

          <div className="half-width">
            <label>Consultation Fees: </label>
            <input 
              type="number" 
              value={consultationFees} 
              onChange={(e) => setConsultationFees(e.target.value)} 
              placeholder="Enter Consultation Fees"
            />
            <label>Diagnostic Test Fees: </label>
            <input 
              type="number" 
              value={testFees} 
              onChange={(e) => setTestFees(e.target.value)} 
              placeholder="Enter Diagnostic Test Fees"
            />
            <label>Diagnostic Scan Fees: </label>
            <input 
              type="number" 
              value={scanFees} 
              onChange={(e) => setScanFees(e.target.value)} 
              placeholder="Enter Diagnostic Scan Fees"
            />
            <label>Total Bill Amount: </label>
            <input 
              type="number" 
              value={totalAmount} 
              onChange={(e) => setTotalAmount(e.target.value)} 
              placeholder="Enter Total Bill Amount"
            />
          </div>
          </div>

        <button type="button" onClick={handleGenerateInvoice}>
          Generate Invoice
        </button>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </form>
    </div>
  );
}

export default GenerateInvoice;
