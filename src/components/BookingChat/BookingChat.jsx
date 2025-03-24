import React, { useState } from "react";

import "./BookingChat.css"; // External CSS file

const BookingChat = () => {
    const [formData, setFormData] = useState({
        source: "",
        destination: "",
        date: "",
        selectedBus: null,
        seat: "",
        paymentMethod: "online",
        bookingConfirmed: false,
    });

    const availableBuses = [
        { id: 1, name: "Express Bus", route: "City A - City B", arrivalTime: "10:00 AM", price: 500, availableSeats: 20 },
        { id: 2, name: "Luxury Coach", route: "City A - City C", arrivalTime: "12:00 PM", price: 800, availableSeats: 15 }
    ];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBusSelection = (bus) => {
        setFormData({ ...formData, selectedBus: bus });
    };

    const handleBooking = () => {
        if (!formData.selectedBus || !formData.seat) {
            alert("Please select a bus and seat number.");
            return;
        }
        setFormData({ 
            ...formData, 
            bookingConfirmed: true,
        });
    };

    return (
        <div className="booking-container">
            <h2>SwiftRide Bus Booking</h2>
            {!formData.bookingConfirmed ? (
                <>
                    <div className="search-section">
                        <input type="text" name="source" placeholder="From" onChange={handleInputChange} />
                        <input type="text" name="destination" placeholder="To" onChange={handleInputChange} />
                        <input type="date" name="date" onChange={handleInputChange} />
                    </div>
                    
                    <div className="bus-list">
                        {availableBuses.map((bus) => (
                            <div key={bus.id} className="bus-card" onClick={() => handleBusSelection(bus)}>
                                <h3>{bus.name}</h3>
                                <p>Route: {bus.route}</p>
                                <p>Arrival Time: {bus.arrivalTime}</p>
                                <p>Price: Rs. {bus.price}</p>
                                <p>Seats Available: {bus.availableSeats}</p>
                            </div>
                        ))}
                    </div>

                    {formData.selectedBus && (
                        <div className="booking-details">
                            <h3>Selected Bus: {formData.selectedBus.name}</h3>
                            <input type="text" name="seat" placeholder="Enter Seat Number" onChange={handleInputChange} />
                            <select name="paymentMethod" onChange={handleInputChange}>
                                <option value="online">Online Payment</option>
                                <option value="cash">Cash Payment</option>
                            </select>
                            <button onClick={handleBooking}>Confirm Booking</button>
                        </div>
                    )}
                </>
            ) : (
                <div className="confirmation">
                    <h3>Booking Confirmed!</h3>
                    <p>Bus: {formData.selectedBus.name}</p>
                    <p>Seat: {formData.seat}</p>
                    <p>Price: Rs. {formData.selectedBus.price}</p>
                </div>
            )}
        </div>
    );
};

export default BookingChat;
