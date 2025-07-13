# Product Cart Application

A fully functional React application that implements a dynamic product page and cart page with all the features specified in the requirements. This application demonstrates modern React patterns, state management, and responsive design.

## Features

### Product Page
- **Product Media Gallery**: Interactive image carousel with thumbnail navigation
- **Purchase Options**: Radio button selection between Single and Double Drink Subscriptions
- **Dynamic Flavor Selection**: Flavor dropdowns that adapt based on purchase mode
- **Real-time Pricing**: Dynamic price calculations with subscription discounts and sales discounts
- **What's Included Section**: Dynamic content based on selected purchase mode
- **Benefits Section**: Highlighted benefits for each subscription type
- **Add to Cart**: Seamless cart integration with quantity selection

### Cart Page
- **Cart Items Display**: Complete cart item management with quantity controls
- **Free Gifts Section**: Interactive gift selection with visual feedback
- **Recommended Products**: Additional product suggestions with pricing
- **Order Summary**: Real-time total calculation including all selections
- **Checkout Integration**: Ready for payment processing

### Pricing Logic
- **Subscription Discount**: 25% off from main price for subscriptions
- **Sales Discount**: 20% additional discount on all items
- **Example**: Main price $100 → Subscription price $75 → Final price $60 (after 20% sales discount)

## Project Structure

```
src/
├── components/
│   ├── ProductPage.js          # Main product page component
│   ├── ProductPage.css         # Product page styles
│   ├── CartPage.js             # Cart page component
│   ├── CartPage.css            # Cart page styles
│   ├── Header.js               # Header component with navigation
│   └── Header.css              # Header styles
├── context/
│   └── CartContext.js          # Cart state management
├── data/
│   └── products.js             # Product data and mock data
├── App.js                      # Main app component with routing
├── App.css                     # App-level styles
├── index.js                    # Application entry point
└── index.css                   # Global styles
```

## Key Technologies

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing between pages
- **Context API**: State management for cart functionality
- **CSS3**: Modern styling with Flexbox and Grid
- **Responsive Design**: Mobile-first approach with media queries

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-cart-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Implementation Details

### Cart State Management
The application uses React Context API for cart state management with the following features:
- Add/remove items from cart
- Update item quantities
- Calculate cart totals
- Persist cart state across page navigation

### Dynamic Pricing
The pricing system implements the specified discount structure:
1. Base price: $100
2. Subscription discount (25%): $75
3. Sales discount (20%): $60 final price

### Responsive Design
The application is fully responsive with:
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Touch-friendly interactions

### Component Architecture
- **Functional Components**: All components use modern React patterns
- **Custom Hooks**: Cart functionality is abstracted into reusable hooks
- **Props Validation**: Type checking for component props
- **Event Handling**: Comprehensive event management for user interactions

## Features Breakdown

### Product Gallery
- Main image display with hover effects
- Thumbnail navigation with active states
- Image switching updates flavor selection
- Responsive image sizing

### Purchase Options
- Radio button interface for subscription types
- Dynamic content updates based on selection
- Visual feedback for selected options
- Accessibility features

### Flavor Selection
- Dropdown menus for flavor selection
- Dynamic number of selectors based on purchase mode
- Validation and error handling
- Real-time updates

### Cart Functionality
- Add items with variants
- Quantity management
- Remove items
- Price calculations
- Order summary

### Gifts and Recommendations
- Interactive selection interface
- Visual feedback for selections
- Price integration
- Dynamic content updates

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Lazy loading for images
- Efficient state updates
- Optimized re-renders
- Minimal bundle size
- Responsive image loading

## Future Enhancements

- Payment gateway integration
- User authentication
- Order history
- Product reviews
- Wishlist functionality
- Advanced filtering
- Search functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 