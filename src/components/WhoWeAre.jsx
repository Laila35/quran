import { GraduationCap, Star, Headphones, Target, Users, BookOpen, Award, Globe } from "lucide-react"

const WhoWeAre = () => {
  const values = [
    {
      icon: GraduationCap,
      title: "VISION",
      description:
        "To become the world's leading online Quran academy, making authentic Islamic education accessible to every Muslim globally through innovative teaching methods and qualified scholars.",
      gradient: "from-teal-500 to-teal-600",
      badge: "Excellence",
      color: "teal",
    },
    {
      icon: Star,
      title: "VALUES",
      description:
        "Rooted in Islamic principles of knowledge, patience, and excellence. We maintain the highest standards of Quranic education while fostering respect, integrity, and spiritual growth in every student.",
      gradient: "from-amber-500 to-amber-600",
      badge: "Quality",
      color: "amber",
    },
    {
      icon: Headphones,
      title: "SUPPORT",
      description:
        "Dedicated multilingual support team available around the clock. From technical assistance to learning guidance, we ensure every student receives personalized attention and continuous encouragement.",
      gradient: "from-blue-500 to-blue-600",
      badge: "24/7",
      color: "blue",
    },
    {
      icon: Target,
      title: "METHOD",
      description:
        "Time-tested Tajweed principles combined with modern interactive technology. Personalized learning paths, one-on-one sessions, and progress tracking ensure effective Quran memorization and recitation.",
      gradient: "from-rose-500 to-rose-600",
      badge: "Proven",
      color: "rose",
    },
  ]

  const stats = [
    { icon: Users, number: "5000+", label: "Students", gradient: "from-teal-500 to-teal-600" },
    { icon: BookOpen, number: "50+", label: "Courses", gradient: "from-blue-500 to-blue-600" },
    { icon: Award, number: "100+", label: "Teachers", gradient: "from-amber-500 to-amber-600" },
    { icon: Globe, number: "50+", label: "Countries", gradient: "from-rose-500 to-rose-600" },
  ]

  return (
    <section className="relative py-12 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-gray-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Who We Are</h2>
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-3"></div>
          <p className="text-gray-700 font-semibold mb-2">Your Trusted Online Quran Academy</p>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Established to bridge traditional Islamic education with modern technology, serving students worldwide with
            certified Quranic scholars and comprehensive curriculum designed for all skill levels.
          </p>
        </div>

        {/* Compact Stats */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-7 h-7 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center mb-2`}
                >
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span
                  className={`bg-gradient-to-r ${item.gradient} text-white text-xs px-2 py-1 rounded-full font-medium`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Icon Header */}
              <div className={`relative bg-gradient-to-br ${item.gradient} py-5 px-4`}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className={`text-sm font-bold text-${item.color}-700 mb-2 tracking-wide`}>{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{item.description}</p>

                {/* Progress Indicator */}
                <div className="w-full bg-gray-100 rounded-full h-0.5">
                  <div
                    className={`bg-gradient-to-r ${item.gradient} h-0.5 rounded-full transition-all duration-500 group-hover:w-full`}
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Footer Decoration */}
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-0.5 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
