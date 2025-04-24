import React from 'react';

function About() {
  return (
    <>
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-white leading-relaxed">
        Welcome to our website! We are a passionate team dedicated to providing top-quality services and solutions.
        Our mission is to innovate, inspire, and impact the world with our expertise.
      </p>
      <h2 className="text-2xl font-semibold text-white mt-6">Our Vision</h2>
      <p className="text-white leading-relaxed">
        We believe in creating a future where technology and creativity merge seamlessly to bring ideas to life.
      </p>
      <h2 className="text-2xl font-semibold text-white mt-6">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-white mt-2 space-y-2">
        <li>Experienced professionals in our field</li>
        <li>Commitment to quality and customer satisfaction</li>
        <li>Innovative and cutting-edge solutions</li>
        <li>Strong focus on user experience and design</li>
      </ul>
      <div className="mt-6">
        <a href="/contact" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Contact Us
        </a>
      </div>
    </div></>
  );
}

export default About;
