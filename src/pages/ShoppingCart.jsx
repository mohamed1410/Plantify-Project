import React from 'react';
import ShoppingCart from '../components/ShoppingCart'; // Importing the ShoppingCart component

function ShoppingCartPage() {
  return (
    <div>
      <h1>Shopping Cart</h1> {/* Heading for the shopping cart page */}
      <ShoppingCart /> {/* Render the ShoppingCart component */}
    </div>
  );
}

export default ShoppingCartPage;