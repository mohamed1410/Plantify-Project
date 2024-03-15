import React from 'react';
import cartImage from '../assets/cart.png'; // adjust the path accordingly

const CartItem = ({ item, onRemoveItem }) => {
  const { name, quantity, price } = item;

  const handleRemoveClick = () => {
    // Call the onRemoveItem function and pass the item to be removed
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