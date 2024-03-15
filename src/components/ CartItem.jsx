import React from 'react';
//import cartImage from './path/to/cartImage'; // adjust the path accordingly

const CartItem = ({ item }) => {
  const { name, quantity, price } = item;

  return (
    <div className="cart-item">
      <img src={cartImage} alt="Cart" />
      <div>
        <span>{name}</span>
        <span>Quantity: {quantity}</span>
        <span>Price: ${price}</span>
      </div>
      <button>Remove</button>
    </div>
  );
}

export default CartItem;