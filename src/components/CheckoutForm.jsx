import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function and pass the form data
    onSubmit(formData);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea 
          id="address" 
          name="address" 
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address" 
          required 
        />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;