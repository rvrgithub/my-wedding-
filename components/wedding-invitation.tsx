"use client"

import { useEffect, useState } from "react"
import { Playfair_Display } from "next/font/google"

// Components
import HeroSection from "@/components/sections/hero-section"
import CoupleDetails from "@/components/sections/couple-details"
import PhotoGallery from "@/components/sections/photo-gallery"
import FamilySlider from "@/components/sections/family-slider"
import WeddingDetails from "@/components/sections/wedding-details"
import LocationMap from "@/components/sections/location-map"
import Footer from "@/components/sections/footer"
import FloatingHearts from "@/components/animations/floating-hearts"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function WeddingInvitation() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Wedding date - set to 3 months from now
  const weddingDate = new Date("June 09, 2025 03:24:00")
  weddingDate.setMonth(weddingDate.getMonth())

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [weddingDate])

  return (
    <div className="relative min-h-screen overflow-hidden bg-rose-50">
      {/* Floating hearts animation overlay */}
      <FloatingHearts />

      {/* Hero Section with Background Image and Timer */}
      <HeroSection weddingDate={weddingDate} countdown={{ days, hours, minutes, seconds }} playfair={playfair} />

      {/* Couple Details Section */}
      <CoupleDetails playfair={playfair} />

      {/* Photo Gallery Section */}
      <PhotoGallery playfair={playfair} />

      {/* Family Members Circular Slider */}
      <FamilySlider playfair={playfair} />

      {/* Wedding Details Section */}
      <WeddingDetails weddingDate={weddingDate} playfair={playfair} />

      {/* Location with Google Maps */}
      <LocationMap playfair={playfair} />

      {/* Footer */}
      <Footer weddingDate={weddingDate} playfair={playfair} />
    </div>
  )
}
