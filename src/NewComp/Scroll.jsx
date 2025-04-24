import React from 'react'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Scroll() {
  return (
    <>
     {/* Scroll Indicator */}
     <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
        
          <motion.div
            className="flex flex-col items-center space-y-2"
            whileHover={{ scale: 1.2 }}>
           
            <span className="text-sm font-light text-gray-300">Scroll to explore</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
    
    </>
  )
}

export default Scroll