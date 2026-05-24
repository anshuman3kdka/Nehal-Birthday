import { motion } from 'framer-motion'
import Confession from '../components/Confession'

/* ── Scroll Controls ───────────────────────────────────── */
function ScrollControls() {
  const handleScroll = (amount) => {
    window.scrollBy({ top: amount, behavior: 'smooth' })
  }

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3 md:hidden">
      <button
        onClick={() => handleScroll(-300)}
        className="w-12 h-12 rounded-full border border-[rgba(255,250,240,0.1)] bg-[rgba(10,10,14,0.7)] backdrop-blur-md flex items-center justify-center text-[#f2d8c8] shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(242,216,200,0.5)]"
        aria-label="Scroll Up"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
      <button
        onClick={() => handleScroll(300)}
        className="w-12 h-12 rounded-full border border-[rgba(255,250,240,0.1)] bg-[rgba(10,10,14,0.7)] backdrop-blur-md flex items-center justify-center text-[#f2d8c8] shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(242,216,200,0.5)]"
        aria-label="Scroll Down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
    </div>
  )
}

const confessions = [
  { id: 1, title: "first thought", text: "the very first time i saw you, i remember thinking that the rest of the world felt suddenly very quiet." },
  { id: 2, title: "stolen glances", text: "i used to look for your name in notifications just to feel that tiny rush of adrenaline before opening the message." },
]

export default function Archive() {
  return (
    <div className="flex flex-col px-5 pb-36 pt-7 md:px-8 min-h-screen" style={{ touchAction: 'none' }}>
      <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.45)]">
        <motion.p className="font-['Inter']" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          midnight whispers
        </motion.p>
        <motion.p className="font-['Inter']" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          archive
        </motion.p>
      </header>

      <motion.div
        className="mt-10 mb-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <p className="font-['Inter'] text-[10px] tracking-[0.3em] text-[rgba(242,216,200,0.4)]">hidden confessions</p>
        <div className="mt-2 h-px w-16 bg-gradient-to-r from-[rgba(141,99,123,0.5)] to-transparent" />
      </motion.div>

      <section className="relative z-10 mt-4 grid gap-6 md:grid-cols-2">
        {confessions.map((conf, i) => (
          <motion.div
            key={conf.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Confession title={conf.title} text={conf.text} />
          </motion.div>
        ))}
      </section>

      {/* Reveal instruction zone */}
      <motion.section
        className="relative z-10 mt-8 flex flex-col items-center justify-center rounded-[2rem] border border-[rgba(255,250,240,0.08)] p-10 min-h-[28vh] overflow-hidden"
        style={{ background: 'linear-gradient(140deg, rgba(18,18,26,0.45), rgba(10,10,14,0.35))' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Mask-revealed inner content */}
        <div
          className="absolute inset-0 flex items-center justify-center p-10"
          style={{
            WebkitMaskImage: 'radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), black 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            maskImage: 'radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), black 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            WebkitMaskAttachment: 'fixed',
            maskAttachment: 'fixed',
          }}
        >
          <p className="font-['Courier_Prime'] text-base leading-8 text-[rgba(242,216,200,0.9)] text-center max-w-md"
            style={{ textShadow: '0 0 30px rgba(242,216,200,0.4), 0 0 60px rgba(141,99,123,0.2)' }}>
            some things are only beautiful when you're close enough to really see them.
          </p>
        </div>

        {/* Default dim state */}
        <motion.p
          className="font-['Courier_Prime'] text-sm tracking-widest text-[rgba(245,245,247,0.2)] text-center max-w-lg leading-relaxed uppercase"
        >
          use the light to reveal what is hidden in the dark...
        </motion.p>
      </motion.section>

      <ScrollControls />
    </div>
  )
}
