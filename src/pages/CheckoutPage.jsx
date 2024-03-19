

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const CheckoutPage = () => {
  const [orderDetails, setOrderDetails] = useState(null); 
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    setOrderDetails(formData); 
    
    navigate('/order-confirmation');
  };

  return (
    <div>
      <Header />
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;