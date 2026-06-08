import { motion } from 'framer-motion'

const ORANGE = '#ea580c'

const agents = [
  { name: 'Manager Agent', role: 'Manager', desc: 'Calculates member workload and highlights who is carrying the most load.', stat: 'Busiest: Haider (3.5)', color: 'bg-orange-100 text-orange-700' },
  { name: 'Planner Agent', role: 'Planner', desc: 'Suggests improvements such as possible duplicate task warnings.', stat: '0 suggestions', color: 'bg-amber-100 text-amber-700' },
  { name: 'Risk Agent', role: 'Risk', desc: 'Scans due dates and stale cards, then raises overdue and due-soon alerts.', stat: '5 risk cards flagged', color: 'bg-red-100 text-red-700' },
  { name: 'Chronicler Agent', role: 'Chronicler', desc: 'Builds weekly narrative summaries from events, workload and risk data.', stat: '200 weekly events', color: 'bg-emerald-100 text-emerald-700' },
]

const botEnter = {
  initial: { y: -80, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 90, damping: 13 },
}

const contentEnter = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

function AgentBot({ delay }) {
  return (
    <motion.div {...botEnter} transition={{ ...botEnter.transition, delay }}>
      <svg viewBox="0 0 100 110" className="w-full h-full" fill="none">
        <style>{`
          @keyframes a-leg { 0%,100% { transform: rotate(-13deg); } 50% { transform: rotate(13deg); } }
          @keyframes a-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-1.5px); } }
          @keyframes a-blink { 0%,94%,100% { transform: scaleY(1); } 97% { transform: scaleY(0.1); } }
          @keyframes a-arm { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
          .al { animation: a-leg .35s ease-in-out infinite; transform-origin: 36px 80px; }
          .ar { animation: a-leg .35s ease-in-out infinite alternate; transform-origin: 64px 80px; }
          .ab { animation: a-bounce .6s ease-in-out infinite; }
          .ae { animation: a-blink 3s ease-in-out infinite; transform-origin: center; }
          .ah { animation: a-arm 2s ease-in-out infinite; }
        `}</style>

        <line x1="50" y1="14" x2="50" y2="3" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="3" r="3.5" fill={ORANGE} />

        <rect x="20" y="14" width="60" height="42" rx="14" fill="white" stroke={ORANGE} strokeWidth="2.5" />

        <g className="ae">
          <ellipse cx="36" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
          <circle cx="38" cy="28" r="2" fill="white" />
        </g>
        <g className="ae">
          <ellipse cx="64" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
          <circle cx="66" cy="28" r="2" fill="white" />
        </g>

        <circle cx="27" cy="42" r="4" fill="#fca5a5" opacity="0.5" />
        <circle cx="73" cy="42" r="4" fill="#fca5a5" opacity="0.5" />

        <path d="M 42 42 Q 50 48 58 42" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />

        <g className="ab">
          <rect x="28" y="58" width="44" height="28" rx="8" fill="white" stroke={ORANGE} strokeWidth="2.5" />
          <rect x="40" y="64" width="20" height="14" rx="5" fill="#fff7ed" />
          <circle cx="50" cy="71" r="3" fill={ORANGE} />
        </g>

        <g className="ab ah">
          <line x1="26" y1="64" x2="16" y2="100" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="74" y1="64" x2="84" y2="100" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
        </g>

        <g className="al">
          <rect x="30" y="88" width="12" height="16" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />
        </g>
        <g className="ar">
          <rect x="58" y="88" width="12" height="16" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />
        </g>

        <rect x="28" y="101" width="16" height="6" rx="3" fill={ORANGE} />
        <rect x="56" y="101" width="16" height="6" rx="3" fill={ORANGE} />
      </svg>
    </motion.div>
  )
}

export default function AgentsSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="tag mb-4">AI Agents</span>
        <h2 className="section-title text-[var(--color-black)] mb-4">Intelligence Built In</h2>
        <p className="section-subtitle mx-auto">Four specialized agents work in the background to keep your workflow smooth and productive.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent, i) => (
          <div
            key={agent.name}
            className="feature-card text-center relative overflow-visible pt-7"
          >
            <div className="flex justify-center -mt-[2.25rem] mb-1">
              <div className="w-[72px] h-[79px] md:w-[88px] md:h-[97px]">
                <AgentBot delay={i * 0.1} />
              </div>
            </div>

            <div className="absolute left-[14%] top-[3.25rem] w-[10px] h-[10px] md:w-3 md:h-3 rounded-full bg-[var(--color-orange)] shadow-sm z-10" />
            <div className="absolute right-[14%] top-[3.25rem] w-[10px] h-[10px] md:w-3 md:h-3 rounded-full bg-[var(--color-orange)] shadow-sm z-10" />

            <motion.div
              {...contentEnter}
              transition={{ ...contentEnter.transition, delay: i * 0.1 + 0.2 }}
              className="relative"
            >
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${agent.color}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {agent.role}
              </div>
              <h3 className="font-bold text-[var(--color-black)] mb-2">{agent.name}</h3>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-4">{agent.desc}</p>
              <p className="text-xs font-mono text-[var(--color-orange)] bg-[var(--color-ginger)] inline-block px-2 py-0.5 rounded">{agent.stat}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
