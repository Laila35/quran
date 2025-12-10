import React from "react";
import Head from "next/head";
import BonusIslamicLearning from "@/components/BonusIslamicLearning";
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";

const QuranicArabicCourse = () => {
  const breadcrumbData = {
    id: 2,
    name: "Quranic Arabic Course – Understand the Quran Word by Word",
    link: "/",
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <link
          rel="canonical"
          href="https://ilmulquran.com/quranic-arabic-course/"
        />
        {/* Preload critical resources */}
        <link
          rel="preload"
          as="image"
          href="/Images/Courses/quranic-arabic-course.png"
          fetchPriority="high"
          imageSrcSet="
            /Images/Courses/quranic-arabic-course.png 480w,
            /Images/Courses/quranic-arabic-course.png 800w
          "
          imageSizes="(max-width: 600px) 480px, 800px"
        />
        <title>
          Quranic Arabic Course – Understand Quran Word by Word
        </title>
        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Master Quranic Arabic online with certified teachers. Word-by-word Quran understanding, grammar breakdown & vocabulary building. Start free trial today!"
        />
        <meta
          name="keywords"
          content="Quranic Arabic Course, Learn Quranic Grammar, Understand Quran Word by Word, Online Arabic Classes, Quran Vocabulary Course, Islamic Studies, Quran Translation Course"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="IlmulQuran" />
        <meta name="geo.region" content="Global" />
        <meta name="copyright" content="IlmulQuran" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ilmulquran.com/quranic-arabic-course/"
        />
        <meta
          property="og:title"
          content="Master Quranic Arabic: Understand Quran Directly | IlmulQuran"
        />
        <meta
          property="og:description"
          content="3-Month Intensive Course: Learn Arabic grammar & vocabulary directly from the Quran with male/female teachers. Get certification & lifetime access to materials."
        />
        <meta
          property="og:image"
          content="/Images/Courses/quranic-arabic-course.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Student learning Quranic Arabic with online teacher"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ilmulquran" />
        <meta
          name="twitter:title"
          content="Quranic Arabic Course: Read Quran Without Translation"
        />
        <meta
          name="twitter:description"
          content="Join 5000+ students who understand Quran directly. Interactive lessons, progress tracking, and certification. Free placement test available!"
        />
        <meta
          name="twitter:image"
          content="/Images/Courses/quranic-arabic-course.png"
        />
        {/* iOS Safari Specific */}
        <meta name="apple-mobile-web-app-title" content="Quranic Arabic Course" />
        {/* Windows Specific */}
        <meta
          name="msapplication-TileImage"
          content="/Images/Courses/quranic-arabic-course.png"
        />
        <meta name="theme-color" content="#2A5F8F" />
      </Head>

      {/* Schema Structured Data */}
      <Script
        id="course-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Quranic Arabic Mastery Program",
            description:
              "Comprehensive online course teaching Quranic Arabic grammar, vocabulary, and syntax using direct Quranic examples. Designed for English-speaking students.",
            provider: {
              "@type": "EducationalOrganization",
              name: "IlmulQuran",
              sameAs: "https://ilmulquran.com",
            },
            educationalLevel: "Beginner to Advanced",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: ["online", "one-on-one", "group"],
              duration: "P3M",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "99",
                url: "https://ilmulquran.com/quranic-arabic-course/",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "873",
            },
          }),
        }}
      />

      {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm courseName={breadcrumbData.name.split("–")[0].trim()} />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h2 className="text-[#003366] mb-10 text-center font-bold text-4xl">
                Quranic Arabic Course – Understand the Quran Word by Word
              </h2>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Do you read the Quran but wish to truly understand what Allah ﷻ
                    is saying to you — word by word? At ilmulQuran.com, our Quranic
                    Arabic Course is designed to help Muslims of all backgrounds
                    learn the exact language of the Quran — including grammar, root
                    words, and structure — so they can connect directly with the
                    divine message.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/quranic-arabic-course.png"
                    alt="Quranic Arabic Course"
                    style={{ borderRadius: "25px" }}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                What You’ll Learn in This Course
              </h2>

              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>
                  <span className="font-semibold text-[#1a73e8]">
                    Module 1 – Foundations of Quranic Arabic:
                  </span>{" "}
                  Differences between spoken Arabic and Quranic Arabic, grammar
                  (Nahw), basic sentence structure.
                </li>
                <li>
                  <span className="font-semibold text-[#1a73e8]">
                    Module 2 – Quranic Vocabulary Building:
                  </span>{" "}
                  300–500 commonly used Quranic words, trilateral roots, word
                  families.
                </li>
                <li>
                  <span className="font-semibold text-[#1a73e8]">
                    Module 3 – Quranic Grammar in Action:
                  </span>{" "}
                  Verb patterns, noun types, particles like "inna", "lam", "laa",
                  etc., subjects/objects/prepositions.
                </li>
                <li>
                  <span className="font-semibold text-[#1a73e8]">
                    Module 4 – Word-by-Word Tafsir Practice:
                  </span>{" "}
                  Surah dissection (Fatiha, Ikhlas, Kawthar, Asr), real-time
                  grammar application, deeper meaning.
                </li>
                <li>
                  <span className="font-semibold text-[#1a73e8]">
                    Module 5 – Revision + Integration:
                  </span>{" "}
                  Weekly reviews, vocabulary retention drills, daily Ayatul Quran
                  discussions.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Who Can Join?
              </h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>Adults and teens (age 14+)</li>
                <li>Non-Arabic speakers who want to understand the Quran</li>
                <li>Reverts and seekers</li>
                <li>Students of Tafsir and Islamic Studies</li>
                <li>Professionals who want structured weekly lessons</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Meet Our Teachers
              </h3>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>Certified Ustadhs and Ustadhas</li>
                <li>Trained in Tajweed, Nahw, Sarf, and Quranic grammar</li>
                <li>Fluent in English, Urdu, and Arabic</li>
                <li>Patient, encouraging, and detail-oriented</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Course Format
              </h3>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>Category: Regular Course</li>
                <li>Class Type: One-on-One or Small Group</li>
                <li>Duration: 4 to 6 months</li>
                <li>Class Time: 30–60 minutes, 2–3 times/week</li>
                <li>Platform: Zoom / Skype / Google Meet</li>
                <li>Support: Notes, exercises & recordings included</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Certification
              </h3>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                Upon completion, students receive a Quranic Arabic Certificate of
                Completion from ilmulQuran.com.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Global Access
              </h3>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                Serving students worldwide: 🇬🇧 UK | 🇺🇸 USA | 🇨🇦 Canada | 🇦🇺
                Australia | 🇳🇿 New Zealand | 🇦🇪 UAE | 🇸🇬 Singapore | 🇿🇦 South
                Africa
              </p>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Explore More Courses
              </h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li>
                  <Link href="/learn-arabic-online" className="text-blue-600">
                    Learn Arabic Online
                  </Link>
                </li>
                <li>
                  <Link href="/learn-tafsir-online" className="text-blue-600">
                    Learn Tafsir Online
                  </Link>
                </li>
                <li>
                  <Link href="/quran-reading-with-tajweed" className="text-blue-600">
                    Quran Reading with Tajweed
                  </Link>
                </li>
                <li>
                  <Link href="/revert-to-islam" className="text-blue-600">
                    Revert to Islam
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Call to Action
              </h2>
              <p className="text-base text-gray-700 leading-relaxed pt-4">
                Connect with the Quran like never before.{" "}
                <Link href="/get-register" className="text-blue-600 no-underline">
                  📲 Book your free trial class and start understanding the words
                  of Allah ﷻ — word by word.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuranicArabicCourse;
