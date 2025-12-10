"use client";
import React from "react";
import Head from "next/head"; // ✅ Use Next.js Head
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
import BonusIslamicLearning from "@/components/BonusIslamicLearning";
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";

const SeerahCourse = () => {
  const breadcrumbData = {
    id: 1,
    name: "Seerah (Life of Prophet Muhammad PBUH) Course",
    link: "/seerah-life-of-prophet-muhammad",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="preload"
          as="image"
          href="/Images/Courses/Seerah-of-muhammad.webp"
          fetchPriority="high"
        />
        <title>Online Seerah Course - Life of Prophet Muhammad (PBUH)</title>
        <meta
          name="description"
          content="Comprehensive online Seerah course covering Prophet Muhammad's (PBUH) biography, teachings, and legacy. Learn with certified scholars through flexible classes and interactive lessons."
        />
        <meta
          name="keywords"
          content="Seerah course online, Life of Prophet Muhammad, Islamic history course, Seerah studies, Prophet Muhammad biography, Online Islamic classes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ilmulquran.com/seerah-life-of-prophet-muhammad/" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Seerah Course - Life of Prophet Muhammad (PBUH) | ilmulQuran"
        />
        <meta
          property="og:description"
          content="Deep dive into Prophet Muhammad's (PBUH) life with certified scholars. Flexible online classes with interactive learning materials."
        />
        <meta property="og:url" content="https://ilmulquran.com/seerah-life-of-prophet-muhammad/" />
        <meta property="og:site_name" content="ilmulQuran" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Seerah-of-muhammad.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Islamic scholar teaching Seerah of Prophet Muhammad" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Seerah Course - Life of Prophet Muhammad (PBUH) | ilmulQuran"
        />
        <meta
          name="twitter:description"
          content="Comprehensive Seerah studies program with certified Islamic scholars. Start learning today!"
        />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/Seerah-of-muhammad.webp" />

        {/* Schema Markup */}
        <Script
          id="seerah-course-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Seerah of Prophet Muhammad (PBUH) - Comprehensive Online Course",
              description: "Detailed study of the Prophet's life, teachings, and legacy",
              educationalLevel: "Beginner to Advanced",
              provider: {
                "@type": "EducationalOrganization",
                name: "ilmulQuran",
                url: "https://ilmulquran.com"
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: ["online", "one-on-one", "group"],
                instructor: {
                  "@type": "Person",
                  name: "Certified Islamic Scholars",
                  url: "https://ilmulquran.com/our-teachers"
                }
              }
            })
          }}
        />
      </Head>

      {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm 
              courseName={breadcrumbData.name.split("–")[0].trim()} 
            />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h1 className="text-center text-4xl font-bold text-[#003366] mb-8">
                Searah of Prophet Muhammad (PBUH) - Online Course
              </h1>

              {/* Image + Highlights */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div className="order-2 md:order-1">
                  <p className="text-lg text-gray-700 mb-6">
                    Journey through the life of the Final Messenger with our comprehensive Seerah program, 
                    combining <Link href="/islamic-history" className="text-blue-600 underline">Islamic history</Link> studies with practical life lessons.
                  </p>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-teal-800 mb-4">Course Highlights</h3>
                    <ul className="list-disc ml-6 space-y-3 text-gray-700">
                      <li>Chronological study from pre-Islamic Arabia to final sermon</li>
                      <li>Analysis of key events and battles</li>
                      <li>Interactive timeline with <Link href="/downloads" className="text-teal-600 underline">visual aids</Link></li>
                      <li>Weekly Q&A sessions with scholars</li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    width={800}
                    height={600}
                    src="/Images/Courses/Seerah-of-muhammad.webp"
                    alt="Detailed Seerah studies with interactive materials"
                    className="rounded-xl shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* Curriculum Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Curriculum Overview</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Pre-Islamic Arabia", content: "Understanding the Jahiliyyah period and social conditions" },
                    { title: "Prophetic Timeline", content: "Birth to prophethood, Mecca period, Medina era" },
                    { title: "Major Events", content: "Hijrah, Battles of Badr/Uhud/Khandaq, Treaty of Hudaybiyyah" },
                    { title: "Leadership Studies", content: "Political and social reforms established by the Prophet" },
                    { title: "Character Analysis", content: "Study of the Prophet's manners and relationships" },
                    { title: "Legacy & Impact", content: "Influence on Islamic civilization and modern world" }
                  ].map((module, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-semibold text-teal-700 mb-3">{module.title}</h3>
                      <p className="text-gray-700">{module.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learning Outcomes */}
              <section className="bg-[#f8f9fa] p-8 rounded-xl mb-12">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">Learning Outcomes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="list-disc ml-6 space-y-3 text-gray-700">
                      <li>Comprehend the historical context of Quranic revelations</li>
                      <li>Analyze the Prophet's decision-making process</li>
                      <li>Connect Seerah with modern challenges</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc ml-6 space-y-3 text-gray-700">
                      <li>Develop emotional connection with Islamic history</li>
                      <li>Understand the universality of Prophet's message</li>
                      <li>Apply Seerah lessons in contemporary life</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="mt-12 text-center text-gray-600">
                Explore more: 
                <Link href="/islamic-history" className="text-blue-600 mx-2 underline">Islamic History</Link> • 
                <Link href="/companions-of-prophet-muhammad" className="text-blue-600 mx-2 underline">Sahaba Studies</Link> • 
                <Link href="/online-classes" className="text-blue-600 mx-2 underline">All Courses</Link>
              </div>

              {/* Course Objectives */}
              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Course Objectives</h2>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                <li>Learn the Prophet’s Biography</li>
                <li>Study His Teachings</li>
                <li>Understand His Legacy</li>
                <li>Improve Application</li>
                <li>Gain Insight</li>
              </ul>

              {/* Course Syllabus */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Course Syllabus</h3>
              <ul className="list-disc ml-8 space-y-2 pt-3">
                <li>Introduction to Seerah</li>
                <li>Early Life</li>
                <li>Prophethood</li>
                <li>Major Events</li>
                <li>Teachings of the Prophet</li>
                <li>Migration to Medina</li>
                <li>Battles and Conflicts</li>
                <li>Final Years</li>
              </ul>

              {/* Call to Action */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Call to Action</h3>
              <p className="text-base font-medium pt-4">
                Ready to discover the life of the Prophet Muhammad (PBUH)?{" "}
                <Link href="/get-register" className="text-blue-600 no-underline">
                  Enroll in our Seerah Course today!
                </Link>
              </p>

              {/* Enrollment CTA */}
              <section className="text-center bg-gradient-to-r from-[#003366] to-teal-700 text-white p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4">Start Your Seerah Journey Today</h2>
                <p className="text-lg mb-6">
                  Join students from <Link href="/online-quran-classes-uk" className="text-amber-300 underline">UK</Link>, 
                  <Link href="/online-quran-classes-usa" className="text-amber-300 underline mx-2">USA</Link>, and 50+ countries worldwide
                </p>
                <Link
                  href="/get-register"
                  className="inline-block bg-white text-[#003366] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Enroll Now 
                </Link>
                <p className="mt-4 text-sm opacity-90">
                  Includes free access to <Link href="/downloads" className="text-amber-300 underline">Seerah resource kit</Link>
                </p>
              </section>

              {/* Bonus + Testimonials */}
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Student Testimonials</h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeerahCourse;
