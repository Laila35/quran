"use client";
import React from "react";
import Head from "next/head"; // ✅ Must use next/head
import Banner from "@/components/Banner";
import BonusIslamicLearning from "@/components/BonusIslamicLearning";
import TestimonialComponent from "@/components/Testimonial";
import StickyForm from "@/components/StickyForm";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const IslamicHistoryCourse = () => {
  const breadcrumbData = {
    id: 1,
    name: "Islamic History Course - Explore the History of Islam",
    link: "/",
  };

  return (
    <>
      <Head>
        <title>Islamic History Online Course | Key Events & Figures - ilmulQuran</title>
        <meta
          name="description"
          content="Explore 1400+ years of Islamic history online. Study key events, caliphates, & cultural developments with certified historians. Flexible classes with certification."
        />
        <meta
          name="keywords"
          content="Islamic history online course, Early Islamic period studies, Caliphate history classes, Islamic golden age course, Muslim dynasties curriculum, History of Islamic civilization, Online Islamic historians, Islamic cultural heritage course"
        />
        <link rel="canonical" href="https://ilmulquran.com/islamic-history/" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Comprehensive Islamic History Course Online | ilmulQuran" />
        <meta property="og:description" content="Journey through Islamic history from Prophet Muhammad (PBUH) to modern times. Study under expert historians with flexible online scheduling." />
        <meta property="og:image" content="https://ilmulquran.com/Images/OG/islamic-history-course.webp" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Islamic History Classes - From Rashidun to Ottomans" />
        <meta name="twitter:description" content="Certified Islamic history program covering major empires, cultural achievements & historical figures. Enroll today!" />
        {/* Schema Markup */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Comprehensive Islamic History Program",
              description: "In-depth study of Islamic civilization from 7th century to modern era",
              provider: {
                "@type": "EducationalOrganization",
                name: "ilmulQuran",
                sameAs: "https://ilmulquran.com"
              },
              educationalLevel: "Beginner to Advanced",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: ["online", "one-on-one"],
                duration: "P6M"
              }
            })
          }}
        />
      </Head>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-3 mt-10 py-3">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sticky Form for mobile */}
          <div className="block lg:hidden mb-10">
            <StickyForm courseName="Islamic History Course" />
          </div>

          {/* Main content in gray form */}
          <div className="w-full lg:w-3/4">
            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h2 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
                Islamic History Course: From Early Islam to Modern Era
              </h2>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <p className="text-base font-medium">
                    Our{" "}
                    <Link href="/learn-islamic-studies" className="text-blue-600">
                      Islamic Studies
                    </Link>{" "}
                    program's history course covers 14 centuries of Islamic civilization. Study with{" "}
                    <Link href="/our-teachers" className="text-blue-600">
                      certified historians
                    </Link>{" "}
                    through structured lessons.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                    Why Choose Our History Course?
                  </h3>
                  <ul className="list-disc ml-8 space-y-2 pt-3">
                    <li>
                      <span className="font-bold text-[#1a73e8]">Expert Analysis:</span> Study primary sources and{" "}
                      <Link href="/learn-tafsir-online" className="text-blue-600">
                        Quranic context
                      </Link>
                    </li>
                    <li>
                      <span className="font-bold text-[#1a73e8]">Interactive Learning:</span>{" "}
                      <Link href="/online-classes" className="text-blue-600">
                        Virtual tours
                      </Link>{" "}
                      of historical sites
                    </li>
                    <li>
                      <span className="font-bold text-[#1a73e8]">Comprehensive Curriculum:</span> From{" "}
                      <Link href="/companions-of-prophet-muhammad" className="text-blue-600">
                        Rashidun Caliphate
                      </Link>{" "}
                      to Ottomans
                    </li>
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/islamic-history.webp"
                    alt="Timeline of Islamic history showing major empires and events"
                    style={{ borderRadius: "25px" }}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Course Highlights</h2>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                <li>
                  Pre-Islamic Arabia &{" "}
                  <Link href="/seerah-life-of-prophet-muhammad" className="text-blue-600">
                    Prophet's Biography
                  </Link>
                </li>
                <li>
                  Expansion under{" "}
                  <Link href="/companions-of-prophet-muhammad" className="text-blue-600">
                    Rightly Guided Caliphs
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Detailed Curriculum</h3>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                <li>
                  Analysis of{" "}
                  <Link href="/stories-of-the-prophets" className="text-blue-600">
                    Quranic narratives
                  </Link>{" "}
                  in historical context
                </li>
                <li>
                  Development of Islamic law (<Link href="/fiqh-islamic-jurisprudence" className="text-blue-600">Fiqh</Link>) through ages
                </li>
                <li>Cultural contributions in science & arts</li>
                <li>Comparative study of Islamic empires</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Enrich Your Understanding</h3>
              <p className="text-base font-medium pt-4">
                Complement your studies with our{" "}
                <Link href="/learn-arabic-online" className="text-blue-600">
                  Arabic courses
                </Link>{" "}
                and{" "}
                <Link href="/get-register" className="text-blue-600 no-underline">
                  enroll today
                </Link>{" "}
                to access:
              </p>
              <ul className="list-disc ml-8 pt-2">
                <li>Historical map archives</li>
                <li>Primary source documents</li>
                <li>Expert video lectures</li>
              </ul>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#003366]">Related Courses</h3>
                <ul className="list-disc ml-8 space-y-2 pt-3">
                  <li>
                    <Link href="/aqeedah-islamic-beliefs" className="text-blue-600">
                      Islamic Beliefs (Aqeedah) Course
                    </Link>
                  </li>
                  <li>
                    <Link href="/fiqh-islamic-jurisprudence" className="text-blue-600">
                      Islamic Law (Fiqh) Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/companions-of-prophet-muhammad" className="text-blue-600">
                      Sahaba Studies Course
                    </Link>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Student Testimonials</h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>
            </div>
          </div>

          {/* StickyForm for desktop */}
          <div className="hidden lg:block w-full lg:w-1/4">
            <div className="sticky top-6">
              <StickyForm courseName="Islamic History Course" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IslamicHistoryCourse;
