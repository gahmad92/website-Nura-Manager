import { memo } from 'react'
import { motion } from 'framer-motion'

function formatText(text) {
  return text
    .split('\n')
    .map(line => {
      const parts = line.split(/(\*[^*]+\*)/g)
      return parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*')
          ? <strong key={i} className="font-semibold text-[var(--color-orange)]">{part.slice(1, -1)}</strong>
          : part
      )
    })
    .flatMap((line, i, arr) => i < arr.length - 1 ? [line, <br key={`br-${i}`} />] : [line])
}

function ChatMessage({ msg }) {
  return (
    <motion.div
      className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {msg.role === 'ai' && (
        <div className="w-8 h-8 rounded-full bg-[var(--color-ginger)] flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-[var(--color-orange)]">AI</span>
        </div>
      )}
      <div
        className={`px-4 py-3 max-w-[85%] text-sm leading-relaxed break-words ${
          msg.role === 'ai'
            ? 'bg-[var(--color-ginger)] rounded-r-xl rounded-t-xl text-[var(--color-text)]'
            : 'bg-[var(--color-orange)]/10 rounded-l-xl rounded-t-xl text-[var(--color-text)]'
        }`}
      >
        {typeof msg.text === 'string' ? formatText(msg.text) : msg.text}
      </div>
      {msg.role === 'user' && (
        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-white">You</span>
        </div>
      )}
    </motion.div>
  )
}

export default memo(ChatMessage)
