

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import mockPlants from '../mockData/mockPlants.json';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Find the product in the mock data by ID
    const productDetails = mockPlants.find(product => product.id === parseInt(productId));
    setProduct(productDetails);
  }, [productId]);

  const addToCart = (productToAdd) => {
    setCartItems(prevItems => [...prevItems, productToAdd]);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
     
      <div>
        <h3>Cart Items:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;