import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Image carousel state
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const heroRef = useRef(null);
  const textRef = useRef(null);
  
  // Array of background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000",  // College campus
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000",  // Students studying
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2000",  // Modern university building
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000"   // Students collaborating
  ];
  
  // Text typing effect phrases
  const textPhrases = [
    "Transform Your Future",
    "Discover Your Potential",
    "Unlock New Opportunities",
    "Achieve Excellence"
  ];

  // Auto-typing text effect
  useEffect(() => {
    const phrase = textPhrases[currentTextIndex];
    let currentCharIndex = 0;
    let typingInterval;
    let isDeleting = false;
    let pauseBeforeDelete = false;
    
    const type = () => {
      if (!isDeleting && !pauseBeforeDelete) {
        // Typing forward
        if (currentCharIndex < phrase.length) {
          setTypedText(phrase.substring(0, currentCharIndex + 1));
          currentCharIndex++;
        } else {
          // Pause before starting to delete
          pauseBeforeDelete = true;
          clearInterval(typingInterval);
          setTimeout(() => {
            pauseBeforeDelete = false;
            isDeleting = true;
            typingInterval = setInterval(type, 75);
          }, 1500);
        }
      } else if (isDeleting) {
        // Deleting text
        if (currentCharIndex > 0) {
          setTypedText(phrase.substring(0, currentCharIndex - 1));
          currentCharIndex--;
        } else {
          // Move to next phrase
          isDeleting = false;
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textPhrases.length);
          clearInterval(typingInterval);
        }
      }
    };
    
    typingInterval = setInterval(type, isDeleting ? 75 : 150);
    
    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  // Auto-advance image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // GSAP animations for text reveal
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      textRef.current.querySelectorAll('.animate-in'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 1, 
        ease: 'power3.out' 
      }
    );

    // Create a subtle parallax effect on scroll
    gsap.to('.parallax-bg', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 200,
      scale: 1.1,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Programs", link: "#programs" },
    { name: "Campus Life", link: "#campus" },
    { name: "Admissions", link: "#admissions" },
    { name: "Research", link: "#research" },
    { name: "About Us", link: "#about" }
  ];

  return (
    <div 
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden"
      id="home"
    >
      {/* Cool Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent pointer-events-none h-32"></div>
        
        <nav className="container mx-auto px-6 py-6 relative flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur"></div>
              <div className="relative bg-black rounded p-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">EXCELSIOR</span>
              </div>
            </div>
            <div className="hidden md:block ml-2 text-white opacity-75 text-sm uppercase tracking-widest">UNIVERSITY</div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="relative px-4 py-2 text-white group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover="hover"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  variants={{
                    hover: { width: "100%", transition: { duration: 0.3 } }
                  }}
                ></motion.span>
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden md:flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Search
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Login
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center"
            >
              <div className="relative w-10 h-10 flex justify-center items-center">
                <span className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-white transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/80 backdrop-blur-lg border-t border-white/10"
            >
              <div className="container mx-auto px-6 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="block py-3 text-white border-b border-white/10 hover:bg-white/5 px-4 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="py-4 flex justify-center">
                  <button className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium">
                    Login
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Background image carousel with ken burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 1, 
              scale: 1.05,
              transition: { duration: 1.5, ease: 'easeOut' } 
            }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute inset-0 w-full h-full"
          >
            <div 
              className="absolute inset-0 parallax-bg bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${backgroundImages[currentImage]})`,
                backgroundSize: 'cover'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-black/80" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-blue-500/10">
          <div className="absolute w-full h-full backdrop-blur-[1px]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/20 backdrop-blur-md"
                  style={{
                    width: `${Math.random() * 200 + 100}px`,
                    height: `${Math.random() * 200 + 100}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * 100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{
                    duration: Math.random() * 20 + 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center pt-16">
        <div className="w-full max-w-4xl mx-auto" ref={textRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block px-6 py-2 bg-blue-500 bg-opacity-20 backdrop-blur-md rounded-full border border-blue-300/30 text-blue-100 font-medium text-sm tracking-wider animate-in">
              ADMISSIONS OPEN FOR 2025
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="animate-in block">Elevate Your</span>
            <span className="animate-in block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
              {typedText}<span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="animate-in text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
            Join our vibrant community of innovators and leaders. Discover world-class 
            facilities, cutting-edge research opportunities, and a supportive 
            environment designed to help you thrive.
          </p>

          <div className="animate-in flex flex-wrap gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 transition-all duration-300"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-transparent backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-lg transition-all duration-300"
            >
              Explore Programs
            </motion.button>
          </div>

          {/* Stats cards with hover effects */}
          <div className="animate-in grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { number: '#1', text: 'In Student Satisfaction', icon: '🏆' },
              { number: '94%', text: 'Graduate Employment Rate', icon: '📈' },
              { number: '120+', text: 'Countries Represented', icon: '🌎' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
                }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.text}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down arrow with animation */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </motion.div>

      {/* Video play button */}
      <div className="absolute top-24 right-8 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-blue-600 border-b-4 border-b-transparent ml-0.5"></div>
          </div>
          <span>Watch Campus Tour</span>
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;