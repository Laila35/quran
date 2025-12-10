"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCountry } from "@/app/context/CountryContext"
import { Check, Sparkles } from "lucide-react"

const FeePlan = ({ feePlanData }) => {
  const router = useRouter()
  const { country: detectedCountry } = useCountry()
  const [isArabic, setIsArabic] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(detectedCountry)

  const countries = [
    { code: "US", name: "USA" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "NZ", name: "New Zealand" },
    { code: "GB", name: "UK" },
    { code: "EU", name: "EU" },
  ]

  const countryMap = {
    US: "United States of America",
    CA: "Canada",
    AU: "Australia",
    NZ: "New Zealand",
    GB: "United Kingdom",
    EU: "European Union",
  }

  const europeanCountries = [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
  ]

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]

  useEffect(() => {
    if (detectedCountry) {
      if (europeanCountries.includes(detectedCountry)) {
        setSelectedCountry("European Union")
      } else if (usStates.includes(detectedCountry)) {
        setSelectedCountry("United States of America")
      } else {
        setSelectedCountry(detectedCountry)
      }
    }
  }, [detectedCountry])

  const getCurrency = (country) => {
    switch (country) {
      case "United States of America":
        return { code: "USD", symbol: "$" }
      case "Canada":
        return { code: "CAD", symbol: "$" }
      case "Australia":
      case "New Zealand":
        return { code: "AUD", symbol: "$" }
      case "United Kingdom":
        return { code: "GBP", symbol: "£" }
      case "European Union":
        return { code: "EUR", symbol: "€" }
      default:
        return { code: "USD", symbol: "$" }
    }
  }

  const currency = getCurrency(selectedCountry)

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 ">
         <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 blur-xl" />
        <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-15 blur-xl" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-20 blur-xl" />
        
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Choose Your Perfect Plan
        </h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          Select the perfect plan and start your journey with our risk-free trial.
        </p>
      </div>


      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        {/* Language Toggle */}
        <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 border border-violet-100 shadow-sm">
          <button
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
              !isArabic
                ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setIsArabic(false)}
          >
            Non-Arabic
          </button>
          <button
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
              isArabic
                ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
            onClick={() => setIsArabic(true)}
          >
            Arabic
          </button>
        </div>

        {/* Country Selector */}
        <div className="flex flex-wrap items-center justify-center gap-1 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-violet-100 shadow-sm">
          {countries.map((c) => (
            <button
              key={c.code}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                selectedCountry === countryMap[c.code]
                  ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900 hover:bg-violet-50"
              }`}
              onClick={() => setSelectedCountry(countryMap[c.code])}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feePlanData?.map((item, index) => {
          const priceDetail = item.monthlyPrice.find((price) => price.currency === currency.code)
          const isPopular = index === 1 // Middle card as popular

          // Different color schemes for each card
          const cardStyles = [
            {
              wrapper: "bg-gradient-to-b from-cyan-50 to-white border-cyan-200 hover:border-cyan-300",
              button: "bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600",
              accent: "text-cyan-600",
              check: "text-cyan-500",
            },
            {
              wrapper: "bg-gradient-to-b from-violet-50 to-white border-violet-200 hover:border-violet-300",
              button: "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600",
              accent: "text-violet-600",
              check: "text-violet-500",
            },
            {
              wrapper: "bg-gradient-to-b from-amber-50 to-white border-amber-200 hover:border-amber-300",
              button: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
              accent: "text-amber-600",
              check: "text-amber-500",
            },
          ]

          const style = cardStyles[index % cardStyles.length]

          return (
            <div
              key={item.id}
              className={`relative rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                isPopular ? "border-violet-400 shadow-lg scale-105" : `${style.wrapper}`
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-md">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-5">
                <h3 className={`text-lg font-bold mb-2 ${isPopular ? "text-violet-700" : style.accent}`}>
                  {item.class}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>

              {/* Price */}
              {priceDetail && (
                <div className="text-center mb-5">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <div className="relative h-4 w-4">
                      <Image
                        src={priceDetail.icon || "/placeholder.svg"}
                        alt="Currency"
                        fill
                        className="rounded-sm object-contain"
                      />
                    </div>
                    <span className="text-xs text-slate-600">{priceDetail.currency}</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-3xl font-bold ${isPopular ? "text-violet-700" : style.accent}`}>
                      {currency.symbol}
                      {isArabic ? (priceDetail.detail * 1.3).toFixed(0) : priceDetail.detail}
                    </span>
                    <span className="text-sm text-slate-600">/month</span>
                  </div>
                  {isArabic && (
                    <div className="text-xs text-amber-600 mt-1 bg-amber-50 rounded-full px-2 py-0.5 inline-block">
                      Arabic premium
                    </div>
                  )}
                </div>
              )}

              {/* Features */}
{/* 🌟 Features Included in All Plans */}
<div className="space-y-3 mb-6">
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Free 3-Day Trial</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>One-on-One Live Classes</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Qualified Male & Female Teachers</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Tajweed & Correct Pronunciation</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Flexible Scheduling</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Progress Reports</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Q&A Sessions</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Cancel Anytime</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>24/7 Support</span>
  </div>
  <div className="flex items-center gap-2 text-xs text-slate-700">
    <Check className={`h-3.5 w-3.5 ${isPopular ? "text-violet-500" : style.check} flex-shrink-0`} />
    <span>Certificates of Completion</span>
  </div>
</div>


              {/* CTA Button */}
              <button
                onClick={() => router.push("/get-register")}
                className={`w-full py-2.5 px-4 rounded-full text-sm font-medium transition-all text-white shadow-md ${
                  isPopular
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                    : style.button
                }`}
              >
                Start Free Trial
              </button>
            </div>
          )
        })}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-8">
        <p className="text-xs text-slate-500 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-violet-100">
          All plans include a 3-day free trial.
        </p>
      </div>
    </div>
  )
}

export default FeePlan
