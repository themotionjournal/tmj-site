import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0, y: 8 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.45, ease: [0.22,1,0.36,1] } },
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const { asPath } = useRouter()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={asPath} variants={variants} initial="initial" animate="enter" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

