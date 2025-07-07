import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-msg">Cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="item-title">{item.title}</span>
              <span className="item-price">₹{item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item)} className="remove-btn">✖</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
