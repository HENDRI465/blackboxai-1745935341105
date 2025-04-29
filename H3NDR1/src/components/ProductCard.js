import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      whileHover={{ rotateY: 15, scale: 1.05 }}
      className="bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer perspective-1000"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-md w-full h-48 object-cover mb-4"
        />
        <h3 className="text-neonBlue font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-400">${product.price.toFixed(2)}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-neonGreen text-black py-2 rounded-md font-semibold hover:bg-neonBlue transition-colors"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
