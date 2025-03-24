import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ticket from "./components/Ticket/Ticket";
import TicketCard from "./components/TicketCard/TicketCard";  
import TopSearchCard from "./components/TopSearch/TopSearchCard";
import SearchResult from "./components/SearchResult/SearchResult";
import PriceRangeSlider from "./components/PriceRange/PriceRangeSlider";
import Filter from "./components/Filter/Filter";

import "./App.css";  
import Detail from "./components/Ticket/Detail/Detail";


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Ticket />} /> 
            <Route path="/TicketCard" element={<TicketCard />} />
            <Route path="/TopSearch" element={<TopSearchCard />} />
            <Route path="/SearchResult" element={<SearchResult />} />
            <Route path="/PriceRange" element={<PriceRangeSlider />} />
            <Route path="/Filter" element={<Filter />} />
            <Route path="/Ticket/Detail" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
