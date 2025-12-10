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

const PillarsOfIslam = () => {
  const breadcrumbData = {
    id: 1,
    name: "Learn Pillars of Islam - Understand the Foundations",
    link: "/",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <link rel="canonical" href="https://ilmulQuran.com/pillars-of-islam" />
        <link 
          rel="preload" 
          as="image" 
          href="/Images/Courses/five-pillars-of-islam.webp"
          fetchPriority="high"
        />
        <title>Pillars of Islam Course | Learn Islam’s Foundations Online</title>
        <meta 
          name="description" 
          content="Learn the 5 Pillars of Islam in depth with ilmulQuran's online course. Certified teachers, flexible schedule & interactive one-on-one sessions. Enroll now!" 
        />
        <meta 
          name="keywords" 
          content="Learn Pillars of Islam, Online Islam Course, Five Pillars of Islam, Islamic Beliefs, Shahada, Salah, Zakat, Sawm, Hajj, Beginner Islam Course" 
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilmulQuran.com/pillars-of-islam" />
        <meta property="og:title" content="🕌 Learn Pillars of Islam Online | Certified Islamic Course" />
        <meta property="og:description" content="Explore the Five Pillars of Islam with expert tutors. Online classes designed for all ages. Start your Islamic journey today with ilmulQuran." />
        <meta property="og:image" content="/Images/Courses/five-pillars-of-islam.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Illustration of the five pillars of Islam with educational content" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ilmulquran" />
        <meta name="twitter:title" content="📚 Pillars of Islam Course – Learn Faith, Prayer, Zakat & More" />
        <meta name="twitter:description" content="Interactive course on Islam’s 5 Pillars. Trusted by 10,000+ students. Live sessions, recorded lessons, and free trial!" />
        <meta name="twitter:image" content="/Images/Courses/five-pillars-of-islam.webp" />
        {/* Structured Data */}
        <Script
          id="pillars-islam-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Pillars of Islam – Online Course",
              description: "An in-depth online course covering the Five Pillars of Islam including Shahada, Salah, Zakat, Sawm, and Hajj. Delivered by certified Islamic tutors.",
              provider: {
                "@type": "EducationalOrganization",
                name: "ilmulQuran",
                sameAs: "https://ilmulQuran.com"
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: ["online", "self-paced", "live"],
                duration: "P2M",
                offers: {
                  "@type": "Offer",
                  url: "https://ilmulQuran.com/get-register",
                  category: "free trial"
                }
              },
              educationalCredentialAwarded: "Certificate of Completion",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1800",
                bestRating: "5"
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
            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h2 className="text-[#003366] mb-10 text-center font-bold text-4xl">
                Comprehensive Course on the Pillars of Islam
              </h2>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our Learn Pillars of Islam course is designed to help you
                    understand the foundational principles of Islam. This course
                    covers the five pillars of Islam, providing a solid understanding
                    of each pillar and its significance. With the guidance of
                    experienced tutors, you will learn how to practice these pillars
                    in your daily life.
                  </p>
                  <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                    Why Choose Our Learn Pillars of Islam Course?
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed pt-2">
                    Our course offers several benefits:
                  </p>
                  <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                    <li>
                      <span className="font-semibold text-[#1a73e8]">Personal Guidance:</span> One-on-one sessions with expert tutors.
                    </li>
                    <li>
                      <span className="font-semibold text-[#1a73e8]">Flexible Learning:</span> Online classes that fit your schedule.
                    </li>
                    <li>
                      <span className="font-semibold text-[#1a73e8]">Complete Curriculum:</span> Covers all five pillars of Islam in detail.
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/five-pillars-of-islam.webp"
                    alt="Pillars of Islam"
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Objectives, syllabus, CTA, testimonials */}
              {/* ...rest of your content remains the same as original code... */}

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
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

export default PillarsOfIslam;
