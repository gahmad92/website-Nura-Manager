import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import Navbar from '../sections/Navbar'
import StatsSection from '../sections/StatsSection'
import FeaturesSection from '../sections/FeaturesSection'
import AgentsSection from '../sections/AgentsSection'
import ChatSimulation from '../sections/ChatSimulation'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const sectionHeader = (tag, title, desc) => (
  <motion.div className="text-center mb-14" {...fadeUp}>
    <span className="tag mb-4">{tag}</span>
    <h2 className="section-title text-[var(--color-black)] mb-4">{title}</h2>
    {desc && <p className="section-subtitle mx-auto">{desc}</p>}
  </motion.div>
)

const templates = [
  { name: 'Scrum Sprint', lists: 12, desc: 'Backlog, In Progress, Review, Done' },
  { name: 'Project Pipeline', lists: 8, desc: 'Lead, Prospect, Negotiation, Closed' },
  { name: 'Content Calendar', lists: 10, desc: 'Idea, Writing, Editing, Scheduled, Published' },
  { name: 'Bug Tracker', lists: 6, desc: 'Reported, Triaged, In Dev, Testing, Resolved' },
  { name: 'Personal Goals', lists: 7, desc: 'Yearly, Quarterly, Monthly, Weekly, Daily' },
  { name: 'Custom Blank', lists: 0, desc: 'Start from scratch, build your own workflow' },
]

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <StatsSection />

      <FeaturesSection />

      {/* ─── Templates ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {sectionHeader('Templates', 'Jumpstart Any Workflow', 'Pre-made Kanban templates for Scrum, Sales, Content, Bug Tracking, Personal Goals, or start from a blank board.')}

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {templates.map((t, i) => {
              const isWide = i === 0 || i === 3
              return (
                <motion.div
                  key={t.name}
                  className={`card ${isWide ? 'col-span-2 sm:col-span-1' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className={`flex items-center justify-between mb-2 ${isWide ? 'sm:flex-row flex-row' : ''}`}>
                    <h3 className={`font-bold text-[var(--color-black)] ${isWide ? 'text-base sm:text-sm' : 'text-sm'}`}>{t.name}</h3>
                    {t.lists > 0 && <span className="tag text-xs shrink-0 ml-2">{t.lists} lists</span>}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text-light)]">{t.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Agents ─── */}
      <section id="agent" className="py-24 px-6">
        <AgentsSection />

          {/* Weekly Briefing */}
          <motion.div className="card max-w-2xl mx-auto mt-10 text-center" {...fadeUp}>
            <h3 className="text-lg font-bold text-[var(--color-black)] mb-2">Weekly Briefing (Chronicler)</h3>
            <div className="space-y-1 text-sm text-[var(--color-text-light)]">
              <p>200 tracked actions. Top activity: card_created (51).</p>
              <p>Completed 4 vs pending 30 (11.8%).</p>
              <p>Busiest: Haider</p>
            </div>
            <button className="btn-primary text-sm mt-4">Generate Now</button>
          </motion.div>

          {/* Automation */}
          <motion.div className="card max-w-lg mx-auto mt-6 text-center" {...fadeUp}>
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-ginger)] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[var(--color-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-sm text-[var(--color-text-light)] mb-4">
              Set a time threshold. If a card isn't touched, it moves to
              <span className="font-semibold text-[var(--color-orange)]"> "Need Attention"</span> automatically.
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm text-[var(--color-muted)]">Threshold:</span>
              <select className="bg-[var(--color-ginger)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 text-sm font-medium">
                <option>2 hours</option>
                <option>4 hours</option>
                <option>8 hours</option>
                <option>24 hours</option>
              </select>
            </div>
          </motion.div>
      </section>

      {/* ─── Nura Chats / Commands ─── */}
      <section id="chats" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {sectionHeader('Talk to Your App', 'Nura Chats', 'Ask questions in plain English — Nura Chat understands natural language and controls everything for you.')}

          <ChatSimulation />
        </div>
      </section>

      {/* ─── Offline AI Setup ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {sectionHeader('Offline AI', 'Run AI on Your Machine', 'No cloud, no subscription. Download Ollama, pull Gemma 4 E4B, and let your local AI take over.')}

          <div className="space-y-4">
            {[
              { step: '1', title: 'Download & Install Ollama', desc: 'Visit ollama.com and install Ollama for your OS.' },
              { step: '2', title: 'Pull Gemma 4 E4B', code: 'ollama pull gemma4:e4b' },
              { step: '3', title: 'Connect Nura Manager', desc: 'Nura Manager auto-detects Ollama. Your AI handles board operations — fully offline.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="card flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-black)]">{item.title}</h3>
                  {item.desc && <p className="text-sm text-[var(--color-text-light)] mt-1">{item.desc}</p>}
                  {item.code && (
                    <pre className="mt-2 bg-[var(--color-ginger)] border border-[var(--color-border)] rounded-lg p-3 text-sm font-mono text-[var(--color-orange)]">{item.code}</pre>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="flex items-center gap-2 text-sm text-[var(--color-text-light)] bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6" {...fadeUp}>
            <span className="font-semibold text-amber-700 shrink-0">Note:</span>
            <span>You need a good computer to run Gemma 4 E4B locally — 8GB+ RAM recommended.</span>
          </motion.div>
        </div>
      </section>

      {/* ─── Download ─── */}
      <section id="download" className="py-24 px-6 bg-[var(--color-black)] text-white">
        <div className="max-w-5xl mx-auto text-center">
          {sectionHeader('Get Started', 'Download Nura Manager', 'Head to GitHub releases, download the latest version, and follow the guide below.')}

          <motion.div {...fadeUp}>
            <a
              href="https://github.com/gahmad92/Nura-release-/releases/tag/Nura"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Download from GitHub
            </a>
          </motion.div>

          <motion.div className="max-w-2xl mx-auto mt-12" {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/download_guide.png" alt="Download guide for Nura Manager" className="w-full h-auto" />
            </div>
            <p className="text-sm text-white/50 mt-4">Follow the guide above to download and install Nura Manager on your system.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
