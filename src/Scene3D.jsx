import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, OrbitControls, Environment, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';

function DistortedSphere() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
      
      const t = state.clock.getElapsedTime();
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = 
        1.5 + Math.sin(t) * 0.05;
    }
  });
  
  return (
    <Sphere ref={meshRef} args={[1.8, 128, 128]} scale={1.5}>
      <MeshDistortMaterial
        color="#5E4AE3"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={0.8}
        envMapIntensity={1}
      />
    </Sphere>
  );
}

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={['#050505']} />
      
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <DistortedSphere />
      
      <Environment preset="night" />
        <Sparkles count={400} size={10} scale={[15, 15, 15]} color="white" />
        <Stars radius={100} depth={100} count={5000} factor={4} saturation={0} fade speed={1} />
        
      
      
      {/* <OrbitControls 
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      /> */}
    </Canvas>
  );
};

export default Scene3D;