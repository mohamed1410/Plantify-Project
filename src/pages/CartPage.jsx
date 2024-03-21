

// import React from 'react';
// import Header from '../components/Header';
// import CartItem from '../components/CartItem';
// import { useNavigate } from 'react-router-dom'


// const CartPage = ({productsInCart, setProductInCart}) => {
//   const navigate = useNavigate();
//   // Function to handle removing  item from the cart
//   const handleRemoveItem = (itemToRemove) => {
//     const updatedCartItems = productsInCart.filter(item => item.id !== itemToRemove.id);
//     setProductInCart(updatedCartItems);
//   };

//   return (
//     <div>
//       <Header />
//       <h2>Shopping Cart</h2>
//       {productsInCart && productsInCart.length > 0 ? (
//         productsInCart.map((item) => (
//           <CartItem key={item.id} item={item} onRemoveItem={handleRemoveItem} />
//         ))
//       ) : (
//         <div>No items in the cart</div>
//       )}
//       <button onClick={() => window.history.back()}>Go Back</button>
//       <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
//     </div>
//   );
// }

// export default CartPage;



import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext'; // Ensure the path to CartContext is correct

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Assuming updateQuantity is implemented in your context

  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div>{item.name}</div>
              <div>${item.price}</div>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <div>No items in the cart</div>
        )}
      </div>
      <button onClick={() => window.history.back()} className="back-button">Go Back</button>
      <button onClick={() => navigate('/checkout')} className="checkout-button">Proceed to Checkout</button>

      {/* Basic styling for visualization */}
      <style>
        {`
          .cart-items {
            margin: 1rem 0;
          }
          .cart-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            padding: 1rem;
            border: 1px solid #ccc;
          }
          .quantity-control {
            display: flex;
            align-items: center;
          }
          .quantity-control button, .quantity-control span {
            margin: 0 0.5rem;
          }
          .back-button, .checkout-button {
            margin-right: 0.5rem;
          }
        `}
      </style>
    </div>
  );
}

export default CartPage;