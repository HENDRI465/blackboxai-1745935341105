import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsOpen(true);
    }
  }, [cartItems]);

  return (
    <div className="relative ml-4">
      <button
        onClick={toggleCart}
        aria-label="Toggle Cart"
        className="relative p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <i className="fas fa-shopping-cart text-neonGreen fa-lg"></i>
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-neonGreen text-black rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
            {cartItems.length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg p-4 z-50"
          >
            <h3 className="text-lg font-semibold mb-2">Shopping Cart</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-400">Your cart is empty.</p>
            ) : (
              <ul className="space-y-2 max-h-48 overflow-y-auto">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
