// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import UserDashboard from './components/UserDashboard';
import SignInSignUp from './components/SignInSignUp';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar component */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<SignInSignUp />} />
          <Route path="/dashboard" element={<UserDashboard />} /> {/* Protected dashboard page */}
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
