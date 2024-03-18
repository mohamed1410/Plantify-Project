


// import React, { useState } from 'react';
// //import PropTypes from 'prop-types'; // Import PropTypes for type-checking

// const CheckoutForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement any necessary validation logic before submission
//     // For example, validate email format, address details, etc.
//     onSubmit(formData);
//     // Consider providing feedback to the user upon form submission
//   };

//   return (
//     <form className="checkout-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input 
//           type="text" 
//           id="name" 
//           name="name" 
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name" 
//           required 
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input 
//           type="email" 
//           id="email" 
//           name="email" 
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email" 
//           required 
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="address">Address:</label>
//         <textarea 
//           id="address" 
//           name="address" 
//           value={formData.address}
//           onChange={handleChange}
//           placeholder="Enter your address" 
//           required 
//         />
//       </div>
//       <button type="submit">Place Order</button>
//     </form>
//   );
// }

// // Prop types for type checking
// CheckoutForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

// export default CheckoutForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

const CheckoutPage = ({ productsInCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    // Add more fields as necessary
  });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically handle form validation and submission
    // For now, we'll just navigate to an order confirmation page
    console.log('Form data submitted:', formData);

    navigate('/order-confirmation'); // Navigate to OrderConfirmation page after form submission
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
        {/* Add additional fields as needed */}
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;