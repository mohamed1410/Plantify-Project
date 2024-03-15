import React from 'react';
import Header from '../components/Header'; // Assuming you have a Header component
import CheckoutForm from '../components/CheckoutForm'; // Assuming you have a CheckoutForm component

const CheckoutPage = () => {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <h2>Checkout</h2> {/* Heading indicating the checkout step */}
      <CheckoutForm /> {/* Render the CheckoutForm component */}
      <button onClick={() => window.history.back()}>Go Back</button> {/* Button to go back to the previous page */}
      {/* Or a link to go back to the previous page */}
    </div>
  );
}

export default CheckoutPage;