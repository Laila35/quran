import { BookOpen, User, Users } from "lucide-react"
import Link from "next/link"

const MeetOurTeachers = () => {
  const teachers = [
    {
      title: "Online Quran Teachers",
      link: "/our-teachers",
      icon: BookOpen,
      description: "Experienced scholars dedicated to Quranic education with expertise in Tajweed and memorization.",
      gradient: "from-teal-500 to-teal-600",
      textColor: "text-teal-700",
    },
    {
      title: "Male Quran Teachers",
      link: "/male-quran-teacher",
      icon: User,
      description: "Qualified male instructors providing comprehensive learning for students of all ages and levels.",
      gradient: "from-blue-500 to-blue-600",
      textColor: "text-blue-700",
    },
    {
      title: "Female Quran Teachers",
      link: "/female-quran-teacher",
      icon: Users,
      description: "Dedicated female teachers offering personalized guidance in a comfortable learning environment.",
      gradient: "from-amber-500 to-amber-600",
      textColor: "text-amber-700",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-gray-100 py-12 overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-gray-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Meet Our Teachers</h2>
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Our dedicated Quran teachers provide personalized education with extensive knowledge and experience, guiding
            students on their spiritual journey.
          </p>
        </div>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teachers.map((teacher, index) => {
            const IconComponent = teacher.icon
            return (
              <Link key={index} href={teacher.link} className="group">
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${teacher.gradient} rounded-lg flex items-center justify-center mb-3`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className={`text-sm font-bold ${teacher.textColor} mb-2`}>{teacher.title}</h4>
                    <div className={`w-8 h-0.5 bg-gradient-to-r ${teacher.gradient} mb-3`}></div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">{teacher.description}</p>

                    {/* Learn more indicator */}
                    <div className={`${teacher.textColor} text-xs font-medium flex items-center`}>
                      <span>Learn More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                      <div
                        className={`h-0.5 bg-gradient-to-r ${teacher.gradient} transition-all duration-500 group-hover:w-full`}
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
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

export default MeetOurTeachers
