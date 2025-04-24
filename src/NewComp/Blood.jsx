import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Blood() {
  const [bloodDrops, setBloodDrops] = useState([])
  
  // Randomly generate new blood drops
  useEffect(() => {
    const interval = setInterval(() => {
      if (bloodDrops.length < 15) {
        const newDrop = {
          id: Math.random().toString(),
          size: Math.random() * 5 + 2,
          left: Math.random() * 100,
          top: Math.random() * 40,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 0.5
        }
        setBloodDrops(prev => [...prev, newDrop])
      }
    }, 800)
    
    return () => clearInterval(interval)
  }, [bloodDrops])
  
  // Remove blood drops after animation
  const removeDrop = (id) => {
    setBloodDrops(prev => prev.filter(drop => drop.id !== id))
  }

  return (
    <>
      {/* Intense pulsing blood core */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 z-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(220,20,20,0.9) 0%, rgba(180,10,10,0.4) 40%, rgba(120,0,0,0) 70%)',
          boxShadow: '0 0 30px 5px rgba(220,20,20,0.3)'
        }}
        animate={{
          scale: [1, 1.3, 1.1, 1.4, 1],
          opacity: [0.6, 0.8, 0.7, 0.9, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      />
      
      {/* Vein-like tendrils */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`vein-${i}`}
          className="absolute top-1/2 left-1/2 h-2 -translate-x-1/2 -translate-y-1/2 origin-left z-10"
          style={{
            width: `${100 + i * 30}px`,
            background: 'linear-gradient(90deg, rgba(180,0,0,0.8) 0%, rgba(120,0,0,0.4) 70%, rgba(100,0,0,0) 100%)',
            transform: `rotate(${i * 60}deg)`,
            filter: 'blur(2px)'
          }}
          animate={{
            scaleX: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.7, 0.9, 0.6, 0.8, 0.7],
          }}
          transition={{
            duration: 3.5 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Blood streak effect (intensified) */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(220,38,38,0) 0%, rgba(220,20,20,0.15) 50%, rgba(180,10,10,0) 100%)',
          filter: 'blur(12px)'
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      
      {/* Secondary blood wave */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(180,10,10,0) 0%, rgba(220,20,20,0.1) 50%, rgba(180,10,10,0) 100%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Blood splatter particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`splatter-${i}`}
            className="absolute rounded-full bg-red-700"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.8
            }}
            animate={{
              scale: [0, 1, 1.2, 1],
              opacity: [0, 0.8, 0.7, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.7,
              repeatDelay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      {/* Dynamic blood dripping effect */}
      {bloodDrops.map(drop => (
        <motion.div
          key={drop.id}
          className="absolute bg-red-700 rounded-full z-20"
          style={{
            width: `${drop.size}px`,
            height: `${drop.size * 1.2}px`,
            left: `${drop.left}%`,
            top: `${drop.top}%`,
            filter: 'blur(1px)',
          }}
          initial={{ y: 0, opacity: 0.8, borderRadius: '50%' }}
          animate={{
            y: [0, window.innerHeight],
            opacity: [0.8, 0.9, 0],
            scaleY: [1, 1.5, 1.8],
            borderRadius: ['50%', '30% 30% 50% 50%', '20% 20% 40% 40%']
          }}
          transition={{
            duration: drop.duration,
            ease: "easeIn",
            delay: drop.delay,
          }}
          onAnimationComplete={() => removeDrop(drop.id)}
        />
      ))}
      
      {/* Pulsing heartbeat effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(180,0,0,0.6) 0%, rgba(150,0,0,0) 70%)',
        }}
        animate={{
          scale: [1, 1.6, 1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 1]
        }}
      />
      
      {/* Blood mist */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix in=\'colorNoise\' type=\'matrix\' values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          opacity: 0.03,
          mixBlendMode: 'multiply'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  )
}

export default Blood