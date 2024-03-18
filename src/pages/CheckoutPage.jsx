// // import React from 'react';
// // import Header from '../components/Header'; // Assuming you have a Header component
// // import CheckoutForm from '../components/CheckoutForm'; // Assuming you have a CheckoutForm component

// // const CheckoutPage = () => {
// //   return (
// //     <div>
// //       <Header /> {/* Render the Header component */}
// //       <h2>Checkout</h2> {/* Heading indicating the checkout step */}
// //       <CheckoutForm /> {/* Render the CheckoutForm component */}
// //       <button onClick={() => window.history.back()}>Go Back</button> {/* Button to go back to the previous page */}
// //       {/* Or a link to go back to the previous page */}
// //     </div>
// //   );
// // }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const CheckoutPage = () => {
  const [orderDetails, setOrderDetails] = useState(null); // Define state for order details
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data and then set order details
    setOrderDetails(formData); // Update state with form data
    // Navigate to order confirmation page
    navigate('/order-confirmation');
  };

  return (
    <div>
      <Header />
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;