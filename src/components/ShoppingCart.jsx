
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation after order placement

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const addItemToCart = (newItem) => {
    const exists = cartItems.find(item => item.id === newItem.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handlePlaceOrder = () => {
    // Assuming order processing logic here...
    console.log('Order placed:', cartItems);

    setCartItems([]); // Clear the cart after order is placed

    navigate('/order-confirmation'); // Navigate to order confirmation page
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button onClick={handlePlaceOrder} disabled={cartItems.length === 0}>Place Order</button>
    </div>
  );
}

export default ShoppingCart;