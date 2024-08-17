// src/components/Menu.js
import React from 'react';
import './Menu.css';

const Menu = ({ items }) => (
  <div className="menu">
    {items.map((item, index) => (
      <div key={index} className="menu-item">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
    ))}
  </div>
);

export default Menu;
