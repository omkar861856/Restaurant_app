// src/pages/MenuPage.js

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './MenuPage.css';
import demoData from '../demoData'; // Import demo data

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Use demo data instead of fetching from an API
    setMenuItems(demoData);
  }, []);

  return (
    <div>
      <main className="menu-page">
        <h2>Menu</h2>
        <Menu items={menuItems} />
      </main>
    </div>
  );
};

export default MenuPage;








/*const MenuPage = () => {
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
      <main className="menu-page">
        <h2>Menu</h2>
        <Menu items={menuItems} />
      </main>
    </div>
  );
};

export default MenuPage;*/
