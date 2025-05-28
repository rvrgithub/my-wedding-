"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FamilySlider({ playfair }) {
  const [currentFamilyIndex, setCurrentFamilyIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Family members array
  const familyMembers = [
    { name: "Di & Jiju", relation: "Cousin Thodi Khatti or Thodi Mitti", image: "/preeti.jpeg?height=200&width=200" },
    { name: "Muskan", relation: "Cousin ", image: "/muski.jpg?height=200&width=200" },
    { name: "Maa ❣❣ ", relation: "My First Love ♥", image: "/maa.jpg?height=200&width=200" },
    { name: "Papa Ji ❣❣ ", relation: "My Hero ♥", image: "/paa.jpg?height=200&width=200" },

    { name: "Bhaiya & Bhabhi", relation: "Cousin ", image: "/Bhaiya.jpg?height=200&width=200" },
    { name: "Amma", relation: "Grand Mother of the Bride", image: "/Amma.jpg?height=200&width=200" },
    { name: "Nani Ma", relation: "Supper Mother🥰", image: "/naniMa.jpg?height=200&width=200" },
    { name: "Hari Om", relation: "Bhai Kum Kadus Jyada😎", image: "/hari-2.jpeg?height=200&width=200" },
    { name: "Dida ", relation: "Cousin Chocolatey 😋", image: "/didaJiju.jpeg?height=200&width=200" },
    { name: "Soniya", relation: "my soul", image: "/soni.jpg?height=200&width=200" },
    { name: "Tulsi", relation: "My Heart baby", image: "/divi.jpg?height=200&width=200" },
    { name: "Bua & Fufa ji ", relation: "So Sweet❣❣", image: "/bua-2.jpeg?height=200&width=200" },
    { name: "Chacha ji & chachi ji ", relation: "Ek Tha Tiger🐯", image: "/chachaji.jpg?height=200&width=200" },
    { name: "Raghav", relation: "❣❣", image: "/raghav.jpg?height=200&width=200" },
    { name: "Bacha Party ", relation: "Chillar Party❣❣", image: "/bache.jpg?height=200&width=200" },
    { name: "pooja Di & Nanu ", relation: "Socft and Sweet  Cousin❣❣", image: "/nanupooja.jpg?height=200&width=200" },
  ]

  // Family slider controls
  const nextFamily = () => {
    setCurrentFamilyIndex((prevIndex) => (prevIndex + 1) % familyMembers.length)
  }

  const prevFamily = () => {
    setCurrentFamilyIndex((prevIndex) => (prevIndex - 1 + familyMembers.length) % familyMembers.length)
  }

  // Autoplay functionality
  useEffect(() => {
    let interval

    if (autoplay) {
      interval = setInterval(() => {
        nextFamily()
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [autoplay, currentFamilyIndex])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Calculate visible family members (current + 2 on each side)
  const visibleFamilyMembers = () => {
    const result = []
    const totalMembers = familyMembers.length

    for (let i = -2; i <= 2; i++) {
      const index = (currentFamilyIndex + i + totalMembers) % totalMembers
      result.push({
        ...familyMembers[index],
        position: i,
      })
    }

    return result
  }

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
          <h2 className={cn("text-4xl md:text-5xl font-bold text-rose-800 mb-4", playfair.className)}>Our Family</h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto mb-8"></div>
        </motion.div>

        <div
          className="relative h-[300px] md:h-[350px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {visibleFamilyMembers().map((member, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              initial={false}
              animate={{
                x: `calc(-50% + ${member.position * 150}px)`,
                y: "-50%",
                scale: member.position === 0 ? 1 : 0.7,
                opacity: Math.abs(member.position) > 1 ? 0.5 : 1,
                zIndex: 10 - Math.abs(member.position),
                rotateY: member.position * 10, // Add 3D rotation effect
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className={`flex flex-col items-center ${member.position === 0 ? "w-48" : "w-36"}`}>
                <motion.div
                  className={`relative ${member.position === 0 ? "w-40 h-40" : "w-28 h-28"} rounded-full overflow-hidden border-4 border-rose-200 mb-4`}
                  whileHover={{ scale: 1.1, borderColor: "#f43f5e" }}
                  animate={
                    member.position === 0
                      ? {
                        boxShadow: [
                          "0px 0px 0px rgba(244, 63, 94, 0)",
                          "0px 0px 20px rgba(244, 63, 94, 0.5)",
                          "0px 0px 0px rgba(244, 63, 94, 0)",
                        ],
                      }
                      : {}
                  }
                  transition={
                    member.position === 0
                      ? {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }
                      : {}
                  }
                >
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </motion.div>
                {member.position === 0 && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="font-semibold text-rose-700">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.relation}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          <motion.button
            onClick={prevFamily}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shadow-lg hover:bg-rose-200 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-rose-700" />
          </motion.button>

          <motion.button
            onClick={nextFamily}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shadow-lg hover:bg-rose-200 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-rose-700" />
          </motion.button>

          {/* Progress indicator for autoplay */}
          {autoplay && (
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-rose-500 rounded-full"
              style={{ width: "100px" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
