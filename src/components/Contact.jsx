import React from 'react';

function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-white mb-6">
        Have any questions or inquiries? Feel free to reach out by filling out the form below.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-white font-medium">Name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your name" 
          />
        </div>

        <div>
          <label className="block text-white font-medium">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your email" 
          />
        </div>

        <div>
          <label className="block text-white font-medium">Message</label>
          <textarea 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            rows="4" 
            placeholder="Write your message here"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 text-gray-600">
        <p>Email: <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a></p>
        <p>Phone: <span className="text-gray-800 font-medium">+123 456 7890</span></p>
      </div>
    </div>
  );
}

export default Contact;
