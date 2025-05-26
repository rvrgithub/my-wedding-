"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CoupleDetails({ playfair }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={cn("text-4xl md:text-5xl font-bold text-rose-800 mb-4", playfair.className)}>Our Story</h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-rose-200"
              whileHover={{ scale: 1.05, borderColor: "#f43f5e" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image src="/me_1.jpg?height=300&width=300" alt="Radhika" fill className="object-cover" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-rose-500/50 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
            <h3 className={cn("text-2xl font-bold text-rose-700 mb-2", playfair.className)}>Radhika</h3>
            <p className="text-gray-600 mb-4">
              She is a kind, intelligent, and nurturing woman who is independent yet loving, respectful, and deeply committed to her future family.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-rose-200"
              whileHover={{ scale: 1.05, borderColor: "#f43f5e" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image src="/vishu1.jpeg?height=300&width=300" alt="Vishal" fill className="object-cover" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-rose-500/50 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
            <h3 className={cn("text-2xl font-bold text-rose-700 mb-2", playfair.className)}>Vishal</h3>
            <p className="text-gray-600 mb-4">
              He is a responsible, caring, and ambitious man who values honesty, loyalty, and family, and supports his partner wholeheartedly.

            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 italic mb-6">
              Marriage is when two people decide to live together, love each other, and help one another. They share happy times and sad times. They listen, care, and stay close. A good marriage means being kind, honest, and working as a team every day to build a happy life together."
            </p>
            <motion.div
              className="flex justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="text-rose-500 w-8 h-8 fill-rose-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

