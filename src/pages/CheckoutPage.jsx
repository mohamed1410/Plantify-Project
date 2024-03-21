


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure Axios is imported
import Header from '../components/Header';
import { useCart } from '../components/CartContext'; // Ensure the correct path
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });
  const navigate = useNavigate();
  const { cartItems, clearCart, calculateTotalPrice } = useCart(); // Include cartItems in the destructuring

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the order object
    const order = {
      customer: formData,
      items: cartItems,
      total: calculateTotalPrice(),
    };

    try {
      // Send the order object to your backend server
      const response = await axios.post(`${API_URL}/orders`, order, {
        headers: {
          'Content-Type': 'application/json',
          // Include any other necessary headers, like authorization tokens
        },
      });

      console.log('Order submitted successfully:', response.data);

      clearCart(); // Clear the cart after the order is successfully processed
      navigate('/order-confirmation'); // Navigate to the order confirmation page
    } catch (error) {
      console.error('Order submission error:', error);
      // Implement error handling, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <Header />
      <h2>Checkout</h2>
      <p>Total Price: ${calculateTotalPrice()}</p> {/* Display the total price */}
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;