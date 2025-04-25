import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen w-full">
      <div className="container mx-auto px-6 py-16 min-h-screen flex items-center justify-center">
        <main className="flex flex-col md:flex-row w-full max-w-7xl bg-gray-800/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
          
          {/* Left Section */}
          <section className="w-full md:w-2/5 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white relative inline-block mb-6 pb-2 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-400 after:bottom-0 after:left-0">
                Get In Touch
              </h2>
              <p className="text-blue-200 text-lg font-light leading-relaxed">
                We'd love to hear from you. Reach out and let's start a conversation.
              </p>
            </div>

            <div className="space-y-8 mb-10">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mr-5 group-hover:bg-blue-500/40 transition-all duration-300">
                  <i className="fa-solid fa-phone text-blue-300 text-lg"></i>
                </div>
                <div>
                  <span className="text-blue-300 text-sm uppercase tracking-wider font-medium block">Phone</span>
                  <span className="text-white font-light text-lg">+91 25485 12354</span>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mr-5 group-hover:bg-blue-500/40 transition-all duration-300">
                  <i className="fa-solid fa-envelope text-blue-300 text-lg"></i>
                </div>
                <div>
                  <span className="text-blue-300 text-sm uppercase tracking-wider font-medium block">Email</span>
                  <span className="text-white font-light text-lg">contact@example.com</span>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mr-5 group-hover:bg-blue-500/40 transition-all duration-300">
                  <i className="fa-solid fa-location-dot text-blue-300 text-lg"></i>
                </div>
                <div>
                  <span className="text-blue-300 text-sm uppercase tracking-wider font-medium block">Location</span>
                  <span className="text-white font-light text-lg">Padmapukuria, Contai, W.B. 721401</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-10">
              <a href="#" className="w-10 h-10 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center transition-all hover:bg-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30">
                <i className="fa-brands fa-facebook-f text-blue-300 hover:text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center transition-all hover:bg-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30">
                <i className="fa-brands fa-twitter text-blue-300 hover:text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center transition-all hover:bg-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30">
                <i className="fa-brands fa-instagram text-blue-300 hover:text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center transition-all hover:bg-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30">
                <i className="fa-brands fa-linkedin-in text-blue-300 hover:text-white"></i>
              </a>
            </div>
          </section>

          {/* Right Section - Spline 3D Element Holder with background image */}
          <section
            className="w-full md:w-3/5 relative min-h-[500px] md:min-h-[600px] bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: "url('/public/e.jpg')" }} // Replace with your image
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gray-900/60 z-0"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20 z-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            {/* Spline 3D Element Holder */}
            <div id="spline-container" className="w-full h-full absolute inset-0 z-10">
              {/* Add Spline viewer here */}
            </div>
            
            {/* Placeholder text */}
            <div className="text-center text-blue-300/50 absolute z-0 pointer-events-none">
              <div className="text-xl font-light mb-4">3D Spline Element</div>
              <div className="text-sm">Your immersive 3D experience will appear here</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ContactSection;
