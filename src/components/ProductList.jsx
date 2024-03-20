

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import AddProductForm from './AddProduct'; 


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const ProductList = ({ productsInCart, setProductInCart,products }) => {
 console.log({products})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/plants`);
      
    } catch (err) {
      console.error('Error fetching data from backend:', err);
      setError('Failed to fetch products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    //fetchProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      await axios.post(`${API_URL}/plants`, newProduct);
    
      fetchProducts(); 
    } catch (err) {
      console.error('Error adding new product:', err);
      setError('Failed to add product.');
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${API_URL}/plants/${productId}`);
      fetchProducts(); 
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Failed to delete product.');
    }
  };
  const editProduct = async (productId, updatedProduct) => {
    try {
      await axios.put(`${API_URL}/plants/${productId}`, updatedProduct);
      fetchProducts(); 
    } catch (err) {
      console.error('Error updating product:', err);
      setError('Failed to update product.');
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Product List</h2>
      <AddProductForm onAddProduct={addProduct} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={deleteProduct} 
            onEdit={editProduct}
            productsInCart={productsInCart}
            setProductInCart={setProductInCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
