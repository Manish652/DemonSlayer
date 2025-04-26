import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { Sparkles } from "@react-three/drei";

function Hero() {
  const images = [
    "./h.png",
    "./o.jpg",
    "./image/hero.jpg",
    "z.jpg",
    "p.png",
    "f.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images for smoother transitions
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    setIsLoading(false);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changed to 5 seconds for better viewing experience

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images[currentImageIndex]}')`,
            filter: "brightness(0.4)",
          }}
        />
      </AnimatePresence>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/30 to-black/70 opacity-70" />

      {/* Sparkles */}
      <div className="absolute inset-0 z-10">
        <Canvas>
          <Sparkles 
            count={100} 
            scale={6} 
            size={4} 
            speed={0.8} 
            color="red" 
          />
        </Canvas>
      </div>

      {/* Image Number Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full ${currentImageIndex === index ? 'w-8 bg-red-500' : 'w-2 bg-white/40'}`}
            animate={{ scale: currentImageIndex === index ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setCurrentImageIndex(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* Text & Buttons */}
      <div className="relative z-20 text-center px-4 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Japanese Title with Floating Effect */}
          <motion.div 
            className="relative inline-block mb-8"
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-red-500 relative"
              animate={{ 
                textShadow: [
                  "0 0 8px rgba(239, 68, 68, 0.7)", 
                  "0 0 20px rgba(239, 68, 68, 0.9)", 
                  "0 0 8px rgba(239, 68, 68, 0.7)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              鬼滅の刃
            </motion.h1>
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-20"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.7)", 
                  "0 0 40px rgba(239, 68, 68, 0.9)", 
                  "0 0 20px rgba(239, 68, 68, 0.7)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* English Title with Line Animation */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-10 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="relative z-10">Demon Slayer</span>
            <motion.span
              className="absolute left-0 bottom-0 w-full h-1 bg-red-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.h2>

          {/* Tagline with Text Reveal */}
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Join the Corps. Slay demons. Protect humanity.
          </motion.p>

          {/* Hero Buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button
              className="relative bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Begin Your Journey</span>
              <motion.div
                className="absolute inset-0 bg-red-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              className="relative border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Watch Trailer</span>
              <motion.div
                className="absolute inset-0 bg-white bg-opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
          
          {/* Scroll Down Indicator */}
         
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;