import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    text: 'H3NDR1 has transformed my shopping experience! The futuristic design and smooth animations are amazing.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mark Smith',
    text: 'Great products and excellent customer service. Highly recommend this shop!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sophia Lee',
    text: 'The neon theme is so cool and the site is very easy to navigate.',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fas fa-star ${i < rating ? 'opacity-100' : 'opacity-30'}`}
        ></i>
      ))}
    </div>
  );
};

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-lg shadow-lg text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[current].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-gray-300 italic">"{testimonials[current].text}"</p>
          <StarRating rating={testimonials[current].rating} />
          <p className="text-neonBlue font-semibold">{testimonials[current].name}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
