"use client"
import { useState } from "react"
import { Percent, Clock, Gift, Star } from "lucide-react"

const DiscountBanner = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative  overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-gray-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white rounded-lg">
          <div className="text-center">
            {/* Compact Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Fees and Pricing</h2>
              <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-3"></div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Affordable and Flexible Pricing Plans</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We offer competitive pricing for all our courses to ensure that quality Islamic education is accessible
                to everyone. Our flexible payment options make it easy to start your learning journey.
              </p>
            </div>

            {/* Pricing Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-center p-3 bg-teal-50 rounded-lg border border-teal-100">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <Percent className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-teal-700">Competitive Rates</h4>
                  <p className="text-xs text-gray-600">Best value pricing</p>
                </div>
              </div>

              <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-blue-700">Flexible Plans</h4>
                  <p className="text-xs text-gray-600">Multiple options</p>
                </div>
              </div>

              <div className="flex items-center justify-center p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-amber-700">Quality Education</h4>
                  <p className="text-xs text-gray-600">Expert instructors</p>
                </div>
              </div>
            </div>

            {/* Discount Banner Section */}
            <div
              className="relative bg-gradient-to-r from-rose-50 to-rose-100 border border-rose-200 p-4 rounded-lg cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Discount Icon */}
              <div className="absolute top-3 right-3">
                <div className="w-6 h-6 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-white" />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mr-3">
                  <Percent className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-rose-700 mb-1">Limited Time Offer</h4>
                  <p
                    className={`text-xs ${
                      isHovered ? "text-rose-600" : "text-rose-700"
                    } transition-colors duration-200`}
                  >
                    Hurry up! Special discount to make your learning more affordable.
                  </p>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-200">
                <div
                  className="h-0.5 bg-gradient-to-r from-rose-500 to-rose-600 transition-all duration-500"
                  style={{ width: isHovered ? "100%" : "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Footer Decoration */}
        <div className="mt-6 flex justify-center">
          <div className="w-12 h-0.5 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default DiscountBanner
