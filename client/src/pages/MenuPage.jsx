// src/pages/MenuPage.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './MenuPage.css';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('/api/menu');
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="menu-page">
        <h2>Menu</h2>
        <Menu items={menuItems} />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
