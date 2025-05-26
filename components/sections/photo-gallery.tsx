"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PhotoGallery({ playfair }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Photos array
  const photos = [
    "/humtum.jpg?height=200&width=200",
    "/vishal.jpeg?height=600&width=800",
    "/radhika.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  // Photo slider controls
  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  // Autoplay functionality
  useEffect(() => {
    let interval

    if (autoplay) {
      interval = setInterval(() => {
        nextPhoto()
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, currentPhotoIndex])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <section className="py-20 px-4 bg-rose-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={cn("text-4xl md:text-5xl font-bold text-rose-800 mb-4", playfair.className)}>Our Moments</h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto mb-8"></div>
        </motion.div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhotoIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={photos[currentPhotoIndex] || "/placeholder.svg"}
                  alt={`Couple photo ${currentPhotoIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Progress bar for autoplay */}
            {autoplay && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-rose-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              />
            )}
          </div>

          <motion.button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-rose-700" />
          </motion.button>

          <motion.button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-rose-700" />
          </motion.button>

          <div className="flex justify-center mt-6 gap-2">
            {photos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentPhotoIndex ? "bg-rose-600" : "bg-rose-300"}`}
                whileHover={{ scale: 1.5 }}
                animate={index === currentPhotoIndex ? { scale: [1, 1.2, 1] } : {}}
                transition={index === currentPhotoIndex ? { duration: 1, repeat: Number.POSITIVE_INFINITY } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
