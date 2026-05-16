import { useEffect, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function Searchlight() {
  const x = useMotionValue(window.innerWidth / 2)
  const y = useMotionValue(window.innerHeight / 2)

  // Spring config for a subtle lag
  const springConfig = { damping: 25, stiffness: 120 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const moveLight = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX)
      const clientY = e.clientY || (e.touches && e.touches[0].clientY)

      if (clientX !== undefined && clientY !== undefined) {
        x.set(clientX)
        y.set(clientY)

        // Keep CSS variables for the masks in Confession component
        document.documentElement.style.setProperty('--mouse-x', `${clientX}px`)
        document.documentElement.style.setProperty('--mouse-y', `${clientY}px`)
      }
    }

    window.addEventListener('mousemove', moveLight)
    window.addEventListener('touchmove', moveLight)

    return () => {
      window.removeEventListener('mousemove', moveLight)
      window.removeEventListener('touchmove', moveLight)
    }
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full z-40 mix-blend-screen opacity-20"
      style={{
        x: springX,
        y: springY,
        background: 'radial-gradient(circle, rgba(255,250,240,0.8) 0%, transparent 60%)'
      }}
    />
  )
}
