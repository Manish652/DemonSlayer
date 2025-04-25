import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber'; // Add this import
import { Sparkles, OrbitControls } from "@react-three/drei";
function Join() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Floating particles effect
  const Particle = ({ initialX, initialY }) => {
    const particleRef = React.useRef();
    
    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      if (particleRef.current) {
        particleRef.current.position.x = initialX + Math.sin(time * 0.5 + initialX) * 0.5;
        particleRef.current.position.y = initialY + Math.cos(time * 0.5 + initialY) * 0.5;
        particleRef.current.position.z = Math.sin(time * 0.3) * 2;
      }
    });

    return (
      <mesh ref={particleRef} position={[initialX, initialY, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ff3f34" />
      </mesh>
    );
  };

  const ParticlesBackground = () => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * 10 - 5,
      y: Math.random() * 6 - 3,
    }));

    return (
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.3
        }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        {particles.map((pos, i) => (
          <Particle key={i} initialX={pos.x} initialY={pos.y} />
        ))}
              <Sparkles count={200} scale={5} size={3} speed={1} color="red" />
      </Canvas>
    );
  };

  return (
    <>
      {/* Call to Action */}
      <section id="join" className="py-32 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated background image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('e.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.2)"
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        {/* Particles background */}
        <ParticlesBackground />
        
        {/* Decorative glowing elements */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-red-600 mix-blend-overlay opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [-20, 20, -20],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-red-600 mix-blend-overlay opacity-15 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [20, -20, 20]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              Ready to Join the <span className="text-red-500">Demon Slayer Corps</span>?
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Sign up for exclusive content, fan theories, community events, and be the first to know about new releases!
            </motion.p>
            
            <motion.div
              className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-8 py-4 rounded-lg text-black w-full md:w-80 focus:outline-none focus:ring-4 focus:ring-red-500/50 text-lg shadow-lg transition-all duration-300"
                />
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 to-red-700 opacity-70 blur-md -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.button
                className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-xl hover:shadow-red-500/30 transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🗡️
                  </motion.span>
                  Join the Corps
                  <motion.span
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    🔥
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-400 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              By joining, you agree to our <a href="#" className="text-red-400 hover:underline">Terms of Service</a> and <a href="#" className="text-red-400 hover:underline">Privacy Policy</a>
            </motion.p>
          </div>
        </div>
        
        {/* Floating sword decoration */}
        <motion.div
          className="absolute bottom-10 right-10 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.92 5H17.08L18.92 7H5.08L6.92 5Z" fill="#ef4444"/>
            <path d="M5 7H19V9H5V7Z" fill="#ef4444"/>
            <path d="M11 9H13V20H11V9Z" fill="#ef4444"/>
            <path d="M9 20V22H15V20H9Z" fill="#ef4444"/>
          </svg>
        </motion.div>
      </section>
    </>
  );
}

export default Join;