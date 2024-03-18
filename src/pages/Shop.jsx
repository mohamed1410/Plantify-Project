


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Shop = ({productsInCart,setProductInCart}) => {
  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(true); // State for loading indication
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products.'); // Set error message
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  return (
    <div style={{ padding: '20px' }}> {/* Basic styling */}
      <Header/>
      <h2>Shop All Products</h2>
      <ProductList productsInCart={productsInCart} setProductInCart={setProductInCart} products={products} />
    </div>
  );
}

export default Shop;
