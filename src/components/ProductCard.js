import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h4 className="product-title">{product.title}</h4>
      <p className="product-price">₹{product.price.toFixed(2)}</p>
      <button className="add-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

