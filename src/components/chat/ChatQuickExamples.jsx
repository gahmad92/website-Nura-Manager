import { memo } from 'react'

const examples = [
  'how many boards?',
  'who has the least work?',
  'best performing member?',
  'show lists in board Launch',
]

function ChatQuickExamples({ onClick }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {examples.map(cmd => (
        <button
          key={cmd}
          onClick={() => onClick(cmd)}
          className="text-xs px-2.5 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-orange)] hover:border-[var(--color-orange)] transition-colors"
        >
          {cmd}
        </button>
      ))}
    </div>
  )
}

export default memo(ChatQuickExamples)
