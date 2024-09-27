// src/pages/Services.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Exam Preparation" 
            description="Tailored exam prep resources that ensure you ace your next test." 
            imageUrl="path_to_exam_image.jpg" 
            backgroundColor="bg-gradient-to-t from-yellow-400 to-red-500"
          />
          <ServiceCard 
            title="Personalized Study Plans" 
            description="Get a customized study plan based on your unique learning style." 
            imageUrl="path_to_study_image.jpg" 
            backgroundColor="bg-gradient-to-t from-green-400 to-teal-500"
          />
          <ServiceCard 
            title="Learning Community" 
            description="Join a community of like-minded learners and grow together." 
            imageUrl="path_to_community_image.jpg" 
            backgroundColor="bg-gradient-to-t from-purple-400 to-pink-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
