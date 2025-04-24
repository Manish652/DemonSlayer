import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginSignupForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [showCourseDetails, setShowCourseDetails] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleToggle = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const toggleCourseDetails = (e) => {
    e.preventDefault();
    setShowCourseDetails(!showCourseDetails);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your authentication logic here
  };

  const courseDetailsContent = (
    <div className="mt-4 p-6 bg-[rgba(15,76,129,0.2)] rounded-lg border border-[#3a6ea5]">
      <h3 className="text-2xl text-white font-bold mb-4">Course Details</h3>
      <div className="space-y-3 text-gray-300">
        <p><strong>Course Name:</strong> Advanced Web Development</p>
        <p><strong>Duration:</strong> 12 Weeks</p>
        <p><strong>Topics Covered:</strong></p>
        <ul className="list-disc pl-6">
          <li>React & Advanced Concepts</li>
          <li>Node.js & Express</li>
          <li>Database Integration</li>
          <li>Authentication Systems</li>
          <li>Cloud Deployment</li>
        </ul>
        <p><strong>Requirements:</strong> Basic HTML/CSS/JS knowledge</p>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#050a14] to-[#07101d] p-4">
      <div 
        className="wrapper relative w-full max-w-[1100px] h-[650px] bg-[rgba(5,14,29,0.9)] border-2 border-[#0f4c81] rounded-3xl mx-auto overflow-hidden shadow-[0_0_45px_rgba(15,76,129,0.8)]"
      >
        {/* Animated background element */}
        <motion.div 
          className="absolute top-0 right-0 w-[1200px] h-[800px] bg-gradient-to-tr from-[#050d1f] to-[#0f4c81] border-b-[3px] border-[#0f4c81] origin-bottom-right"
          animate={{ 
            rotate: isActive ? 0 : 8,
            skewY: isActive ? 100 : 45,
            backgroundColor: isActive ? 'rgba(0,0,0,0.7)' : ''
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        ></motion.div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-[#3a6ea5] rounded-full opacity-30"
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Login Form */}
        <motion.div 
          className="absolute top-0 w-1/2 h-full flex flex-col left-0 pt-12 pr-[80px] pb-0 pl-[60px]"
          initial={false}
          animate={{
            x: isActive ? '-120%' : 0,
            opacity: isActive ? 0 : 1
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 className="text-5xl font-bold text-white mt-8 mb-10 relative after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:w-28 after:h-1 after:bg-[#3a6ea5]">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="relative w-full h-[65px] my-10 mx-0 group">
              <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required 
                className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-2xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
              />
              <label className="absolute top-1/2 left-3 text-2xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                Username
              </label>
              <i className="fa-solid fa-user absolute top-1/2 right-3 text-2xl text-gray-400 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[#3a6ea5]"></i>
            </div>
            
            <div className="relative w-full h-[65px] my-10 mx-0 group">
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required 
                className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-2xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
              />
              <label className="absolute top-1/2 left-3 text-2xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                Password
              </label>
              <i className="fa-solid fa-lock absolute top-1/2 right-3 text-2xl text-gray-400 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[#3a6ea5]"></i>
            </div>
            
            <button 
              type="submit" 
              className="relative w-full h-[60px] bg-transparent border-2 border-[#0f4c81] outline-0 rounded-full cursor-pointer text-2xl font-bold text-white overflow-hidden mt-10 group hover:text-black transition-colors duration-300"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Sign In</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0f4c81] to-[#3a6ea5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </button>
            
            <div className="text-xl text-white text-center mt-8">
              <p>Don't have an account? <a href="#" onClick={handleToggle} className="text-[#3a6ea5] font-bold hover:underline transition-all duration-300">Sign Up</a></p>
            </div>
          </form>
        </motion.div>
        
        {/* Login Info */}
        <motion.div 
          className="absolute top-0 w-[45%] h-full right-0 flex flex-col justify-center text-right pt-0 pr-[30px] pb-[80px] pl-[40px]"
          initial={false}
          animate={{
            x: isActive ? '120%' : 0,
            opacity: isActive ? 0 : 1
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 className="text-[52px] font-bold text-white leading-tight">Welcome <span className="text-[#3a6ea5]">Back!</span></h2>
          <p className="text-gray-300 text-2xl w-[90%] ml-auto text-right mt-6 leading-relaxed">
            Enter your personal details and start your journey with us. We're excited to have you back!
          </p>
          
          <div className="flex justify-end space-x-5 mt-12">
            <a href="#" className="w-14 h-14 bg-transparent border border-[#3a6ea5] rounded-full flex items-center justify-center transition-all hover:bg-[#3a6ea5] hover:text-black duration-300">
              <i className="fa-brands fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-transparent border border-[#3a6ea5] rounded-full flex items-center justify-center transition-all hover:bg-[#3a6ea5] hover:text-black duration-300">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-transparent border border-[#3a6ea5] rounded-full flex items-center justify-center transition-all hover:bg-[#3a6ea5] hover:text-black duration-300">
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
          </div>
        </motion.div>
        
        {/* Signup Form */}
        <motion.div 
          className="absolute top-0 w-[100%] h-full flex flex-col p-[50px] overflow-y-auto"
          initial={false}
          animate={{
            x: isActive ? 0 : '120%',
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="max-w-[600px] mx-auto">
            <h2 className="text-5xl font-bold text-white mb-12 text-center relative after:content-[''] after:absolute after:bottom-[-15px] after:left-1/2 after:translate-x-[-50%] after:w-28 after:h-1 after:bg-[#3a6ea5]">
              Create <span className="text-[#3a6ea5]">Account</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative w-full h-[65px] group">
                  <input 
                    type="text"
                    name="firstName"
                    required 
                    className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
                  />
                  <label className="absolute top-1/2 left-3 text-xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                    First Name
                  </label>
                </div>
                
                <div className="relative w-full h-[65px] group">
                  <input 
                    type="text"
                    name="lastName"
                    required 
                    className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
                  />
                  <label className="absolute top-1/2 left-3 text-xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                    Last Name
                  </label>
                </div>
              </div>
              
              <div className="relative w-full h-[65px] mt-8 group">
                <input 
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required 
                  className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
                />
                <label className="absolute top-1/2 left-3 text-xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                  Username
                </label>
                <i className="fa-solid fa-user absolute top-1/2 right-3 text-xl text-gray-400 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[#3a6ea5]"></i>
              </div>
              
              <div className="relative w-full h-[65px] mt-8 group">
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
                />
                <label className="absolute top-1/2 left-3 text-xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                  Email Address
                </label>
                <i className="fa-solid fa-envelope absolute top-1/2 right-3 text-xl text-gray-400 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[#3a6ea5]"></i>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="relative w-full h-[65px] group">
                  <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required 
                    className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
                  />
                  <label className="absolute top-1/2 left-3 text-xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                    Password
                  </label>
                  <i className="fa-solid fa-lock absolute top-1/2 right-3 text-xl text-gray-400 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[#3a6ea5]"></i>
                </div>
                
                <div className="relative w-full h-[65px] group">
                  <input 
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required 
                    className="w-full h-full bg-transparent outline-0 border-b-2 border-[#3a6ea5] text-xl px-3 transition duration-300 text-white focus:border-[#0f4c81] valid:border-[#0f4c81]" 
                  />
                  <label className="absolute top-1/2 left-3 text-xl text-gray-400 pointer-events-none -translate-y-1/2 transition-all duration-300 group-focus-within:top-[-12px] group-focus-within:text-sm group-focus-within:text-[#3a6ea5]">
                    Confirm Password
                  </label>
                  <i className="fa-solid fa-check-double absolute top-1/2 right-3 text-xl text-gray-400 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[#3a6ea5]"></i>
                </div>
              </div>
              
              <div className="flex items-center mt-8">
                <input 
                  type="checkbox" 
                  id="terms" 
                  required
                  className="w-5 h-5 accent-[#3a6ea5]" 
                />
                <label htmlFor="terms" className="ml-3 text-gray-300">
                  I agree to the {' '}
                  <a href="#" className="text-[#3a6ea5] hover:underline">Terms & Conditions</a> {' '}
                  and {' '}
                  <a 
                    href="#" 
                    onClick={toggleCourseDetails} 
                    className="text-[#3a6ea5] hover:underline"
                  >
                    {showCourseDetails ? 'Hide' : 'Show'} Course Details
                  </a>
                </label>
              </div>

              <AnimatePresence>
                {showCourseDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {courseDetailsContent}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="flex justify-center mt-12">
                <button 
                  type="submit" 
                  className="relative px-12 py-4 bg-transparent border-2 border-[#0f4c81] outline-0 rounded-full cursor-pointer text-2xl font-bold text-white overflow-hidden group hover:text-black transition-colors duration-300"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">Sign Up</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0f4c81] to-[#3a6ea5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                </button>
              </div>
              
              <div className="text-xl text-white text-center mt-8">
                <p>Already have an account? <a href="#" onClick={handleToggle} className="text-[#3a6ea5] font-bold hover:underline transition-all duration-300">Sign In</a></p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      
      {/* CSS for floating particles animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-25px) translateX(15px);
          }
          50% {
            transform: translateY(0) translateX(30px);
          }
          75% {
            transform: translateY(25px) translateX(15px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginSignupForm;