import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import FilterCategory from '../components/FilterCategory';
import CountdownFlashSale from '../components/CountdownFlashSale';
import TestimonialCarousel from '../components/TestimonialCarousel';
import RecommendedProducts from '../components/RecommendedProducts';

const products = [
  {
    id: 1,
    name: 'Electric Headphones',
    price: 99.99,
    image: 'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Futuristic Jacket',
    price: 149.99,
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Clothing',
  },
  {
    id: 3,
    name: 'Neon Sunglasses',
    price: 29.99,
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Accessories',
  },
  // Add more products as needed
];

const HomePage = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Banner with parallax effect */}
      <motion.div
        className="relative h-64 rounded-lg overflow-hidden mb-8"
        style={{ perspective: 1000 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-futuristic font-bold mb-4 drop-shadow-lg">
            Welcome to H3NDR1
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
            The future of online shopping is here.
          </p>
          <button className="bg-neonGreen text-black px-6 py-3 rounded-full font-semibold hover:bg-neonBlue transition-colors">
            Shop Now
          </button>
        </div>
      </motion.div>

      {/* Filter categories */}
      <FilterCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Countdown flash sale */}
      <CountdownFlashSale />

      {/* Recommended products */}
      <RecommendedProducts addToCart={addToCart} />

      {/* Testimonials carousel */}
      <TestimonialCarousel />
    </div>
  );
};

export default HomePage;
