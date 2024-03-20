


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import AddProductForm from './AddProduct';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const ProductList = ({ productsInCart, setProductInCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/plants`);
      setProducts(response.data);
    } catch (err) {
      console.error('Error fetching data from backend:', err);
      setError('Failed to fetch products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const response = await axios.post(`${API_URL}/plants`, newProduct);
      setProducts(prevProducts => [...prevProducts, response.data]); // Update state to include new product
    } catch (err) {
      console.error('Error adding new product:', err);
      setError('Failed to add product.');
    }
  };

  const editProduct = async (productId, updatedProduct) => {
    try {
      await axios.put(`${API_URL}/plants/${productId}`, updatedProduct);
      setProducts(prevProducts => prevProducts.map(product => product.id === productId ? { ...product, ...updatedProduct } : product)); // Update edited product in state
    } catch (err) {
      console.error('Error updating product:', err);
      setError('Failed to update product.');
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${API_URL}/plants/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId)); // Remove deleted product from state
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Failed to delete product.');
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
            onDelete={() => deleteProduct(product.id)}
            onEdit={editProduct} // Pass editProduct as prop
            productsInCart={productsInCart}
            setProductInCart={setProductInCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;