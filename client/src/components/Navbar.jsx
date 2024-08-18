// src/components/Navbar.js
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">Restaurant App</h1>
    <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/menu" className="navbar-link">Menu</Link>
      <Link to="/reservation" className="navbar-link">Reservation</Link>      
    </div>
  </nav>
);

export default Navbar;
