import React, { useState } from 'react';
import './PaymentManagement.css'; // Importing CSS for styling

const PaymentManagement = () => {
  // Mock data for payment history
  const [payments, setPayments] = useState([
    { id: 1, user: 'John Doe', amount: 20, date: '2023-10-01', status: 'Completed' },
    { id: 2, user: 'Jane Smith', amount: 15, date: '2023-10-02', status: 'Pending' },
    { id: 3, user: 'Alice Johnson', amount: 30, date: '2023-10-03', status: 'Completed' },
  ]);

  const [newPayment, setNewPayment] = useState({ user: '', amount: '', date: '', status: 'Pending' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayment({ ...newPayment, [name]: value });
  };

  const handleAddPayment = (e) => {
    e.preventDefault();
    if (newPayment.user && newPayment.amount && newPayment.date) {
      setPayments([...payments, { id: payments.length + 1, ...newPayment }]);
      setNewPayment({ user: '', amount: '', date: '', status: 'Pending' });
    }
  };

  return (
    <div className="payment-management-container">
      <h2>Payment Management</h2>
      <form onSubmit={handleAddPayment} className="add-payment-form">
        <input
          type="text"
          name="user"
          placeholder="User  Name"
          value={newPayment.user}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newPayment.amount}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newPayment.date}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Payment</button>
      </form>

      <table className="payment-management-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.user}</td>
              <td>${payment.amount}</td>
              <td>{payment.date}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;