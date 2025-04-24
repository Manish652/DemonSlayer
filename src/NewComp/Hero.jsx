import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas} from '@react-three/fiber';
import { Sparkles } from "@react-three/drei";
import Blood from './Blood';

function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('./image/hero.jpg')", 
          filter: "brightness(0.4)" // Darkens the image to make content more visible
        }}
      />

      {/* 3D Sparkles Background */}
      <div className="absolute inset-0 z-10">
        <Canvas>
        <Sparkles count={40} scale={5} size={3} speed={1} color="red" />
       
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ... rest of your existing hero content ... */}
          <motion.div 
            className="relative inline-block mb-6"
            animate={{ rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-red-500 relative"
              animate={{ 
                textShadow: ["0 0 8px rgba(239, 68, 68, 0.7)", "0 0 16px rgba(239, 68, 68, 0.9)", "0 0 8px rgba(239, 68, 68, 0.7)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
                           

              鬼滅の刃
            </motion.h1>
            <motion.div
              className="absolute -inset-2 rounded-lg opacity-20"
              animate={{ 
                boxShadow: ["0 0 20px rgba(239, 68, 68, 0.7)", "0 0 40px rgba(239, 68, 68, 0.9)", "0 0 20px rgba(239, 68, 68, 0.7)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
             {/* <Blood/> */}
          </motion.div>

          {/* Rest of your existing content */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-8 relative inline-block"
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

          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
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
              className="relative bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold overflow-hidden group"
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
              className="relative border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold overflow-hidden group"
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
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;