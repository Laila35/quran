"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import StickyForm from "@/components/StickyForm";
import BonusIslamicLearning from "@/components/BonusIslamicLearning";
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";

const LearnArabicOnline = () => {
  const breadcrumbData = {
    id: 1,
    name: "Learn Arabic Online - Master the Language with ilmulQuran",
    link: "/learn-arabic-online",
  };

  return (
    <>
      {/* Page Metadata using Head */}
      <Head>
        <title>Online Arabic Classes | Quranic & Modern Arabic Fluency</title>
        <meta
          name="description"
          content="Master Arabic online with certified teachers. Learn Quranic Arabic & modern communication skills. 98% success rate with personalized 1-on-1 classes. Free trial available!"
        />
        <meta
          name="keywords"
          content="Quranic Arabic course, Modern Standard Arabic, Arabic grammar online, Learn Arabic alphabet, Arabic speaking classes, Arabic writing course, Online Arabic tutor, Arabic for Quran understanding"
        />
        <link rel="canonical" href="https://ilmulquran.com/learn-arabic-online/" />
        <meta
          property="og:title"
          content="Professional Arabic Course Online | Quranic & Conversational Skills"
        />
        <meta
          property="og:description"
          content="Comprehensive Arabic program covering reading, writing, and speaking. Certified native teachers with 10+ years experience. Start learning today!"
        />
        <meta
          property="og:image"
          content="https://ilmulquran.com/Images/Courses/Learn-Arabic-online.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Master Arabic Online - Read Quran & Speak Fluently"
        />
        <meta
          name="twitter:description"
          content="Interactive Arabic classes with cultural immersion. Flexible schedules & progress tracking. Enroll now!"
        />
        <meta
          name="twitter:image"
          content="https://ilmulquran.com/Images/Courses/Learn-Arabic-online.webp"
        />
      </Head>

      {/* Structured Data JSON-LD */}
      <Script
        id="learn-arabic-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Comprehensive Arabic Language Program",
            description:
              "600+ hour curriculum covering Modern Standard Arabic and Quranic Arabic",
            provider: {
              "@type": "EducationalOrganization",
              name: "ilmulQuran",
              sameAs: "https://ilmulquran.com",
            },
            educationalLevel: "Beginner to Advanced",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: ["online", "one-on-one"],
              duration: "P9M",
            },
          }),
        }}
      />

      {/* ================= PAGE UI ================= */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

          {/* Sticky Form */}
          <div className="w-full lg:w-1/4 order-1 lg:order-2">
            <StickyForm courseName={breadcrumbData.name.split("-")[0].trim()} />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h1 className="text-[#003366] text-center font-bold text-3xl md:text-4xl mb-8">
                Master Arabic: From Alphabet to Quranic Fluency
              </h1>

              {/* Image + Intro */}
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-medium mb-4">
                    Our{" "}
                    <Link href="/quranic-arabic-course" className="text-blue-600">
                      Quranic Arabic program
                    </Link>{" "}
                    combines modern teaching methods with traditional learning. Perfect for:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="font-semibold">Dual Focus:</span> Master both{" "}
                      <Link href="/quran-with-translation" className="text-blue-600">
                        Quranic texts
                      </Link>{" "}
                      and modern conversation
                    </li>
                    <li>
                      <span className="font-semibold">Cultural Immersion:</span> Learn
                      through{" "}
                      <Link href="/islamic-history" className="text-blue-600">
                        Islamic history
                      </Link>{" "}
                      and Arab traditions
                    </li>
                    <li>
                      <span className="font-semibold">Structured Progress:</span> From{" "}
                      <Link href="/learn-noorani-qaida-online" className="text-blue-600">
                        Noorani Qaida
                      </Link>{" "}
                      to advanced literature
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/Learn-Arabic-online.webp"
                    alt="Student learning Arabic online with native teacher"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Curriculum Highlights + Learning Path */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#003366] mb-4">
                    Curriculum Highlights
                  </h2>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="font-semibold">Quranic Foundations:</span> Understand{" "}
                      <Link href="/learn-tafsir-online" className="text-blue-600">Tafsir</Link>{" "}
                      through original Arabic
                    </li>
                    <li>
                      <span className="font-semibold">Grammar Mastery:</span> Comprehensive{" "}
                      <Link href="/arabic-grammar-course" className="text-blue-600">Sarf & Nahw</Link>{" "}
                      studies
                    </li>
                    <li>
                      <span className="font-semibold">Practical Skills:</span> Business Arabic
                      and media comprehension
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#003366] mb-4">
                    Learning Path
                  </h2>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Beginner: Alphabet → Basic phrases</li>
                    <li>Intermediate: Grammar → Quranic reading</li>
                    <li>Advanced: Literature analysis → Professional Arabic</li>
                  </ul>
                </div>
              </div>

              {/* Complementary Courses */}
              <div className="mt-8 border-t pt-6">
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Complementary Courses</h2>
                <ul className="list-disc ml-8 space-y-2">
                  <li>
                    <Link href="/quranic-arabic-for-beginners" className="text-blue-600">
                      Quranic Arabic Starter Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-islamic-studies" className="text-blue-600">
                      Islamic Studies Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-ten-qirat-online" className="text-blue-600">
                      Qirat Learning
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Course Objectives */}
              <div className="mt-8 border-t pt-6">
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Course Objectives</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li><span className="font-semibold">Learn Basic Arabic Grammar:</span> Understand the fundamental rules of Arabic grammar.</li>
                  <li><span className="font-semibold">Develop Vocabulary:</span> Build a strong vocabulary for everyday use and specific contexts.</li>
                  <li><span className="font-semibold">Practice Reading and Writing:</span> Learn to read and write Arabic script correctly.</li>
                  <li><span className="font-semibold">Improve Speaking Skills:</span> Practice speaking Arabic with proper pronunciation and fluency.</li>
                  <li><span className="font-semibold">Understand Arabic Culture:</span> Gain insights into Arabic culture and its influence on the language.</li>
                </ul>
              </div>

              {/* Course Syllabus */}
              <div className="mt-8 border-t pt-6">
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Course Syllabus</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li><span className="font-semibold">Introduction to Arabic:</span> Basics of the Arabic alphabet and pronunciation.</li>
                  <li><span className="font-semibold">Basic Grammar:</span> Understanding nouns, verbs, and sentence structure.</li>
                  <li><span className="font-semibold">Building Vocabulary:</span> Common words and phrases for daily conversation.</li>
                  <li><span className="font-semibold">Reading and Writing:</span> Practice reading and writing Arabic script.</li>
                  <li><span className="font-semibold">Speaking Practice:</span> Conversational Arabic for real-life situations.</li>
                  <li><span className="font-semibold">Intermediate Grammar:</span> Advanced grammar rules and sentence construction.</li>
                  <li><span className="font-semibold">Cultural Insights:</span> Understanding Arabic customs and traditions.</li>
                  <li><span className="font-semibold">Advanced Practice:</span> Complex texts and advanced conversation skills.</li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
                  Call to Action
                </h2>
                <p className="text-base font-medium mb-4">
                  Ready to learn Arabic and explore a new culture?{" "}
                  <Link href="/get-register" className="text-blue-600 hover:underline">
                    Enroll in our Learn Arabic Online course today!
                  </Link>
                </p>
                <button
                  aria-label="enroll now"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full"
                >
                  Enroll Now
                </button>
              </div>

              {/* Student Testimonials */}
              <div className="pt-12">
                <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4 text-center">
                  Student Testimonials
                </h3>
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* ================= PAGE UI END ================= */}
    </>
  );
};

export default LearnArabicOnline;
