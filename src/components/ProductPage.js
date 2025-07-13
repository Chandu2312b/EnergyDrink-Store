import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Header from './Header';
import './ProductPage.css';

const ProductPage = () => {
  const { addToCart } = useCart();
  const product = products[0]; // Main product

  const [selectedImage, setSelectedImage] = useState(0);
  const [purchaseMode, setPurchaseMode] = useState('single');
  const [selectedFlavors, setSelectedFlavors] = useState({
    flavor1: 'Chocolate',
    flavor2: 'Chocolate'
  });
  const [quantity, setQuantity] = useState(1);

  // Calculate prices
  const calculatePrices = () => {
    const basePrice = product.mainPrice;
    const subscriptionPrice = product.subscriptionPrice;
    const salesDiscount = product.salesDiscount;
    
    const finalMainPrice = basePrice * (1 - salesDiscount / 100);
    const finalSubscriptionPrice = subscriptionPrice * (1 - salesDiscount / 100);
    
    return {
      mainPrice: finalMainPrice,
      subscriptionPrice: finalSubscriptionPrice,
      originalMainPrice: basePrice,
      originalSubscriptionPrice: subscriptionPrice
    };
  };

  const prices = calculatePrices();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      mainPrice: prices.mainPrice,
      subscriptionPrice: prices.subscriptionPrice,
      quantity: quantity,
      variants: {
        purchaseMode: purchaseMode,
        flavors: purchaseMode === 'single' 
          ? [selectedFlavors.flavor1]
          : [selectedFlavors.flavor1, selectedFlavors.flavor2]
      }
    };
    
    addToCart(cartItem);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    const flavor = product.images[index].flavor;
    setSelectedFlavors(prev => ({
      ...prev,
      flavor1: flavor
    }));
  };

  return (
    <div className="product-page">
      <Header />
      <div className="container">
        <div className="product-layout">
          {/* Product Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img 
                src={product.images[selectedImage].url} 
                alt={product.images[selectedImage].alt}
              />
            </div>
            <div className="thumbnail-gallery">
              {product.images.map((image, index) => (
                <div 
                  key={image.id}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => handleImageClick(index)}
                >
                  <img src={image.url} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>

            {/* Purchase Options */}
            <div className="purchase-options">
              <h3>Purchase Options</h3>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="purchaseMode"
                    value="single"
                    checked={purchaseMode === 'single'}
                    onChange={(e) => setPurchaseMode(e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  <div className="option-content">
                    <h4>Single Drink Subscription</h4>
                    <p>Perfect for individual consumption</p>
                  </div>
                </label>
                
                <label className="radio-option">
                  <input
                    type="radio"
                    name="purchaseMode"
                    value="double"
                    checked={purchaseMode === 'double'}
                    onChange={(e) => setPurchaseMode(e.target.value)}
                  />
                  <span className="radio-custom"></span>
                  <div className="option-content">
                    <h4>Double Drink Subscription</h4>
                    <p>Great value for sharing or heavy consumption</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Flavor Selection */}
            <div className="flavor-selection">
              <h3>Flavor Selection</h3>
              <div className="flavor-options">
                <div className="flavor-group">
                  <label>Flavor 1:</label>
                  <select 
                    value={selectedFlavors.flavor1}
                    onChange={(e) => setSelectedFlavors(prev => ({
                      ...prev,
                      flavor1: e.target.value
                    }))}
                  >
                    {product.variants.map(variant => (
                      <option key={variant.id} value={variant.flavor}>
                        {variant.flavor}
                      </option>
                    ))}
                  </select>
                </div>
                
                {purchaseMode === 'double' && (
                  <div className="flavor-group">
                    <label>Flavor 2:</label>
                    <select 
                      value={selectedFlavors.flavor2}
                      onChange={(e) => setSelectedFlavors(prev => ({
                        ...prev,
                        flavor2: e.target.value
                      }))}
                    >
                      {product.variants.map(variant => (
                        <option key={variant.id} value={variant.flavor}>
                          {variant.flavor}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Pricing */}
            <div className="pricing">
              <div className="price-display">
                <span className="current-price">
                  ${prices.subscriptionPrice.toFixed(2)}
                </span>
                <span className="original-price">
                  ${prices.originalSubscriptionPrice.toFixed(2)}
                </span>
                <span className="discount-badge">
                  {product.salesDiscount}% OFF
                </span>
              </div>
              <p className="price-note">
                Subscription price with {product.salesDiscount}% sales discount
              </p>
            </div>

            {/* What's Included */}
            <div className="included-items">
              <h3>What's Included</h3>
              <ul>
                {product.includedItems[purchaseMode].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="benefits">
              <h3>Benefits</h3>
              <ul>
                {product.benefits[purchaseMode].map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart - ${(prices.subscriptionPrice * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 