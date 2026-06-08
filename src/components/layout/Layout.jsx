import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-[var(--color-border)] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} Ghulam Haider Productions. All rights reserved.
          </p>
          <a
            href="https://github.com/gahmad92/Nura-release-/releases/tag/Nura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-orange)] hover:underline font-medium"
          >
            Download Nura Manager
          </a>
        </div>
      </footer>
    </div>
  )
}
