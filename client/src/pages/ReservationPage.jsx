// src/pages/ReservationPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import ReservationForm from '../components/ReservationForm';
import Footer from '../components/Footer';
import './ReservationPage.css';

const ReservationPage = () => (
  <div>
    <Navbar />
    <main className="reservation-page">
      <h2>Reserve a Table</h2>
      <ReservationForm />
    </main>
    <Footer />
  </div>
);

export default ReservationPage;
