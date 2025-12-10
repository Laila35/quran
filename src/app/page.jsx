"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import LoadingSpinner from "../components/LoadingSpinner";
import CompactIslamicServices from "../components/IslamicServices";
import {
  regularCourses,
  shortCourses,
  chooseUs,
  stepsData,
  feePlanData,
  testimonialsData
} from '../lib/Data';

// Dynamic imports for major sections
const SpecialClasses = dynamic(() => import("../components/SpecialClasses"), { loading: () => <LoadingSpinner height="400px" /> });
const Register = dynamic(() => import("../components/landingPage/Register"), { loading: () => <LoadingSpinner height="400px" /> });
const ServiceHighlights = dynamic(() => import("../components/review"), { loading: () => <LoadingSpinner height="200px" /> });
const WhoWeAre = dynamic(() => import("../components/WhoWeAre"));
const ChooseUs = dynamic(() => import("../components/landingPage/ChooseUs"));
const MeetOurTeachers = dynamic(() => import("../components/MeetOurTeachers"));
const Steps = dynamic(() => import("../components/landingPage/Steps"));
const DiscountBanner = dynamic(() => import("../components/DiscountBanner"));
const FeePlan = dynamic(() => import("../components/landingPage/FeePlans"));
const TestimonialComponent = dynamic(() => import("../components/Testimonial"));
const CoursesComp = dynamic(() => import("../components/landingPage/OnlineCourses"));

// Intersection Observer to lazy load sections
export default function Home() {
  const [visibleSections, setVisibleSections] = useState({
    services: false,
    courses: false,
    testimonials: false,
    specialClasses: true, // Hero section always visible
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    ["services", "courses", "testimonials"].forEach((section) => {
      const el = document.querySelector(`[data-section="${section}"]`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Head Section */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" as="image" href="/Images/Logo/updated-logo.webp" fetchPriority="high" />
        <title>Online Quran Classes | Learn Quran with Certified Teachers</title>
        <meta
          name="description"
          content="ilmulQuran offers personalized Online Quran Classes with certified male & female teachers. Learn Quran with Tajweed, memorization, and Islamic studies. Free trial available!"
        />
        <meta
          name="keywords"
          content="Online Quran Classes, Learn Quran Online, Quran Teachers Online, Tajweed Classes, Quran Memorization, Islamic Education, Online Islamic Classes, ilmulQuran Academy"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ilmulquran.com" />

        {/* Open Graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Learn Quran Online – Interactive Classes with Certified Tutors | ilmulQuran" />
        <meta property="og:description" content="Join expert-led Online Quran Classes at ilmulQuran. Learn Tajweed, Quran recitation, and memorization with flexible scheduling. Get a free trial now!" />
        <meta property="og:url" content="https://ilmulquran.com" />
        <meta property="og:site_name" content="ilmulQuran" />
        <meta property="og:image" content="https://ilmulquran.com/Images/Logo/updated-logo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Child and tutor in Quran class online with open Mushaf" />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Quran Classes with Expert Tutors | ilmulQuran" />
        <meta name="twitter:description" content="Enroll in online Quran classes with male & female teachers. Tajweed, memorization & more. Personalized lessons + free trial!" />
        <meta name="twitter:image" content="https://ilmulquran.com/Images/Logo/updated-logo.webp" />
      </Head>

      {/* Structured Data JSON-LD */}
      <Script
        id="jsonld-quran-classes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Online Quran Classes – Learn with Tajweed & Islamic Studies",
            description: "Personalized Quran learning experience online for all ages. Courses include Tajweed, Quran memorization, and Islamic studies with qualified teachers at ilmulQuran Academy.",
            provider: {
              "@type": "EducationalOrganization",
              name: "ilmulQuran",
              sameAs: "https://ilmulquran.com",
              description: "A trusted online Islamic education platform offering structured Quran learning programs with certified male and female tutors."
            },
            url: "https://ilmulquran.com",
            image: "https://ilmulquran.com/Images/Logo/updated-logo.webp",
            educationalLevel: ["beginner", "intermediate", "advanced"],
            typicalAgeRange: "5-65",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: ["online", "one-on-one", "group"],
              duration: "P6M",
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
                ageRange: "5-65"
              },
              offers: {
                "@type": "Offer",
                category: "free trial",
                url: "https://ilmulquran.com/get-register"
              }
            },
            coursePrerequisites: "None",
            educationalCredentialAwarded: "Certificate of Completion"
          })
        }}
      />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row w-[95%] md:w-[85%] mx-auto gap-4 mt-4">
        <div className="w-full lg:w-[70%]">
          <SpecialClasses />
        </div>
        <div className="w-full lg:w-[30%]">
          <Register />
        </div>
      </section>

      {/* Service Highlights */}
      <ServiceHighlights />
      <CompactIslamicServices />

      {/* Regular Courses */}
      <section data-section="courses" className="px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-800 mb-4 tracking-tight">
            Regular Courses
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-medium mb-10 mx-auto max-w-3xl">
            Our regular courses are crafted to provide a comprehensive understanding of Quranic studies. Join structured, in-depth classes taught by qualified scholars.
          </p>
        </div>
        {visibleSections.courses && (
          <div className="flex flex-wrap justify-center gap-6">
            <CoursesComp courses={regularCourses} />
          </div>
        )}
      </section>

      {/* Short Courses */}
      <section className="px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-800 mb-4 tracking-tight">
            Short Courses
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-medium mb-10 mx-auto max-w-2xl">
            Our short courses offer focused learning experiences, ideal for busy students. Dive into essential topics in a compact, effective format.
          </p>
        </div>
        {visibleSections.courses && (
          <div className="flex flex-wrap justify-center gap-6">
            <CoursesComp courses={shortCourses} />
          </div>
        )}
      </section>

      {/* Who We Are & Choose Us */}
      <section>
        <WhoWeAre />
        <ChooseUs chooseUs={chooseUs} />
      </section>

      {/* Meet Our Teachers */}
      <section>
        <MeetOurTeachers />
      </section>

      {/* Steps */}
      <section>
        <Steps stepsData={stepsData} />
      </section>

      {/* Discount Banner & Fee Plan */}
      <section className="mt-12 text-center px-4">
        <DiscountBanner />
        <FeePlan feePlanData={feePlanData} />
      </section>

      {/* Testimonials */}
      <TestimonialComponent testimonialsData={testimonialsData} />
    </>
  );
}
