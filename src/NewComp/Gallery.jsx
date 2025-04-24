import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://i.pinimg.com/236x/ea/f1/aa/eaf1aae955781b68496ecd486593b856.jpg",
  "https://i.pinimg.com/236x/5d/f6/7c/5df67ca9e67b74e84398a0c071c5c50c.jpg",
  "https://i.pinimg.com/474x/2c/3a/a2/2c3aa28dc3c5420002a8238d8cb25aac.jpg",
  "https://i.pinimg.com/474x/87/43/e6/8743e6f81ca488f8c73715f314c5fb0f.jpg",
  "https://i.pinimg.com/474x/33/da/ba/33daba8d6f220e619c85d94716115340.jpg",
  "https://i.pinimg.com/474x/16/e5/33/16e533654077f6cd4375d3f031768cef.jpg",
  "https://i.pinimg.com/474x/5e/9a/8b/5e9a8b07ee30f9dd89f7abeed1faefc6.jpg",
  "https://i.pinimg.com/236x/35/7e/b4/357eb445b2f34b31f55dd45e1e25e48d.jpg",
];

// Image captions for better context
const imageCaptions = [
  "Tanjiro mastering Water Breathing",
  "Nezuko unleashing Blood Demon Art",
  "Zenitsu's Thunder Breathing technique",
  "Inosuke's Beast Breathing stance",
  "Rengoku's Flame Hashira power",
  "Muzan Kibutsuji, the Demon King",
  "Giyu Tomioka's calm determination",
  "Final Selection at Mt. Fujikasane"
];

