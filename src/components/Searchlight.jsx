import { useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function Searchlight() {
  const x = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const y = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)

  const springCfg = { damping: 30, stiffness: 100, mass: 0.8 }
  const springX = useSpring(x, springCfg)
  const springY = useSpring(y, springCfg)

  useEffect(() => {
    const move = (e) => {
      const cx = e.clientX ?? e.touches?.[0]?.clientX
      const cy = e.clientY ?? e.touches?.[0]?.clientY
      if (cx !== undefined) {
        x.set(cx); y.set(cy)
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move, { passive: true })
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('touchmove', move) }
  }, [x, y])

  return (
    <>
      {/* Outer ambient glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full"
        style={{
          x: springX,
          y: springY,
          width: 800,
          height: 800,
          marginLeft: -400,
          marginTop: -400,
          background: 'radial-gradient(circle, rgba(242,216,200,0.06) 0%, rgba(141,99,123,0.04) 40%, transparent 70%)',
          zIndex: 5,
        }}
      />
      {/* Inner focused beam */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          width: 280,
          height: 280,
          marginLeft: -140,
          marginTop: -140,
          background: 'radial-gradient(circle, rgba(255,250,240,0.22) 0%, rgba(242,216,200,0.08) 50%, transparent 80%)',
          zIndex: 6,
        }}
      />
    </>
  )
}
