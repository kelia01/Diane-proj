import React from 'react';
import './BusTracking.css'; 

const BusTracking = () => {
  // Mock data for bus tracking
  const buses = [
    { id: 1, location: 'Downtown', availableSlots: 5, arrivalTime: '5 mins', status: 'On Time' },
    { id: 2, location: 'Uptown', availableSlots: 2, arrivalTime: '10 mins', status: 'Delayed' },
    { id: 3, location: 'Midtown', availableSlots: 0, arrivalTime: '3 mins', status: 'On Time' },
    { id: 4, location: 'Airport', availableSlots: 1, arrivalTime: '15 mins', status: 'On Time' },
  ];

  return (
    <div className="bus-tracking-container">
      <h2>Bus Tracking</h2>
      <table className="bus-tracking-table">
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Location</th>
            <th>Available Slots</th>
            <th>Estimated Arrival</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {buses.map(bus => (
            <tr key={bus.id} className={bus.availableSlots === 0 ? 'full' : ''}>
              <td>{bus.id}</td>
              <td>{bus.location}</td>
              <td>{bus.availableSlots}</td>
              <td>{bus.arrivalTime}</td>
              <td className={bus.status === 'On Time' ? 'on-time' : 'delayed'}>
                {bus.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusTracking;