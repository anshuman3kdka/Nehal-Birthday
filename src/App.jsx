import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import NebulaScene from './components/NebulaScene'
import Searchlight from './components/Searchlight'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Archive from './pages/Archive'

function PageTransition({ children }) {
  const location = useLocation()
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full h-full max-w-6xl mx-auto"
    >
      {children}
    </motion.div>
  )
}

function GlobalNav() {
  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-6 rounded-full border border-[rgba(255,250,240,0.1)] bg-[rgba(18,18,26,0.6)] px-8 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
    >
      <Link to="/" className="font-['Inter'] text-[11px] tracking-[0.2em] text-[rgba(245,245,247,0.7)] hover:text-[#FFFAF0] transition-colors">nebula</Link>
      <Link to="/journal" className="font-['Inter'] text-[11px] tracking-[0.2em] text-[rgba(245,245,247,0.7)] hover:text-[#FFFAF0] transition-colors">journal</Link>
      <Link to="/archive" className="font-['Inter'] text-[11px] tracking-[0.2em] text-[rgba(245,245,247,0.7)] hover:text-[#FFFAF0] transition-colors">archive</Link>
    </motion.nav>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/journal" element={<PageTransition><Journal /></PageTransition>} />
        <Route path="/archive" element={<PageTransition><Archive /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-[#0A0A0C] text-[#f5f5f7] selection:bg-[#4A3B63] selection:text-white relative cursor-crosshair">
        <NebulaScene />
        <Searchlight />

        <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col">
          <AnimatedRoutes />
        </div>

        <GlobalNav />
      </main>
    </Router>
  )
}

export default App
