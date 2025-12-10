"use client";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";

const FortyHadithsForKids = () => {
  const breadcrumbData = {
    id: 1,
    name: "40 Short Hadiths for Kids – Learn, Memorize & Practice",
    link: "/40-short-hadiths-for-kids",
  };

  return (
    <>
       <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="preload"
        as="image"
        href="/Images/courses/40-hadiths-kids.png"
        fetchPriority="high"
      />

      <title>
        40 Short Hadiths for Kids: Online Classes with Certification
      </title>
      <meta
        name="description"
        content="Interactive online course for kids 5-12: Learn 40 authentic Hadiths from Bukhari & Muslim with Arabic/English explanations. Certified teachers, flexible scheduling, and completion certificate. Start free trial!"
      />
      <meta
        name="keywords"
        content="40 Hadiths for Kids, Online Hadith Classes, Islamic Studies for Children, Hadith Memorization, Kids Islamic Education, Prophet Muhammad Sayings, Islamic Character Building, Online Quran Classes"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href="https://ilmulquran.com/40-short-hadiths-for-kids"
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="40 Authentic Hadiths for Kids - Online Certification Course | ilmulQuran"
      />
      <meta
        property="og:description"
        content="Engaging one-on-one Hadith classes for children aged 5-12 with certified Islamic teachers. Learn Arabic recitation, English meaning & practical application. Free trial available!"
      />
      <meta
        property="og:url"
        content="https://ilmulquran.com/40-short-hadiths-for-kids"
      />
      <meta property="og:site_name" content="ilmulQuran" />
      <meta
        property="og:image"
        content="https://ilmulquran.com/Images/courses/40-hadiths-kids.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Happy children learning Hadiths with online teacher"
      />
      <meta property="og:image:type" content="image/webp" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Online Hadith Classes for Kids (5-12) with Certificate | ilmulQuran"
      />
      <meta
        name="twitter:description"
        content="40 Authentic Hadiths + Practical Application + Flexible Scheduling. UK/US/Canada Teachers. Start Free Trial Today!"
      />
      <meta
        name="twitter:image"
        content="https://ilmulquran.com/Images/OG/40-hadiths-kids.webp"
      />

      {/* Enhanced Schema Markup */}
      <Script
        id="jsonld-hadith-course"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "40 Short Hadiths for Kids Certification Program",
            description:
              "Comprehensive online course teaching 40 authentic Hadiths from Sahih Bukhari and Muslim with Arabic recitation, English translation, and practical life application for children aged 5-12.",
            provider: {
              "@type": "EducationalOrganization",
              name: "ilmulQuran",
              sameAs: "https://ilmulquran.com",
              description:
                "Online Islamic education platform specializing in Quran and Hadith studies for children",
            },
            url: "https://ilmulquran.com/40-short-hadiths-for-kids",
            image:
              "https://ilmulquran.com/Images/courses/40-hadiths-kids.png",
            educationalLevel: "elementary",
            typicalAgeRange: "5-12",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: ["online", "one-on-one"],
              duration: "P3M",
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
                ageRange: "5-12",
              },
              offers: {
                "@type": "Offer",
                category: "free trial",
                url: "https://ilmulquran.com/get-register",
              },
            },
            coursePrerequisites: "Basic understanding of Islam",
            educationalCredentialAwarded:
              "Certificate of Achievement in Hadith Studies",
          }),
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


          {/* Content Column (2/3 width on large screens) */}
