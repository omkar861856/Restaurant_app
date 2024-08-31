import React from 'react';

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.06; // Adjust tax rate as needed
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        <li>Subtotal: ${subtotal.toFixed(2)}</li>
        <li>Tax ({taxRate * 100}%): ${tax.toFixed(2)}</li>
        <li className="total">Total: ${total.toFixed(2)}</li>
      </ul>
    </div>
  );
};

export default OrderSummary;