import React, { useState } from 'react';
import BusTracking from './BusTracking/BusTracking.jsx';
import UserManagement from './UserManagement.jsx';
import PaymentManagement from './PaymentManagement.jsx';

function AdminDashboard({ handleLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-dashboard">
      <header>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      
      <nav>
        <ul>
          <li>
            <button 
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'users' ? 'active' : ''}
              onClick={() => setActiveTab('users')}
            >
              User Management
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'payments' ? 'active' : ''}
              onClick={() => setActiveTab('payments')}
            >
              Payment Management
            </button>
          </li>
          <li>
            <button 
              className={activeTab === 'tracking' ? 'active' : ''}
              onClick={() => setActiveTab('tracking')}
            >
              Bus Tracking
            </button>
          </li>
        </ul>
      </nav>
      
      <main>
        {activeTab === 'dashboard' && <div>Dashboard Overview</div>}
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'payments' && <PaymentManagement />}
        {activeTab === 'tracking' && <BusTracking />}
      </main>
    </div>
  );
}

export default AdminDashboard;