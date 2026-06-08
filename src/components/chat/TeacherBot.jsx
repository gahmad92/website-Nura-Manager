const ORANGE = '#ea580c'

export default function TeacherBot() {
  return (
    <div className="w-11 h-[52px] md:w-[52px] md:h-[60px]">
      <svg viewBox="0 0 100 115" className="w-full h-full" fill="none">
        <style>{`
          @keyframes tb {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
          @keyframes tp {
            0%,100% { transform: rotate(-4deg); }
            50% { transform: rotate(4deg); }
          }
          @keyframes tbl {
            0%,94%,100% { transform: scaleY(1); }
            97% { transform: scaleY(0.1); }
          }
          .tb { animation: tb 2.5s ease-in-out infinite; transform-origin: center bottom; }
          .tp { animation: tp 1.8s ease-in-out infinite; transform-origin: 90px 50px; }
          .tbl { animation: tbl 3s ease-in-out infinite; transform-origin: center; }
        `}</style>

        <g className="tb">
          {/* Hair tuft */}
          <path d="M 35 14 Q 50 4 65 14" fill="#d4d4d4" />
          <circle cx="40" cy="12" r="4" fill="#d4d4d4" />
          <circle cx="50" cy="9" r="4" fill="#d4d4d4" />
          <circle cx="60" cy="12" r="4" fill="#d4d4d4" />

          {/* Head */}
          <rect x="20" y="14" width="60" height="42" rx="14" fill="white" stroke={ORANGE} strokeWidth="2.5" />

          {/* Eyes */}
          <ellipse cx="36" cy="30" rx="4.5" ry="5.5" fill="#0f0f0f" />
          <ellipse cx="64" cy="30" rx="4.5" ry="5.5" fill="#0f0f0f" />
          <circle cx="38" cy="28" r="1.8" fill="white" />
          <circle cx="66" cy="28" r="1.8" fill="white" />

          {/* Glasses */}
          <circle cx="36" cy="30" r="8" stroke="#6b7280" strokeWidth="2" />
          <circle cx="64" cy="30" r="8" stroke="#6b7280" strokeWidth="2" />
          <line x1="44" y1="30" x2="56" y2="30" stroke="#6b7280" strokeWidth="2" />
          <line x1="28" y1="28" x2="22" y2="26" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="72" y1="28" x2="78" y2="26" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />

          {/* Cheeks */}
          <circle cx="27" cy="42" r="4" fill="#fca5a5" opacity="0.4" />
          <circle cx="73" cy="42" r="4" fill="#fca5a5" opacity="0.4" />

          {/* Wise smile */}
          <path d="M 43 44 Q 50 49 57 44" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />

          {/* Body */}
          <rect x="28" y="58" width="44" height="28" rx="8" fill="white" stroke={ORANGE} strokeWidth="2.5" />
          <rect x="40" y="64" width="20" height="14" rx="4" fill="#fff7ed" />
          <circle cx="50" cy="71" r="3" fill={ORANGE} />

          {/* Collar / tie */}
          <path d="M 46 58 L 50 64 L 54 58" stroke={ORANGE} strokeWidth="1.5" fill="#fff7ed" />

          {/* Left arm - resting */}
          <line x1="26" y1="64" x2="14" y2="78" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />

          {/* Right arm - holding pen */}
          <g className="tp">
            <line x1="74" y1="64" x2="88" y2="52" stroke={ORANGE} strokeWidth="3.5" strokeLinecap="round" />
            <line x1="86" y1="52" x2="96" y2="38" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="96" cy="38" r="2" fill="#6b7280" />
          </g>

          {/* Legs */}
          <rect x="30" y="88" width="12" height="16" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />
          <rect x="58" y="88" width="12" height="16" rx="5" fill="white" stroke={ORANGE} strokeWidth="2.5" />

          {/* Feet */}
          <rect x="28" y="101" width="16" height="6" rx="3" fill={ORANGE} />
          <rect x="56" y="101" width="16" height="6" rx="3" fill={ORANGE} />
        </g>
      </svg>
    </div>
  )
}
