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
    text: 'you turned an ordinary night into a place that felt gently impossible to leave.',
  },
  {
    id: 'fragment_002',
    time: '01:09 am',
    location: 'city lights',
    text: 'every small laugh of yours made the whole skyline feel softer somehow.',
  },
  {
    id: 'fragment_003',
    time: '02:03 am',
    location: 'homeward',
    text: 'i kept wishing the road would stretch forever if it meant staying beside you longer.',
  },
]

function NebulaScene() {
  const nebulaRef = useRef(null)

  const clouds = useMemo(
    () => [
      { position: [-2.8, 1.2, -4], scale: 1.35, opacity: 0.26, speed: 0.08, color: '#8d637b' },
      { position: [2.2, 0.4, -5], scale: 1.6, opacity: 0.2, speed: 0.12, color: '#30283d' },
      { position: [0.1, -1.4, -3.5], scale: 1.1, opacity: 0.16, speed: 0.06, color: '#f2d8c8' },
    ],
    [],
  )

  useFrame((state, delta) => {
    if (!nebulaRef.current) {
      return
    }

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
        count={1000}
        factor={2.3}
        saturation={0}
        fade
        speed={0.22}
      />

      <Sparkles
        count={70}
        scale={[12, 7, 8]}
        size={1.6}
        speed={0.12}
        opacity={0.22}
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

      <mesh position={[0, 0, -2.5]} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#1b1520"
          emissive="#8d637b"
          emissiveIntensity={0.42}
          roughness={0.82}
          metalness={0.05}
        />
      </mesh>

      <EffectComposer>
        <Bloom intensity={0.45} luminanceThreshold={0.25} mipmapBlur />
        <Vignette eskil={false} offset={0.22} darkness={0.7} />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(141,99,123,0.24),_transparent_44%),radial-gradient(circle_at_bottom,_rgba(242,216,200,0.08),_transparent_36%)]" />
        <div className="absolute left-[-12%] top-[8%] h-72 w-72 rounded-full bg-[rgba(141,99,123,0.18)] blur-3xl" />
        <div className="absolute right-[-8%] top-[16%] h-80 w-80 rounded-full bg-[rgba(242,216,200,0.12)] blur-3xl" />
        <div className="absolute bottom-[-12%] left-1/2 h-96 w-[32rem] -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.04)] blur-3xl" />
        <Canvas
          camera={{ position: [0, 0, 6], fov: 46 }}
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
          <p className="font-['Inter']">birthday letter</p>
        </header>

        <section className="mt-14 overflow-hidden rounded-[2rem] border border-[rgba(255,250,240,0.12)] bg-[linear-gradient(140deg,rgba(24,20,29,0.84),rgba(10,10,12,0.72))] shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-md">
          <div className="grid gap-10 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <motion.p
                className="font-['Inter'] text-[11px] tracking-[0.2em] text-[rgba(245,245,247,0.56)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                a small midnight birthday archive
              </motion.p>

              <motion.h1
                className="mt-4 max-w-3xl font-['Courier_Prime'] text-3xl leading-tight md:text-5xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
              >
                a softer place for the little memories that made you unforgettable.
              </motion.h1>

              <motion.p
                className="mt-6 max-w-2xl font-['Inter'] text-sm leading-7 text-[rgba(245,245,247,0.74)]"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.6, ease: 'easeOut' }}
              >
                not a science experiment, just a warm little constellation of notes,
                glances, and the kind of love that stays after the lights go out.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-2">
                {['warm', 'personal', 'quietly glowing'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(255,250,240,0.12)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[10px] tracking-[0.18em] text-[rgba(245,245,247,0.72)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <section className="rounded-3xl border border-[rgba(255,250,240,0.12)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
                  tonight’s note
                </p>
                <p className="mt-3 font-['Courier_Prime'] text-[15px] leading-7 text-[#f5f5f7]">
                  you are the kind of beautiful that makes ordinary moments feel like
                  they were waiting for you.
                </p>
              </section>

              <section className="rounded-3xl border border-[rgba(255,250,240,0.12)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
                  what this page holds
                </p>
                <p className="mt-3 font-['Inter'] text-sm leading-7 text-[rgba(245,245,247,0.72)]">
                  a few tiny memories, a gentle glow, and one promise: this birthday
                  should feel tender, not technical.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {fragments.map((fragment, index) => (
            <LogFragment key={fragment.id} fragment={fragment} index={index} />
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-[rgba(255,250,240,0.1)] bg-[linear-gradient(140deg,rgba(18,18,26,0.72),rgba(10,10,12,0.88))] p-6">
          <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
            final note
          </p>
          <p className="mt-3 max-w-2xl font-['Courier_Prime'] text-[15px] leading-7 text-[rgba(245,245,247,0.86)]">
            happy birthday, nehal — may this year feel softer, brighter, and a little
            more like home.
          </p>
        </section>
      </div>
    </main>
  )
}

export default App
