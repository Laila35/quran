"use client"

import { UserPlus, BookOpen, Play, BadgeIcon as Certificate } from "lucide-react"

const stepsData = [
  {
    id: 1,
    icon: UserPlus,
    title: "Register & Get Started",
    description:
      "Create your account and join thousands of students beginning their sacred Quran learning journey with our expert tutors.",
    gradient: "from-teal-500 to-teal-600",
    textColor: "text-teal-700",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Choose Your Course",
    description:
      "Select from our comprehensive range of Quran courses tailored for beginners to advanced learners with flexible schedules.",
    gradient: "from-blue-500 to-blue-600",
    textColor: "text-blue-700",
  },
  {
    id: 3,
    icon: Play,
    title: "Start Interactive Learning",
    description:
      "Begin your personalized Quran learning experience with one-on-one sessions, interactive tools, and progress tracking.",
    gradient: "from-amber-500 to-amber-600",
    textColor: "text-amber-700",
  },
  {
    id: 4,
    icon: Certificate,
    title: "Achieve Certification",
    description:
      "Complete your course and receive an official certificate recognizing your Quran learning achievement and dedication.",
    gradient: "from-rose-500 to-rose-600",
    textColor: "text-rose-700",
  },
]

const Steps = ({ stepsData = [] }) => {
  return (
    <section className="relative py-12 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-gray-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Steps to Learn Quran with Us</h2>
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Learn the Quran online with the world's best Male/Female Quran tutors through our comprehensive step-by-step
            approach
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stepsData?.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={item?.id} className="group relative">
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 z-10">
                  <div
                    className={`w-6 h-6 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-sm`}
                  >
                    <span className="text-white font-bold text-xs">{index + 1}</span>
                  </div>
                </div>

                {/* Main Card */}
                <div className="relative bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 min-h-[220px] flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-3 flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-105`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow flex flex-col">
                    <h4 className={`text-sm font-bold ${item.textColor} mb-2 leading-tight`}>{item?.title}</h4>

                    {/* Decorative Line */}
                    <div className={`w-8 h-0.5 bg-gradient-to-r ${item.gradient} mb-3 mx-auto`}></div>

                    <p className="text-gray-600 text-xs leading-relaxed flex-grow">{item?.description}</p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                    <div
                      className={`h-0.5 bg-gradient-to-r ${item.gradient} transition-all duration-500 group-hover:w-full`}
                      style={{ width: "40%" }}
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

export default function Page() {
  return (
    <div>
      <Steps stepsData={stepsData} />
    </div>
  )
}
