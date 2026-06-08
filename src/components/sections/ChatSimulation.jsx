import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import ChatMessage from '../chat/ChatMessage'
import ChatTypingIndicator from '../chat/ChatTypingIndicator'
import ChatQuickExamples from '../chat/ChatQuickExamples'

const initialMessages = [
  { role: 'ai', text: "Hello! I'm your Nura Assistant. How can I help you manage your boards today?" },
]

const knowledge = {
  boards: [
    { q: /how many boards/i, a: "You have **4 boards**: Sprint 24, Launch, Bug Tracker, Personal Goals." },
    { q: /show (lists|columns).*launch/i, a: "Board **Launch** has 4 lists: Backlog (12), In Progress (5), Review (3), Done (18)." },
    { q: /create.*board/i, a: "Done! Created board **'New Project'** with default lists: Backlog, In Progress, Review, Done." },
    { q: /show.*board/i, a: "Here are your boards:\n1. **Sprint 24** — 4 lists, 22 cards\n2. **Launch** — 4 lists, 38 cards\n3. **Bug Tracker** — 5 lists, 14 cards\n4. **Personal Goals** — 5 lists, 9 cards" },
  ],
  members: [
    { q: /how many members/i, a: "You have **3 members**: Ghulam Haider, Sarah Ahmed, Alex Khan." },
    { q: /who has the least work/i, a: "**Alex Khan** has the lightest workload right now — only 5 cards assigned. Available to take on more tasks!" },
    { q: /best performing/i, a: "**Ghulam Haider** is the best performing member — 12 cards completed this sprint with a 92% on-time rate." },
    { q: /show progress.*max|member max/i, a: "**Max** has 8 cards assigned (3 done, 3 in progress, 2 pending). Completion rate: 37.5%." },
    { q: /progress/i, a: "Team progress this week:\n• Haider: 12 done / 3 in progress (80%)\n• Sarah: 8 done / 4 in progress (66%)\n• Alex: 5 done / 2 in progress (71%)" },
    { q: /who.*overdue|behind|late/i, a: "**Sarah Ahmed** has 2 overdue cards: *'API Integration'* (due 3 days ago) and *'User Testing'* (due yesterday)." },
  ],
  general: [
    { q: /hello|hi|hey/i, a: "Hey there! What can I help you with today?" },
    { q: /help|what can you/i, a: "I can help you manage boards, track members, check progress, set due dates, move cards, and more. Try asking: *'how many boards do we have?'* or *'show progress for member Max'*" },
    { q: /thank|thanks/i, a: "You're welcome! Let me know if you need anything else." },
  ],
}

function findResponse(input) {
  for (const category of Object.values(knowledge)) {
    for (const entry of category) {
      if (entry.q.test(input)) return entry.a
    }
  }
  const fallbacks = [
    "I understand you're asking about that. Unfortunately I don't have that data yet. Try asking about boards, members, or progress!",
    "Hmm, I'm not sure about that one. Here's what I can help with: board stats, member workload, progress tracking, and task management.",
    "Good question! I don't have that information right now, but I can tell you about your boards, members, and their progress.",
    `I couldn't find an answer for "${input.slice(0, 30)}..." Try something like:\n• "how many boards do we have?"\n• "who has the least work?"\n• "show progress for member Max"`,
  ]
  return fallbacks[Math.floor(Math.random() * fallbacks.length)]
}

export default function ChatSimulation() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const handleSend = useCallback((e) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text || typing) return

    setMessages(m => [...m, { role: 'user', text }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = findResponse(text)
      setMessages(m => [...m, { role: 'ai', text: reply }])
      setTyping(false)
    }, 600 + Math.random() * 500)
  }, [input, typing])

  const handleExampleClick = useCallback((cmd) => {
    setInput(cmd)
  }, [])

  const messageList = useMemo(() => messages, [messages])

  return (
    <div className="card max-w-xl mx-auto mb-10">
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
        <span className="ml-auto text-[10px] text-[var(--color-muted)] font-mono">v2.0</span>
      </div>

      <div className="space-y-4 mb-4 max-h-[60vh] md:max-h-80 overflow-y-auto pr-1 scroll-smooth">
        <AnimatePresence initial={false}>
          {messageList.map((msg) => (
            <ChatMessage key={msg.text + msg.role} msg={msg} />
          ))}
        </AnimatePresence>

        {typing && <ChatTypingIndicator />}

        <div ref={endRef} />
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask anything in plain English..."
          className="flex-1 bg-white border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-orange)] transition-colors"
        />
        <button type="submit" className="btn-primary" disabled={typing}>
          Send
        </button>
      </form>

      <ChatQuickExamples onClick={handleExampleClick} />
    </div>
  )
}
