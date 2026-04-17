"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({ children }: any) {

  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: any) => {

    const rect = ref.current!.getBoundingClientRect()

    const newX = e.clientX - rect.left - rect.width / 2
    const newY = e.clientY - rect.top - rect.height / 2

    x.set(newX * 0.3)
    y.set(newY * 0.3)

  }

  const handleMouseLeave = () => {

    x.set(0)
    y.set(0)

  }

  return (

    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      className="inline-block"
      animate={{
        y: [0, -6, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >

      {children}

    </motion.div>

  )
}