<div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-center mb-8 text-[#003366] font-bold text-xl md:text-2xl lg:text-3xl">
                40 Short Hadiths for Kids – Learn, Love & Practice the Sunnah
              </h2>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full">
                  <p className="text-base font-medium mb-4">
                    Help your child build love for Islam through the sayings of the
                    Prophet Muhammad ﷺ. At ilmulQuran.com, our 40 Short Hadiths for
                    Kids course is designed for children ages 5 to 12. We teach
                    authentic Hadiths with Arabic text, English translation, and
                    practical application—so your child not only memorizes, but
                    understands and follows them.
                  </p>

                  <h3 id="what-will-learn" className="text-xl font-bold text-[#003366] pt-3 scroll-mt-24">
                    📘 What Your Child Will Learn:
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 pt-3">
                    <li>40 authentic Hadiths from Bukhari, Muslim, Nawawi</li>
                    <li>Arabic recitation with proper pronunciation</li>
                    <li>English meaning and transliteration</li>
                    <li>Real-life examples to implement each Hadith</li>
                    <li>Weekly revision and practical homework</li>
                    <li>Optional Hadith certificate on completion</li>
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={400}
                    src="/Images/Courses/40-hadiths-kids.png"
                    alt="40 Short Hadiths for Kids"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>



              {/* ... rest of your content remains the same ... */}
              <h3 id="hadith-examples" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🕋 Examples of Hadiths Taught:
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>
                  Arabic: <strong>إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ</strong> —
                  Actions are judged by intentions.
                </li>
                <li>
                  Arabic: <strong>لاَ ضَرَرَ وَلاَ ضِرَارَ</strong> — Do not harm
                  yourself or others.
                </li>
                <li>
                  Arabic: <strong>مَنْ لاَ يَرْحَمْ لاَ يُرْحَمْ</strong> — He who
                  does not show mercy, will not be shown mercy.
                </li>
              </ul>

              <h3 id="teachers" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                👩‍🏫 Teachers:
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Certified male and female Islamic teachers</li>
                <li>Fluent in English and Urdu</li>
                <li>Experience with kids in UK, USA, Canada, etc.</li>
              </ul>

              <h3 id="class-format" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🧒 Class Format:
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>One-on-One Online Sessions</li>
                <li>2 or 3 Days per Week</li>
                <li>Each Class 25–30 Minutes</li>
                <li>Zoom / Skype / Teams Supported</li>
                <li>Worksheets & Printable Posters Included</li>
              </ul>

              <h3 id="certificate" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🎓 Certificate Included:
              </h3>
              <p className="text-base font-medium pt-2">
                Upon completion, your child receives a Certificate of Achievement
                for the full 40 Hadiths.
              </p>

              <h3 id="who-is-for" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🎯 Who Is This Course For?
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Kids aged 5–12</li>
                <li>Families seeking Islamic character education</li>
                <li>Students preparing for Islamic school/madrasa</li>
              </ul>

              <h3 id="availability" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🌍 Available Worldwide:
              </h3>
              <p className="text-base font-medium pt-2">
                UK 🇬🇧 | USA 🇺🇸 | Canada 🇨🇦 | Australia 🇦🇺 | UAE 🇦🇪 | New Zealand 🇳🇿
                | Singapore 🇸🇬 | South Africa 🇿🇦
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">
                📲 Book a Free Trial Class Today
              </h3>
              <p className="text-base font-medium pt-2">
                Let your child memorize and love the Hadiths of our beloved Prophet
                ﷺ.{" "}
                <Link href="/get-register" className="text-blue-600">
                  Try a free class now!
                </Link>
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">
                🔗 Related Courses
              </h3>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>
                  <Link href="/islamic-classes-for-kids" className="text-blue-600">
                    Islamic Classes for Kids
                  </Link>
                </li>
                <li>
                  <Link href="/taleem-ul-islam" className="text-blue-600">
                    Taleem ul Islam
                  </Link>
                </li>
                <li>
                  <Link href="/revert-to-islam" className="text-blue-600">
                    Revert to Islam
                  </Link>
                </li>
              </ul>

              <h3 id="testimonials" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                Student Testimonials
              </h3>

              
              <div className="pt-3">
                      <BonusIslamicLearning />


                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
              
            </div>

            
          </div>
          </div>
      </div>
    </>
  );
};

export default FortyHadithsForKids;