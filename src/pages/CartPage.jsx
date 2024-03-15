import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'; // Assuming you have a Header component
import CartItem from '../components/ CartItem'; // Assuming you have a Cart component

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch cart items
  const fetchCartItems = () => {
    axios.get('/api/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  };

  // Fetch cart items when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  // Function to handle removing an item from the cart
  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>
      {/* Check if cartItems is an array before mapping */}
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <CartItem key={index} item={item} onRemoveItem={handleRemoveItem} />
        ))
      ) : (
        <div>No items in the cart</div>
      )}
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default CartPage;