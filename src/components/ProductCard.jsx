import React from 'react';
import placeholderImage from '../assets/placeholder.png'; // Import a placeholder image

const ProductCard = ({ product,productsInCart, setProductInCart }) => {
  const { id, name, image, price } = product;


  const handleAddToCart = () => {
    // Call the onAddToCart function and pass the product ID

    console.log(product);

    setProductInCart([product,...productsInCart]);
    console.log(productsInCart)
    // onAddToCart(id);
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





