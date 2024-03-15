import React from 'react';
import placeholderImage from '../assets/placeholder.png'; // Import a placeholder image

const ProductCard = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className="product-card">
      <img src={image || placeholderImage} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;