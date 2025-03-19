import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Chart.css";

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Tickets Sold",
        data: [20, 40, 35, 50, 45, 60],
        borderColor: "#1e293b",
        backgroundColor: "rgba(30, 41, 59, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Ticket Sales</h2>
      <Line data={data} />
    </div>
  );
};

export default Chart;
