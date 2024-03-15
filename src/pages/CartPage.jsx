import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'; // Assuming you have a Header component
import Cart from '../components/ CartItem'; // Assuming you have a Cart component

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from API when the component mounts
    axios.get('/api/cart')
      .then(response => {
        // Set cart items in state
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <h2>Shopping Cart</h2>
      <Cart cartItems={cartItems} /> {/* Render the Cart component with cartItems passed as props */}
      <button onClick={() => window.history.back()}>Go Back</button> {/* Button to go back to the previous page */}
    </div>
  );
}

export default CartPage;