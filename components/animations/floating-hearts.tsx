"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts((prev) => {
        if (prev.length > 30) {
          // Remove oldest heart
          const [_, ...rest] = prev
          return [
            ...rest,
            {
              id: Date.now(),
              x: Math.random() * 100,
              y: 110, // Start from bottom
              size: Math.random() * 20 + 10,
              duration: Math.random() * 20 + 10,
              delay: 0,
              opacity: Math.random() * 0.5 + 0.2,
            },
          ]
        }

        return [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: 110, // Start from bottom
            size: Math.random() * 20 + 10,
            duration: Math.random() * 20 + 10,
            delay: 0,
            opacity: Math.random() * 0.5 + 0.2,
          },
        ]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: `-50px`,
          }}
          animate={{
            y: [`0%`, `-${heart.y + 20}vh`],
            x: [
              `0%`,
              `${(Math.random() - 0.5) * 20}%`,
              `${(Math.random() - 0.5) * 40}%`,
              `${(Math.random() - 0.5) * 20}%`,
              `0%`,
            ],
            opacity: [heart.opacity, heart.opacity, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut",
            times: [0, 0.8, 1],
          }}
        >
          <Heart className="text-rose-500 fill-rose-500" style={{ width: heart.size, height: heart.size }} />
        </motion.div>
      ))}
    </div>
  )
}
