import React from 'react';
import { useParams } from 'react-router-dom';

const productData = {
  1: {
    id: 1,
    name: 'Electric Headphones',
    price: 99.99,
    description: 'High-quality electric headphones with noise cancellation.',
    image: 'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  2: {
    id: 2,
    name: 'Futuristic Jacket',
    price: 149.99,
    description: 'Stylish futuristic jacket with neon accents.',
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  3: {
    id: 3,
    name: 'Neon Sunglasses',
    price: 29.99,
    description: 'Cool neon sunglasses for a futuristic look.',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
};

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <div className="p-8 text-center">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg w-full md:w-1/2 object-cover"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-futuristic text-neonBlue font-bold mb-4">
              {product.name}
            </h2>
            <p className="text-gray-300 mb-6">{product.description}</p>
            <p className="text-neonGreen text-2xl font-semibold mb-6">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-neonGreen text-black py-3 rounded-md font-semibold hover:bg-neonBlue transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
