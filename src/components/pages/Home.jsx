import { motion } from 'framer-motion'
import Hero from '../sections/Hero'
import Navbar from '../sections/Navbar'

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

const features = [
  {
    id: 'boards',
    title: 'Boards',
    desc: 'Powerful Kanban boards with drag & drop, premade templates, and smart intelligence that finds similar cards and auto-sorts them into the right lists.',
    icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
  },
  {
    id: 'manager',
    title: 'Nura Manager',
    desc: 'Summary dashboard with real-time stats, hours timeline, and workload overview to track productivity at a glance.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    id: 'members',
    title: 'Members',
    desc: 'Manage team members with custom roles and permissions. Track who does what, all locally on your machine.',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    id: 'schedule',
    title: 'Schedule',
    desc: 'Built-in calendar and date management for deadlines, milestones, and sprint planning — all offline.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    id: 'agent',
    title: 'Nura Agent',
    desc: 'Four intelligent agents — Manager, Planner, Risk, Chronicler — that automate workload tracking, risk detection, and weekly reports.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    id: 'chats',
    title: 'Nura Chats',
    desc: 'AI-powered chat to control your boards with natural language or slash commands. Works offline with Ollama + Gemma 4 E4B.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
]

const agents = [
  { name: 'Manager Agent', role: 'Manager', desc: 'Calculates member workload and highlights who is carrying the most load.', stat: 'Busiest: Haider (3.5)', color: 'bg-orange-100 text-orange-700' },
  { name: 'Planner Agent', role: 'Planner', desc: 'Suggests improvements such as possible duplicate task warnings.', stat: '0 suggestions', color: 'bg-amber-100 text-amber-700' },
  { name: 'Risk Agent', role: 'Risk', desc: 'Scans due dates and stale cards, then raises overdue and due-soon alerts.', stat: '5 risk cards flagged', color: 'bg-red-100 text-red-700' },
  { name: 'Chronicler Agent', role: 'Chronicler', desc: 'Builds weekly narrative summaries from events, workload and risk data.', stat: '200 weekly events', color: 'bg-emerald-100 text-emerald-700' },
]

const templates = [
  { name: 'Scrum Sprint', lists: 12, desc: 'Backlog, In Progress, Review, Done' },
  { name: 'Project Pipeline', lists: 8, desc: 'Lead, Prospect, Negotiation, Closed' },
  { name: 'Content Calendar', lists: 10, desc: 'Idea, Writing, Editing, Scheduled, Published' },
  { name: 'Bug Tracker', lists: 6, desc: 'Reported, Triaged, In Dev, Testing, Resolved' },
  { name: 'Personal Goals', lists: 7, desc: 'Yearly, Quarterly, Monthly, Weekly, Daily' },
  { name: 'Custom Blank', lists: 0, desc: 'Start from scratch, build your own workflow' },
]

const exampleCommands = [
  'how many boards do we have?',
  'show lists in board Launch',
  'how many members do we have?',
  'who has the least work?',
  'who is the best performing member?',
  'show progress for member Max',
]

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      {/* ─── Stats Bar ─── */}
      <section className="py-16 px-6 bg-white border-y border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '100%', label: 'Offline' },
            { number: '0', label: 'Accounts Needed' },
            { number: '4+', label: 'Intelligent Agents' },
            { number: 'Free', label: 'Open Source' },
          ].map((stat, i) => (
            <motion.div key={stat.label} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <p className="stat-number gradient-text">{stat.number}</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          {sectionHeader('Features', 'Everything You Need', 'From Kanban boards to AI-powered automation — Nura Manager brings everything to your desktop, fully offline.')}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--color-ginger)] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[var(--color-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-black)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Templates ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {sectionHeader('Templates', 'Jumpstart Any Workflow', 'Pre-made Kanban templates for Scrum, Sales, Content, Bug Tracking, Personal Goals, or start from a blank board.')}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((t, i) => (
              <motion.div
                key={t.name}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[var(--color-black)]">{t.name}</h3>
                  {t.lists > 0 && <span className="tag text-xs">{t.lists} lists</span>}
                </div>
                <p className="text-sm text-[var(--color-text-light)]">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Agents ─── */}
      <section id="agent" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {sectionHeader('AI Agents', 'Intelligence Built In', 'Four specialized agents work in the background to keep your workflow smooth and productive.')}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                className="feature-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${agent.color}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {agent.role}
                </div>
                <h3 className="font-bold text-[var(--color-black)] mb-2">{agent.name}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-4">{agent.desc}</p>
                <p className="text-xs font-mono text-[var(--color-orange)] bg-[var(--color-ginger)] inline-block px-2 py-0.5 rounded">{agent.stat}</p>
              </motion.div>
            ))}
          </div>

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
        </div>
      </section>

      {/* ─── Nura Chats / Commands ─── */}
      <section id="chats" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {sectionHeader('Talk to Your App', 'Nura Chats', 'Ask questions in plain English — Nura Chat understands natural language and controls everything for you.')}

          {/* Chat preview */}
          <motion.div className="card max-w-xl mx-auto mb-10" {...fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-black)]">Nura Chat</h3>
                <span className="text-xs text-emerald-600 font-medium">Online &mdash; Local AI ready</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-ginger)] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[var(--color-orange)]">AI</span>
                </div>
                <div className="bg-[var(--color-ginger)] rounded-r-xl rounded-t-xl px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-[var(--color-text)]">Hello! I'm your Nura Assistant. How can I help you manage your boards today?</p>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-[var(--color-orange)]/10 rounded-l-xl rounded-t-xl px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-[var(--color-text)]">Create a new board called &quot;Sprint 24&quot;</p>
                </div>
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">GH</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-ginger)] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[var(--color-orange)]">AI</span>
                </div>
                <div className="bg-[var(--color-ginger)] rounded-r-xl rounded-t-xl px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-[var(--color-text)]">Done! Created board &quot;Sprint 24&quot; with Backlog, In Progress, Review, Done.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <input type="text" placeholder="Ask anything in plain English..." className="flex-1 bg-white border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-orange)] transition-colors" />
              <button className="btn-primary">Send</button>
            </div>
          </motion.div>

          {/* Example commands */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {exampleCommands.map((cmd, i) => (
              <motion.div
                key={cmd}
                className="card py-3 px-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <code className="text-sm text-[var(--color-orange)]">&quot;{cmd}&quot;</code>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--color-text-light)] mt-6">
            Try these natural language commands in Nura Chat — your AI understands them all.
          </p>
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
