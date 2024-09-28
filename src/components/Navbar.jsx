// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold">StudyMate</h1>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-black hover:text-gray-600">Home</Link>
            <Link to="/services" className="text-black hover:text-gray-600">Services</Link>
            <Link to="/about" className="text-black hover:text-gray-600">About</Link>
            <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
            <Link to="/auth" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700">Get Started
</Link>
          </div>

          {/* Hamburger Menu for small screens */}
          <button
            className="text-black md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Full-screen dark overlay menu for small screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="text-white text-3xl absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <nav className="flex flex-col space-y-6 text-center">
            <Link
              to="/"
              className="text-white text-2xl hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-white text-2xl hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-white text-2xl hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white text-2xl hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/auth"
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
