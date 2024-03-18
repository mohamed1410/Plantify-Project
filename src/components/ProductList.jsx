import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import placeholderImage from '../assets/placeholder.png';

 import  mockPlants  from '../mockData/mockPlants.json'

const ProductList = ({productsInCart,setProductInCart}) => {
  const [products, setProducts] = useState(mockPlants);

  
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard productsInCart={productsInCart} setProductInCart={setProductInCart} key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default ProductList;

