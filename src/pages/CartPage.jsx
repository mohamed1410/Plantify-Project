// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from '../components/Header'; // Assuming you have a Header component
// import CartItem from '../components/CartItem'; // Assuming you have a Cart component

// const CartPage = ({productsInCart, setProductInCart}) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to fetch cart items
//   const fetchCartItems = () => {
//     axios.get('/mockData/mockPlants.json')
//       .then(response => {
//         setCartItems(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching cart items:', error);
//       });
//   };

//   // Fetch cart items when the component mounts
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   // Function to handle removing an item from the cart
//   const handleRemoveItem = (itemToRemove) => {
//     const updatedCartItems = productsInCart.filter(item => item.id !== itemToRemove.id);
//     setProductInCart(updatedCartItems);
//   };

//   return (
//     <div>
//       <Header />
//       <h2>Shopping Cart</h2>
//       {/* Check if cartItems is an array before mapping */}
//       {productsInCart && productsInCart.length > 0 ? (
//         productsInCart.map((item, index) => (
//           <CartItem key={index} item={item} onRemoveItem={handleRemoveItem} />
//         ))
//       ) : (
//         <div>No items in the cart</div>
//       )}
//       <button onClick={() => window.history.back()}>Go Back</button>
//     </div>
//   );
// }

// export default CartPage;

import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom'


const CartPage = ({productsInCart, setProductInCart}) => {
  const navigate = useNavigate();
  // Function to handle removing an item from the cart
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