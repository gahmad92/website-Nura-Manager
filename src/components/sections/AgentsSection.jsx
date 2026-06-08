import { motion } from 'framer-motion'

const ORANGE = '#ea580c'

const agents = [
  { name: 'Manager Agent', role: 'Manager', desc: 'Calculates member workload and highlights who is carrying the most load.', stat: 'Busiest: Haider (3.5)', color: 'bg-orange-100 text-orange-700' },
  { name: 'Planner Agent', role: 'Planner', desc: 'Suggests improvements such as possible duplicate task warnings.', stat: '0 suggestions', color: 'bg-amber-100 text-amber-700' },
  { name: 'Risk Agent', role: 'Risk', desc: 'Scans due dates and stale cards, then raises overdue and due-soon alerts.', stat: '5 risk cards flagged', color: 'bg-red-100 text-red-700' },
  { name: 'Chronicler Agent', role: 'Chronicler', desc: 'Builds weekly narrative summaries from events, workload and risk data.', stat: '200 weekly events', color: 'bg-emerald-100 text-emerald-700' },
]

function AgentBot({ delay }) {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 90, damping: 13, delay }}
    >
      <svg viewBox="0 0 100 115" className="w-full h-full" fill="none">
        <style>{`
          @keyframes jb {
            0%,100% { transform: translateY(0); }
            18% { transform: translateY(-9px) scaleY(0.96); }
            38% { transform: translateY(0); }
            55% { transform: translateY(-5px) scaleY(0.98); }
            72% { transform: translateY(0); }
          }
          @keyframes je {
            0%,94%,100% { transform: scaleY(1); }
            97% { transform: scaleY(0.1); }
          }
          @keyframes jg {
            0%,100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .jb { animation: jb 1.4s ease-in-out infinite; transform-origin: center bottom; }
          .je { animation: je 3s ease-in-out infinite; transform-origin: center; }
          .jg { animation: jg 2s ease-in-out infinite; }
        `}</style>

        <g className="jb">
          <line x1="50" y1="14" x2="50" y2="3" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
          <circle className="jg" cx="50" cy="3" r="3.5" fill={ORANGE} />

          <rect x="20" y="14" width="60" height="42" rx="14" fill="white" stroke={ORANGE} strokeWidth="2.5" />

          <g className="je">
            <ellipse cx="36" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
            <circle cx="38" cy="28" r="2" fill="white" />
          </g>
          <g className="je">
            <ellipse cx="64" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
            <circle cx="66" cy="28" r="2" fill="white" />
          </g>

          <circle cx="27" cy="42" r="4" fill="#fca5a5" opacity="0.5" />
          <circle cx="73" cy="42" r="4" fill="#fca5a5" opacity="0.5" />

          <path d="M 42 42 Q 50 48 58 42" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />

          <rect x="28" y="58" width="44" height="28" rx="8" fill="white" stroke={ORANGE} strokeWidth="2.5" />
          <rect x="40" y="64" width="20" height="14" rx="5" fill="#fff7ed" />
          <circle cx="50" cy="71" r="3" fill={ORANGE} />

          <line x1="26" y1="64" x2="16" y2="104" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="74" y1="64" x2="84" y2="104" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="16" cy="104" r="4.5" fill={ORANGE} />
          <circle cx="84" cy="104" r="4.5" fill={ORANGE} />

          <rect x="30" y="88" width="12" height="16" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />
          <rect x="58" y="88" width="12" height="16" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />
          <rect x="28" y="101" width="16" height="6" rx="3" fill={ORANGE} />
          <rect x="56" y="101" width="16" height="6" rx="3" fill={ORANGE} />
        </g>
      </svg>
    </motion.div>
  )
}

const contentEnter = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
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
              <div className="w-[72px] h-[83px] md:w-[88px] md:h-[101px]">
                <AgentBot delay={i * 0.1} />
              </div>
            </div>

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
