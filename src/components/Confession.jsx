import { motion } from 'framer-motion'

export default function Confession({ title, text }) {
  return (
    <motion.div
      className="relative group rounded-3xl border border-[rgba(255,250,240,0.1)] bg-[rgba(18,18,26,0.3)] p-8 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Blurred Base State */}
      <div className="filter blur-md opacity-30 transition-all duration-700 group-hover:opacity-10 group-hover:blur-xl select-none">
        <h3 className="font-['Inter'] text-sm tracking-[0.2em] text-[rgba(255,250,240,0.72)] mb-4">{title}</h3>
        <p className="font-['Courier_Prime'] text-lg leading-relaxed text-[#f5f5f7]">
          {text}
        </p>
      </div>

      {/* Masked Revealed State (Driven by CSS variables set in Searchlight.jsx) */}
      <div
        className="absolute inset-0 p-8 select-none"
        style={{
          WebkitMaskImage: 'radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
          maskImage: 'radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
          WebkitMaskAttachment: 'fixed',
          maskAttachment: 'fixed'
        }}
      >
        <h3 className="font-['Inter'] text-sm tracking-[0.2em] text-[#FFFAF0] mb-4">{title}</h3>
        <p className="font-['Courier_Prime'] text-lg leading-relaxed text-[#FFFAF0] text-shadow-sm">
          {text}
        </p>
      </div>
    </motion.div>
  )
}
