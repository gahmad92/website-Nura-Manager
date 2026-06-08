import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import ChatMessage from '../chat/ChatMessage'
import ChatTypingIndicator from '../chat/ChatTypingIndicator'
import ChatQuickExamples from '../chat/ChatQuickExamples'
import TeacherBot from '../chat/TeacherBot'

const initialMessages = [
  { role: 'ai', text: "Greetings! I'm the Nura Guide. Ask me anything about your boards, members, and tasks." },
]

const knowledge = {
  boards: [
    { q: /how many boards/i, a: "Let me count... you have **4 boards**: Sprint 24, Launch, Bug Tracker, Personal Goals. Stay organized!" },
    { q: /show (lists|columns).*launch/i, a: "Board **Launch** has 4 lists: Backlog (12), In Progress (5), Review (3), Done (18). A well-structured class!" },
    { q: /create.*board/i, a: "Done! I've created board **'New Project'** with the standard lists: Backlog, In Progress, Review, Done." },
    { q: /show.*board/i, a: "Here are all your boards:\n1. **Sprint 24** — 4 lists, 22 cards\n2. **Launch** — 4 lists, 38 cards\n3. **Bug Tracker** — 5 lists, 14 cards\n4. **Personal Goals** — 5 lists, 9 cards" },
  ],
  members: [
    { q: /how many members/i, a: "You have **3 members**: Ghulam Haider, Sarah Ahmed, Alex Khan." },
    { q: /who has the least work/i, a: "Let me consult my records... **Alex Khan** carries the lightest load — only 5 cards. Room for more, I'd say." },
    { q: /best performing/i, a: "The top performer this sprint is **Ghulam Haider** — 12 cards completed with a 92% on-time rate. A fine example!" },
    { q: /show progress.*max|member max/i, a: "**Max** has 8 cards assigned (3 done, 3 in progress, 2 pending). Completion rate: 37.5%. Room for improvement!" },
    { q: /progress/i, a: "Here is the class report:\n• Haider: 12 done / 3 in progress (80%)\n• Sarah: 8 done / 4 in progress (66%)\n• Alex: 5 done / 2 in progress (71%)" },
    { q: /who.*overdue|behind|late/i, a: "Ah, a lesson in accountability. **Sarah Ahmed** has 2 overdue cards: *'API Integration'* (due 3 days ago) and *'User Testing'* (due yesterday). Let's help her catch up." },
  ],
  general: [
    { q: /hello|hi|hey|greetings/i, a: "Ah, welcome young padawan. How may I assist your project management journey today?" },
    { q: /help|what can you|guide|teach/i, a: "I can teach you about boards, members, progress tracking, and more. Try asking: *'how many boards do we have?'* or *'who has the least work?'* or *'show me progress'*" },
    { q: /thank|thanks/i, a: "You're quite welcome. Knowledge is power — use it wisely." },
  ],
}

function findResponse(input) {
  for (const category of Object.values(knowledge)) {
    for (const entry of category) {
      if (entry.q.test(input)) return entry.a
    }
  }
  const fallbacks = [
    "Hmm, that's a question I haven't studied yet. Try asking me about boards, members, or progress — those I can teach you about!",
    "An excellent question! Unfortunately, my knowledge doesn't cover that topic. I specialize in boards, members, and task management.",
    "I see you're curious. Let me guide you toward what I know best: board stats, member workload, and progress tracking.",
    `That one stumps me, I'm afraid. Perhaps try:\n• "how many boards do we have?"\n• "who has the least work?"\n• "show progress for member Max"`,
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
        <TeacherBot />
        <div>
          <h3 className="font-bold text-[var(--color-black)]">Nura Guide</h3>
          <span className="text-xs text-emerald-600 font-medium">Ask the Nura chats | Local AI ready</span>
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
        <button type="submit" className="rounded-lg font-semibold text-white text-sm py-2 px-4 sm:py-2.5 sm:px-5 transition-all duration-300 hover:-translate-y-0.5 shrink-0" style={{ background: 'var(--gradient-primary)' }} disabled={typing}>
          Send
        </button>
      </form>

      <ChatQuickExamples onClick={handleExampleClick} />
    </div>
  )
}
