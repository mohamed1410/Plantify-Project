 import React from 'react';
 import cartImage from '../assets/cart.png'; 

const CartItem = ({ item, onRemoveItem }) => {
  const { name, quantity, price } = item;

  const handleRemoveClick = () => {
    
    onRemoveItem(item);
  };

  return (
    <div className="cart-item">
      <img src={cartImage} alt="Cart" />
      <div>
        <span>{name}</span>
        <span>Quantity: {quantity}</span>
        <span>Price: ${price}</span>
      </div>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
}

export default CartItem;

