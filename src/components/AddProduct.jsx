import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct); 
    setNewProduct({ name: '', price: '', description: '', image: '' }); 
  };

  return (
    <form className="form-add-product" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="productName" className="form-label">Name</label>
        <input
          type="text"
          id="productName"
          name="name" 
          className="form-control"
          value={newProduct.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productPrice" className="form-label">Price</label>
        <input
          type="number"
          id="productPrice"
          name="price" 
          className="form-control"
          value={newProduct.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="productDescription" className="form-label">Description</label>
        <textarea
          id="productDescription"
          name="description" 
          className="form-control form-textarea"
          value={newProduct.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productImage" className="form-label">Image URL</label>
        <input
          type="text"
          id="productImage"
          name="image" 
          className="form-control"
          value={newProduct.image}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="button-add-product">Add Product</button>
    </form>
  );
};

export default AddProductForm;