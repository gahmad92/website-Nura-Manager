import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'features', label: 'Features' },
  { id: 'agent', label: 'Agents' },
  { id: 'chats', label: 'Chat' },
  { id: 'download', label: 'Download Guide' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    for (const item of navItems) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <button onClick={() => setMenuOpen(o => !o)} className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[var(--color-black)] flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xs sm:text-sm tracking-tight">N</span>
          </div>
          <span className="font-bold text-xs sm:text-sm text-[var(--color-black)] hidden sm:inline">Nura Manager</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1 flex-1 min-w-0 mx-4 overflow-x-auto no-scrollbar">
          {navItems.map(item => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[var(--color-ginger)] text-[var(--color-orange)]'
                    : 'text-[var(--color-text-light)] hover:text-[var(--color-orange)] hover:bg-[var(--color-ginger)]'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        {/* Desktop Download */}
        <a
          href="https://github.com/gahmad92/Nura-release-/releases/tag/Nura"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex shrink-0 whitespace-nowrap rounded-lg font-semibold text-white text-sm py-1.5 px-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: 'var(--gradient-primary)' }}
        >
          Download
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="sm:hidden flex flex-col items-center justify-center gap-1 w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[var(--color-black)] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[var(--color-black)] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[var(--color-black)] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="sm:hidden overflow-hidden bg-white border-b border-[var(--color-border)]"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map(item => {
                const isActive = active === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--color-ginger)] text-[var(--color-orange)]'
                        : 'text-[var(--color-text-light)] hover:text-[var(--color-orange)] hover:bg-[var(--color-ginger)]'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
              <a
                href="https://github.com/gahmad92/Nura-release-/releases/tag/Nura"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-lg font-semibold text-white text-sm py-2.5 mt-2 shadow-md"
                style={{ background: 'var(--gradient-primary)' }}
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
