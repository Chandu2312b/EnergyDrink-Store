export const products = [
  {
    id: 1,
    name: "Premium Energy Drink",
    description: "High-quality energy drink with natural ingredients and amazing flavors.",
    mainPrice: 100,
    subscriptionPrice: 75, // 25% off from main price
    salesDiscount: 20, // 20% sales discount
    images: [
      {
        id: 1,
        url: "/images/chocolate.png",
        alt: "Chocolate Energy Drink",
        flavor: "Chocolate"
      },
      {
        id: 2,
        url: "/images/vanilla.png",
        alt: "Vanilla Energy Drink",
        flavor: "Vanilla"
      },
      {
        id: 3,
        url: "/images/orange.png",
        alt: "Orange Energy Drink",
        flavor: "Orange"
      }
    ],
    variants: [
      {
        id: 1,
        flavor: "Chocolate",
        price: 100,
        subscriptionPrice: 75,
        inStock: true
      },
      {
        id: 2,
        flavor: "Vanilla",
        price: 100,
        subscriptionPrice: 75,
        inStock: true
      },
      {
        id: 3,
        flavor: "Orange",
        price: 100,
        subscriptionPrice: 75,
        inStock: true
      }
    ],
    includedItems: {
      single: [
        "1 Premium Energy Drink",
        "Free shipping",
        "Every 30 days delivery",
        "Cancel anytime"
      ],
      double: [
        "2 Premium Energy Drinks",
        "Free shipping",
        "Every 30 days delivery",
        "Cancel anytime",
        "Save 25% on subscription"
      ]
    },
    benefits: {
      single: [
        "Convenient monthly delivery",
        "Premium quality ingredients",
        "Natural energy boost"
      ],
      double: [
        "Convenient monthly delivery",
        "Premium quality ingredients",
        "Natural energy boost",
        "Better value with double pack"
      ]
    }
  }
];

export const recommendedProducts = [
  {
    id: 2,
    name: "Energy Boost Supplement",
    price: 45,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    originalPrice: 60
  },
  {
    id: 3,
    name: "Protein Shake Mix",
    price: 35,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    originalPrice: 50
  },
  {
    id: 4,
    name: "Vitamin C Boost",
    price: 25,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    originalPrice: 35
  }
];

export const giftProducts = [
  {
    id: 5,
    name: "Free Energy Bar",
    price: 0,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    originalPrice: 15
  },
  {
    id: 6,
    name: "Free Shaker Bottle",
    price: 0,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
    originalPrice: 20
  }
]; 