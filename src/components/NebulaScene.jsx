import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud, Sparkles, Stars, Float } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette, ChromaticAberration } from '@react-three/postprocessing'

function NebulaRing() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.015
    ref.current.rotation.z += delta * 0.008
  })
  return (
    <mesh ref={ref} position={[0, 0, -5]} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[3.5, 0.04, 8, 120]} />
      <meshStandardMaterial
        color="#f2d8c8"
        emissive="#8d637b"
        emissiveIntensity={1.2}
        transparent
        opacity={0.18}
      />
    </mesh>
  )
}

function SceneContent() {
  const groupRef = useRef()

  const clouds = useMemo(() => [
    { position: [-5, 3, -7], scale: 2.2, opacity: 0.28, speed: 0.06, color: '#8d637b' },
    { position: [5, -2, -8], scale: 2.8, opacity: 0.22, speed: 0.09, color: '#6b4f75' },
    { position: [-3, -3, -6], scale: 1.8, opacity: 0.18, speed: 0.07, color: '#f2d8c8' },
    { position: [4, 4, -9], scale: 2.0, opacity: 0.15, speed: 0.05, color: '#c49aad' },
    { position: [0, 1, -10], scale: 3.0, opacity: 0.12, speed: 0.04, color: '#4a2d55' },
  ], [])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.012
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.06) * 0.03
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff4ea" />
      <pointLight position={[-4, 2, 2]} intensity={18} color="#8d637b" distance={12} decay={2} />
      <pointLight position={[4, -2, 3]} intensity={14} color="#f2d8c8" distance={10} decay={2} />
      <pointLight position={[0, 0, 4]} intensity={8} color="#c49aad" distance={8} decay={2} />

      <Stars radius={80} depth={35} count={1800} factor={2.8} saturation={0.1} fade speed={0.15} />

      <Float speed={0.4} rotationIntensity={0.2} floatIntensity={0.3}>
        <Sparkles count={120} scale={[20, 12, 10]} size={2.8} speed={0.08} opacity={0.55} color="#f2d8c8" noise={0.4} />
      </Float>
      <Sparkles count={60} scale={[15, 8, 8]} size={1.4} speed={0.05} opacity={0.3} color="#8d637b" />

      {clouds.map((cloud, i) => (
        <Cloud
          key={i}
          position={cloud.position}
          scale={cloud.scale}
          opacity={cloud.opacity}
          speed={cloud.speed}
          color={cloud.color}
          segments={20}
          bounds={[2.5, 1.2, 1.2]}
          volume={10}
          growth={15}
        />
      ))}

      <NebulaRing />

      <EffectComposer multisampling={4}>
        <Bloom intensity={1.8} luminanceThreshold={0.12} luminanceSmoothing={0.6} mipmapBlur radius={0.8} />
        <ChromaticAberration offset={[0.0005, 0.0005]} />
        <Vignette eskil={false} offset={0.15} darkness={0.85} />
      </EffectComposer>
    </group>
  )
}

export default function NebulaScene() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 20%, rgba(141,99,123,0.22) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 80%, rgba(242,216,200,0.14) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 60% 10%, rgba(106,79,117,0.18) 0%, transparent 50%),
          radial-gradient(ellipse 70% 60% at 10% 80%, rgba(196,154,173,0.1) 0%, transparent 55%)
        `
      }} />
      <div className="nebula-orb-1 absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'rgba(141,99,123,0.2)', top: '-10%', left: '-5%' }} />
      <div className="nebula-orb-2 absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: 'rgba(242,216,200,0.12)', bottom: '5%', right: '-5%' }} />
      <div className="nebula-orb-3 absolute w-[300px] h-[300px] rounded-full blur-3xl"
        style={{ background: 'rgba(196,154,173,0.15)', top: '40%', right: '15%' }} />

      <Canvas
        camera={{ position: [0, 0, 7], fov: 52 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="!absolute inset-0"
      >
        <color attach="background" args={['#07070A']} />
        <SceneContent />
      </Canvas>
    </div>
  )
}
