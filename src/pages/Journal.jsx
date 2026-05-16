import { motion } from 'framer-motion'
import LogFragment from '../components/LogFragment'

const fragments = [
  { id: 'fragment_001', time: '00:17 am', location: 'quiet corner', text: 'you turned an ordinary night into a place that felt gently impossible to leave.' },
  { id: 'fragment_002', time: '01:09 am', location: 'city lights', text: 'every small laugh of yours made the whole skyline feel softer somehow.' },
  { id: 'fragment_003', time: '02:03 am', location: 'homeward', text: 'i kept wishing the road would stretch forever if it meant staying beside you longer.' },
]

export default function Journal() {
  return (
    <div className="flex flex-col px-5 pb-36 pt-7 md:px-8 min-h-screen">
      <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.45)]">
        <motion.p
          className="font-['Inter']"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >midnight whispers</motion.p>
        <motion.p
          className="font-['Inter']"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >journal</motion.p>
      </header>

      {/* Section title */}
      <motion.div
        className="mt-10 mb-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <p className="font-['Inter'] text-[10px] tracking-[0.3em] text-[rgba(242,216,200,0.4)]">memory log</p>
        <div className="mt-2 h-px w-16 bg-gradient-to-r from-[rgba(141,99,123,0.5)] to-transparent" />
      </motion.div>

      <section className="relative z-10 mt-4 grid gap-5 md:grid-cols-3">
        {fragments.map((fragment, index) => (
          <LogFragment key={fragment.id} fragment={fragment} index={index} />
        ))}
      </section>

      {/* Decorative bottom */}
      <motion.div
        className="mt-12 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-[rgba(141,99,123,0.4)]" />
        <div className="mx-4 w-1.5 h-1.5 rounded-full bg-[rgba(242,216,200,0.3)]" style={{ boxShadow: '0 0 8px rgba(242,216,200,0.4)' }} />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-[rgba(141,99,123,0.4)]" />
      </motion.div>
    </div>
  )
}
