import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-ginger)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-ginger-dark)_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto w-full py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <span className="tag mb-6 inline-block">v2.0 — Completely Offline</span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-[var(--color-black)] mb-6">
              Your Smart{' '}
              <span className="gradient-text">Kanban Desktop</span>
              <br />
              App, No Account Needed
            </h1>
            
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-10 max-w-md">
              Nura Manager is a fully offline Kanban productivity app with intelligent agents,
              AI chat control, and zero cloud dependency. Your data stays on your machine. But we own the Software 
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a
                href="https://github.com/gahmad92/Nura-release-/releases/tag/Nura"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-7 py-3.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Download for Free
              </a>
              <a href="#features" className="btn-outline text-base px-7 py-3.5">
                Explore Features
              </a>
            </div>

            <p className="text-sm text-[var(--color-muted)]">
             Available for  Windows  No account. No cloud. Just your data.
            </p>
          </motion.div>

          {/* Right: Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg group">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-ginger)]/20 to-[var(--color-ginger-dark)]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Screenshot card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl shadow-black/[0.04] ring-1 ring-black/5">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-gray-50 border-b border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs text-gray-400 font-medium">Nura Manager — Board View</span>
                </div>
                
                {/* Screenshot placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-b from-white to-gray-50/50 flex flex-col items-center justify-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--color-ginger)]/10 flex items-center justify-center ring-1 ring-black/5">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-400">App Screenshot</p>
                    <p className="text-xs text-gray-300 mt-1">Replace with your screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}