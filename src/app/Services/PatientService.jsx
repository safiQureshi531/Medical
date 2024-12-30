import axios from './axiosConfig';

const insurancePlansData=[
    {
      "id": 1,
      "planName": "Basic Health Plan",
      "planType": "Individual",
      "planCoverAmount": 500000,
      "planEmi": 5000,
      "planDetails": "Covers basic medical treatments, including doctor visits, hospital stays, and surgeries.",
      "imageUrl": "/assets/pp.png"
    },
    {
      "id": 2,
      "planName": "Family Health Plan",
      "planType": "Family",
      "planCoverAmount": 1000000,
      "planEmi": 12000,
      "planDetails": "Covers medical treatments for a family of 4. Includes maternity and pediatric care.",
      "imageUrl": "/assets/fhp.png"
    },
    {
      "id": 3,
      "planName": "Premium Health Plan",
      "planType": "Individual",
      "planCoverAmount": 2000000,
      "planEmi": 15000,
      "planDetails": "Premium plan with extended coverage for critical illnesses, surgeries, and emergency care.",
      "imageUrl": "/assets/premiumheathplan.png"
    },
    {
      "id": 4,
      "planName": "Senior Citizens Plan",
      "planType": "Individual",
      "planCoverAmount": 800000,
      "planEmi": 4000,
      "planDetails": "Specially designed for senior citizens, covers age-related health issues and medical expenses.",
      "imageUrl": "/assets/bsp.png"
    },
    {
      "id": 5,
      "planName": "Maternity Health Plan",
      "planType": "Individual",
      "planCoverAmount": 1500000,
      "planEmi": 10000,
      "planDetails": "Maternity and newborn care, covering prenatal, delivery, and postnatal expenses.",
      "imageUrl": "/assets/h.png"
    },
    {
      "id": 6,
      "planName": "Critical Illness Plan",
      "planType": "Individual",
      "planCoverAmount": 5000000,
      "planEmi": 20000,
      "planDetails": "Covers critical illnesses like cancer, heart attacks, and stroke. Offers a lump sum payout on diagnosis.",
      "imageUrl": "/assets/cc.png"
    }
  ];


const invoiceData=[
    {
      "id": "INV001",
      "amount": 2500,
      "dueDate": "2024-12-15",
      "status": "Pending",
    },
    {
      "id": "INV002",
      "amount": 4500,
      "dueDate": "2024-12-10",
      "status": "Paid",

    },
    {
      "id": "INV003",
      "amount": 3200,
      "dueDate": "2024-12-20",
      "status": "Pending",
      "action": "Submit Claim"
    },
    {
      "id": "INV004",
      "amount": 1500,
      "dueDate": "2024-12-08",
      "status": "Overdue",
      "action": "Submit Claim"
    },
    {
      "id": "INV005",
      "amount": 5000,
      "dueDate": "2024-12-18",
      "status": "Paid",
      "action": "View Receipt"
    },
    {
      "id": "INV006",
      "amount": 2800,
      "dueDate": "2024-12-12",
      "status": "Pending",
      "action": "Submit Claim"
    },
    {
      "id": "INV007",
      "amount": 3500,
      "dueDate": "2024-12-25",
      "status": "Pending",
      "action": "Submit Claim"
    },
    {
      "id": "INV008",
      "amount": 6200,
      "dueDate": "2024-12-05",
      "status": "Overdue",
      "action": "Submit Claim"
    },
    {
      "id": "INV009",
      "amount": 4800,
      "dueDate": "2024-12-28",
      "status": "Paid",
      "action": "View Receipt"
    },
    {
      "id": "INV010",
      "amount": 3000,
      "dueDate": "2024-12-31",
      "status": "Pending",
      "action": "Submit Claim"
    }
  ];
  
  

  const recentClaimsData = [
    {
      id: 1,
      claimNumber: "CLM001",
      status: "Approved",
      claimAmount: 250000,
      submittedDate: "2024-11-10",
      approvedDate: "2024-12-01",
      patientName: "Juberiya Zaheer",
      invoiceNumber: "INV001",
      claimDetails: "Claim for hospitalization due to surgery.",
      linkedInvoice: {
        id: "INV001",
        amount: 2500,
        dueDate: "2024-12-15",
        status: "Pending",
      },
    },
    {
      id: 2,
      claimNumber: "CLM002",
      status: "Rejected",
      claimAmount: 50000,
      submittedDate: "2024-11-15",
      approvedDate: "2024-11-20",
      patientName: "Ananya Patel",
      invoiceNumber: "INV002",
      claimDetails: "Claim for outpatient treatment not covered under plan.",
      linkedInvoice: {
        id: "INV002",
        amount: 4500,
        dueDate: "2024-12-10",
        status: "Paid",
      },
    },
    {
      id: 3,
      claimNumber: "CLM003",
      status: "Pending",
      claimAmount: 120000,
      submittedDate: "2024-11-22",
      patientName: "Satyam Gurjar",
      invoiceNumber: "INV003",
      claimDetails: "Claim for surgical procedure under the premium health plan.",
      linkedInvoice: {
        id: "INV003",
        amount: 3200,
        dueDate: "2024-12-20",
        status: "Pending",
        action: "Submit Claim",
      },
    },
  ];
  
  

export const fetchInsurancePlans = async () => {
//   const response = await axios.get('admin/getallinsuranceplans');
    // return response.data;
  return insurancePlansData;
};

export const fetchInvoices = async () => {
//   const response = await axios.get('patients/get/invoices');
//   return response.data;
    return invoiceData;
};

// Update the status of an invoice
export const updateInvoiceStatus = async (invoiceId, status) => {
    const response = await axios.put(`patients/update/invoice/${invoiceId}`, { status });
    return response.data;
  };

// export const submitClaim = async (invoiceId) => {
//   const response = await axios.post(`insuranceclaims/add/newclaim/${invoiceId}`);
//   return response.data;
// };

export const fetchRecentClaims = async () => {
    // try {
    //   const response = await axios.get('insuranceclaims/recent'); // Adjust API endpoint as per your backend
    //   return response.data;
    // } catch (error) {
    //   console.error('Error fetching recent claims:', error);
    //   throw error;
    // }
    return recentClaimsData;
  };

// src/Services/PatientService.js

export const submitClaim = async (data) => {
  const response = await axios.post('/claims/submit', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

// Fetch patient profile
export const fetchProfile = async () => {
    const response = await axios.get('patients/get/profile');
    return response.data;
  };
  
  // Update patient profile
  export const updateProfile = async (profileData) => {
    const response = await axios.put('patients/update/profile', profileData);
    return response.data;
  };
  


  
  



