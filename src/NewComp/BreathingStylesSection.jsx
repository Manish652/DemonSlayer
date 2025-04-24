import { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, Float, OrbitControls, PerspectiveCamera, Environment, useGLTF, Sphere, Trail,Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const DemonSlayerExplorer = () => {
  return (
    <section id="breathing-Style" className="py-20 relative overflow-hidden min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Background with increased opacity */}
      <div className="absolute inset-0 bg-[url('image/demon.png')] bg-cover bg-center opacity-40"></div>
      
      {/* Dynamic particles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full"
            style={{
              background: i % 2 === 0 ? 'radial-gradient(circle, rgba(255,77,77,0.7) 0%, rgba(255,77,77,0) 70%)' : 
                                         'radial-gradient(circle, rgba(77,166,255,0.7) 0%, rgba(77,166,255,0) 70%)',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, Math.random() * 0.5 + 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 20 + 15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
       */}
      {/* Animated logo splash */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5, 2.5] }}
        transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
      >
        <img src="https://i.pinimg.com/474x/39/1c/de/391cde740cad97676a59dd73fb84e942.jpg" alt="Demon Slayer Logo" className="w-96 opacity-60" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="relative inline-block mb-8 mx-auto text-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-300 to-red-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            鬼滅の刃
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Demon Slayer: Breathing Techniques
          </motion.p>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-red-600 via-red-400 to-red-600 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        
        <div className="h-screen max-h-[800px] w-full">
          <Canvas className="bg-transparent" shadows>
            {/* Alpha: true for proper transparency handling */}
            <color></color> {/* Using the from-gray-900 color */}
            <fog attach="fog" args={['#111827', 5, 20]} />
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 5, 0]} intensity={0.5} color="#ff3333" />
            <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <Environment preset="night" />
            
            {/* Main Scene */}
            <BreathingTechniquesScene />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

const BREATHING_STYLES = [
  {
    id: 'water',
    name: 'Water Breathing',
    color: '#4287f5',
    position: [-4, 2, 0],
    techniques: ['Water Surface Slash', 'Water Wheel', 'Flowing Dance', 'Striking Tide'],
    description: 'Flowing and adaptable like water',
    particleColor: '#4287f5',
    icon: '🌊'
  },
  {
    id: 'flame',
    name: 'Flame Breathing',
    color: '#D54042',
    position: [4, 2, 0],
    techniques: ['Unknowing Fire', 'Rising Scorching Sun', 'Blazing Universe'],
    description: 'Powerful and destructive like flames',
    particleColor: '#ff5733',
    icon: '🔥'
  },
  {
    id: 'thunder',
    name: 'Thunder Breathing',
    color: '#FFF176',
    position: [-4, -2, 0],
    techniques: ['Thunderclap and Flash', 'Rice Spirit', 'Thunder Swarm'],
    description: 'Fast and precise like lightning',
    particleColor: '#ffd700',
    icon: '⚡'
  },
  {
    id: 'wind',
    name: 'Wind Breathing',
    color: '#4E8E31',
    position: [4, -2, 0],
    techniques: ['Dust Whirlwind Cutter', 'Claws-Purifying Wind', 'Black Wind Mountain Mist'],
    description: 'Free and powerful like the wind',
    particleColor: '#7cfc00',
    icon: '🌪️'
  },
  {
    id: 'beast',
    name: 'Beast Breathing',
    color: '#EB8021',
    position: [0, 0, -2],
    techniques: ['Fang of the Beast', 'Endless Fang Climb', 'Spatial Awareness'],
    description: 'Wild and ferocious like a beast',
    particleColor: '#964B00',
    icon: '🐗'
  }
];

const BreathingTechniquesScene = () => {
  const [selectedStyle, setSelectedStyle] = useState(null);
  
  return (
    <group>
      {BREATHING_STYLES.map(style => (
        <BreathingStyle 
          key={style.id} 
          style={style} 
          isSelected={selectedStyle === style.id}
          onSelect={() => setSelectedStyle(selectedStyle === style.id ? null : style.id)}
        />
      ))}
      
      {/* <group position={[0, 0, 0]} rotation={[0, 0, Math.PI/4]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.1, 3, 0.1]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -1.7, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.4, 16]} />
          <meshStandardMaterial color="#2a1506" metalness={0.5} roughness={0.8} />
        </mesh>
      </group>
       */}
      {/* Floating Japanese Characters */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[0, 4, 0]}
          color="#ff3333"
          fontSize={1}
          anchorX="center"
          anchorY="middle"
        >
          呼吸法
        </Text>
      </Float>
    </group>
  );
};

const BreathingStyle = ({ style, isSelected, onSelect }) => {
  const groupRef = useRef();
  const particlesRef = useRef();
  const sphereRef = useRef();
  
  // Handle selection animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      
      if (isSelected) {
        groupRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
    
    if (particlesRef.current && isSelected) {
      particlesRef.current.rotation.y += delta * 2;
      particlesRef.current.rotation.x += delta * 1.5;
    }
  });
  
  // Custom orbital motion
  useEffect(() => {
    const interval = setInterval(() => {
      if (sphereRef.current) {
        sphereRef.current.position.x = Math.sin(Date.now() * 0.003) * 0.5;
        sphereRef.current.position.y = Math.cos(Date.now() * 0.002) * 0.5;
        sphereRef.current.position.z = Math.sin(Date.now() * 0.001) * 0.5;
      }
    }, 16);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <group position={style.position}>
      <group 
        ref={groupRef} 
        onClick={onSelect}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        {/* Technique Sphere */}
        <mesh castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color={style.color} 
            emissive={style.color} 
            emissiveIntensity={isSelected ? 0.8 : 0.3}
            metalness={0.3}
            roughness={0.7}
            transparent={true}
            opacity={0.9}
          />
        </mesh>
        
        {/* Label */}
        <Text
          position={[0, 1.5, 0]}
          color={style.color}
          fontSize={0.3}
          maxWidth={2}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {style.name}
        </Text>
        
        {/* Icon */}
        <Text
          position={[0, 0, 1.1]}
          fontSize={0.5}
          anchorX="center"
          anchorY="middle"
        >
          {style.icon}
        </Text>
        
        {/* Energy particles effect when selected */}
        {isSelected && (
          <group ref={particlesRef}>
            {Array.from({ length: 8 }).map((_, i) => (
              <group key={i} rotation={[0, (Math.PI * 2 / 8) * i, 0]}>
                <mesh ref={sphereRef} position={[1.5, 0, 0]}>
                  <sphereGeometry args={[0.1, 16, 16]} />
                  <meshStandardMaterial 
                    color={style.particleColor} 
                    emissive={style.particleColor}
                    emissiveIntensity={1}
                  />
                </mesh>
                <Trail 
                  width={1}
                  length={5}
                  color={new THREE.Color(style.particleColor)}
                  attenuation={(t) => t * t}
                >
                  <mesh position={[1.5, 0, 0]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshBasicMaterial color={style.particleColor} />
                  </mesh>
                </Trail>
              </group>
            ))}
          </group>
        )}
        
        {/* Technique list when selected */}
        {isSelected && (
          <group position={[0, -1.8, 0]}>
            {style.techniques.map((technique, index) => (
              <Text
                key={index}
                position={[0, -index * 0.3, 0]}
                color="#ffffff"
                fontSize={0.15}
                maxWidth={2}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
              >
                {technique}
              </Text>
            ))}
          </group>
        )}
      </group>
    </group>
  );
};

export default DemonSlayerExplorer;