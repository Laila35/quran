"use client";
import Banner from "@/components/Banner";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";


import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";

const IqraBookCourse = () => {
  const breadcrumbData = {
    id: 2,
    name: "Iqra Book Course (Books 1 to 6) – Learn to Read Quran Step by Step",
    link: "/iqra-book-course-online",
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          as="image"
          href="/Images/courses/iqra-books.png"
          fetchPriority="high"
        />

        <title>Iqra Book Course Online – Learn Quran Reading (Book 1 to 6)</title>
        <meta
          name="description"
          content="Learn to read Quran with Iqra Books 1 to 6. One-on-one online classes for kids & beginners. Taught with Tajweed by certified male & female Quran teachers."
        />
        <meta
          name="keywords"
          content="iqra book course, iqra book 1 to 6, online iqra book classes, learn iqra book, iqra book for kids, quran reading beginners, arabic alphabet learning"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ilmulquran.com/iqra-book-course-online"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Iqra Book Course Online – Learn Quran Reading (Book 1 to 6) | ilmulQuran"
        />
        <meta
          property="og:description"
          content="Step-by-step Quran reading classes for children & beginners using the famous Iqra Book series. Certified teachers, flexible scheduling, and free trial available."
        />
        <meta
          property="og:url"
          content="https://ilmulquran.com/iqra-book-course-online"
        />
        <meta property="og:site_name" content="ilmulQuran" />
        <meta
          property="og:image"
          content="https://ilmulquran.com/Images/courses/iqra-books.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Child learning Quran reading with Iqra books"
        />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Iqra Book Course (Books 1-6) - Online Quran Reading Classes"
        />
        <meta
          name="twitter:description"
          content="From Arabic letters to fluent Quran recitation. Certified teachers, personalized lessons, and completion certificate. Start with Book 1 today!"
        />
        <meta
          name="twitter:image"
          content="https://ilmulquran.com/Images/OG/iqra-books.webp"
        />

        {/* Enhanced Schema Markup */}
        <Script
          id="jsonld-iqra-course"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Iqra Book Course (Books 1 to 6) - Quran Reading Program",
              description: "Comprehensive online course teaching Quran reading from basic Arabic letters to fluent recitation using the Iqra Book series, with proper Tajweed rules.",
              provider: {
                "@type": "EducationalOrganization",
                name: "ilmulQuran",
                sameAs: "https://ilmulquran.com",
                description: "Online Islamic education platform specializing in Quran reading and Tajweed for beginners",
              },
              url: "https://ilmulquran.com/iqra-book-course-online",
              image: "https://ilmulquran.com/Images/courses/iqra-books.png",
              educationalLevel: "beginner",
              typicalAgeRange: "4+",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: ["online", "one-on-one"],
                duration: "P6M",
                audience: {
                  "@type": "EducationalAudience",
                  educationalRole: "student",
                  ageRange: "4-99",
                },
                offers: {
                  "@type": "Offer",
                  category: "free trial",
                  url: "https://ilmulquran.com/get-register",
                },
              },
              coursePrerequisites: "None - suitable for complete beginners",
              educationalCredentialAwarded: "Certificate of Completion for each Iqra Book level",
            }),
          }}
        />
      </head>

      {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm 
              courseName={breadcrumbData.name.split("–")[0].trim()} 
            />
          </div>

          {/* Content Column (2/3 width on large screens) */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-center mb-8 text-[#003366] font-bold text-xl md:text-2xl lg:text-3xl">
                Iqra Book Course (Books 1 to 6) – Learn to Read Quran Step by Step
              </h2>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full">
                  <p className="text-base font-medium mb-4">
                    Teach your child to read the Quran with correct pronunciation and Tajweed — starting from basic Arabic letters to fluent Quran recitation, using the famous Iqra Book series.
                  </p>

                  <h3 id="who-is-for" className="text-xl font-bold text-[#003366] pt-3 scroll-mt-24">
                    🧒 Who Is This Course For?
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 pt-3">
                    <li>Kids (4+ years old)</li>
                    <li>Beginners with no prior Arabic knowledge</li>
                    <li>Adults who want to learn Quran reading from zero</li>
                    <li>Students in Western countries (UK, USA, Australia, etc.)</li>
                  </ul>

                  <h3 id="teachers" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                    🌍 Learn Iqra Books Online with Certified Male & Female Teachers
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 pt-3">
                    <li>1-on-1 Live Classes via Zoom, Skype, or Teams</li>
                    <li>Trained Male and Female Teachers Available</li>
                    <li>Classes for Weekdays & Weekends</li>
                    <li>Personalized pace: from Iqra Book 1 to Iqra Book 6</li>
                    <li>Learn Makharij (letter articulation), Harakat, and Tajweed gradually</li>
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={400}
                    src="/Images/Courses/iqra-books.png"
                    alt="Iqra Book Course for Quran Reading"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>

              <h3 id="course-outline" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                📚 What Will You Learn in the Iqra Book Course?
              </h3>
              <p className="text-base font-medium pt-2">
                The Iqra Books (1–6) are a progressive series for step-by-step Quran reading. Each level builds on the previous one, helping students master Arabic letters, vowels, and Tajweed rules.
              </p>

              <h4 className="text-lg font-bold text-[#003366] pt-4">
                🧾 Course Outline: Iqra Books 1 to 6
              </h4>
              <div className="overflow-x-auto pt-3">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-[#003366] text-white">
                      <th className="py-2 px-4 border-b">📖 Book</th>
                      <th className="py-2 px-4 border-b">📌 What You'll Learn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b font-medium">Iqra Book 1</td>
                      <td className="py-2 px-4 border-b">Learn Arabic letters (Hijaiyah), their shapes, and the sound of Fathah (short "a").</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b font-medium">Iqra Book 2</td>
                      <td className="py-2 px-4 border-b">Continue with Kasrah (short "i") and Dammah (short "u") for the same letters.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b font-medium">Iqra Book 3</td>
                      <td className="py-2 px-4 border-b">Learn Sukoon (no vowel), Tanween (an, in, un), and how to join letters.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b font-medium">Iqra Book 4</td>
                      <td className="py-2 px-4 border-b">Study Madd (elongation) and Shaddah (doubling of letters).</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b font-medium">Iqra Book 5</td>
                      <td className="py-2 px-4 border-b">Practice letters in word positions and start learning Tajweed rules like Iqlab and Ikhfa.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b font-medium">Iqra Book 6</td>
                      <td className="py-2 px-4 border-b">Deep dive into Waqf (stopping rules) and real Quranic verse reading with Tajweed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 id="why-trust" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                ⭐ Why Parents Trust Us?
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Islamic environment with full adab</li>
                <li>Parents can track student progress</li>
                <li>Supervised & recorded sessions</li>
                <li>Easy scheduling options</li>
                <li>Focus on correct pronunciation & fluency</li>
              </ul>

              <h3 id="benefits" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🎯 Course Benefits
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Builds strong Quran reading foundation</li>
                <li>Prepares your child for Tajweed and Hifz courses</li>
                <li>Boosts confidence in reading Arabic fluently</li>
                <li>Step-by-step progress tracking from Book 1 to Book 6</li>
              </ul>

              <h3 id="details" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                💡 Course Details
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li><strong>📅 Duration:</strong> Flexible (based on student pace)</li>
                <li><strong>⏰ Class Timing:</strong> Your local time (we operate globally)</li>
                <li><strong>👩‍🏫 Class Type:</strong> 1-on-1 or small group</li>
                <li><strong>🧑‍🎓 Trial Class:</strong> First class FREE</li>
              </ul>

              <h3 id="bonus" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🌟 Bonus Islamic Learning in Every Session
              </h3>
              <p className="text-base font-medium pt-2">
                At ilmulQuran, we add value to each class by offering 5–10 minutes of essential Islamic learning at the end of your session (optional).
              </p>
              <h4 className="text-lg font-semibold text-[#003366] pt-3">
                📘 Topics may include:
              </h4>
              <ul className="list-disc ml-6 space-y-2 pt-2">
                <li>Kalimas & Aqeedah basics</li>
                <li>Daily Duas & Salah steps</li>
                <li>Islamic manners & greetings</li>
                <li>Prophetic guidance (for kids & adults)</li>
              </ul>
              <p className="text-base font-medium pt-2">
                Perfect for building strong Islamic values alongside your main course.<br />
                Optional for students – we respect individual preferences.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">
                📥 Enroll Now & Start with Iqra Book 1
              </h3>
              <p className="text-base font-medium pt-2">
                Begin your Quran reading journey today with our certified teachers.{" "}
                <Link href="/get-register" className="text-blue-600">
                  Try a free class now!
                </Link>
              </p>
              <div className="bg-[#f0f8ff] p-4 rounded-lg mt-4">
                <p className="font-medium">
                  🎁 Free Trial | 🕋 100% Islamic Curriculum | 🧕 Female Teachers Available<br />
                  📞 WhatsApp: country base<br />
                  📧 Email: admin@ilmulquran.com<br />
                  👉 <Link href="/get-register" className="text-blue-600 font-bold">Fill the Registration Form</Link>
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#003366] pt-6">
                🔗 Related Courses
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>
                  <Link href="/quran-classes-for-kids" className="text-blue-600">
                    Quran Classes for Kids
                  </Link>
                </li>
                <li>
                  <Link href="/tajweed-for-beginners" className="text-blue-600">
                    Tajweed for Beginners
                  </Link>
                </li>
                <li>
                  <Link href="/arabic-for-kids" className="text-blue-600">
                    Arabic for Kids
                  </Link>
                </li>
              </ul>

              <h3 id="testimonials" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IqraBookCourse;