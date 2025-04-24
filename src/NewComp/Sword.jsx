import React from 'react'
import { motion} from "framer-motion";
function Sword() {
  return (
    <>
    <div className="absolute inset-0 z-5 pointer-events-none">
              <motion.div
                className="absolute top-1/2 left-0 w-full h-1 bg-red-500 opacity-30"
                initial={{ scaleX: 0, x: "-100%" }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  x: ["-100%", "0%", "100%"],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 7
                }}
              />
              <motion.div
                className="absolute top-1/3 left-0 w-full h-1 bg-blue-500 opacity-30"
                initial={{ scaleX: 0, x: "100%" }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  x: ["100%", "0%", "-100%"],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 9,
                  delay: 3
                }}
              />
            </div>
    </>
  )
}

export default Sword