import React from 'react';

const CheckoutPage = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-futuristic text-neonBlue font-bold mb-6">Checkout</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between py-2 border-b border-gray-700">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-neonGreen font-semibold text-xl mb-6">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-neonGreen text-black py-3 rounded-md font-semibold hover:bg-neonBlue transition-colors">
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
