import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

 
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

 
  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

 
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
     
    </div>
  );
}

export default ShoppingCart;

