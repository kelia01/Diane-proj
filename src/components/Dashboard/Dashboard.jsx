import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import { FaBus, FaUser, FaMoneyBill, FaTicketAlt } from "react-icons/fa";
import Chart from "../Chart/Chart";

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        
        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome back! Manage SwiftRide operations seamlessly.</p>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <FaBus className="stat-icon" />
            <div>
              <h3>10</h3>
              <p>Total Buses</p>
            </div>
          </div>

          <div className="stat-card">
            <FaUser className="stat-icon" />
            <div>
              <h3>500</h3>
              <p>Total Users</p>
            </div>
          </div>

          <div className="stat-card">
            <FaMoneyBill className="stat-icon" />
            <div>
              <h3>$2,000</h3>
              <p>Pending Payments</p>
            </div>
          </div>

          <div className="stat-card">
            <FaTicketAlt className="stat-icon" />
            <div>
              <h3>120</h3>
              <p>Tickets Sold</p>
            </div>
          </div>
        </div>

        {/* Chart & Data Table Section */}
        <div className="dashboard-content">
          <Chart />
          <div className="table-container">
            <h2>Recent Transactions</h2>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>$20</td>
                  <td className="status success">Completed</td>
                  <td>March 18, 2025</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>$15</td>
                  <td className="status pending">Pending</td>
                  <td>March 17, 2025</td>
                </tr>
                <tr>
                  <td>Robert Brown</td>
                  <td>$30</td>
                  <td className="status failed">Failed</td>
                  <td>March 16, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
