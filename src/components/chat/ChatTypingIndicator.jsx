import { memo } from 'react'
import { motion } from 'framer-motion'

function ChatTypingIndicator() {
  return (
    <motion.div className="flex gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="w-8 h-8 rounded-full bg-[var(--color-ginger)] flex items-center justify-center shrink-0">
        <span className="text-xs font-bold text-[var(--color-orange)]">AI</span>
      </div>
      <div className="bg-[var(--color-ginger)] rounded-r-xl rounded-t-xl px-4 py-3">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-[var(--color-orange)]/40 animate-bounce" style={{ animationDelay: '0s' }} />
          <span className="w-2 h-2 rounded-full bg-[var(--color-orange)]/40 animate-bounce" style={{ animationDelay: '0.15s' }} />
          <span className="w-2 h-2 rounded-full bg-[var(--color-orange)]/40 animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
    </motion.div>
  )
}

export default memo(ChatTypingIndicator)
