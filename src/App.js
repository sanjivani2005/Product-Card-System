import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <CartProvider>
      <div className="app-container">
        <h1 className="app-title">🛍️ Product Cart System</h1>
        <div className="main-content">
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
