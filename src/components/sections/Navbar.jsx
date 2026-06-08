import { useState, useEffect } from 'react'

const navItems = [
  { id: 'features', label: 'Features' },
  { id: 'agent', label: 'Agents' },
  { id: 'chats', label: 'Chat' },
  { id: 'download', label: 'Download Guide' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

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

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[var(--color-black)] flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm tracking-tight">N</span>
          </div>
          <span className="font-bold text-sm text-[var(--color-black)] hidden sm:inline">Nura Manager</span>
        </a>

        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {navItems.map(item => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
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

        <a
          href="https://github.com/gahmad92/Nura-release-/releases/tag/Nura"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-1.5 px-4 shrink-0"
        >
          Download
        </a>
      </div>
    </nav>
  )
}
