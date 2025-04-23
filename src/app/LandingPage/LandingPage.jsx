import React from "react";

import { FaRocket, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to QuickStart</h1>
        <p className="text-lg md:text-xl mb-6">The fastest way to launch your next big idea.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">Get Started</button>
      </section>
      {/* Features Section */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <FaRocket className="text-4xl mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
          <p className="text-gray-600">Launch in minutes, not hours. QuickStart gets you going with zero setup.</p>
        </div>
        <div className="text-center">
          <FaShieldAlt className="text-4xl mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-600">Built with security in mind so you can launch with peace of mind.</p>
        </div>
        <div className="text-center">
          <FaMobileAlt className="text-4xl mx-auto text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mobile Ready</h3>
          <p className="text-gray-600">Fully responsive design that looks great on all devices.</p>
        </div>
      </section>
        {/* Footer */}
        <footer className="text-center py-6 bg-gray-100 text-sm text-gray-500">
        <p>Contact us: info@quickstart.com | Follow us on
          <a href="#" className="text-blue-500 ml-1">Twitter</a>,
          <a href="#" className="text-blue-500 ml-1">Instagram</a>
        </p>
        <p className="mt-2">&copy; 2025 QuickStart Inc.</p>
      </footer>
     
    </div>
  );
}
