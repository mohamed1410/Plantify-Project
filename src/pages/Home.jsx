import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header'; // Assuming you have a Header component
import ProductList from '../components/ProductList'; // Assuming you have a ProductList component

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API when the component mounts
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data); // Set the fetched products in the state
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <Header /> {/* Render the Header component */}
      <h2>Welcome to Plantify!</h2> {/* Heading indicating the welcome message */}
      <ProductList products={products} /> {/* Render the ProductList component with the fetched products */}
    </div>
  );
}

export default Home;