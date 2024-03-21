// import {useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import ProductDetails from './pages/ProductDetails';
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
// import OrderConfirmation from './pages/OrderConfirmation';
// import NotFound from './pages/NotFound';


// const App = () => {
//   const [productsInCart, setProductInCart] = useState([])

//   return (
//     <Router> 
    
//       <Routes> 
//         <Route exact path="/" element={<Home />} /> 
//         <Route path="/shop" element={<Shop productsInCart={productsInCart} setProductInCart={setProductInCart}/>} />
//         <Route path="/product/:productId" element={<ProductDetails />} />
//         <Route path="/cart" element={<CartPage  productsInCart={productsInCart} setProductInCart={setProductInCart}/>} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/order-confirmation" element={<OrderConfirmation />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { CartProvider } from './components/CartContext'; // Adjust the path as needed
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <CartProvider> {/* Wrap your routes with CartProvider */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} /> {/* No longer need to pass cart props */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} /> {/* No longer need to pass cart props */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;