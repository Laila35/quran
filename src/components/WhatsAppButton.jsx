"use client"

import { useState } from "react"
import { MessageCircle, Phone } from "lucide-react"
import { useCountry } from "@/app/context/CountryContext"
import { usePathname } from "next/navigation"

const WhatsAppButton = () => {
  const pathname = usePathname()
  const { country } = useCountry()
  const [isHovered, setIsHovered] = useState(false)

  const getWhatsAppConfig = () => {
    if (country === "United States of America" || country === "Canada") {
      return {
        number: "19142791693",
        label: "Chat with US/Canada Support",
        gradient: "from-green-400 via-green-500 to-green-600",
      }
    } else if (country === "Australia" || country === "New Zealand") {
      return {
        number: "61480050048",
        label: "Chat with AU/NZ Support",
        gradient: "from-gray-800 via-gray-900 to-black",
      }
    } else {
      return {
        number: "447862067920",
        label: "Chat with Global Support",
        gradient: "from-green-400 via-green-500 to-green-600",
      }
    }
  }

  const config = getWhatsAppConfig()

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Floating notification badge */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
        <span className="text-white text-xs font-bold">1</span>
      </div>

      {/* Ripple effect background */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-200"></div>

      {/* Tooltip */}
      <div
        className={`absolute right-20 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl border border-gray-200 whitespace-nowrap relative">
          <span className="font-medium text-sm">{config.label}</span>
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>

      {/* Main button */}
      <a
        href={`https://wa.me/${config.number}`}
        className={`relative block w-16 h-16 rounded-full bg-gradient-to-br ${config.gradient} shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/25 group-hover:shadow-2xl`}
        target="_blank"
        aria-label="Chat on WhatsApp"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>

        {/* Icon container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <MessageCircle
            className={`w-8 h-8 text-white transition-all duration-300 ${isHovered ? "scale-110 rotate-12" : ""}`}
          />
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </a>

      {/* Secondary action button */}
      <div
        className={`absolute -top-16 right-0 transition-all duration-500 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button className="w-12 h-12 bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-green-100">
          <Phone className="w-5 h-5" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-300 rounded-full opacity-60 animate-bounce animation-delay-300"></div>
      <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-200 rounded-full opacity-40 animate-bounce animation-delay-500"></div>
    </div>
  )
}

export default WhatsAppButton
