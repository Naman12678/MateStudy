// src/pages/UserDashboard.jsx
import React from 'react';

const UserDashboard = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, [User Name]!</h1>
          <p className="text-lg text-gray-600">
            Ready to continue your learning journey? Let's get started with your personalized study plans and services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">My Services</h2>
            <p className="mb-4">Access all your purchased services and track your progress.</p>
            <a href="/services" className="text-white underline">Go to Services</a>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Study Plan</h2>
            <p className="mb-4">Review and update your personalized study plan for the upcoming exams.</p>
            <a href="/study-plan" className="text-white underline">Go to Study Plan</a>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Community</h2>
            <p className="mb-4">Join discussions with other learners and share knowledge.</p>
            <a href="/community" className="text-white underline">Go to Community</a>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">My Profile</h2>
          <p>Manage your account details and view recent activity.</p>
          <a href="/profile" className="text-indigo-500 underline">Go to Profile</a>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
