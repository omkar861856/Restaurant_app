import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    tablePreference: 'Indoor',
    specialRequests: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show a confirmation modal (not implemented in this code snippet)
    // Make the API request
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <label htmlFor="time">Time:</label>
      <input
        id="time"
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <label htmlFor="guests">Number of Guests:</label>
      <input
        id="guests"
        type="number"
        name="guests"
        min="1"
        value={formData.guests}
        onChange={handleChange}
        required
      />
      <label htmlFor="tablePreference">Table Preference:</label>
      <select id="tablePreference" name="tablePreference" value={formData.tablePreference} onChange={handleChange}>
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
        <option value="Window">Window Seat</option>
      </select>
      <label htmlFor="specialRequests">Special Requests:</label>
      <textarea
        id="specialRequests"
        name="specialRequests"
        placeholder="Any special requests?"
        value={formData.specialRequests}
        onChange={handleChange}
      />
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
