


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"
const Shop = ({productsInCart,setProductInCart}) => {
  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get(`${API_URL}/plants`)
      .then(response => {
        setProducts(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products.'); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div style={{ padding: '20px' }}> 
      <Header/>
      <h2>Shop All Products</h2>
      <ProductList productsInCart={productsInCart} setProductInCart={setProductInCart} products={products} />
    </div>
  );
}

export default Shop;
