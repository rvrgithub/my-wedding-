"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WeddingDetails({ weddingDate, playfair }) {
  const detailsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  }

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
          <h2 className={cn("text-4xl md:text-5xl font-bold text-rose-800 mb-4", playfair.className)}>
            Wedding Details
          </h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            custom={0}
            variants={detailsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div className="flex items-center mb-6" whileHover={{ x: 5 }}>
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Calendar className="w-8 h-8 text-rose-600 mr-4" />
              </motion.div>
              <h3 className={cn("text-2xl font-bold text-rose-700", playfair.className)}>Haldi & Dev Poujan</h3>
            </motion.div>

            <ul className="space-y-4">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <Clock className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Date & Time</p>
                  <p className="text-gray-600">
                    Friday, June 6, 2025
                    at 11:00 AM
                  </p>
                </div>
              </motion.li>

              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <MapPin className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">At Home</p>
                  <p className="text-gray-600">Hans Nagar, Near Tata Tower</p>
                  <p className="text-gray-600">Rewari, Haryana 123401</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            custom={1}
            variants={detailsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div className="flex items-center mb-6" whileHover={{ x: 5 }}>
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Calendar className="w-8 h-8 text-rose-600 mr-4" />
              </motion.div>
              <h3 className={cn("text-2xl font-bold text-rose-700", playfair.className)}>Hari Naam Kirtan</h3>
            </motion.div>

            <ul className="space-y-4">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <Clock className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Date & Time</p>
                  <p className="text-gray-600">

                    Saturday, June 7, 2025
                    at 5:00 PM
                  </p>
                </div>
              </motion.li>

              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <MapPin className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">At Home</p>
                  <p className="text-gray-600">Hans Nagar, Near Tata Tower</p>
                  <p className="text-gray-600">Rewari, Haryana 123401</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-9">
          <motion.div
            custom={0}
            variants={detailsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div className="flex items-center mb-6" whileHover={{ x: 5 }}>
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Calendar className="w-8 h-8 text-rose-600 mr-4" />
              </motion.div>
              <h3 className={cn("text-2xl font-bold text-rose-700", playfair.className)}>Mehendi</h3>
            </motion.div>

            <ul className="space-y-4">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <Clock className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Date & Time</p>
                  <p className="text-gray-600">
                    Sunday, June 8, 2025
                    at 4:00 PM
                  </p>
                </div>
              </motion.li>

              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <MapPin className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">At Home</p>
                  <p className="text-gray-600">Hans Nagar, Near Tata Tower</p>
                  <p className="text-gray-600">Rewari, Haryana 123401</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            custom={1}
            variants={detailsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div className="flex items-center mb-6" whileHover={{ x: 5 }}>
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Calendar className="w-8 h-8 text-rose-600 mr-4" />
              </motion.div>
              <h3 className={cn("text-2xl font-bold text-rose-700", playfair.className)}>Barat Agman</h3>
            </motion.div>

            <ul className="space-y-4">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <Clock className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Date & Time</p>
                  <p className="text-gray-600">
                    Monday, June 9, 2025
                    at 7:00 PM
                  </p>
                </div>
              </motion.li>

              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-1 mr-3">
                  <MapPin className="w-3 h-3 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">At Home</p>
                  <p className="text-gray-600">Hans Nagar, Near Tata Tower</p>
                  <p className="text-gray-600">Rewari, Haryana 123401</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
