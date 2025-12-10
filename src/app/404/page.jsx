"use client"
import Link from "next/link"
import { Home, BookOpen } from 'lucide-react'
import StickyForm from "@/components/StickyForm";

export default function NotFound() {
  return (
    <>
      <head>
        <title>Page Not Found | ilmulQuran online Academy</title>
        <meta name="description" content="We couldn't find the page you were looking for. Return to our homepage to continue your journey of Quranic learning."/>
        <meta name="robots" content="noindex, follow" />
        <meta property="og:type" content="website" />
      </head>

      <div className="min-h-screen flex flex-col lg:flex-row-reverse items-start justify-center bg-[#f0fdfa] p-6 text-gray-800 gap-8">
        {/* Form Section - Appears on top in mobile, right on desktop */}
        <div className="w-full lg:w-1/3 order-1 lg:order-1  top-4">
          <StickyForm 
            courseName="Quran" 
          />
        </div>

        {/* Main Card */}
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 order-2 lg:order-1">
          <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-700"></div>

          <div className="p-6 md:p-10 text-center">
            {/* 404 Badge */}
            <div className="relative mb-8">
              <h1 className="text-6xl font-bold text-teal-600">404</h1>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
            <h2 className="text-2xl font-semibold mb-4">صفحة غير موجودة</h2>

            {/* Quote */}
            <div className="max-w-xl mx-auto mb-8">
              <blockquote className="p-6 bg-[#f0fdfa] border-l-4 border-teal-500 rounded-lg shadow-sm text-left">
                <p className="italic text-lg text-gray-700">"Indeed, Allah is with those who are patient."</p>
                <p className="text-sm text-gray-600 mt-1 text-right">- Quran 8:46</p>
              </blockquote>
            </div>

            {/* Message */}
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              The page you're trying to reach may have moved or no longer exists. Let's guide you back to the path of knowledge.
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/" className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 shadow-md transition transform hover:-translate-y-1">
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </Link>
              <Link href="/courses" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-md hover:bg-[#f0fdfa] transition transform hover:-translate-y-1 shadow-md">
                <BookOpen className="w-5 h-5" />
                <span>Browse Courses</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Corner Decor */}
        <div className="fixed top-0 left-0 w-32 h-32 bg-teal-600 opacity-5 rounded-br-full"></div>
        <div className="fixed bottom-0 right-0 w-32 h-32 bg-teal-400 opacity-5 rounded-tl-full"></div>
      </div>
    </>
  )
}
