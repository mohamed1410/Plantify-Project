

import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom'


const CartPage = ({productsInCart, setProductInCart}) => {
  const navigate = useNavigate();
  // Function to handle removing  item from the cart
  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = productsInCart.filter(item => item.id !== itemToRemove.id);
    setProductInCart(updatedCartItems);
  };

  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>
      {productsInCart && productsInCart.length > 0 ? (
        productsInCart.map((item) => (
          <CartItem key={item.id} item={item} onRemoveItem={handleRemoveItem} />
        ))
      ) : (
        <div>No items in the cart</div>
      )}
      <button onClick={() => window.history.back()}>Go Back</button>
      <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;