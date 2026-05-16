import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Lenis from 'lenis'
import * as THREE from 'three'
import { getProject, types } from '@theatre/core'

const theatreProject = getProject('Nehal Birthday')
const theatreSheet = theatreProject.sheet('Scene')

function Orb({ speed, y }) {
  const meshRef = useRef(null)

  useFrame((state, delta) => {
    if (!meshRef.current) {
      return
    }

    meshRef.current.rotation.y += speed * delta
    meshRef.current.rotation.x += 0.2 * delta
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      y,
      0.08,
    )
    meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.25
  })

  return (
    <Float speed={1.6} floatIntensity={1.4} rotationIntensity={0.3}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.05, 24]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.65} />
      </mesh>
    </Float>
  )
}

function App() {
  const headingRef = useRef(null)
  const [theatreValues, setTheatreValues] = useState({ speed: 0.8, y: 0 })
  const theatreObject = useMemo(
    () =>
      theatreSheet.object('Orb Controls', {
        speed: types.number(0.8, { range: [0, 2] }),
        y: types.number(0, { range: [-1, 1] }),
      }),
    [],
  )

  useEffect(() => {
    if (import.meta.env.DEV) {
      import('@theatre/studio').then((studio) => {
        if (!studio.default.__initialized) {
          studio.default.initialize()
        }
      })
    }

    const unsubscribe = theatreObject.onValuesChange((values) => {
      setTheatreValues(values)
    })

    return () => {
      unsubscribe()
    }
  }, [theatreObject])

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true })
    let rafId = 0

    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!headingRef.current) {
      return
    }

    const animation = gsap.fromTo(
      headingRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    )

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-['Special_Elite'] text-sm uppercase tracking-[0.3em] text-amber-300">
            Nehal Birthday Universe
          </p>
          <h1 ref={headingRef} className="mt-4 font-['Inter'] text-4xl font-semibold md:text-6xl">
            Vite + R3F Motion Stack
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-['Inter'] text-base text-slate-300 md:text-lg">
            Three.js, React Three Fiber, postprocessing, Framer Motion, GSAP,
            Lenis, Tailwind CSS, Google Fonts, and Theatre.js are wired together.
          </p>
        </motion.div>

        <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }} shadows>
            <color attach="background" args={['#020617']} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[3, 2, 4]} intensity={1.5} castShadow />
            <Stars radius={35} depth={40} count={1400} factor={3} saturation={0} fade speed={0.4} />
            <Orb speed={theatreValues.speed} y={theatreValues.y} />
            <EffectComposer>
              <Bloom intensity={0.9} luminanceThreshold={0.2} mipmapBlur />
            </EffectComposer>
            <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <p className="font-['Inter'] text-slate-400">
          Scroll to feel Lenis smoothing, hover and drag the 3D object, and tweak
          values with Theatre Studio in development mode.
        </p>
        <div className="mt-16 h-40 rounded-2xl border border-slate-800 bg-slate-900/60" />
      </section>
    </main>
  )
}

export default App
