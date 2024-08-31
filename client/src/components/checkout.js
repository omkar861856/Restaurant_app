import React, { useState } from 'react';

const Checkout = ({ cartItems, total }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate order placement with an API call (replace with your actual API logic)
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, address, items: cartItems }),
      });

      if (!response.ok) {
        throw new Error('Order submission failed');
      }

      // Handle successful order placement
      console.log('Order submitted successfully!');
      setName('');
      setEmail('');
      setAddress('');
      setIsSubmitting(false); // Reset submitting state

    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitError(error.message); // Display error message to user
    } finally {
      setIsSubmitting(false); // Ensure submitting state is reset
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={address}
          onChange={handleInputChange}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Place Order'}
        </button>
        {submitError && <p className="error">{submitError}</p>}
      </form>
    </div>
  );
};

export default Checkout;