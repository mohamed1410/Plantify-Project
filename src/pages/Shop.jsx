import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Shop = () => {
  const [products, setProducts] = useState([]); // State to store the list of products

  useEffect(() => {
    // Fetch list of products from the server
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data); // Set the fetched products in state
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Runs only once on component mount to fetch products

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <h2>Shop All Products</h2> {/* Heading for the shop page */}
      <ProductList products={products} /> {/* Render the ProductList component with fetched products */}
    </div>
  );
}

export default Shop;