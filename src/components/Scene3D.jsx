import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

function Particles() {
  const count = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30; // z
    }
    return pos;
  }, [count]);

  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#00E5FF" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function JellyfishOrb({ position, scale, color, speed }) {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={4} position={position}>
      <Sphere args={[scale, 64, 64]}>
        <MeshDistortMaterial 
          color={color} 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.1} 
          roughness={0.2} 
          distort={0.4} 
          speed={2} 
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  const groupRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    // Parallax effect based on scroll and mouse
    const targetY = scrollY * 0.005;
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    
    // Mouse interaction parallax
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY * 0.5, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.5, 0.05);
  });

  return (
    <>
      <color attach="background" args={['#030910']} />
      <fog attach="fog" args={['#030910', 10, 30]} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00E5FF" />
      <pointLight position={[-10, -10, -5]} intensity={2} color="#145374" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} color="#00B3CC" castShadow />

      <group ref={groupRef}>
        <Particles />
        <Sparkles count={100} scale={20} size={4} speed={0.4} opacity={0.3} color="#FFFFFF" />

        <JellyfishOrb position={[4, 2, -5]} scale={1.5} color="#00E5FF" speed={2} />
        <JellyfishOrb position={[-5, -4, -10]} scale={2.5} color="#145374" speed={1.5} />
        <JellyfishOrb position={[6, -8, -15]} scale={3} color="#00B3CC" speed={1} />
        <JellyfishOrb position={[-3, 6, -8]} scale={1.2} color="#0099A8" speed={2.5} />
      </group>

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
      </EffectComposer>
    </>
  );
}
