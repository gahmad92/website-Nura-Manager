import { motion } from 'framer-motion'

const ORANGE = '#ea580c'

const stats = [
  { number: '100%', label: 'Offline' },
  { number: '0', label: 'Accounts Needed' },
  { number: '4+', label: 'Intelligent Agents' },
  { number: 'Free', label: 'to use' },
]

function CuteBot({ index }) {
  const directions = [-200, 200, -200, 200]

  return (
    <motion.div
      initial={{ x: directions[index], opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 16,
        delay: index * 0.12,
      }}
    >
      <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
        <style>{`
          @keyframes s-leg {
            0%,100% { transform: rotate(-14deg); }
            50% { transform: rotate(14deg); }
          }
          @keyframes s-bounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          @keyframes s-blink {
            0%,94%,100% { transform: scaleY(1); }
            97% { transform: scaleY(0.1); }
          }
          @keyframes s-glow {
            0%,100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
          .sl { animation: s-leg .35s ease-in-out infinite; transform-origin: 38px 88px; }
          .sr { animation: s-leg .35s ease-in-out infinite alternate; transform-origin: 62px 88px; }
          .sb { animation: s-bounce .6s ease-in-out infinite; }
          .se { animation: s-blink 3s ease-in-out infinite; transform-origin: center; }
          .sg { animation: s-glow 2s ease-in-out infinite; }
        `}</style>

        <line x1="50" y1="14" x2="50" y2="3" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
        <circle className="sg" cx="50" cy="3" r="3.5" fill={ORANGE} />

        <rect x="20" y="14" width="60" height="42" rx="14" fill="white" stroke={ORANGE} strokeWidth="2.5" />

        <g className="se">
          <ellipse cx="36" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
          <circle cx="38" cy="28" r="2" fill="white" />
        </g>
        <g className="se">
          <ellipse cx="64" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
          <circle cx="66" cy="28" r="2" fill="white" />
        </g>

        <circle cx="27" cy="42" r="4" fill="#fca5a5" opacity="0.5" />
        <circle cx="73" cy="42" r="4" fill="#fca5a5" opacity="0.5" />

        <path d="M 42 42 Q 50 48 58 42" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />

        <g className="sb">
          <rect x="28" y="58" width="44" height="30" rx="8" fill="white" stroke={ORANGE} strokeWidth="2.5" />
          <rect x="40" y="65" width="20" height="14" rx="5" fill="#fff7ed" />
          <circle cx="50" cy="72" r="3" fill={ORANGE} />

          <line x1="26" y1="63" x2="14" y2="73" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="74" y1="63" x2="86" y2="73" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
        </g>

        <g className="sl">
          <rect x="32" y="88" width="12" height="18" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />
        </g>
        <g className="sr">
          <rect x="56" y="88" width="12" height="18" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />
        </g>

        <rect x="30" y="103" width="16" height="6" rx="3" fill={ORANGE} />
        <rect x="54" y="103" width="16" height="6" rx="3" fill={ORANGE} />
      </svg>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 px-6 bg-white border-y border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center text-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
          >
            <div className="flex items-center justify-center w-[72px] h-[86px] md:w-[96px] md:h-[115px]">
              <CuteBot index={i} />
            </div>
            <div>
              <p className="stat-number gradient-text leading-none">{stat.number}</p>
              <p className="text-sm text-[var(--color-muted)] mt-1.5">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
