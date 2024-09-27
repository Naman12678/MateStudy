// src/components/Featured.jsx
import React from 'react';
import Card from './Card';

const Featured = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Study Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            imageUrl="path_to_featured_image1.jpg"
            title="Comprehensive Exam Prep"
            description="Prepare with in-depth study plans, past exams, and guided learning."
          />
          <Card
            imageUrl="path_to_featured_image2.jpg"
            title="Personalized Tutoring"
            description="Get one-on-one assistance to tailor study sessions to your needs."
          />
          <Card
            imageUrl="path_to_featured_image3.jpg"
            title="Group Study Plans"
            description="Collaborate with peers for interactive learning and exam success."
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;