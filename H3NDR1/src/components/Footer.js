import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <h4 className="text-neonBlue font-bold text-lg mb-2">H3NDR1</h4>
          <p>© 2024 H3NDR1 Online Shop. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" aria-label="Facebook" className="hover:text-neonGreen">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-neonGreen">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-neonGreen">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-neonGreen">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
        <div>
          <p>Contact us: support@h3ndr1shop.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
