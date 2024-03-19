

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const CheckoutPage = ({ productsInCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',

  });
  const navigate = useNavigate(); // Hook 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
   
    console.log('Form data submitted:', formData);

    navigate('/order-confirmation'); 
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;