import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    id: 'boards',
    title: 'Boards',
    icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
    headline: 'Smart Kanban Boards',
    description: 'Powerful Kanban boards with drag & drop, premade templates, and smart intelligence that finds similar cards and auto-sorts them into the right lists.',
    bullets: [
      'Unlimited boards, lists, and cards',
      'Drag-and-drop with smooth animations',
      'Labels, due dates, members & descriptions',
      'Pre-built templates to start fast',
    ],
    screenshot: 'Board View',
  },
  {
    id: 'dashboard',
    title: 'Nura Manager',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    headline: 'Dashboard & Analytics',
    description: 'Summary dashboard with real-time stats, hours timeline, and workload overview to track productivity at a glance.',
    bullets: [
      'Average task completion time tracking',
      'Completed vs pending task ratios',
      'Busiest member identification',
      'Risk cards flagging & monitoring',
    ],
    screenshot: 'Dashboard View',
  },
  {
    id: 'members',
    title: 'Members',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    headline: 'Team Members',
    description: 'Manage team members with custom roles and permissions. Track who does what, all locally on your machine.',
    bullets: [
      'Member profiles with assigned cards',
      'Workload score per member',
      'Assignment tracking across boards',
      'Auto-detect overloaded members',
    ],
    screenshot: 'Members View',
  },
  {
    id: 'schedule',
    title: 'Schedule',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    headline: 'Calendar & Scheduling',
    description: 'Built-in calendar and date management for deadlines, milestones, and sprint planning — all offline.',
    bullets: [
      'Calendar view for all due dates',
      'Timeline visualization across boards',
      'Overdue alerts with auto-routing',
      'Date-based filtering and sorting',
    ],
    screenshot: 'Schedule View',
  },
  {
    id: 'agent',
    title: 'Nura Agent',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    headline: 'Nura AI Agents',
    description: 'Four intelligent agents — Manager, Planner, Risk, Chronicler — that automate workload tracking, risk detection, and weekly reports.',
    bullets: [
      'Manager agent balances team workload',
      'Planner agent schedules and prioritizes',
      'Risk agent flags blockers early',
      'Chronicler generates weekly reports',
    ],
    screenshot: 'Agent View',
  },
  {
    id: 'chat',
    title: 'Nura Chats',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    headline: 'Offline NLP Chat',
    description: 'AI-powered chat to control your boards with natural language or slash commands. Works fully offline with Ollama + Gemma 4 E4B.',
    bullets: [
      'Natural language board control',
      'Slash command shortcuts',
      'Runs on Ollama + Gemma 4 E4B locally',
      'No internet or API key required',
    ],
    screenshot: 'Chat View',
  },
]

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const active = tabs[activeTab]

  return (
    <section id="features" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="tag mb-4">Features</span>
          <h2 className="section-title text-[var(--color-black)] mb-4">Everything You Need</h2>
          <p className="section-subtitle mx-auto">
            From Kanban boards to AI-powered automation — Nura Manager brings everything to your desktop, fully offline.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                activeTab === i
                  ? 'text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-[var(--color-text-light)] border-[var(--color-border)] hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] hover:shadow-md'
              }`}
              style={activeTab === i ? { background: 'var(--gradient-primary)' } : {}}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={tab.icon} />
              </svg>
              {tab.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Text Side */}
            <div>
              {/* Icon + headline */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-ginger)' }}>
                  <svg className="w-6 h-6" style={{ color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={active.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-black)]">{active.headline}</h3>
              </div>

              <p className="text-[var(--color-text-light)] text-[17px] leading-relaxed mb-8">
                {active.description}
              </p>

              <ul className="space-y-3.5">
                {active.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-white"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <CheckIcon />
                    </span>
                    <span className="text-[var(--color-text)] text-[15px] leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screenshot Side */}
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
                style={{ background: 'linear-gradient(135deg, rgba(234,88,12,0.15), rgba(249,115,22,0.10))' }}
              />

              {/* Window frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[var(--color-border)] shadow-xl">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--color-border)]" style={{ background: 'var(--color-ginger)' }}>
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-xs font-medium text-[var(--color-text-light)]">
                    Nura Manager — {active.title}
                  </span>
                </div>

                {/* Placeholder area */}
                <div className="aspect-[16/10] flex flex-col items-center justify-center gap-4" style={{ background: 'var(--color-cream)' }}>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--color-ginger)', border: '1px solid var(--color-border)' }}
                  >
                    <svg className="w-8 h-8" style={{ color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={active.icon} />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[var(--color-text)]">{active.screenshot}</p>
                    <p className="text-xs text-[var(--color-muted)] mt-1">Replace with your app screenshot</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}