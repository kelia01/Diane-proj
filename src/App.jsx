import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ticket from "./components/Ticket/Ticket";
import "./App.css";  // Global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
  
            <Route path="/" element={<Ticket />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
