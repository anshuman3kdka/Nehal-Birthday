import { motion } from 'framer-motion'

export default function LogFragment({ fragment, index }) {
  return (
    <motion.article
      className="relative rounded-2xl border border-[rgba(255,250,240,0.1)] bg-[rgba(16,14,22,0.6)] p-6 overflow-hidden glow-card card-shimmer group"
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      {/* Top accent line that glows on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(242,216,200,0.2)] to-transparent transition-all duration-500 group-hover:via-[rgba(242,216,200,0.5)]" />

      {/* Subtle corner glow */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(141,99,123,0.15) 0%, transparent 70%)' }}
      />

      <div className="mb-5 flex items-center justify-between">
        <span className="font-['Inter'] text-[10px] tracking-[0.2em] text-[rgba(242,216,200,0.45)]">{fragment.id}</span>
        <span className="font-['Courier_Prime'] text-[11px] text-[rgba(245,245,247,0.35)]">{fragment.time}</span>
      </div>

      <p className="font-['Courier_Prime'] text-[15px] leading-7 text-[#f5f5f7] transition-all duration-300 group-hover:text-glow">
        {fragment.text}
      </p>

      <div className="mt-5 flex items-center gap-2">
        <div className="h-px flex-1 bg-gradient-to-r from-[rgba(141,99,123,0.3)] to-transparent" />
        <p className="font-['Inter'] text-[10px] tracking-[0.18em] text-[rgba(245,245,247,0.35)]">
          {fragment.location}
        </p>
      </div>
    </motion.article>
  )
}
