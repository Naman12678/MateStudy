// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emily Johnson',
      role: 'Student, Harvard University',
      quote: 'StudyMate helped me get organized and confident before exams. Highly recommended!',
    },
    {
      name: 'Michael Lee',
      role: 'Student, Stanford University',
      quote: 'The personalized study plans were a game-changer for me. It made exam prep stress-free.',
    },
    {
      name: 'Sarah Williams',
      role: 'Student, MIT',
      quote: 'The learning community on StudyMate kept me motivated and on track throughout my study.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
