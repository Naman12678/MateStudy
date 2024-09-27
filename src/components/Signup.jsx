// src/pages/Signup.jsx
import React from 'react';

const Signup = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Sign Up</h2>
        <form className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 font-semibold text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="p-4 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Choose a Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="p-4 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Email Address"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="p-4 bg-gray-200 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Create a Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-md transition-colors duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