// Breathing styles with colors
const breathingStyles = [
  { name: "Water Breathing", color: "#3b82f6", kanji: "水" },
  { name: "Thunder Breathing", color: "#eab308", kanji: "雷" },
  { name: "Flame Breathing", color: "#ef4444", kanji: "炎" },
  { name: "Beast Breathing", color: "#10b981", kanji: "獣" },
  { name: "Insect Breathing", color: "#8b5cf6", kanji: "蟲" }
];

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // For mouse parallax effect
  const mouseRef = useRef(null);
  
  // For preloading images
  React.useEffect(() => {
    const preloadImages = () => {
      const promises = images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      Promise.all(promises)
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    };
    
    preloadImages();
  }, []);

  // Navigate through images in lightbox
  const navigateImage = (newIndex) => {
    const oldIndex = selectedImage;
    setDirection(newIndex > oldIndex ? 1 : -1);
    setSelectedImage(newIndex);
  };

  // Go to next image
  const nextImage = () => {
    navigateImage((selectedImage + 1) % images.length);
  };

  // Go to previous image
  const prevImage = () => {
    navigateImage((selectedImage - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImage]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      ref={mouseRef}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {breathingStyles.map((style, index) => (
          <motion.div
            key={index}
            className="absolute text-8xl font-bold"
            style={{ 
              color: style.color,
              top: `${15 + index * 20}%`,
              left: `${10 + (index % 3) * 30}%`
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              x: [0, 10, 0],
              y: [0, -5, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {style.kanji}
          </motion.div>
        ))}
      </div>

      {/* Blood drips animation from top */}
      <div className="absolute top-0 left-0 w-full h-48 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-1 bg-red-600 rounded-b-full"
            style={{
              left: `${5 + i * 10}%`,
              height: `${20 + Math.random() * 80}px`,
              opacity: 0.7 - (i % 3) * 0.2
            }}
            animate={{
              height: ["0px", `${20 + Math.random() * 80}px`],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              repeatDelay: 3 + i * 2,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section title with animated underline */}
        <motion.div
          className="relative inline-block mb-16 mx-auto text-center w-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Demon Slayer Gallery
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Experience the most breathtaking moments from the Corps' battles against demons
          </motion.p>
        </motion.div>

        {/* Loading state with stylized spinner */}
        {isLoading && (
          <motion.div 
            className="flex justify-center items-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="w-16 h-16 border-4 border-t-red-500 border-red-200 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Image grid with masonry-like layout */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${
                index % 5 === 0 || index % 5 === 3 ? 'md:col-span-2 row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                damping: 15
              }}
              whileHover={{ 
                scale: 1.03,
                zIndex: 10,
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => {
                setSelectedImage(index);
                setLightboxOpen(true);
              }}
            >
              <div className="w-full h-full overflow-hidden rounded-lg">
                <motion.img
                  src={src}
                  alt={`Demon Slayer Scene ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Overlay gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Image caption */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full p-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="font-bold text-lg">{imageCaptions[index]}</h3>
                  <div className="flex items-center mt-2">
                    <motion.span
                      className="text-xs px-2 py-1 rounded-full text-white mr-2"
                      style={{ 
                        backgroundColor: breathingStyles[index % breathingStyles.length].color + "80"
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {breathingStyles[index % breathingStyles.length].name}
                    </motion.span>
                    <motion.span 
                      className="text-red-400 text-sm flex items-center"
                      initial={{ x: -5, opacity: 0 }}
                      animate={{ 
                        x: hoveredIndex === index ? 0 : -5,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ delay: 0.2 }}
                    >
                      View full
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.span>
                  </div>
                </motion.div>
                
                {/* Stylized border on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none"
                  style={{ 
                    borderColor: breathingStyles[index % breathingStyles.length].color
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Lightbox with animations and navigation */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxOpen(false)}
            >
              <motion.div
                className="relative max-w-5xl w-full mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Main image display */}
                <div className="relative aspect-video bg-transparent rounded-xl overflow-hidden shadow-2xl">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={selectedImage}
                      src={images[selectedImage]}
                      alt={imageCaptions[selectedImage]}
                      className="w-full h-full object-contain"
                      initial={{ 
                        opacity: 0, 
                        x: direction > 0 ? 100 : -100 
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ 
                        opacity: 0, 
                        x: direction > 0 ? -100 : 100 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  
                  <motion.div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.7) 100%)'
                    }}
                  />
                </div>
                
                <motion.button
                  className="absolute -top-4 -right-4 text-white bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(false);
                  }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Navigation buttons */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                  <motion.button
                    className="w-12 h-12 rounded-full bg-gray-900/70 text-white pointer-events-auto flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    className="w-12 h-12 rounded-full bg-gray-900/70 text-white pointer-events-auto flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>

                {/* Image indicators/thumbnails */}
                <motion.div 
                  className="absolute -bottom-16 left-0 w-full flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-3 bg-gray-900/60 px-4 py-2 rounded-full">
                    {images.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`w-2 h-2 rounded-full ${selectedImage === index ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-500'}`}
                        style={{
                          transform: selectedImage === index ? 'scale(1.5)' : 'scale(1)'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage(index);
                        }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Caption area */}
                <motion.div 
                  className="mt-8 text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-red-400">{imageCaptions[selectedImage]}</span>
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto text-sm">
                    {`Scene ${selectedImage + 1} displays the incredible animation and emotional depth that defines Demon Slayer. 
                    The intricate details and fluid motion capture the essence of ${breathingStyles[selectedImage % breathingStyles.length].name} technique.`}
                  </p>
                  
                  {/* Breathing style tag */}
                  <motion.div 
                    className="mt-4 flex justify-center"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span 
                      className="px-3 py-1 rounded-full text-sm flex items-center"
                      style={{ 
                        backgroundColor: breathingStyles[selectedImage % breathingStyles.length].color + "30",
                        color: breathingStyles[selectedImage % breathingStyles.length].color
                      }}
                    >
                      <span className="mr-2 font-bold text-lg">
                        {breathingStyles[selectedImage % breathingStyles.length].kanji}
                      </span>
                      {breathingStyles[selectedImage % breathingStyles.length].name}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Gallery;