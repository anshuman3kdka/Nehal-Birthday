import LogFragment from '../components/LogFragment'

const fragments = [
  {
    id: 'fragment_001',
    time: '00:17 am',
    location: 'quiet corner',
    text: 'you turned an ordinary night into a place that felt gently impossible to leave.',
  },
  {
    id: 'fragment_002',
    time: '01:09 am',
    location: 'city lights',
    text: 'every small laugh of yours made the whole skyline feel softer somehow.',
  },
  {
    id: 'fragment_003',
    time: '02:03 am',
    location: 'homeward',
    text: 'i kept wishing the road would stretch forever if it meant staying beside you longer.',
  },
]

export default function Journal() {
  return (
    <div className="flex flex-col px-5 pb-32 pt-7 md:px-8">
      <header className="flex items-center justify-between text-[11px] tracking-[0.22em] text-[rgba(245,245,247,0.62)]">
        <p className="font-['Inter']">midnight whispers</p>
        <p className="font-['Inter']">journal</p>
      </header>

      <section className="relative z-10 mt-14 grid gap-4 md:grid-cols-3">
        {fragments.map((fragment, index) => (
          <LogFragment key={fragment.id} fragment={fragment} index={index} />
        ))}
      </section>
    </div>
  )
}
