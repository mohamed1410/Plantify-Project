// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../components/Header';

// const ProductDetails = () => {
//   const { productId } = useParams(); // Access the productId parameter from the URL
//   const [product, setProduct] = useState(null); // State to store the product details

//   useEffect(() => {
//     // Fetch product details based on the productId
//     axios.get(`/api/products/${productId}`)
//       .then(response => {
//         setProduct(response.data); // Set the product details in state
//       })
//       .catch(error => {
//         console.error('Error fetching product details:', error);
//       });
//   }, [productId]); // Fetch data whenever productId changes

//   return (
//     <div>
//       <Header /> {/* Render the Header component */}
//       {/* Render product details if product is available */}
//       {product && (
//         <div>
//           <h2>{product.name}</h2> {/* Product name */}
//           <img src={product.image} alt={product.name} /> {/* Product image */}
//           <p>${product.price}</p> {/* Product price */}
//           <button>Add to Cart</button> {/* Button to add the product to cart */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductDetails;

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
      {/* Optionally display the cart items for demonstration */}
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