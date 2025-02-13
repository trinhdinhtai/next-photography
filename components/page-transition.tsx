"use client"

import { motion } from "framer-motion"

const VARIANTS_CONTAINER = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransitionContainer({
  children,
  className,
}: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}
