"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function PulsingHeart({ size = 40, color = "#f43f5e" }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
    >
      <Heart className="fill-current" style={{ width: size, height: size, color }} />
    </motion.div>
  )
}
