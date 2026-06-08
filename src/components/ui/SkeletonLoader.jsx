import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function SkeletonBlock({ className }) {
  return (
    <div className={`animate-pulse rounded-lg bg-[var(--color-border)] ${className}`} />
  )
}

export default function SkeletonLoader({ children }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          key="skeleton"
          className="min-h-screen bg-[var(--color-cream)] p-6 lg:p-10 max-w-6xl mx-auto overflow-x-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Nav skeleton */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <SkeletonBlock className="w-7 h-7 rounded-lg" />
              <SkeletonBlock className="w-32 h-4" />
            </div>
            <div className="flex items-center gap-3">
              {[...Array(5)].map((_, i) => (
                <SkeletonBlock key={i} className="w-16 h-6" />
              ))}
              <SkeletonBlock className="w-20 h-8 rounded-lg" />
            </div>
          </div>

          {/* Hero skeleton */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mt-24">
            <SkeletonBlock className="w-24 h-5 rounded-full mx-auto" />
            <SkeletonBlock className="w-full h-14" />
            <SkeletonBlock className="w-3/4 h-14 mx-auto" />
            <SkeletonBlock className="w-2/3 h-5 mx-auto" />
            <div className="flex justify-center gap-4 mt-8">
              <SkeletonBlock className="w-40 h-12 rounded-xl" />
              <SkeletonBlock className="w-40 h-12 rounded-xl" />
            </div>
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[...Array(4)].map((_, i) => (
              <SkeletonBlock key={i} className="h-24" />
            ))}
          </div>

          {/* Features grid skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[...Array(6)].map((_, i) => (
              <SkeletonBlock key={i} className="h-48" />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
