import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import placeholderImage from '../assets/placeholder.png';

import { mockPlants } from '../mockData';

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://trefle.io/api/v1/plants?token=1uaZNpXM04heVaWfHOM1mY0bbZaPdEDvDDMmZ5EUbnQ'); 
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };
    fetchData();
    
    // Cleanup function to reset error state if component unmounts
    return () => {
      setError(null);
    };
  }, []);
   

  if (loading) {
    return <div className="loading-indicator">Loading...</div>; // Enhance loading indicator
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>; // Provide a more user-friendly error message
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;