import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const ProductDetails = () => {
  const { productId } = useParams(); // Access the productId parameter from the URL
  const [product, setProduct] = useState(null); // State to store the product details

  useEffect(() => {
    // Fetch product details based on the productId
    axios.get(`/api/products/${productId}`)
      .then(response => {
        setProduct(response.data); // Set the product details in state
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]); // Fetch data whenever productId changes

  return (
    <div>
      <Header /> {/* Render the Header component */}
      {/* Render product details if product is available */}
      {product && (
        <div>
          <h2>{product.name}</h2> {/* Product name */}
          <img src={product.image} alt={product.name} /> {/* Product image */}
          <p>${product.price}</p> {/* Product price */}
          <button>Add to Cart</button> {/* Button to add the product to cart */}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;