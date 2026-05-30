import { useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import Lenis from 'lenis'
import NebulaScene from './components/NebulaScene'
import Searchlight from './components/Searchlight'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Archive from './pages/Archive'

/* ── Custom Cursor ─────────────────────────────────────── */
function CustomCursor({ x, y }) {
  const ringX = useSpring(x, { damping: 28, stiffness: 90 })
  const ringY = useSpring(y, { damping: 28, stiffness: 90 })
  const glowX = useSpring(x, { damping: 40, stiffness: 60 })
  const glowY = useSpring(y, { damping: 40, stiffness: 60 })

  return (
    <div className="custom-cursor fixed top-0 left-0 pointer-events-none hidden md:block" style={{ zIndex: 9999 }}>
      <motion.div className="cursor-dot" style={{ left: x, top: y }} />
      <motion.div className="cursor-ring" style={{ left: ringX, top: ringY }} />
      <motion.div className="cursor-glow" style={{ left: glowX, top: glowY }} />
    </div>
  )
}

/* ── Floating Particles ────────────────────────────────── */
function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      // eslint-disable-next-line react-hooks/purity
      left: `${Math.random() * 100}%`,
      // eslint-disable-next-line react-hooks/purity
      size: Math.random() * 3 + 1,
      // eslint-disable-next-line react-hooks/purity
      duration: Math.random() * 20 + 15,
      // eslint-disable-next-line react-hooks/purity
      delay: Math.random() * 15,
      // eslint-disable-next-line react-hooks/purity
      drift: `${(Math.random() - 0.5) * 120}px`,
      // eslint-disable-next-line react-hooks/purity
      driftEnd: `${(Math.random() - 0.5) * 200}px`,
      color: i % 3 === 0 ? 'rgba(242,216,200,0.7)' : i % 3 === 1 ? 'rgba(141,99,123,0.6)' : 'rgba(196,154,173,0.5)',
    }))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 2 }}>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle absolute rounded-full"
          style={{
            left: p.left,
            bottom: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': p.drift,
            '--drift-end': p.driftEnd,
          }}
        />
      ))}
    </div>
  )
}

/* ── Page Transition ───────────────────────────────────── */
function PageTransition({ children }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full h-full max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

/* ── Nav ───────────────────────────────────────────────── */
function GlobalNav() {
  const location = useLocation()
  const links = [
    { to: '/', label: 'nebula' },
    { to: '/journal', label: 'journal' },
    { to: '/archive', label: 'archive' },
  ]

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-1 rounded-full border border-[rgba(255,250,240,0.1)] bg-[rgba(10,10,14,0.7)] px-2 py-2 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(141,99,123,0.1)]"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {links.map(({ to, label }) => {
        const active = location.pathname === to
        return (
          <Link
            key={to}
            to={to}
            aria-current={active ? 'page' : undefined}
            className="relative px-5 py-2 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(141,99,123,0.8)]"
            style={{ color: active ? '#f2d8c8' : 'rgba(245,245,247,0.5)' }}
          >
            {active && (
              <motion.div
                layoutId="navPill"
                className="absolute inset-0 rounded-full"
                style={{ background: 'rgba(141,99,123,0.25)', boxShadow: '0 0 20px rgba(141,99,123,0.3)' }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative font-['Inter'] text-[11px] tracking-[0.22em]">{label}</span>
          </Link>
        )
      })}
    </motion.nav>
  )
}

function AppInner() {
  const x = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const y = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)

  useEffect(() => {
    let animationFrameId
    const updateMouse = (e) => {
      const cx = e.clientX ?? e.touches?.[0]?.clientX
      const cy = e.clientY ?? e.touches?.[0]?.clientY

      if (cx !== undefined) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
        animationFrameId = requestAnimationFrame(() => {
          x.set(cx)
          y.set(cy)
          document.documentElement.style.setProperty('--mouse-x', `${cx}px`)
          document.documentElement.style.setProperty('--mouse-y', `${cy}px`)
        })
      }
    }

    window.addEventListener('pointermove', updateMouse, { passive: true })
    return () => {
      window.removeEventListener('pointermove', updateMouse)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [x, y])

  return (
    <>
      <NebulaScene />
      <FloatingParticles />
      <CustomCursor x={x} y={y} />
      <Searchlight x={x} y={y} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </PageTransition>
      </div>

      <GlobalNav />
    </>
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <Router>
      <main className="min-h-screen bg-[#07070A] text-[#f5f5f7] selection:bg-[#4A3B63] selection:text-white relative">
        <AppInner />
      </main>
    </Router>
  )
}

