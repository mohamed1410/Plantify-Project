// import React from 'react';
// import placeholderImage from '../assets/placeholder.png'; 

// const ProductCard = ({ product,productsInCart, setProductInCart }) => {
//   const { id, name, image, price } = product;


//   const handleAddToCart = () => {
   

//     console.log(product);

//     setProductInCart([product,...productsInCart]);
//     console.log(productsInCart)
   
//   };

//   return (
//     <div className="product-card">
//       <img src={image || placeholderImage} alt={name} />
//       <h3>{name}</h3>
//       <p>${price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductCard;



import React from 'react';
import placeholderImage from '../assets/placeholder.png';

const ProductCard = ({ product, productsInCart, setProductInCart }) => {
  console.log("Rendering product:", product.name);
  const { id, name, image, price } = product;

  const handleAddToCart = () => {
    setProductInCart([product, ...productsInCart]);
    // Consider adding feedback here, like updating the button text to "Added" or showing a toast message
  };

  return (
    <div className="product-card">
      <img src={image || placeholderImage} alt={`${name} - ${price}`} className="product-image" />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart} className="btn-add-to-cart">Add to Cart</button>
    </div>
  );
};


export default ProductCard;

