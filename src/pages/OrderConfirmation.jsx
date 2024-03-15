import React from 'react';
import Header from '../components/Header'; // Assuming you have a Header component

const OrderConfirmation = () => {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <h2>Order Confirmation</h2> {/* Heading indicating the order confirmation */}
      <p>Your order has been successfully placed.</p> {/* Confirmation message */}
      <button onClick={() => window.location.href = '/'}>Continue Shopping</button> {/* Button to go back to the home page */}
    </div>
  );
}

export default OrderConfirmation;