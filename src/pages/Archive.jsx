import { motion } from 'framer-motion'
import Confession from '../components/Confession'

const confessions = [
  {
    id: 1,
    title: "first thought",
    text: "the very first time i saw you, i remember thinking that the rest of the world felt suddenly very quiet."
  },
  {
    id: 2,
    title: "stolen glances",
    text: "i used to look for your name in notifications just to feel that tiny rush of adrenaline before opening the message."
  }
]

export default function Archive() {
  return (
    <div className="flex flex-col px-5 pb-32 pt-7 md:px-8">
      <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.62)]">
        <p className="font-['Inter']">midnight whispers</p>
        <p className="font-['Inter']">archive</p>
      </header>

      <section className="relative z-10 mt-14 grid gap-8 md:grid-cols-2">
        {confessions.map((conf, index) => (
          <Confession key={index} title={conf.title} text={conf.text} />
        ))}
      </section>

      <section className="relative z-10 mt-14 flex items-center justify-center rounded-[2rem] border border-[rgba(255,250,240,0.12)] bg-[linear-gradient(140deg,rgba(24,20,29,0.5),rgba(10,10,12,0.4))] p-10 min-h-[30vh] shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <motion.p
           className="font-['Courier_Prime'] text-sm tracking-widest text-[rgba(245,245,247,0.3)] text-center max-w-lg leading-relaxed uppercase"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2, duration: 1 }}
        >
          use the light to reveal what is hidden in the dark...
        </motion.p>
      </section>
    </div>
  )
}
