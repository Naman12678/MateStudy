// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <>
      <HeroSection />

      {/* Featured Section */}
      <Featured />


      {/* Testimonials Section */}
      <Testimonials />

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="mb-8">
          Join StudyMate today and ace your exams with our personalized study plans and community support.
        </p>
        <a
          href="/signup"
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
        >
          Sign Up Now
        </a>
      </section>
    </>
  );
};

export default Home;
