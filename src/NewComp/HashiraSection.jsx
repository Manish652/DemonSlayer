import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const hashiraData = [
  { 
    name: "Giyu Tomioka", 
    title: "Water Hashira", 
    color: "#3b82f6", 
    image: "/image/gu.jpg",
    element: "水",
    quote: "Don't let yourself be controlled by regret."
  },
  { 
    name: "Shinobu Kocho", 
    title: "Insect Hashira", 
    color: "#8b5cf6", 
    image: '/image/sinobu.jpg',
    element: "蟲",
    quote: "Even if I'm not strong, I can still fight."
  },
  { 
    name: "Kyojuro Rengoku", 
    title: "Flame Hashira", 
    color: "#f59e0b", 
    image: '/image/ren.jpg',
    element: "炎",
    quote: "Set your heart ablaze!"
  },
  { 
    name: "Tengen Uzui", 
    title: "Sound Hashira", 
    color: "#ec4899", 
    image: '/image/Muichiro.jpg',
    element: "音",
    quote: "I am the god of flashiness!"
  },
  { 
    name: "Mitsuri Kanroji", 
    title: "mis", 
    color: "#10b981", 
    image: '/image/mis.jpg',
    element: "恋",
    quote: "Love is the strongest thing in the world!"
  },
  { 
    name: "Obanai Iguro", 
    title: "Serpent Hashira", 
    color: "#6366f1", 
    image: '/image/obni.jpg',
    element: "蛇",
    quote: "I'll crush any demon that stands in my way."
  },
];

// Element Symbol with animated glow effect
const ElementSymbol = ({ element, color }) => {
  return (
    <div className="relative">
      <motion.div 
        className="text-3xl font-bold absolute -translate-x-1/2 -translate-y-1/2"
        style={{ color: color }}
        animate={{ 
          textShadow: [`0 0 5px ${color}`, `0 0 15px ${color}`, `0 0 5px ${color}`] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {element}
      </motion.div>
    </div>
  );
};

// Individual Hashira Card Component
const HashiraCard = ({ hashira, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden relative shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: `0 20px 40px -12px ${hashira.color}60`
      }}
    >
      {/* Card Image */}
      <div className="relative h-64 bg-gray-800 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hashira.image})` }}
          animate={{
            scale: hovered ? 1.1 : 1,
            filter: hovered ? 'brightness(0.9)' : 'brightness(0.7)'
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Element Symbol */}
        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center">
          <ElementSymbol element={hashira.element} color={hashira.color} />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
        
        {/* Bottom Accent Line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1"
          style={{ backgroundColor: hashira.color }}
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-1"
          style={{ color: hashira.color }}
          animate={{
            textShadow: hovered ? `0 0 8px ${hashira.color}80` : '0 0 0px transparent'
          }}
          transition={{ duration: 0.3 }}
        >
          {hashira.name}
        </motion.h3>
        <p className="text-gray-300 font-medium text-sm">{hashira.title}</p>
        
        <motion.p 
          className="mt-4 text-gray-300 italic text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.3 + index * 0.15 }}
        >
          "{hashira.quote}"
        </motion.p>
        
        <motion.button
          className="mt-4 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all"
          style={{ 
            backgroundColor: `${hashira.color}20`,
            color: hashira.color
          }}
          whileHover={{ 
            backgroundColor: `${hashira.color}30`,
            boxShadow: `0 0 15px ${hashira.color}60`
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Details</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
      
      {/* Glow Effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500"
        style={{ 
          boxShadow: `0 0 40px 8px ${hashira.color}40`,
          zIndex: -1
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
      />
    </motion.div>
  );
};

// Section Title with animated gradient
const SectionTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl md:text-6xl font-bold relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400"
        animate={{ 
          backgroundPosition: ['0% center', '100% center', '0% center'] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        The Legendary Hashira
      </motion.h2>
      
      <motion.div
        className="relative mt-6"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-amber-400 mx-auto" />
        <motion.div 
          className="absolute inset-0 bg-white blur-sm"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      
      <motion.p
        className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        The strongest Demon Slayers who each master a unique breathing style.
        Discover their powers and stories.
      </motion.p>
    </motion.div>
  );
};

// Decorative background elements
const BackgroundEffects = () => {
  // Define an array with just red and blue colors
  const colors = ['#ef4444', '#3b82f6'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            backgroundColor: colors[i % colors.length],
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 10,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const HashiraSection = () => {
  return (
    <section id="characters" className="py-20 px-4 relative overflow-hidden bg-gray-950">
      {/* Decorative Background */}
      <BackgroundEffects />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <SectionTitle />
        
        {/* Hashira Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hashiraData.map((hashira, index) => (
            <HashiraCard key={index} hashira={hashira} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HashiraSection;