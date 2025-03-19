import React from "react";
import "./Navbar.css";  
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Search Bar */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right Side Icons */}
      <div className="nav-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
