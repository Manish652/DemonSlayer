import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Nav({ mobileMenuOpen, setMobileMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth"
      });
    }
  };

  // Handle nav click

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "characters", "breathing-styles", "join", "gallery"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };


  const navItems = ["Home", "Characters", "Breathing-styles", "Join", "Gallery"];

  return (
    <>
    
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => {
          const sectionId = item.toLowerCase();

          return (
            <motion.a
              key={item}
              href={`#${sectionId}`}
              className={`relative text-lg ${
                activeSection === sectionId 
                  ? 'text-red-500 font-bold' 
                  : 'text-white hover:text-red-400 transition-colors duration-300'
              }`}
              onClick={(e) => handleNavClick(sectionId, e)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item}
              {activeSection === sectionId && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                  layoutId="navIndicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          );
        })}
        <motion.button
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-md font-semibold"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)" }}
          whileTap={{ scale: 0.95 }}
        >
          Join Corps
        </motion.button>
      </nav>

      {/* Mobile Menu Toggle */}
      <motion.button
        className="md:hidden text-white z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle mobile menu"
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-95 z-40 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase().replace(' ', '-');
                return (
                  <motion.a
                    key={item}
                    href={`#${sectionId}`}
                    className={`text-2xl font-medium text-center ${
                      activeSection === sectionId 
                        ? 'text-red-500' 
                        : 'text-white'
                    }`}
                    onClick={(e) => handleNavClick(sectionId, e)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
                );
              })}
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-3 rounded-md font-semibold mt-6 w-full max-w-xs mx-auto"
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)" }}
                whileTap={{ scale: 0.95 }}
              >
                Join Corps
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;

