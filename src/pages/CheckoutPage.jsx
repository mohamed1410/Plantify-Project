

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';

// const CheckoutPage = () => {
//   const [orderDetails, setOrderDetails] = useState(null); 
//   const [formData, setFormData] = useState({ name: '', address: '', email: '' });
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
   
//     setOrderDetails(formData); 
    
//     navigate('/order-confirmation');
//   };

//   return (
//     <div>
//       <Header />
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
        
//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });
  const navigate = useNavigate();

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
      <Header />
      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Input fields */}
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