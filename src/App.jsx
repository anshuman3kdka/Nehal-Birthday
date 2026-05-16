import { motion } from 'framer-motion'
const fragments = [
  {
    id: 'fragment_001',
    time: '00:17 am',
    location: 'quiet corner',
    text: 'you turned an ordinary night into a place i never wanted to leave.',
  },
  {
    id: 'fragment_002',
    time: '01:09 am',
    location: 'city lights',
    text: 'every small laugh of yours felt louder than the whole skyline.',
  },
  {
    id: 'fragment_003',
    time: '02:03 am',
    location: 'homeward',
    text: 'i kept wishing the road would stretch just to stay next to you longer.',
  },
]

function LogFragment({ fragment, index }) {
  return (
    <motion.article
      className="rounded-2xl border border-[rgba(255,250,240,0.15)] bg-[rgba(18,18,26,0.42)] p-5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6, ease: 'easeOut' }}
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

function App() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#f5f5f7]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-16 pt-7 md:px-8">
        <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.62)]">
          <p className="font-['Inter']">midnight whispers</p>
          <p className="font-['Inter']">private archive</p>
        </header>

        <section className="mt-16">
          <motion.p
            className="font-['Inter'] text-[11px] tracking-[0.2em] text-[rgba(245,245,247,0.56)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            entry point: 2:00 am internet
          </motion.p>

          <motion.h1
            className="mt-4 max-w-3xl font-['Courier_Prime'] text-3xl leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
          >
            a soft place where every memory of you glows in the dark.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl font-['Inter'] text-sm leading-7 text-[rgba(245,245,247,0.72)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6, ease: 'easeOut' }}
          >
            this is the foundation of your birthday archive: quiet tones, journal
            fragments, and a hidden layer ready for the searchlight in step two.
          </motion.p>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          {fragments.map((fragment, index) => (
            <LogFragment key={fragment.id} fragment={fragment} index={index} />
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[rgba(74,59,99,0.55)] bg-[linear-gradient(140deg,rgba(18,18,26,0.9),rgba(10,10,12,0.8))] p-6">
          <p className="font-['Inter'] text-[11px] tracking-[0.18em] text-[rgba(255,250,240,0.72)]">
            hidden confession placeholder
          </p>
          <p className="mt-3 max-w-2xl font-['Courier_Prime'] text-[15px] leading-7 text-[rgba(245,245,247,0.62)] blur-[2px]">
            you are the safest midnight i have ever known.
          </p>
        </section>
      </div>
    </main>
  )
}

export default App
