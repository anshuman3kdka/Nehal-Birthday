import { motion } from 'framer-motion'

export default function LogFragment({ fragment, index }) {
  return (
    <motion.article
      className="rounded-2xl border border-[rgba(255,250,240,0.15)] bg-[rgba(18,18,26,0.42)] p-5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 18 }}
      animate={{
        opacity: 1,
        y: [0, -5, 0] // Gentle bobbing animation for dreamscape feel
      }}
      transition={{
        opacity: { delay: 0.1 * index, duration: 0.6, ease: 'easeOut' },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          delay: index * 0.5,
          ease: "easeInOut"
        }
      }}
    >
      <div className="mb-4 flex items-center justify-between text-[10px] tracking-[0.16em] text-[rgba(245,245,247,0.65)]">
        <span>{fragment.id}</span>
        <span>{fragment.time}</span>
      </div>
      <p className="font-['Courier_Prime'] text-[15px] leading-7 text-[#f5f5f7]">
        {fragment.text}
      </p>
      <p className="mt-4 text-[11px] tracking-[0.12em] text-[rgba(245,245,247,0.45)]">
        {fragment.location}
      </p>
    </motion.article>
  )
}
