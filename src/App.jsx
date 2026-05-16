import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cloud, Sparkles, Stars } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const fragments = [
  {
    id: 'fragment_001',
    time: '00:17 am',
    location: 'quiet corner',
    text: 'you turned an ordinary night into a place i never wanted to leave.',
  },
  {
    id: 'fragment_002',
    time: '01:09 am',
    location: 'city lights',
    text: 'every small laugh of yours felt louder than the whole skyline.',
  },
  {
    id: 'fragment_003',
    time: '02:03 am',
    location: 'homeward',
    text: 'i kept wishing the road would stretch just to stay next to you longer.',
  },
]

function NebulaScene() {
  const nebulaRef = useRef(null)

  const clouds = useMemo(
    () => [
      { position: [-2.8, 1.2, -4], scale: 1.35, opacity: 0.34, speed: 0.08, color: '#4A3B63' },
      { position: [2.2, 0.4, -5], scale: 1.6, opacity: 0.28, speed: 0.12, color: '#12121A' },
      { position: [0.1, -1.4, -3.5], scale: 1.1, opacity: 0.22, speed: 0.06, color: '#FFFAF0' },
    ],
    [],
  )

  useFrame((state, delta) => {
    if (!nebulaRef.current) {
      return
    }

    nebulaRef.current.rotation.z = THREE.MathUtils.lerp(
      nebulaRef.current.rotation.z,
      Math.sin(state.clock.elapsedTime * 0.08) * 0.08,
      delta * 0.8,
    )
    nebulaRef.current.rotation.y += delta * 0.04
    nebulaRef.current.position.y = THREE.MathUtils.lerp(
      nebulaRef.current.position.y,
      Math.sin(state.clock.elapsedTime * 0.22) * 0.12,
      delta * 0.9,
    )
  })

  return (
    <group ref={nebulaRef}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 3, 5]} intensity={1.3} color="#f5f5f7" />
      <pointLight position={[-3, -1, 3]} intensity={18} color="#4A3B63" />
      <pointLight position={[3, 1, 2]} intensity={14} color="#FFFAF0" />

      <Stars
        radius={60}
        depth={32}
        count={1800}
        factor={3.2}
        saturation={0}
        fade
        speed={0.4}
      />

      <Sparkles
        count={120}
        scale={[14, 8, 10]}
        size={2.4}
        speed={0.18}
        opacity={0.45}
        color="#FFFAF0"
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

      <mesh position={[0, 0, -2.4]} scale={1.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#12121A"
          emissive="#4A3B63"
          emissiveIntensity={0.55}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      <EffectComposer>
        <Bloom intensity={0.85} luminanceThreshold={0.2} mipmapBlur />
        <Vignette eskil={false} offset={0.18} darkness={0.8} />
      </EffectComposer>
    </group>
  )
}

function LogFragment({ fragment, index }) {
  return (
    <motion.article
      className="rounded-2xl border border-[rgba(255,250,240,0.15)] bg-[rgba(18,18,26,0.42)] p-5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mb-4 flex items-center justify-between text-[10px] tracking-[0.16em] text-[rgba(245,245,247,0.65)]">
        <span>{fragment.id}</span>
        <span>{fragment.time}</span>
      </div>
      <p className="font-['Courier_Prime'] text-[15px] leading-7 text-[#f5f5f7]">
        {fragment.text}
      </p>
      <p className="mt-4 text-[11px] tracking-[0.12em] text-[rgba(245,245,247,0.45)]">
        {fragment.location}
      </p>
    </motion.article>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#f5f5f7]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,59,99,0.24),_transparent_44%),radial-gradient(circle_at_bottom,_rgba(255,250,240,0.08),_transparent_36%)]" />
        <Canvas
          camera={{ position: [0, 0, 6], fov: 48 }}
          dpr={[1, 1.6]}
          gl={{ antialias: true, alpha: true }}
          className="!absolute inset-0"
        >
          <color attach="background" args={['#0A0A0C']} />
          <NebulaScene />
        </Canvas>
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-16 pt-7 md:px-8">
        <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.62)]">
          <p className="font-['Inter']">midnight whispers</p>
          <p className="font-['Inter']">private archive</p>
        </header>

        <section className="mt-16">
          <motion.p
            className="font-['Inter'] text-[11px] tracking-[0.2em] text-[rgba(245,245,247,0.56)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            entry point: 2:00 am internet
          </motion.p>

          <motion.h1
            className="mt-4 max-w-3xl font-['Courier_Prime'] text-3xl leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
          >
            a soft place where every memory of you glows in the dark.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl font-['Inter'] text-sm leading-7 text-[rgba(245,245,247,0.72)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6, ease: 'easeOut' }}
          >
            this is the foundation of your birthday archive: quiet tones, journal
            fragments, and a hidden layer ready for the searchlight in step two.
          </motion.p>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          {fragments.map((fragment, index) => (
            <LogFragment key={fragment.id} fragment={fragment} index={index} />
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[rgba(74,59,99,0.55)] bg-[linear-gradient(140deg,rgba(18,18,26,0.9),rgba(10,10,12,0.8))] p-6">
          <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
            hidden confession placeholder
          </p>
          <p className="mt-3 max-w-2xl font-['Courier_Prime'] text-[15px] leading-7 text-[rgba(245,245,247,0.62)] blur-[2px]">
            you are the safest midnight i have ever known.
          </p>
        </section>
      </div>
    </main>
  )
}

export default App
