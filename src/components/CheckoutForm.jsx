import React from 'react';

const CheckoutForm = () => {
  return (
    <form className="checkout-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" placeholder="Enter your address" required />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;