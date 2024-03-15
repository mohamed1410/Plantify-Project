import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import placeholderImage from '../assets/placeholder.png';

import  mockPlants  from '../mockData/mockPlants.json'

const ProductList = () => {
  const [products, setProducts] = useState(mockPlants);

  const handleAddToCart = (productId) => {
    // Add logic to handle adding the product to the cart
    console.log('Adding product to cart:', productId);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
