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
    onAddProduct(newProduct); // Call the onAddProduct function passed via props
    setNewProduct({ name: '', price: '', description: '', image: '' }); // Reset the form
  };

  return (
    <form className="form-add-product" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="productName" className="form-label">Name</label>
        <input
          type="text"
          id="productName"
          name="name" // Ensure the 'name' attribute matches your state property
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
          name="price" // Match the 'name' attribute with your state property
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
          name="description" // 'name' attribute is essential for handleChange to work
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
          name="image" // 'name' attribute helps in updating the state
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