import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./NewComp/Hero";
import Feature from "./NewComp/Feature";
import Gallery from "./NewComp/Gallery";
import Footer from "./NewComp/Footer";
import customStyles from "./NewComp/style";
import Sword from "./NewComp/Sword";
import Cherry from "./NewComp/Cherry";
import Scroll from "./NewComp/Scroll";
import Blood from "./NewComp/Blood";
import Nav from "./NewComp/Nav";
import BreathingStylesSection from './NewComp/BreathingStylesSection'
import Join from "./NewComp/Join";
function DemonSlayerLanding(){
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black py-2 shadow-lg' : 'bg-transparent py-4'}`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center breathe-effect">
              <span className="text-xl font-bold">鬼</span>
            </div>
            <span className="text-xl font-bold">Demon Slayer</span>
          </motion.div>
          
          <Cherry />
          
          <Nav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />         
        </div>
      </motion.header>
      
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <Blood /> */}
        <Sword />
        <Hero />
        <Blood/>
        <Scroll />
      </section>
      
      <section id="features"><Feature /></section>
      <section id="breathing-styles"> <BreathingStylesSection/></section>
      <section id="join"><Join /></section>
      <section id="gallery"><Gallery /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default DemonSlayerLanding;