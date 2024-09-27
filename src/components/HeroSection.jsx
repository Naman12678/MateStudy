// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-400 h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Get Ready to Ace Your Exam with Us
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Welcome to StudyMate, a platform created by learners for learners.
          We're here to help you ace your exams with personalized study plans.
        </p>
        <a href="/services" className="bg-black text-white px-6 py-3 rounded-md">View All Services</a>
      </div>
    </div>
  );
};

export default HeroSection;
