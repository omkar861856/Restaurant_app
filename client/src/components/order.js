import React, { useState } from 'react';

const Order = ({ item, removeFromCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="order-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="quantity-wrapper">
          <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default Order;