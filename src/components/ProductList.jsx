
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import AddProductForm from './AddProduct';  // Make sure this import is correct

// const ProductList = ({ productsInCart, setProductInCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//           params: { query: 'indoor plants', client_id: 'Dkh4sVLU8Tcl3K5d3JU3NCTr0BKe3p2ruDL-1I7hTHs', per_page: 10 },
//         });
//         const transformedProducts = response.data.results.map((img) => ({
//           id: img.id,
//           name: img.alt_description || 'Indoor Plant',
//           image: img.urls.small,
//           price: Math.floor(Math.random() * 100) + 10,  // Simulating a price
//         }));
//         setProducts(transformedProducts);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <AddProductForm onAddProduct={(newProduct) => setProducts([...products, newProduct])} />
//       <div className="product-list">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             productsInCart={productsInCart}
//             setProductInCart={setProductInCart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import AddProductForm from './AddProduct'; // Ensure this import is correct

const ProductList = ({ productsInCart, setProductInCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use axios to fetch data from your backend
        const response = await axios.get(`http://localhost:3000/plants`);
        // Assuming your backend returns the products in the desired structure
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchProducts();
  }, []);
  const addProduct = async (newProduct) => {
    try {
      // POST request to add a new product to the backend
      const response = await axios.post(`http://localhost:3000/plants`, newProduct);
      // Update local state with the newly added product (including any ID assigned by the backend)
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error adding new product:', error);
    }
  };
  return (
    <div>
      <h2>Product List</h2>
      <AddProductForm onAddProduct={(newProduct) => setProducts([...products, newProduct])} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            productsInCart={productsInCart}
            setProductInCart={setProductInCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

