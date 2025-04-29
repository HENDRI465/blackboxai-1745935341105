import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import DarkModeSwitcher from './components/DarkModeSwitcher';
import Cart from './components/Cart';
import LiveChatPopup from './components/LiveChatPopup';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const toggleChat = () => setChatOpen(!chatOpen);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-darkBg text-gray-200 transition-colors duration-500">
        <header className="flex justify-between items-center p-4 bg-gray-900 shadow-lg">
          <Link to="/" className="text-3xl font-futuristic text-neonBlue font-bold">
            H3NDR1
          </Link>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-neonGreen transition-colors">Home</Link>
            <Link to="/checkout" className="hover:text-neonGreen transition-colors">Checkout</Link>
            <button
              onClick={toggleChat}
              className="text-neonPurple hover:text-neonGreen transition-colors"
              aria-label="Toggle Live Chat"
            >
              <i className="fas fa-comments fa-lg"></i>
            </button>
            <DarkModeSwitcher darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Cart cartItems={cartItems} />
          </nav>
        </header>

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={window.location} key={window.location.pathname}>
              <Route path="/" element={<HomePage addToCart={addToCart} />} />
              <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
              <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        {chatOpen && <LiveChatPopup toggleChat={toggleChat} />}
      </div>
    </Router>
  );
}

export default App;
