"use client";
import React from "react";
import Head from "next/head"; // ✅ Use next/head
import Banner from "@/components/Banner";
import BonusIslamicLearning from "@/components/BonusIslamicLearning";
import TestimonialComponent from "@/components/Testimonial";
import StickyForm from "@/components/StickyForm";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const AqeedahCourse = () => {
  const breadcrumbData = {
    id: 1,
    name: "Aqeedah (Islamic Beliefs) Course - Strengthen Your Faith",
    link: "/",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          as="image"
          href="/Images/Courses/Aqeedah-Islamic-Beliefs.webp"
          fetchPriority="high"
        />
        <title>Comprehensive Aqeedah Course: Master Islamic Beliefs Online</title>
        <meta
          name="description"
          content="Deepen your understanding of Islamic theology with our structured Aqeedah course. Study core beliefs, refute misconceptions, and strengthen your Iman with certified scholars. Flexible online classes for adults & teens."
        />
        <meta
          name="keywords"
          content="Aqeedah course online, Islamic beliefs classes, Sunni creed course, Foundations of Iman, Islamic theology course, Online Islamic education, Aqeedah Tahawiyyah, Islamic doctrinal studies, Muslim belief system, Eeman enhancement program"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ilmulquran.com/aqeedah-islamic-beliefs/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Master Islamic Beliefs - Professional Aqeedah Course | ilmulQuran"
        />
        <meta
          property="og:description"
          content="Comprehensive online Aqeedah program covering Sunni creed, attributes of Allah, and protection against deviant beliefs. Enroll with certified Islamic scholars today."
        />
        <meta property="og:url" content="https://ilmulquran.com/aqeedah-islamic-beliefs/" />
        <meta property="og:site_name" content="ilmulQuran" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Courses/Aqeedah-Islamic-Beliefs.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Islamic scholar teaching Aqeedah concepts online" />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Professional Aqeedah Course Online - Build Strong Islamic Foundation"
        />
        <meta
          name="twitter:description"
          content="Study authentic Sunni creed with qualified scholars. Flexible scheduling, personalized lessons, and certification. Free trial available!"
        />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Courses/Aqeedah-Islamic-Beliefs.webp" />

        {/* Structured Data */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Comprehensive Aqeedah & Islamic Beliefs Certification Program",
              description: "In-depth study of Islamic creed covering Allah's attributes, prophethood, afterlife, and contemporary theological challenges. Based on classical texts including Aqeedah Tahawiyyah and Wasitiyyah.",
              provider: {
                "@type": "EducationalOrganization",
                name: "ilmulQuran",
                sameAs: "https://ilmulquran.com"
              },
              url: "https://ilmulquran.com/aqeedah-islamic-beliefs/",
              image: "https://ilmulquran.com/Images/Courses/Aqeedah-Islamic-Beliefs.webp",
              educationalLevel: "Beginner to Advanced",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: ["online", "one-on-one", "group"],
                duration: "P6M",
                audience: {
                  "@type": "EducationalAudience",
                  educationalRole: "student",
                  ageRange: "15-60"
                },
                offers: {
                  "@type": "Offer",
                  category: "free trial",
                  url: "https://ilmulquran.com/get-register"
                }
              },
              coursePrerequisites: "Basic Islamic knowledge",
              educationalCredentialAwarded: "Certificate in Islamic Theology & Creed"
            })
          }}
        />
      </Head>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
        {/* Content Column */}
        <div className="w-full lg:w-2/3 order-last lg:order-none">
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
            <h2 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
              Comprehensive Course on Islamic Beliefs
            </h2>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2">
                <p className="text-base font-medium">
                  Our Aqeedah (Islamic Beliefs) Course is designed to help you understand and strengthen your faith. This course covers the core beliefs of Islam, providing a solid foundation in Aqeedah. With the guidance of experienced tutors, you will learn the principles of Islamic belief and how to apply them in your daily life.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                  Why Choose Our Aqeedah Course?
                </h3>
                <ul className="list-disc ml-8 space-y-2 pt-3">
                  <li>
                    <span className="font-bold text-[#1a73e8]">Personal Guidance:</span> One-on-one sessions with expert tutors.
                  </li>
                  <li>
                    <span className="font-bold text-[#1a73e8]">Flexible Learning:</span> Online classes that fit your schedule.
                  </li>
                  <li>
                    <span className="font-bold text-[#1a73e8]">Complete Curriculum:</span> Covers all essential aspects of Aqeedah.
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-1/2 order-first lg:order-last">
                <Image
                  width={600}
                  height={600}
                  src="/Images/Courses/Aqeedah-Islamic-Beliefs.webp"
                  alt="Aqeedah Course"
                  style={{ borderRadius: "25px" }}
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Course Objectives</h2>
            <ul className="list-disc ml-8 space-y-2 pt-3">
              <li>Learn Core Beliefs: Understand the fundamental beliefs of Islam.</li>
              <li>Develop Understanding: Study various aspects of Aqeedah.</li>
              <li>Practice Application: Learn how to apply Islamic beliefs in daily life.</li>
              <li>Improve Faith: Techniques to strengthen and maintain your faith.</li>
              <li>Gain Insight: Understand the historical development of Islamic beliefs.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Course Syllabus</h3>
            <ul className="list-disc ml-8 space-y-2 pt-3">
              <li>Introduction to Aqeedah: Overview of Islamic beliefs.</li>
              <li>Tawheed (Oneness of Allah): Understanding the concept of Tawheed.</li>
              <li>Belief in Angels: Understanding the role and significance of angels in Islam.</li>
              <li>Belief in Books: Understanding the importance of the divine books.</li>
              <li>Belief in Prophets: Study the role of prophets in Islam.</li>
              <li>Belief in the Day of Judgment: Understanding the concept of the Day of Judgment.</li>
              <li>Belief in Qadr (Divine Decree): Understanding predestination in Islam.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Call to Action</h3>
            <p className="text-base font-medium pt-4">
              Ready to strengthen your faith?{" "}
              <Link href="/get-register" className="text-blue-600 no-underline">
                Enroll in our Aqeedah (Islamic Beliefs) Course today!
              </Link>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">Student Testimonials</h3>
            <div className="pt-3">
              <TestimonialComponent testimonialsData={testimonialsData} />
            </div>
          </div>
        </div>

        {/* Sticky Form Column */}
        <div className="w-full lg:w-1/3 order-first lg:order-none lg:sticky top-4 h-fit">
          <div className="bg-white p-4 sm:p-6 rounded-xl">
            <StickyForm
              courseName="Aqeedah (Islamic Beliefs) Course"
              formId="aqeedah-course"
              formTitle="Enroll in Aqeedah Course"
              formDescription="Start strengthening your Islamic beliefs today. Get a free trial class!"
              submitText="Start Learning"
              showPhone={true}
              showMessage={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AqeedahCourse;
