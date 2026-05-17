import { motion, useSpring } from 'framer-motion'

export default function Searchlight({ x, y }) {
  const springCfg = { damping: 30, stiffness: 100, mass: 0.8 }
  const springX = useSpring(x, springCfg)
  const springY = useSpring(y, springCfg)

  return (
    <>
      {/* Outer ambient glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 rounded-full hidden md:block"
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
        className="pointer-events-none fixed top-0 left-0 rounded-full mix-blend-screen hidden md:block"
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
