import { motion } from 'framer-motion'

/*
 * ImagePlaceholder — Replace the src with your actual image path.
 * Example: <ImagePlaceholder src="/assets/boards-screenshot.png" alt="Boards view" />
 *
 * Place your images in the public/ or src/assets/ folder.
 * For public/  -> src="/filename.png"
 * For src/assets/ -> import img from '../assets/filename.png' then pass as src
 */

export default function ImagePlaceholder({ src, alt, className = '' }) {
  if (src) {
    return (
      <motion.img
        src={src}
        alt={alt}
        className={`w-full rounded-xl border border-[var(--color-border)] ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    )
  }

  return (
    <motion.div
      className={`relative flex items-center justify-center w-full h-64 rounded-xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-surface)] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <svg className="w-12 h-12 mx-auto mb-3 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-sm text-[var(--color-text-muted)]">{alt || 'Add screenshot here'}</p>
        {/* Replace this placeholder with: <img src="/path/to/image.png" alt="description" /> */}
      </div>
    </motion.div>
  )
}
