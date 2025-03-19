import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { FaBus, FaEdit, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import "./BusTracking.css";

const BusTracking = () => {
  const [buses, setBuses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editBus, setEditBus] = useState(null);
  const [formData, setFormData] = useState({ route: "", status: "Active" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchedBuses = [
      { id: 1, route: "Kigali - Musanze", status: "Active", lastUpdated: "12/22" },
      { id: 2, route: "Kigali - Huye", status: "Inactive", lastUpdated: "12/21" },
      { id: 3, route: "Kigali - Gisenyi", status: "Active", lastUpdated: "12/22" },
      { id: 4, route: "Kigali - Nyagatare", status: "Active", lastUpdated: "12/20" },
    ];
    setBuses(fetchedBuses);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editBus) {
      setBuses(
        buses.map((bus) => (bus.id === editBus.id ? { ...editBus, ...formData, lastUpdated: formatDate() } : bus))
      );
    } else {
      setBuses([...buses, { id: buses.length + 1, ...formData, lastUpdated: formatDate() }]);
    }
    resetModalState();
  };

  const formatDate = () => {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const deleteBus = (id) => {
    setBuses(buses.filter((bus) => bus.id !== id));
  };

  const openEditModal = (bus) => {
    setEditBus(bus);
    setFormData(bus);
    setShowModal(true);
  };

  const resetModalState = () => {
    setShowModal(false);
    setEditBus(null);
    setFormData({ route: "", status: "Active" });
  };

  const filteredBuses = buses.filter(bus => 
    bus.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bus.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateDashoffset = () => {
    const activeCount = buses.filter(bus => bus.status === "Active").length;
    const total = buses.length;
    const circumference = 2 * Math.PI * 40;
    return circumference * (1 - activeCount / total);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <main className="dashboard-main">
          <div className="card bus-management-card">
            <div className="card-header">
              <h1 className="page-title">Bus Management</h1>
              <div className="header-actions">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search buses..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="search-icon" />
                </div>
                <button
                  className="add-btn"
                  onClick={() => setShowModal(true)}
                >
                  <FaPlus /> Add Bus
                </button>
              </div>
            </div>

            <div className="table-container">
              <table className="buses-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Route</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBuses.map((bus) => (
                    <tr key={bus.id}>
                      <td>{bus.id}</td>
                      <td>{bus.route}</td>
                      <td>
                        <span className={`status-badge ${bus.status.toLowerCase()}`}>
                          {bus.status}
                        </span>
                      </td>
                      <td className="last-updated">{bus.lastUpdated}</td>
                      <td className="action-icons">
                        <button className="edit-btn" onClick={() => openEditModal(bus)}>
                          <FaEdit />
                        </button>
                        <button className="delete-btn" onClick={() => deleteBus(bus.id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dashboard-cards">
            <div className="card overview-card">
              <h2 className="card-title">Bus Status Overview</h2>
              <div className="chart-container">
                <div className="donut-chart">
                  <div className="donut-content">
                    <div className="donut-value">
                      {buses.filter(bus => bus.status === "Active").length}
                    </div>
                    <div className="donut-label">Active Buses</div>
                  </div>
                  <svg viewBox="0 0 100 100" className="donut-svg">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="donut-background"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="donut-segment"
                      style={{
                        strokeDasharray: `${2 * Math.PI * 40}`,
                        strokeDashoffset: calculateDashoffset()
                      }}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="card activity-card">
              <h2 className="card-title">Recent Activity</h2>
              <div className="activity-list">
                {buses.slice(0, 3).map((bus) => (
                  <div key={bus.id} className="activity-item">
                    <div className="activity-icon">
                      <FaBus />
                    </div>
                    <div className="activity-details">
                      <p className="activity-route">{bus.route}</p>
                      <p className="activity-date">Updated on {bus.lastUpdated}</p>
                    </div>
                    <div className="activity-status">
                      <span className={`status-badge ${bus.status.toLowerCase()}`}>
                        {bus.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">
              {editBus ? "Edit Bus" : "Add New Bus"}
            </h2>
            <form className="bus-form">
              <div className="form-group">
                <label>Route:</label>
                <input
                  type="text"
                  name="route"
                  value={formData.route}
                  onChange={handleChange}
                  placeholder="e.g. Kigali - Musanze"
                />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="modal-buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={resetModalState}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  {editBus ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusTracking;