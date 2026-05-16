import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col px-5 pb-32 pt-7 md:px-8">
      <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.62)]">
        <p className="font-['Inter']">midnight whispers</p>
        <p className="font-['Inter']">birthday letter</p>
      </header>

      <section className="relative z-10 mt-14 overflow-hidden rounded-[2rem] border border-[rgba(255,250,240,0.12)] bg-[linear-gradient(140deg,rgba(24,20,29,0.84),rgba(10,10,12,0.72))] shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="grid gap-10 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <motion.p
              className="font-['Inter'] text-[11px] tracking-[0.2em] text-[rgba(245,245,247,0.56)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              a small midnight birthday archive
            </motion.p>

            <motion.h1
              className="mt-4 max-w-3xl font-['Courier_Prime'] text-3xl leading-tight md:text-5xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
            >
              a softer place for the little memories that made you unforgettable.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl font-['Inter'] text-sm leading-7 text-[rgba(245,245,247,0.74)]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6, ease: 'easeOut' }}
            >
              not a science experiment, just a warm little constellation of notes,
              glances, and the kind of love that stays after the lights go out.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['warm', 'personal', 'quietly glowing'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(255,250,240,0.12)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[10px] tracking-[0.18em] text-[rgba(245,245,247,0.72)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <section className="rounded-3xl border border-[rgba(255,250,240,0.12)] bg-[rgba(255,255,255,0.03)] p-5">
              <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
                tonight’s note
              </p>
              <p className="mt-3 font-['Courier_Prime'] text-[15px] leading-7 text-[#f5f5f7]">
                you are the kind of beautiful that makes ordinary moments feel like
                they were waiting for you.
              </p>
            </section>

            <section className="rounded-3xl border border-[rgba(255,250,240,0.12)] bg-[rgba(255,255,255,0.03)] p-5">
              <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
                what this page holds
              </p>
              <p className="mt-3 font-['Inter'] text-sm leading-7 text-[rgba(245,245,247,0.72)]">
                a few tiny memories, a gentle glow, and one promise: this birthday
                should feel tender, not technical.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-8 rounded-3xl border border-[rgba(255,250,240,0.1)] bg-[linear-gradient(140deg,rgba(18,18,26,0.72),rgba(10,10,12,0.88))] p-6 backdrop-blur-md">
        <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
          final note
        </p>
        <p className="mt-3 max-w-2xl font-['Courier_Prime'] text-[15px] leading-7 text-[rgba(245,245,247,0.86)]">
          happy birthday, nehal — may this year feel softer, brighter, and a little
          more like home.
        </p>
      </section>
    </div>
  )
}
