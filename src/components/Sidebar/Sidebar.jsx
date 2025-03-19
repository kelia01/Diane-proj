import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";  // External CSS for styling
import { FaBus, FaUser, FaMoneyBill, FaCog, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Toggle sidebar

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      {/* Sidebar Toggle Button */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Content */}
      <div className="sidebar-content">
        <h2 className="logo">SwiftRide</h2>
        <ul className="nav-list">
          <li><Link to="/"><FaBus /> Dashboard</Link></li>
          <li><Link to="/buses"><FaBus /> Buses</Link></li>
          <li><Link to="/users"><FaUser /> Users</Link></li>
          <li><Link to="/payments"><FaMoneyBill /> Payments</Link></li>
          <li><Link to="/settings"><FaCog /> Settings</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
