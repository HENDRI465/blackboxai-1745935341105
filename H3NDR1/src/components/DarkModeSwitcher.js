import React from 'react';

const DarkModeSwitcher = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="ml-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
    >
      {darkMode ? (
        <i className="fas fa-sun text-yellow-400"></i>
      ) : (
        <i className="fas fa-moon text-gray-300"></i>
      )}
    </button>
  );
};

export default DarkModeSwitcher;
