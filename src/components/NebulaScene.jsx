import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud, Sparkles, Stars, Float } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import * as THREE from 'three'

function NebulaRing() {
  const ringRef = useRef(null)

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ringRef} position={[0, 0, -5]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3, 0.2, 32, 100]} />
        <meshStandardMaterial
          color="#1b1520"
          emissive="#8d637b"
          emissiveIntensity={1.5}
          roughness={0.8}
          metalness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

function SceneContent() {
  const nebulaRef = useRef(null)

  const clouds = useMemo(
    () => [
      { position: [-5, 3, -7], scale: 1.35, opacity: 0.26, speed: 0.08, color: '#8d637b' },
      { position: [5, -2, -8], scale: 1.6, opacity: 0.2, speed: 0.12, color: '#30283d' },
      { position: [4, 4, -6], scale: 1.1, opacity: 0.16, speed: 0.06, color: '#f2d8c8' },
      { position: [-4, -3, -5], scale: 1.2, opacity: 0.2, speed: 0.1, color: '#8d637b' }
    ],
    [],
  )

  useFrame((state, delta) => {
    if (!nebulaRef.current) return

    nebulaRef.current.rotation.z = THREE.MathUtils.lerp(
      nebulaRef.current.rotation.z,
      Math.sin(state.clock.elapsedTime * 0.05) * 0.04,
      delta * 0.6,
    )
    nebulaRef.current.rotation.y += delta * 0.02
    nebulaRef.current.position.y = THREE.MathUtils.lerp(
      nebulaRef.current.position.y,
      Math.sin(state.clock.elapsedTime * 0.18) * 0.08,
      delta * 0.7,
    )
  })

  return (
    <group ref={nebulaRef}>
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 3, 5]} intensity={1.05} color="#fff4ea" />
      <pointLight position={[-3, -1, 3]} intensity={9} color="#8d637b" />
      <pointLight position={[3, 1, 2]} intensity={7} color="#f2d8c8" />

      <Stars
        radius={55}
        depth={24}
        count={1800}
        factor={2.3}
        saturation={0}
        fade
        speed={0.22}
      />

      <Sparkles
        count={120}
        scale={[12, 7, 8]}
        size={1.6}
        speed={0.12}
        opacity={0.55}
        color="#f2d8c8"
      />

      {clouds.map((cloud, index) => (
        <Cloud
          key={`${cloud.position.join('-')}-${index}`}
          position={cloud.position}
          scale={cloud.scale}
          opacity={cloud.opacity}
          speed={cloud.speed}
          color={cloud.color}
          segments={24}
          bounds={[1.8, 0.8, 0.8]}
          volume={8}
          growth={12}
        />
      ))}

      <NebulaRing />

      <EffectComposer multisampling={4}>
        <Bloom intensity={1.8} luminanceThreshold={0.12} mipmapBlur resolutionScale={1} />
        <ChromaticAberration offset={[0.0005, 0.0005]} />
        <Vignette eskil={false} offset={0.22} darkness={0.7} />
      </EffectComposer>
    </group>
  )
}

export default function NebulaScene() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(141,99,123,0.24),_transparent_44%),radial-gradient(circle_at_bottom,_rgba(242,216,200,0.08),_transparent_36%)]" />

      <div
        className="absolute left-[-12%] top-[8%] h-72 w-72 rounded-full bg-[rgba(141,99,123,0.18)] blur-3xl"
        style={{ animation: 'orbDrift 20s infinite alternate linear' }}
      />
      <div
        className="absolute right-[-8%] top-[16%] h-80 w-80 rounded-full bg-[rgba(242,216,200,0.12)] blur-3xl"
        style={{ animation: 'orbDrift 25s infinite alternate-reverse linear' }}
      />
      <div
        className="absolute bottom-[-12%] left-1/2 h-96 w-[32rem] -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.04)] blur-3xl"
        style={{ animation: 'orbDrift 30s infinite alternate linear' }}
      />

      <Canvas
        camera={{ position: [0, 0, 6], fov: 46 }}
        dpr={1.5}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="!absolute inset-0"
      >
        <color attach="background" args={['#0A0A0C']} />
        <SceneContent />
      </Canvas>
    </div>
  )
}
