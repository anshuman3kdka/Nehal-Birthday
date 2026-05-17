import { motion } from 'framer-motion'

export default function Confession({ title, text }) {
  return (
    <motion.div
      className="relative group rounded-3xl border border-[rgba(255,250,240,0.1)] bg-[rgba(16,14,22,0.55)] p-8 overflow-hidden glow-card"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ backdropFilter: 'blur(16px)' }}
    >
      {/* Top shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(242,216,200,0.2)] to-transparent" />

      {/* Blurred Base State (Always visible, sharp text is layered on top via mask) */}
      <div className="select-none" style={{ filter: 'blur(6px)', opacity: 0.35, transform: 'translateZ(0)' }}>
        <h3 className="font-['Inter'] text-[11px] tracking-[0.22em] text-[rgba(255,250,240,0.72)] mb-4">{title}</h3>
        <p className="font-['Courier_Prime'] text-lg leading-relaxed text-[#f5f5f7]">{text}</p>
      </div>

      {/* Mask-revealed text (follows cursor) */}
      <div className="absolute inset-0 p-8 select-none reveal-mask" style={{ maskAttachment: 'fixed', WebkitMaskAttachment: 'fixed' }}>
        <h3 className="font-['Inter'] text-[11px] tracking-[0.22em] text-[#f2d8c8] mb-4">{title}</h3>
        <p className="font-['Courier_Prime'] text-lg leading-relaxed text-[#FFFAF0]"
          style={{ textShadow: '0 0 20px rgba(242,216,200,0.5), 0 0 40px rgba(141,99,123,0.3)' }}>
          {text}
        </p>
      </div>

      {/* Instruction hint */}
      <div className="absolute bottom-4 right-5 font-['Inter'] text-[9px] tracking-[0.2em] text-[rgba(245,245,247,0.25)] transition-opacity duration-500 group-hover:opacity-0">
        move light to reveal
      </div>
    </motion.div>
  )
}
