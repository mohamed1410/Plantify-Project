import React from 'react';
import placeholderImage from '../assets/placeholder.png'; // Import a placeholder image

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, image, price } = product;

  const handleAddToCart = () => {
    // Call the onAddToCart function and pass the product ID
    console.log("onAddToCart:", onAddToCart); // Log the onAddToCart function
    console.log("id:", id); // Log the product ID
    onAddToCart(id);
  };

  return (
    <div className="product-card">
      <img src={image || placeholderImage} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;