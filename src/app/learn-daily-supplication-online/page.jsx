"use client";
import Banner from "@/components/Banner";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import StickyForm from "@/components/StickyForm";
const LearnDailySupplicationOnline = () => {
  const breadcrumbData = {
    id: 1,
    name: "Learn Daily Supplication Online - Master Your Duas",
    link: "/",
  };
  return (
    <>
    <head>
      <title>Daily Islamic Duas Course | Master Supplications Online</title>
      <meta 
        name="description" 
        content="Comprehensive online course mastering 100+ daily Islamic supplications. Learn authentic duas with meanings, contexts, and practical application. Certified instructors, flexible scheduling." 
      />
      <meta 
        name="keywords" 
        content="daily islamic supplications, learn duas online, morning evening adhkar, prayer dua course, quranic supplications, prophetic dua learning, islamic remembrance course, online adhkar classes" 
      />
      <link rel="canonical" href="https://ilmulquran.com/learn-daily-supplication-online/" />
      {/* Open Graph Tags */}
      <meta property="og:title" content="Master Daily Islamic Supplications | Online Dua Course" />
      <meta property="og:description" content="Learn 100+ authentic duas from Quran & Sunnah with proper context and pronunciation. Certification available. Start free trial!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ilmulquran.com/learn-daily-supplication-online/" />
      <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Learn-Daily-Supplication.webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Online Islamic Supplications Course | Daily Dua Mastery" />
      <meta name="twitter:description" content="Comprehensive program covering morning/evening adhkar, prayer duas, and Quranic supplications. Enroll today!" />
      <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/Learn-Daily-Supplication.webp" />
    </head>
    {/* Structured Data */}
    <Script
      id="supplication-course-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Comprehensive Daily Supplications Mastery Program",
          "description": "In-depth course covering 100+ authentic Islamic duas from Quran and authentic Hadith literature with practical application guidance",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "ilmulQuran",
            "sameAs": "https://ilmulquran.com"
          },
          "image": "https://ilmulquran.com/Images/Courses/Learn-Daily-Supplication.webp",
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["online", "one-on-one"],
            "duration": "P3M",
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": "student",
              "ageRange": "12-70"
            },
            "offers": {
              "@type": "Offer",
              "category": "free trial",
              "url": "https://ilmulquran.com/get-register"
            }
          },
          "coursePrerequisites": "Basic understanding of Islamic practices",
          "educationalCredentialAwarded": "Certificate in Islamic Supplications"
        })
      }}
    />
      {/* <Banner breadcrumbData={breadcrumbData} /> */}
      <div className="w-full md:w-4/5 xl:w-full mx-auto px-3 mt-10 py-3">
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          {/* Sticky Form - Mobile Top */}
          <div className="block lg:hidden mb-8">
            <StickyForm courseName="Daily Supplication Course" />
          </div>
          <h1 className="text-[#003366] mb-10 text-center font-bold text-4xl">
            Master 100+ Daily Islamic Supplications - From Quran & Sunnah
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 pt-3">
            {/* Main Content (Left on Desktop) */}
            <div className="w-full lg:w-3/4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-medium">
                    Our comprehensive dua course covers essential supplications for:
                  </p>
                  <ul className="list-disc ml-8 space-y-2 mt-4">
                    <li>Morning & Evening Adhkar</li>
                    <li>Prayer-related Supplications</li>
                    <li>Daily Activities (Eating, Sleeping, Traveling)</li>
                    <li>Quranic Duas from Key Surahs</li>
                    <li>Prophetic Supplications from Authentic Hadith</li>
                  </ul>
                  <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                    Course Highlights
                  </h3>
                  <ul className="list-disc ml-8 space-y-2 mt-4">
                    <li>Arabic Pronunciation Mastery</li>
                    <li>English Transliteration & Translation</li>
                    <li>Contextual Understanding of Each Dua</li>
                    <li>Practical Application Guidance</li>
                    <li>Digital Dua Journal Access</li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/Learn-Daily-Supplication.webp"
                    alt="Digital illustration showing Quranic supplications with Arabic calligraphy"
                    className="rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
              {/* Additional Sections */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#003366]">Learning Methodology</h3>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Interactive Dua Memorization Techniques</li>
                    <li>Contextual Hadith Studies</li>
                    <li>Daily Practice Routines</li>
                    <li>Progress Tracking System</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366]">Course Benefits</h3>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Strengthen Connection with Allah</li>
                    <li>Enhance Spiritual Awareness</li>
                    <li>Practical Islamic Living Guide</li>
                    <li>Lifetime Access to Resources</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t pt-6">
                <h3 className="text-2xl font-bold text-[#003366]">Related Courses</h3>
                <ul className="list-disc ml-8 space-y-2 mt-4">
                  <li>
                    <Link href="/40-short-hadiths-for-kids" className="text-blue-600 hover:underline">
                      Hadith Memorization Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/quranic-arabic-course" className="text-blue-600 hover:underline">
                      Quranic Arabic Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-pillars-of-islam" className="text-blue-600 hover:underline">
                      Pillars of Islam Course
                    </Link>
                  </li>
                </ul>
              </div>
              <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Comprehensive and Flexible Learning
              </h3>
              <p className="text-base font-medium pt-2">
                Our course is structured to accommodate learners of all levels. Whether
                you are a beginner or seeking advanced knowledge, our flexible schedule
                allows you to learn at your own pace. The course follows the Islamic
                Studies curriculum for the following grades:
              </p>
              <ul className="list-disc ml-8 space-y-1 pt-3">
                {Array.from({ length: 12 }, (_, i) => (
                  <li key={i}>Islamic Studies Grade 0{i + 1}</li>
                ))}
              </ul>
              <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Why Choose ilmulQuran Online Academy?
              </h3>
              <ul className="list-disc ml-8 space-y-1 pt-3">
                <li>
                  <span className="font-bold">Expert Tutors:</span> Learn from qualified
                  scholars with extensive knowledge in Islamic studies.
                </li>
                <li>
                  <span className="font-bold">Interactive Learning:</span> Engage in live
                  sessions, discussions, and interactive activities.
                </li>
                <li>
                  <span className="font-bold">Flexible Schedule:</span> Study at your
                  convenience with our flexible online classes.
                </li>
                <li>
                  <span className="font-bold">Comprehensive Curriculum:</span> Gain a
                  well-rounded education covering all essential aspects of Islam.
                </li>
                <li>
                  <span className="font-bold">Community Support:</span> Join a supportive
                  online community of fellow learners.
                </li>
              </ul>
              <h3 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Simple and Convenient Learning Process
              </h3>
              <ul className="list-disc ml-8 space-y-1 pt-3">
                <li>
                  <span className="font-bold">Enroll:</span> Choose the Islamic Studies
                  course and complete the enrollment process.
                </li>
                <li>
                  <span className="font-bold">Schedule:</span> Set your class schedule
                  according to your convenience.
                </li>
                <li>
                  <span className="font-bold">Learn:</span> Attend online classes and
                  engage with tutors and peers.
                </li>
                <li>
                  <span className="font-bold">Support:</span> Get continuous support from
                  our tutors and community.
                </li>
              </ul>
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
            {/* Sticky Form - Desktop Right Sidebar */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="sticky top-24">
                <StickyForm courseName="Daily Supplication Course" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LearnDailySupplicationOnline;
