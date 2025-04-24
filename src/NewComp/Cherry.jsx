import React from 'react'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Cherry() {
  return (
    <>
     {/* Cherry Blossom Particles */}
            <div className="absolute inset-0 z-10">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-pink-300 opacity-70"
                  style={{
                    width: 4 + Math.random() * 6,
                    height: 4 + Math.random() * 6,
                  }}
                  initial={{ 
                    x: Math.random() * window.innerWidth, 
                    y: -20,
                    rotate: 0
                  }}
                  animate={{ 
                    y: window.innerHeight + 20,
                    x: i % 2 === 0 ? `+=${Math.random() * 200}` : `-=${Math.random() * 200}`,
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 5 + Math.random() * 10, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5
                  }}
                />
              ))}
            </div>
    
    </>
  )
}

export default Cherry