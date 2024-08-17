// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">Restaurant App</h1>
    <div className="navbar-links">
      <a href="/" className="navbar-link">Home</a>
      <a href="/menu" className="navbar-link">Menu</a>
      <a href="/reservation" className="navbar-link">Reservation</a>
    </div>
  </nav>
);

export default Navbar;
