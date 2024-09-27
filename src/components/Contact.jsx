// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-purple-700 to-indigo-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <p className="text-xl text-center mb-8">
          Have any questions or need support? Feel free to reach out to us, and we’ll get back to you as soon as possible.
        </p>
        <form className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              className="p-4 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="p-4 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold">Message</label>
              <textarea
                id="message"
                className="p-4 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 h-32"
                placeholder="Your Message"
              />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
