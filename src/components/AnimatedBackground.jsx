import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // Create additional particles dynamically
    const particles = particlesRef.current;
    if (particles) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = 5 + Math.random() * 10 + 's';
        particle.style.width = 2 + Math.random() * 6 + 'px';
        particle.style.height = particle.style.width;
        particles.appendChild(particle);
      }
    }
  }, []);
  
  return (


    
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>
      {/* Waves */}
      <div 
        className="absolute w-[200%] h-[150%] opacity-70 top-[-20%] left-[-50%] transform rotate-[-2deg]"
        style={{ 
          background: 'linear-gradient(to right, transparent, rgba(56, 189, 248, 0.4), transparent)',
          animation: 'wave 12s infinite linear'
        }}
      />
      <div 
        className="absolute w-[200%] h-[150%] opacity-50 top-[-20%] left-[-50%] transform rotate-[3deg]"
        style={{ 
          background: 'linear-gradient(to right, transparent, rgba(56, 189, 248, 0.4), transparent)',
          animation: 'wave 17s infinite linear',
          animationDelay: '4s'
        }}
      />
      <div 
        className="absolute w-[200%] h-[150%] opacity-30 top-[-20%] left-[-50%]"
        style={{ 
          background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.4), transparent)',
          animation: 'wave 13s infinite linear',
          animationDelay: '8s'
        }}
      />
      
      {/* Glowing spots */}
      <div 
        className="absolute w-[500px] h-[500px] top-[10%] left-[10%] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0) 70%)',
          animation: 'pulse 10s infinite alternate'
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] top-[60%] left-[70%] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.7) 0%, rgba(192, 132, 252, 0) 70%)',
          animation: 'pulse 8s infinite alternate',
          animationDelay: '3s'
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] top-[40%] left-[30%] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.7) 0%, rgba(56, 189, 248, 0) 70%)',
          animation: 'pulse 12s infinite alternate',
          animationDelay: '2s'
        }}
      />
      
      {/* Floating circles */}
      <div 
        className="absolute w-[300px] h-[300px] top-[20%] left-[10%] rounded-full opacity-50 blur-[3px]"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.7), rgba(129, 140, 248, 0.1))',
          animation: 'float 20s infinite ease-in-out'
        }}
      />
      <div 
        className="absolute w-[200px] h-[200px] top-[60%] left-[70%] rounded-full opacity-50 blur-[3px]"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.7), rgba(139, 92, 246, 0.1))',
          animation: 'float 15s infinite ease-in-out',
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute w-[150px] h-[150px] top-[30%] left-[80%] rounded-full opacity-50 blur-[3px]"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(14, 165, 233, 0.7), rgba(14, 165, 233, 0.1))',
          animation: 'float 12s infinite ease-in-out',
          animationDelay: '3s'
        }}
      />
      <div 
        className="absolute w-[180px] h-[180px] top-[70%] left-[20%] rounded-full opacity-50 blur-[3px]"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(192, 132, 252, 0.6), rgba(192, 132, 252, 0.1))',
          animation: 'float 18s infinite ease-in-out',
          animationDelay: '2s'
        }}
      />
      
      {/* Particles */}
      <div ref={particlesRef} className="absolute w-full h-full overflow-hidden">
        {/* Initial particles - more will be added by JavaScript */}
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[10%]" 
            style={{ animation: 'rise 10s infinite linear' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[20%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '2s' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[30%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '5s' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[40%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '7s' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[50%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '1s' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[60%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '4s' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[70%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '6s' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[80%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '3s' }} />
        <div className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 left-[90%]" 
            style={{ animation: 'rise 10s infinite linear', animationDelay: '8s' }} />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(5%, 10%) scale(1.05); }
          50% { transform: translate(10%, 0) scale(1); }
          75% { transform: translate(5%, -10%) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        
        @keyframes wave {
          0% { transform: rotate(-5deg) translateX(-50%); }
          100% { transform: rotate(5deg) translateX(50%); }
        }
        
        @keyframes rise {
          0% { transform: translateY(100%) scale(0); opacity: 0; }
          50% { opacity: 0.7; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
        
        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
