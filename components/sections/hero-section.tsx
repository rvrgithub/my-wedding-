"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import PulsingHeart from "@/components/animations/pulsing-heart"

export default function HeroSection({ weddingDate, countdown, playfair }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <Image
            src="/bg-1.jpg?height=1080&width=1920"
            alt="Couple Background"
            fill
            className="object-container opacity-40"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1
            className={cn(
              "text-5xl md:text-7xl font-bold text-rose-800 mb-4 flex flex-col md:flex-row items-center justify-center gap-2",
              playfair.className
            )}
          >
            <span>Radhika</span>
            <span>&</span>
            <span>Vishal</span>
          </h1>

          <p className="text-xl md:text-2xl text-rose-600">We're getting married!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-lg md:text-xl text-rose-700 mb-4">
            {weddingDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="flex gap-4 md:gap-8 justify-center">
            <CountdownItem value={countdown.days} label="Days" />
            <CountdownItem value={countdown.hours} label="Hours" />
            <CountdownItem value={countdown.minutes} label="Minutes" />
            <CountdownItem value={countdown.seconds} label="Seconds" />
          </div>
        </motion.div>

        {/* Animated heart */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <PulsingHeart size={60} color="#be123c" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <PulsingHeart size={40} color="#be123c" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center">
          <p className="text-rose-700 mb-2">Scroll Down</p>
          <ChevronDown className="w-6 h-6 text-rose-700" />
        </div>
      </motion.div>
    </section>
  )
}

function CountdownItem({ value, label }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <span className="text-2xl md:text-4xl font-bold text-rose-600">{value}</span>
      </motion.div>
      <span className="text-sm md:text-base mt-2 text-rose-700">{label}</span>
    </motion.div>
  )
}
