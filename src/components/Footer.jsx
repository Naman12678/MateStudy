// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About StudyMate</h3>
            <p className="text-gray-400">
              StudyMate is a platform designed to help students prepare for exams with personalized study plans, exam preparation resources, and a supportive learning community.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-400 hover:text-gray-200">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-gray-400 hover:text-gray-200">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-400 hover:text-gray-200">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-gray-200">Contact</Link>
              </li>
              <li className="mb-2">
                <Link to="/signup" className="text-gray-400 hover:text-gray-200">Sign Up</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Study Street, Knowledge City</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: support@studymate.com</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} StudyMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
