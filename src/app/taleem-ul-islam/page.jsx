import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData, part1Topics, part2Topics, part3Topics } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
import TaleemCourseTopic from "@/components/TaleemCourseTopic";




const TaleemUlIslam = () => {
  const breadcrumbData = {
    id: 1,
    name: "Taleem ul Islam: Comprehensive Islamic Education Program",
    link: "/taleem-ul-islam",
  };

  return (
    <>
      <head>
        <title>Taleem ul Islam Course | Complete Online Islamic Studies Program</title>
        <meta 
          name="description" 
          content="Master Islamic fundamentals through structured Taleem ul Islam classes. Learn Quran, Hadith, Fiqh & Islamic history with certified scholars. Flexible schedules for all ages."
        />
        <meta 
          name="keywords" 
          content="Taleem ul Islam course, Online Islamic education, Learn Fiqh online, Quranic studies program, Islamic jurisprudence classes, Hadith learning online"
        />
        <link rel="canonical" href="https://ilmulquran.com/taleem-ul-islam" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Taleem ul Islam - Complete Islamic Education Online | ilmulQuran" />
        <meta property="og:description" content="Comprehensive Islamic studies program covering Quran, Hadith, Fiqh & Islamic history. Enroll now for certified learning." />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/talimul-islam.webp" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Taleem ul Islam Program - ilmulQuran" />
        <meta name="twitter:description" content="Structured Islamic education program with certified teachers. Start learning today!" />
        
        {/* Schema Markup */}
        <Script
          id="taleem-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Taleem ul Islam - Comprehensive Islamic Studies",
              "description": "Complete Islamic education program covering Quranic studies, Hadith, Fiqh and Islamic history",
              "provider": {
                "@type": "Organization",
                "name": "ilmulQuran",
                "sameAs": "https://ilmulquran.com"
              }
            })
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

      {/* <Banner breadcrumbData={breadcrumbData} /> */}

<div className="w-full lg:w-2/3 order-2 lg:order-1">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-8">
            Taleem ul Islam - Complete Islamic Education
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Our structured program combines <Link href="/learn-islamic-studies" className="text-blue-600 underline">Islamic studies</Link> with practical 
                life applications, covering essential aspects of:
              </p>
              <ul className="list-disc ml-6 space-y-3">
                <li>Quranic teachings & Tafsir</li>
                <li>Hadith authentication & analysis</li>
                <li><Link href="/fiqh-islamic-jurisprudence" className="text-teal-600 underline">Fiqh (Islamic jurisprudence)</Link></li>
                <li>Islamic history & civilization</li>
              </ul>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/Images/Courses/talimul-islam.webp"
                alt="Islamic scholars discussing religious texts"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-8">Curriculum Structure</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Foundations of Faith</h3>
                <TaleemCourseTopic topics={part1Topics} />
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Practical Islam</h3>
                <TaleemCourseTopic  topics={part2Topics} />
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-teal-700 mb-4">Advanced Studies</h3>
                <TaleemCourseTopic topics={part3Topics} />
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">Program Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc ml-6 space-y-3">
                <li>Personalized learning paths</li>
                <li>Weekly progress tracking</li>
                <li>Certified instructors from <Link href="/online-quran-institute" className="text-blue-600 underline">renowned institutes</Link></li>
              </ul>
              <ul className="list-disc ml-6 space-y-3">
                <li>Interactive learning materials</li>
                <li>24/7 access to <Link href="/downloads" className="text-blue-600 underline">study resources</Link></li>
                <li>Final certification upon completion</li>
              </ul>
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-[#003366] to-teal-700 text-white p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Islamic Learning Journey</h2>
            <p className="text-lg mb-6">
              Join students from <Link href="/online-quran-classes-uk" className="text-amber-300 underline">UK</Link>, 
              <Link href="/online-quran-classes-usa" className="text-amber-300 underline mx-2">USA</Link>, and 
              50+ countries
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/get-register"
                className="bg-white text-[#003366] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Enroll Now - Free Trial
              </Link>
              <Link
                href="/fee-and-schedule-plan"
                className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#003366] transition"
              >
                View Pricing
              </Link>
            </div>
          </section>


          <div className="text-center text-gray-600">
            <p className="mb-4">Explore more Islamic courses:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/learn-tafsir-online" className="text-blue-600 underline">Quran Tafsir</Link>
              <Link href="/seerah-life-of-prophet-muhammad" className="text-blue-600 underline">Seerah Course</Link>
              <Link href="/islamic-history" className="text-blue-600 underline">Islamic History</Link>
              <Link href="/courses" className="text-blue-600 underline">All Programs</Link>
            </div>
          </div>

          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-8">Student Experiences</h2>
                 <BonusIslamicLearning />
            <TestimonialComponent testimonialsData={testimonialsData} />
          </section>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default TaleemUlIslam;