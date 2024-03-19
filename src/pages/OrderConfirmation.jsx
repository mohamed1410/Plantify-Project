 import React from 'react';
 import Header from '../components/Header'; 



import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <h2>Order Confirmation</h2>
      <p>Your order has been successfully placed.</p>
      <button onClick={() => navigate('/')}>Continue Shopping</button>
    </div>
  );
};
export default OrderConfirmation;