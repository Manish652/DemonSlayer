import React from 'react';

function Dashbord() {
  return (
    <div className="max-w-6xl bg-gray-900 mx-auto p-6 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <p className="text-white mb-6">
        Welcome to your dashboard! Here you can find an overview of your activity, analytics, and quick actions.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold">1,240</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">$5,120</p>
        </div>
        <div className="p-4 bg-purple-500 text-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Tasks Completed</h2>
          <p className="text-2xl font-bold">76%</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Quick Actions</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Add New User
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            View Reports
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
            Manage Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
