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

const weddingDate = new Date("June 09, 2025 19:00:00"); // 7:00 PM

useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance <= 0) {
      setDays("00");
      setHours("00");
      setMinutes("00");
      setSeconds("00");
    } else {
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(String(d).padStart(2, "0"));
      setHours(String(h).padStart(2, "0"));
      setMinutes(String(m).padStart(2, "0"));
      setSeconds(String(s).padStart(2, "0"));
    }
  }, 1000);

  return () => clearInterval(interval);
}, []);


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
