"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Footer({ weddingDate, playfair }) {
  return (
    <footer className="py-12 px-4 bg-rose-800 text-white text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-white/10"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className={cn("text-3xl md:text-4xl font-bold mb-6", playfair.className)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We are honored to celebrate this special occasion with you, our esteemed and valued guest! ♥♥
        </motion.h2>

        <motion.p
          className="text-rose-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Made with love by Radhika
        </motion.p>
      </div>
    </footer>
  )
}
