import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Explore our platform to learn more about our services and offerings. We aim to provide the best experience for our users.
      </p>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;


