import { Headphones, Shield, Star } from "lucide-react"

export default function ServiceHighlights() {
  return (
    <section className="py-8 px-4 ">
      <div className="max-w-4xl mx-auto">
   
        {/* Compact Service Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* 24/7 Support */}
          <div className="group relative">
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-200 h-full">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-emerald-600 mb-1">24/7 Support</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Writers and Support available around the clock
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Safe Service */}
          <div className="group relative">
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 hover:border-amber-200 h-full">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-amber-600 mb-1">Safe Service</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Privacy and Confidentiality Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Score */}
          <div className="group relative">
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-200 h-full">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-blue-600 mb-1">Quality Score</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">4.72 Average Quality Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </section>
  )
}
