import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { delay, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }
})

export default function Home() {
  const words = "a softer place for the little memories that made you unforgettable.".split(" ")

  return (
    <div className="flex flex-col px-5 pb-36 pt-7 md:px-8 min-h-screen">
      <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.45)]">
        <motion.p {...fadeUp(0.1)} className="font-['Inter']">midnight whispers</motion.p>
        <motion.p {...fadeUp(0.15)} className="font-['Inter']">birthday letter</motion.p>
      </header>

      <motion.section
        className="relative z-10 mt-12 overflow-hidden rounded-[2rem] border border-[rgba(255,250,240,0.1)] card-shimmer glow-card"
        style={{ background: 'linear-gradient(140deg, rgba(20,16,26,0.88), rgba(10,10,14,0.78))' }}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(242,216,200,0.4)] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(141,99,123,0.08)] to-transparent pointer-events-none" />

        <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10 backdrop-blur-md">
          <div>
            <motion.p className="font-['Inter'] text-[10px] tracking-[0.28em] text-[rgba(242,216,200,0.5)]" {...fadeUp(0.3)}>
              a small midnight birthday archive
            </motion.p>

            <h1 className="mt-5 font-['Courier_Prime'] text-3xl leading-[1.3] md:text-5xl text-glow">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p className="mt-6 max-w-2xl font-['Inter'] text-sm leading-8 text-[rgba(245,245,247,0.68)]" {...fadeUp(1.1)}>
              not a science experiment, just a warm little constellation of notes,
              glances, and the kind of love that stays after the lights go out.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-2" {...fadeUp(1.3)}>
              {['warm', 'personal', 'quietly glowing'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(242,216,200,0.18)] bg-[rgba(141,99,123,0.12)] px-4 py-1.5 text-[10px] tracking-[0.22em] text-[rgba(242,216,200,0.7)] transition-all duration-300 hover:border-[rgba(242,216,200,0.4)] hover:bg-[rgba(141,99,123,0.25)] hover:text-[#f2d8c8]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <motion.section
              className="rounded-2xl border border-[rgba(255,250,240,0.1)] bg-[rgba(141,99,123,0.08)] p-5 glow-card"
              {...fadeUp(0.9)}
            >
              <p className="font-['Inter'] text-[10px] tracking-[0.22em] text-[rgba(242,216,200,0.55)]">tonight's note</p>
              <p className="mt-3 font-['Courier_Prime'] text-[15px] leading-7 text-[#f5f5f7]">
                you are the kind of beautiful that makes ordinary moments feel like they were waiting for you.
              </p>
            </motion.section>

            <motion.section
              className="rounded-2xl border border-[rgba(255,250,240,0.08)] bg-[rgba(18,18,26,0.5)] p-5 glow-card"
              {...fadeUp(1.05)}
            >
              <p className="font-['Inter'] text-[10px] tracking-[0.22em] text-[rgba(242,216,200,0.55)]">what this page holds</p>
              <p className="mt-3 font-['Inter'] text-sm leading-7 text-[rgba(245,245,247,0.65)]">
                a few tiny memories, a gentle glow, and one promise: this birthday should feel tender, not technical.
              </p>
            </motion.section>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(141,99,123,0.3)] to-transparent" />
      </motion.section>

      <motion.section
        className="relative z-10 mt-6 rounded-3xl border border-[rgba(255,250,240,0.08)] p-6 glow-card card-shimmer overflow-hidden"
        style={{ background: 'linear-gradient(140deg, rgba(18,18,26,0.65), rgba(10,10,14,0.82))' }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(242,216,200,0.25)] to-transparent" />
        <p className="font-['Inter'] text-[10px] tracking-[0.22em] text-[rgba(242,216,200,0.5)]">final note</p>
        <p className="mt-3 max-w-2xl font-['Courier_Prime'] text-[16px] leading-8 text-[rgba(245,245,247,0.9)] text-glow-sm">
          happy birthday, nehal — may this year feel softer, brighter, and a little more like home.
        </p>
      </motion.section>
    </div>
  )
}
