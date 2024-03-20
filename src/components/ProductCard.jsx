

import React, { useState } from 'react';
import placeholderImage from '../assets/placeholder.png';

const ProductCard = ({ product, onDelete, onEdit, productsInCart, setProductInCart }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAddToCart = () => {
    setProductInCart([product, ...productsInCart]);
  };

  const saveEdits = () => {
    onEdit(editedProduct.id, editedProduct);
    setIsEditing(false); // Exit editing mode after saving
  };

  return (
    <div className="product-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleEditChange}
          />
          <button onClick={saveEdits}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <img src={product.image || placeholderImage} alt={`${product.name} - ${product.price}`} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={handleAddToCart} className="btn-add-to-cart">Add to Cart</button>
          <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
          <button onClick={() => onDelete(product.id)} className="delete-button">Delete</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;