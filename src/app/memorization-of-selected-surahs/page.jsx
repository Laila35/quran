import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
const MemorizationOFSelectedSurahs = () => {
  const breadcrumbData = {
    id: 1,
    name: "Memorization of Selected Surahs - Learn and Retain Quranic Verses",
    link: "/",
  };
  return (
    <>
      <head>
        <title>Selected Surahs Memorization Course | Key Quranic Chapters - ilmulQuran</title>
        <meta 
          name="description" 
          content="Master essential Quranic chapters through our structured memorization program. Learn 20+ key Surahs with Tajweed-compliant recitation and retention techniques." 
        />
        <meta 
          name="keywords" 
          content="Quran Surah memorization, Key chapters memorization, Surah Yaseen course, Last 10 Surahs, Prayer Surahs, Quran retention techniques, Hifz selected Surahs" 
        />
        <link rel="canonical" href="https://ilmulquran.com/memorization-of-selected-surahs/" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Essential Surahs Memorization Program | ilmulQuran" />
        <meta property="og:description" content="Structured course focusing on 20+ crucial Quranic chapters including Surah Al-Kahf, Ar-Rahman, and daily prayer Surahs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilmulquran.com/memorization-of-selected-surahs/" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/memorize-quran-online.webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Memorize Key Quranic Chapters - Online Surah Course" />
        <meta name="twitter:description" content="Learn essential Surahs for prayers and daily recitation with expert guidance. Free trial available!" />
      </head>
      {/* Structured Data */}
      <Script
        id="surah-memorization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Essential Quranic Surahs Memorization Program",
            "description": "Focus on memorizing 20+ crucial Quran chapters with proper Tajweed and retention techniques",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "ilmulQuran",
              "sameAs": "https://ilmulquran.com"
            },
            "image": "https://ilmulquran.com/Images/Courses/memorize-quran-online.webp",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": ["online", "one-on-one"],
              "duration": "P3M",
              "offers": {
                "@type": "Offer",
                "category": "free trial",
                "url": "https://ilmulquran.com/get-register"
              }
            }
          })
        }}
      />
 {/* <Banner breadcrumbData={breadcrumbData} /> */}
  {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
{/* Form Column */}
<div className="w-full lg:w-1/3 order-1 lg:order-2">
  <StickyForm 
    courseName={breadcrumbData.name.split("–")[0].trim()} 
  />
</div>
<div className="bg-gray-100 lg-rounded lg:w-2/3 order-2 lg:order-1">
              <h1 id="overview" className="text-[#003366] mb-10 text-center font-bold text-3xl md:text-4xl">
                Master Essential Quranic Surahs - Structured Memorization Program
              </h1>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <p className="text-base font-medium">
                    Our specialized program focuses on memorizing key Surahs used in daily prayers and special occasions. Perfect complement to our <Link href="/memorize-quran-online" className="text-blue-600">full Hifz program</Link>, this course covers:
                  </p>
                  <h2 id="why-choose" className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                    Why Choose This Course?
                  </h2>
                  <ul className="list-disc ml-8 space-y-2 pt-3">
                    <li>
                      <span className="font-bold">Expert Guidance:</span> Learn from <Link href="/our-teachers" className="text-blue-600">Quran memorization specialists</Link>
                    </li>
                    <li>
                      <span className="font-bold">Flexible Learning:</span> Combine with <Link href="/online-quran-classes" className="text-blue-600">other Quran courses</Link>
                    </li>
                    <li>
                      <span className="font-bold">Practical Focus:</span> Surahs used in <Link href="/learn-daily-supplication-online" className="text-blue-600">daily worship</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <Image
                    width={600}
                    height={400}
                    src="/Images/Courses/memorize-quran-online.webp"
                    alt="Student memorizing Quran with teacher guidance"
                    className="rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
              <h2 id="curriculum" className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Core Curriculum
              </h2>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                <li>
                  <span className="font-bold">Daily Prayer Surahs:</span> Al-Fatihah, Al-Ikhlas, Al-Falaq, An-Nas
                </li>
                <li>
                  <span className="font-bold">Jumu'ah Specials:</span> Al-Kahf, Ar-Rahman
                </li>
                <li>
                  <span className="font-bold">Protection Chapters:</span> Ayat al-Kursi, Last Two Verses of Al-Baqarah
                </li>
                <li>
                  <span className="font-bold">Essential Memorization:</span> <Link href="/40-short-hadiths-for-kids" className="text-blue-600">Surahs mentioned in Hadith</Link>
                </li>
              </ul>
              <div id="methodology" className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#003366]">Learning Methodology</h3>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Daily repetition system</li>
                    <li>Audio-visual learning aids</li>
                    <li>Progress tracking dashboard</li>
                    <li><Link href="/learn-tajweed-online" className="text-blue-600">Tajweed</Link> integrated practice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366]">Key Benefits</h3>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Enhanced prayer quality</li>
                    <li>Strong Quranic foundation</li>
                    <li>Flexible milestone-based learning</li>
                    <li>Certificate of completion</li>
                  </ul>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Course Objectives
              </h2>
              <ul className="list-disc ml-8 space-y-1 pt-3">
                <li>
                  <span className="font-bold">Learn Memorization Techniques:</span> Effective methods for memorizing Quranic verses.
                </li>
                <li>
                  <span className="font-bold">Develop Understanding:</span> Understand the meanings of the selected Surahs.
                </li>
                <li>
                  <span className="font-bold">Practice Recitation:</span> Recite the memorized Surahs with proper Tajweed.
                </li>
                <li>
                  <span className="font-bold">Improve Retention:</span> Techniques to retain and recall the memorized verses.
                </li>
                <li>
                  <span className="font-bold">Understand Context:</span> Gain insights into the context of the selected Surahs.
                </li>
              </ul>
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Course Syllabus
              </h3>
              <p className="text-base font-medium pt-3">
                The Memorization of Selected Surahs course includes:
              </p>
              <ul className="list-disc ml-8 space-y-1 pt-3">
                <li>
                  <span className="font-bold">Introduction to Memorization:</span> Basics of Quranic memorization techniques.
                </li>
                <li>
                  <span className="font-bold">Selected Surahs:</span> Focus on specific Surahs for memorization.
                </li>
                <li>
                  <span className="font-bold">Understanding Meanings:</span> Study the meanings of the selected Surahs.
                </li>
                <li>
                  <span className="font-bold">Recitation Practice:</span> Techniques for proper recitation with Tajweed.
                </li>
                <li>
                  <span className="font-bold">Retention Techniques:</span> Methods to retain the memorized verses.
                </li>
                <li>
                  <span className="font-bold">Contextual Understanding:</span> Understanding the context of the selected Surahs.
                </li>
              </ul>
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Call to Action
              </h2>
              <p className="text-base font-medium pt-4">
                Ready to memorize key Quranic Surahs? <Link href="/get-register" className="text-blue-600 no-underline">Enroll in our Memorization of Selected Surahs course today!</Link>
              </p>
              <div id="testimonials" className="mt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#003366]">
                  Student Testimonials
                </h3>
                <div className="pt-3">
    <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />                </div>
              </div>
              <div id="related" className="mt-8 border-t pt-6">
                <h3 className="text-2xl font-bold text-[#003366]">Related Programs</h3>
                <ul className="list-disc ml-8 space-y-2 mt-4">
                  <li>
                    <Link href="/quran-reading-with-tajweed" className="text-blue-600">
                      Quran Reading with Tajweed
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn-daily-supplication-online" className="text-blue-600">
                      Daily Supplications Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/islamic-classes-for-kids" className="text-blue-600">
                      Islamic Foundations for Kids
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
    </>
  );
};
export default MemorizationOFSelectedSurahs;