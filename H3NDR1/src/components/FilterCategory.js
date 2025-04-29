import React from 'react';

const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Home', 'Toys'];

const FilterCategory = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto py-4 px-2 bg-gray-900 rounded-lg shadow-inner">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full font-semibold transition-colors whitespace-nowrap ${
            selectedCategory === category
              ? 'bg-neonPurple text-white shadow-neon-purple'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterCategory;
