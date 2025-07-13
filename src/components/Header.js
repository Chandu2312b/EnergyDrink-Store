import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          EnergyDrink Store
        </Link>
        <Link to="/cart" className="cart-icon">
          🛒
          {getCartCount() > 0 && (
            <span className="cart-badge">{getCartCount()}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header; 