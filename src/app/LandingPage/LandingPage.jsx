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

     
    </div>
  );
}
