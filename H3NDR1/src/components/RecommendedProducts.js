import React from 'react';
import ProductCard from './ProductCard';

const recommendedProducts = [
  {
    id: 4,
    name: 'Neon Backpack',
    price: 59.99,
    image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Accessories',
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 199.99,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Electronics',
  },
];

const RecommendedProducts = ({ addToCart }) => {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4">
      <h2 className="text-neonBlue font-futuristic text-3xl font-bold mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
