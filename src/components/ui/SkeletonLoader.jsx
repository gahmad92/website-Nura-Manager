import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from 'lenis/react'

const ORANGE = '#ea580c'

export default function SkeletonLoader({ children }) {
  const [show, setShow] = useState(true)
  const lenis = useLenis()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      lenis?.scrollTo(0, { immediate: true })
    }, 1500)
    return () => clearTimeout(timer)
  }, [lenis])

  return (
    <div className="relative min-h-screen bg-[var(--color-cream)]">
      <div style={{ opacity: show ? 0 : 1 }} className="transition-opacity duration-300">
        {children}
      </div>

      {show && (
        <div className="absolute inset-0 overflow-hidden bg-[var(--color-cream)]">
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ x: '-110vw' }}
              animate={{ x: '110vw' }}
              transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
              className="w-48 h-48 md:w-64 md:h-64"
            >
              <svg viewBox="0 0 130 130" className="w-full h-full" fill="none">
                <style>{`
                  @keyframes lg {
                    0%,100% { transform: rotate(-14deg); }
                    50% { transform: rotate(14deg); }
                  }
                  @keyframes lb {
                    0%,100% { transform: translateY(0); }
                    50% { transform: translateY(-2.5px); }
                  }
                  @keyframes lk {
                    0%,94%,100% { transform: scaleY(1); }
                    97% { transform: scaleY(0.1); }
                  }
                  @keyframes lgw {
                    0%,100% { opacity: 0.5; }
                    50% { opacity: 1; }
                  }
                  .ll { animation: lg .35s ease-in-out infinite; transform-origin: 48px 90px; }
                  .lr { animation: lg .35s ease-in-out infinite alternate; transform-origin: 82px 90px; }
                  .lbody { animation: lb .5s ease-in-out infinite; }
                  .leye { animation: lk 3s ease-in-out infinite; transform-origin: center; }
                  .lgw { animation: lgw 2s ease-in-out infinite; }
                `}</style>

                <g className="lbody">
                  {/* Antenna */}
                  <line x1="65" y1="14" x2="65" y2="3" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />
                  <circle className="lgw" cx="65" cy="3" r="4" fill={ORANGE} />

                  {/* Head */}
                  <rect x="35" y="14" width="60" height="42" rx="14" fill="white" stroke={ORANGE} strokeWidth="2.5" />

                  {/* Eyes */}
                  <g className="leye">
                    <ellipse cx="51" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
                    <circle cx="53" cy="28" r="2" fill="white" />
                  </g>
                  <g className="leye">
                    <ellipse cx="79" cy="30" rx="5.5" ry="6.5" fill="#0f0f0f" />
                    <circle cx="81" cy="28" r="2" fill="white" />
                  </g>

                  {/* Cheeks */}
                  <circle cx="42" cy="42" r="4" fill="#fca5a5" opacity="0.5" />
                  <circle cx="88" cy="42" r="4" fill="#fca5a5" opacity="0.5" />

                  {/* Smile */}
                  <path d="M 57 42 Q 65 48 73 42" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" />

                  {/* Body */}
                  <rect x="43" y="58" width="44" height="28" rx="8" fill="white" stroke={ORANGE} strokeWidth="2.5" />
                  <rect x="55" y="64" width="20" height="14" rx="5" fill="#fff7ed" />
                  <circle cx="65" cy="71" r="3" fill={ORANGE} />

                  {/* Left arm — holding paper */}
                  <line x1="41" y1="64" x2="28" y2="88" stroke={ORANGE} strokeWidth="4" strokeLinecap="round" />
                  <circle cx="28" cy="88" r="4.5" fill={ORANGE} />

                  {/* Paper / clipboard */}
                  <rect x="6" y="72" width="26" height="34" rx="3" fill="white" stroke="#9ca3af" strokeWidth="1.5" />
                  <rect x="15" y="70" width="8" height="5" rx="1.5" fill={ORANGE} />
                  <line x1="11" y1="83" x2="27" y2="83" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
                  <line x1="11" y1="90" x2="27" y2="90" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />
                  <line x1="11" y1="97" x2="27" y2="97" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" />

                  {/* Right arm — holding pencil */}
                  <line x1="89" y1="64" x2="104" y2="84" stroke={ORANGE} strokeWidth="4" strokeLinecap="round" />
                  <circle cx="104" cy="84" r="4.5" fill={ORANGE} />

                  {/* Pencil */}
                  <line x1="100" y1="82" x2="114" y2="64" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="114" y1="64" x2="117" y2="59" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="110" y="60" width="6" height="3" rx="1" fill="#ef4444" transform="rotate(-45, 113, 61)" />

                  {/* Legs */}
                  <g className="ll">
                    <rect x="46" y="88" width="14" height="20" rx="6" fill="white" stroke={ORANGE} strokeWidth="2.5" />
                  </g>
                  <g className="lr">
                    <rect x="70" y="88" width="14" height="20" rx="6" fill="white" stroke={ORANGE} strokeWidth="2.5" />
                  </g>

                  {/* Feet */}
                  <rect x="44" y="106" width="18" height="7" rx="3.5" fill={ORANGE} />
                  <rect x="68" y="106" width="18" height="7" rx="3.5" fill={ORANGE} />
                </g>
              </svg>
            </motion.div>
          </div>

          <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-[var(--color-muted)] font-medium animate-pulse">
            Loading Nura Manager...
          </p>
        </div>
      )}
    </div>
  )
}
