import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { recommendedProducts, giftProducts } from '../data/products';
import Header from './Header';
import './CartPage.css';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [selectedGifts, setSelectedGifts] = useState([]);
  const [selectedRecommended, setSelectedRecommended] = useState([]);

  const handleGiftToggle = (giftId) => {
    setSelectedGifts(prev => 
      prev.includes(giftId) 
        ? prev.filter(id => id !== giftId)
        : [...prev, giftId]
    );
  };

  const handleRecommendedToggle = (productId) => {
    setSelectedRecommended(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getSelectedGiftsTotal = () => {
    return selectedGifts.reduce((total, giftId) => {
      const gift = giftProducts.find(g => g.id === giftId);
      return total + (gift ? gift.price : 0);
    }, 0);
  };

  const getSelectedRecommendedTotal = () => {
    return selectedRecommended.reduce((total, productId) => {
      const product = recommendedProducts.find(p => p.id === productId);
      return total + (product ? product.price : 0);
    }, 0);
  };

  const getGrandTotal = () => {
    return getCartTotal() + getSelectedGiftsTotal() + getSelectedRecommendedTotal();
  };

  const handleCheckout = () => {
    // In a real application, this would redirect to checkout
    alert('Proceeding to checkout...');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <Header />
        <div className="container">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      <div className="container">
        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-section">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
              {items.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-image">
                    <img 
                      src="/images/chocolate.png" 
                      alt={item.name}
                    />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-variants">
                      {item.variants.purchaseMode === 'single' ? 'Single' : 'Double'} Drink Subscription
                    </p>
                    <p className="item-flavors">
                      Flavors: {item.variants.flavors.join(', ')}
                    </p>
                    <div className="item-price">
                      <span className="current-price">${item.subscriptionPrice.toFixed(2)}</span>
                      <span className="original-price">${(item.subscriptionPrice / 0.8).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gifts Section */}
          <div className="gifts-section">
            <h3>Free Gifts</h3>
            <p>Choose your free gifts with any purchase</p>
            <div className="gifts-grid">
              {giftProducts.map(gift => (
                <div 
                  key={gift.id} 
                  className={`gift-item ${selectedGifts.includes(gift.id) ? 'selected' : ''}`}
                  onClick={() => handleGiftToggle(gift.id)}
                >
                  <img src={gift.image} alt={gift.name} />
                  <h4>{gift.name}</h4>
                  <p className="gift-price">FREE</p>
                  <p className="gift-original">${gift.originalPrice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Products */}
          <div className="recommended-section">
            <h3>Recommended for You</h3>
            <div className="recommended-grid">
              {recommendedProducts.map(product => (
                <div 
                  key={product.id} 
                  className={`recommended-item ${selectedRecommended.includes(product.id) ? 'selected' : ''}`}
                  onClick={() => handleRecommendedToggle(product.id)}
                >
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <div className="recommended-price">
                    <span className="current-price">${product.price}</span>
                    <span className="original-price">${product.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              <div className="summary-item">
                <span>Cart Subtotal:</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              {selectedGifts.length > 0 && (
                <div className="summary-item">
                  <span>Free Gifts:</span>
                  <span>${getSelectedGiftsTotal().toFixed(2)}</span>
                </div>
              )}
              {selectedRecommended.length > 0 && (
                <div className="summary-item">
                  <span>Recommended Items:</span>
                  <span>${getSelectedRecommendedTotal().toFixed(2)}</span>
                </div>
              )}
              <div className="summary-total">
                <span>Total:</span>
                <span>${getGrandTotal().toFixed(2)}</span>
              </div>
            </div>
            <div className="checkout-actions">
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 