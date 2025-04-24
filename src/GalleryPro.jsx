import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  "./call8.png",
  "./coll1.jpeg",
  "./coll2.jpeg",
  "./call7.png",
  "./call6.png",
  "./coll2.jpeg",
  "./call8.png",
  "./call5.png",
  "./coll2.jpeg",
  "./call10.jpeg",
  "./call10.jpeg",
  "./call8.png",
  "./call6.png",
  "./call8.png",
];

// Background images for auto-sliding
const backgroundImages = [
  "./call6.png",
  "./call8.png",
  "./coll2.jpeg",
  "./coll1.jpeg",
];

const imageCaptions = [
  "Finals Week at the Library",
  "Spring Break Getaway",
  "Campus Hackathon Event",
  "Fall Orientation Activities",
  "Graduation Ceremony",
  "Late Night Study Session",
  "College Sports Championship",
  "Move-in Day at the Dorms"
];

const departments = [
  { name: "Computer Science", color: "#3b82f6", icon: "💻" },
  { name: "Business", color: "#eab308", icon: "📊" },
  { name: "Engineering", color: "#ef4444", icon: "🔧" },
  { name: "Arts & Design", color: "#10b981", icon: "🎨" },
  { name: "Liberal Arts", color: "#8b5cf6", icon: "📚" }
];

function GalleryPro() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const mouseRef = useRef(null);
  
  // Auto slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change background every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
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

  const navigateImage = (newIndex) => {
    const oldIndex = selectedImage;
    setDirection(newIndex > oldIndex ? 1 : -1);
    setSelectedImage(newIndex);
  };

  const nextImage = () => navigateImage((selectedImage + 1) % images.length);
  const prevImage = () => navigateImage((selectedImage - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImage]);

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
      className="py-20 relative w-full min-h-screen overflow-hidden"
      ref={mouseRef}
    >
      {/* Auto-sliding background images */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentBgIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url('${backgroundImages[currentBgIndex]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className="absolute text-8xl font-bold"
            style={{ 
              color: dept.color,
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
            {dept.icon}
          </motion.div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-48 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-2 bg-blue-400 rounded-full"
            style={{
              left: `${5 + i * 10}%`,
              height: `${5 + Math.random() * 15}px`,
              opacity: 0.7 - (i % 3) * 0.2,
              backgroundColor: departments[i % departments.length].color
            }}
            animate={{
              y: ["0%", "1000%"],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              repeatDelay: 3 + i * 2,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            <span className="relative inline-block">
              Campus Life Gallery
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-white"
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
            Relive the most memorable moments of college life through our curated photo collection
          </motion.p>
        </motion.div>

        {isLoading && (
          <motion.div 
            className="flex justify-center items-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="w-16 h-16 border-4 border-t-white border-white/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Masonry-style grid layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {images.map((src, index) => {
            // Create a more dynamic layout with varying sizes
            const isLarge = index === 0 || index === 3 || index === 7 || index === 11;
            const isWide = index === 2 || index === 8;
            const isTall = index === 5 || index === 10;
            
            let gridClass = '';
            
            if (isLarge) {
              gridClass = 'sm:col-span-2 sm:row-span-2';
            } else if (isWide) {
              gridClass = 'sm:col-span-2';
            } else if (isTall) {
              gridClass = 'sm:row-span-2';
            }
            
            return (
              <motion.div
                key={index}
                className={`relative group overflow-hidden rounded-xl cursor-pointer shadow-lg border border-white/10 ${gridClass}`}
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
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => {
                  setSelectedImage(index);
                  setLightboxOpen(true);
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-xl aspect-square">
                  <motion.img
                    src={src}
                    alt={`College Scene ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    className="absolute bottom-0 left-0 w-full p-4 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <h3 className="font-bold text-lg">{imageCaptions[index % imageCaptions.length]}</h3>
                    <div className="flex items-center mt-2">
                      <motion.span
                        className="text-xs px-2 py-1 rounded-full text-white mr-2"
                        style={{ 
                          backgroundColor: departments[index % departments.length].color + "80"
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {departments[index % departments.length].name}
                      </motion.span>
                      <motion.span 
                        className="text-white text-sm flex items-center"
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
                  
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                    style={{ 
                      borderColor: departments[index % departments.length].color
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
                className="relative max-w-7xl w-full mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video bg-transparent rounded-xl overflow-hidden shadow-2xl">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={selectedImage}
                      src={images[selectedImage]}
                      alt={imageCaptions[selectedImage % imageCaptions.length]}
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
                  className="absolute -top-4 -right-4 text-white bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
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

                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                  <motion.button
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white pointer-events-auto flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white pointer-events-auto flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>

                <motion.div 
                  className="absolute -bottom-16 left-0 w-full flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    {images.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`w-2 h-2 rounded-full ${selectedImage === index ? 'bg-white shadow-lg shadow-white/50' : 'bg-gray-500'}`}
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

                <motion.div 
                  className="mt-8 text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-white">{imageCaptions[selectedImage % imageCaptions.length]}</span>
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto text-sm">
                    {`Campus moment ${selectedImage + 1} captures the vibrant energy and diverse experiences of college life. 
                    These memories showcase the community and academic excellence in our ${departments[selectedImage % departments.length].name} program.`}
                  </p>
                  
                  <motion.div 
                    className="mt-4 flex justify-center"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span 
                      className="px-3 py-1 rounded-full text-sm flex items-center"
                      style={{ 
                        backgroundColor: departments[selectedImage % departments.length].color + "30",
                        color: "white"
                      }}
                    >
                      <span className="mr-2 font-bold text-lg">
                        {departments[selectedImage % departments.length].icon}
                      </span>
                      {departments[selectedImage % departments.length].name}
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

export default GalleryPro;