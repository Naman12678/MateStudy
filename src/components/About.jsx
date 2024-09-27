// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About StudyMate</h2>
        <p className="text-xl text-center mb-8">
          StudyMate is a platform created by learners, for learners. We provide personalized study plans, community-driven support, and top-tier exam preparation resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>We aim to make learning effective and accessible for students worldwide, helping them excel in their exams and beyond.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>We envision a future where personalized education empowers every student to achieve their academic goals with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
