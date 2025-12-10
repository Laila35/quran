import { BookOpen, GraduationCap, Users, Award, Clock, Shield, Heart, Target } from "lucide-react"

const ChooseUs = ({ chooseUs }) => {
  // Default icons for different categories
  const getDefaultIcon = (index) => {
    const icons = [BookOpen, GraduationCap, Users, Award, Clock, Shield, Heart, Target]
    return icons[index % icons.length]
  }

  // Professional color scheme
  const getCardColor = (index) => {
    const colors = [
      { gradient: "from-teal-500 to-teal-600", text: "text-teal-700" },
      { gradient: "from-blue-500 to-blue-600", text: "text-blue-700" },
      { gradient: "from-amber-500 to-amber-600", text: "text-amber-700" },
      { gradient: "from-rose-500 to-rose-600", text: "text-rose-700" },
    ]
    return colors[index % colors.length]
  }

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-gray-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Discover what makes our platform unique, with expert instructors and tailored learning experiences designed
            for your success.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {chooseUs?.map((item, index) => {
            const IconComponent = item.iconComponent || getDefaultIcon(index)
            const cardColor = getCardColor(index)

            return (
              <div key={item.id} className="group relative">
                {/* Main Card */}
                <div className="relative bg-white rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 min-h-[200px]">
                  {/* Icon Container */}
                  <div className="relative mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${cardColor.gradient} rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105`}
                    >
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className={`font-bold text-sm ${cardColor.text} mb-2 transition-colors duration-300 leading-tight`}
                  >
                    {item.name}
                  </h3>

                  {/* Decorative Line */}
                  <div
                    className={`w-8 h-0.5 bg-gradient-to-r ${cardColor.gradient} mb-3 transition-all duration-300`}
                  ></div>

                  <p className="text-gray-600 text-xs leading-relaxed transition-colors duration-300 flex-grow">
                    {item.option}
                  </p>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                    <div
                      className={`h-0.5 bg-gradient-to-r ${cardColor.gradient} transition-all duration-500 group-hover:w-full`}
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Minimal Footer Decoration */}
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-0.5 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
