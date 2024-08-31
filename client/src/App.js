import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Order from './components/Order';
import OrderSummary from './components/orderSummary';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <div className="order-container">
        {cartItems.map((item) => (
          <Order key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;