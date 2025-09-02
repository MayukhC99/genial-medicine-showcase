import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Cylinder, Sphere } from '@react-three/drei';
import { Mesh } from 'three';

interface MedicineBottle3DProps {
  medicineName: string;
  color?: string;
}

function AnimatedBottle({ medicineName, color = "#2563eb" }: { medicineName: string; color: string }) {
  const bottleRef = useRef<Mesh>(null!);
  const capsRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    // Gentle floating animation
    if (bottleRef.current && capsRef.current) {
      bottleRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      capsRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 2.2;
      
      // Gentle rotation when not being manually controlled
      if (!hovered) {
        bottleRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        capsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      }
    }
  });

  return (
    <group>
      {/* Medicine Bottle */}
      <Cylinder
        ref={bottleRef}
        args={[1, 1.2, 3, 32]}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8} 
          roughness={0.1}
          metalness={0.3}
        />
      </Cylinder>

      {/* Bottle Cap */}
      <Cylinder
        ref={capsRef}
        args={[1.1, 1.1, 0.4, 32]}
        position={[0, 2.2, 0]}
      >
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.2}
          metalness={0.8}
        />
      </Cylinder>

      {/* Pills inside bottle */}
      {[...Array(8)].map((_, i) => (
        <Sphere
          key={i}
          args={[0.15]}
          position={[
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 2 - 0.5,
            (Math.random() - 0.5) * 1.5
          ]}
        >
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#ffffff" : "#f0f0f0"} 
            roughness={0.3}
          />
        </Sphere>
      ))}

      {/* Medicine Label */}
      <Text
        position={[0, 0, 1.3]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, 0]}
        font="/fonts/inter-bold.woff"
      >
        {medicineName}
      </Text>

      {/* Background glow effect */}
      <Sphere args={[3]} position={[0, 0, -2]}>
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.05}
          wireframe
        />
      </Sphere>
    </group>
  );
}

export default function MedicineBottle3D({ medicineName, color = "#2563eb" }: MedicineBottle3DProps) {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden bg-gradient-subtle shadow-medical">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00d4ff" />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#ff6b6b" />

        {/* 3D Medicine Bottle */}
        <AnimatedBottle medicineName={medicineName} color={color} />

        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          maxDistance={15}
          minDistance={5}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Interaction Hint */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
          Click and drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
}