"use client"
import { BookOpen, Users, Clock, Award, Heart, Star, ChevronRight } from "lucide-react"
import Link from "next/link"

const CompactIslamicServices = ({ visibleSections = { services: true } }) => {
  const services = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Quran Recitation",
      description: "Learn proper Tajweed and beautiful recitation with certified instructors.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Islamic Studies",
      description: "Comprehensive Islamic education covering Fiqh, Hadith, and history.",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Flexible Timing",
      description: "Morning, evening, or weekend classes that fit your schedule.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Certified Teachers",
      description: "Learn from qualified scholars with years of experience.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Character Building",
      description: "Develop Islamic character and moral values alongside learning.",
      gradient: "from-rose-500 to-red-600",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Excellence Program",
      description: "Advanced courses for deeper understanding of Islamic sciences.",
      gradient: "from-teal-500 to-cyan-600",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 py-12 overflow-hidden">
      {/* Islamic Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669'%3E%3Cpath d='M30 15L40 25H20L30 15zM30 45L20 35H40L30 45zM15 30L25 20V40L15 30zM45 30L35 40V20L45 30z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-emerald-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-8 left-8 w-20 h-20 bg-teal-200/20 rounded-full blur-xl animate-pulse delay-1000" />

      {visibleSections.services && (
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Compact Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <div className="w-2 h-2 bg-emerald-500 rounded-full mx-3" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-2">
            Our Services
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Comprehensive Islamic education at <span className="font-semibold text-emerald-700">ilmulQuran</span> -
              nurturing spiritual growth and academic excellence.
            </p>
          </div>

          {/* Compact Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100/50"
              >
                {/* Hover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
                  >
                    {service.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-emerald-800 mb-1 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Compact CTA */}
          <div className="text-center">
            <Link
              href="/our-services"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium text-sm rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              <span>Explore All Services</span>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
            <p className="mt-3 text-gray-500 text-xs">Begin your Islamic learning journey today</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default CompactIslamicServices
