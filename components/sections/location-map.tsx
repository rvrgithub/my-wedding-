"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LocationMap({ playfair }) {
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
          <h2 className={cn("text-4xl md:text-5xl font-bold text-rose-800 mb-4", playfair.className)}>
            Wedding Location
          </h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at our beautiful wedding venue in the heart of Shivam Garden Rewari. Below you'll find  Wedding Location.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] relative"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3516.253459297439!2d76.636315!3d28.199611000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d500754a4b425%3A0xec0af27269e9e110!2sShivam%20Garden!5e0!3m2!1sen!2sin!4v1748255429108!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Wedding Location"
          // referrerpolicy="no-referrer-when-downgrade"
          >

          </iframe>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <MapPin className="w-12 h-12 text-rose-600 drop-shadow-lg" />
          </motion.div>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-rose-50 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={cn("text-xl font-bold text-rose-700 mb-4", playfair.className)}>Mehendi Location</h3>
            <p className="text-gray-700 mb-2">At Home </p>
            <p className="text-gray-600 mb-4">Hans Nagar Near Tata Tower</p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Rewari </span> Haryana 123401
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-rose-50 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={cn("text-xl font-bold text-rose-700 mb-4", playfair.className)}>Haldi Location</h3>
            <p className="text-gray-700 mb-2 font-bold text-rose-700 mb-4">. HalDaat</p>
            <p className="text-gray-700 mb-2 font-bold text-rose-700 mb-4">.Tel Pujan</p>
            <p className="text-gray-600 mb-4 font-bold text-rose-700 mb-4">. Devi Pujan</p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-rose-700 mb-4">Date:</span> 06/06/2025
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-rose-700 mb-4">Location:</span> At Home
            </p>
          </motion.div>
        </div>  */}

      </div>
    </section>
  )
}
