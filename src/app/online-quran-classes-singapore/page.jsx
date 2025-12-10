import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";


const OnlineQuranSingapore = () => {
  const breadcrumbData = {
    id: 5,
    name: "Online Quran Classes in Singapore – One-on-One Learning from Home",
    link: "/online-quran-classes-singapore",
  };

  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/online-quran-classes-singapore.png"
    fetchPriority="high"
  />

  <title>Online Quran Classes in Singapore | 1-on-1 Tajweed & Hifz Program</title>
  <meta
    name="description"
    content="Best online Quran academy for Singapore Muslims: Learn Tajweed, Hifz & Islamic studies with native Arab tutors. Flexible Singapore-time classes for kids & adults. Start free trial!"
  />
  <meta
    name="keywords"
    content="Quran classes Singapore, Online Tajweed course SG, Hifz program Singapore, Islamic studies for kids SG, Female Quran teacher Singapore, Noorani Qaida lessons, Quran tafsir course SG, Muslim reverts Quran class"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://ilmulquran.com/online-quran-classes-singapore"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_SG" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Certified Quran Teachers for Singapore Students | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Personalized 1-on-1 Quran learning for Singapore residents with SG-time friendly scheduling. Courses include Tajweed mastery, Quran memorization, and Islamic fundamentals."
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/online-quran-classes-singapore"
  />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-singapore.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Singapore family learning Quran online with Arabic teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Flexible Quran Learning for Singapore - Free Trial Available"
  />
  <meta
    name="twitter:description"
    content="1-on-1 online Quran classes in Singapore time zones. Master Arabic pronunciation & Tajweed rules with certified Egyptian teachers."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-singapore.png"
  />

  {/* Structured Data */}
  <Script
    id="jsonld-quran-sg"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: "Singapore Quran Learning Program",
        description: "Comprehensive online Islamic education covering Quran recitation, Tajweed rules, and memorization techniques with Singapore-time compatible scheduling.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          areaServed: ["SG"],
          description: "Premier online Quran academy serving Singapore with  certified tutors"
        },
        educationalLevel: "Beginner to Advanced",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          geographicArea: {
            "@type": "Country",
            name: "Singapore"
          }
        },
        offers: {
          "@type": "Offer",
          category: "free trial class",
          url: "https://ilmulquran.com/get-register"
        }
      })
    }}
  />
</head>

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



<div className="w-full lg:w-2/3 order-2 lg:order-1">
        <div className="bg-gray-100 rounded-lg shadow-lg p-8">
          <h1 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
            Online Quran Classes in Singapore – Certified Teachers | Live 1-on-1 Classes
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                At ilmulQuran.com, we provide trusted online Quran classes in Singapore with male and female teachers,
                fully aligned with Islamic adab and the needs of modern learners. Whether your child is just beginning or you're a
                working adult seeking Quran improvement — we tailor the classes to your level, schedule, and goals.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 What’s Included:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Noorani Qaida – Kids & new learners</li>
                <li>Quran Reading with Tajweed – Kids & adults</li>
                <li>Hifz-ul-Quran (Memorization) – Ages 6+</li>
                <li>Translation & Tafseer – Teens & reverts</li>
                <li>Islamic Manners & Duas – Ages 5–12</li>
                <li>Revert to Islam Course – New Muslims in Singapore</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👨‍🏫 Why ilmulQuran for Singapore?</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>1-on-1 online classes via Zoom, Skype, or Teams</li>
                <li>Teachers fluent in English and familiar with local needs</li>
                <li>Male or female instructors – your choice</li>
                <li>Flexible timings for Singapore Time (SGT)</li>
                <li>Printable materials + digital certificate</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Timings for Singapore Students:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Morning & evening availability</li>
                <li>Flexible schedule for school & work</li>
                <li>7 days a week classes with rescheduling option</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 Student Feedback:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“Very easy process, helpful teachers, and my daughter loves her Quran sessions.” – Sister Hana (Singapore)</li>
                <li>“They helped me build Tajweed from scratch as a revert. Highly recommend.” – Brother Abdul Rahman (Singapore)</li>
              </ul>

              <p className="text-base font-medium pt-6">
                🎯 <strong>Start Your Free Trial Today</strong><br />
                📲 <Link href="/get-register" className="text-blue-600 underline">Click here to schedule your free class →</Link>
              </p>
            </div>

            {/* Right Column Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-singapore.png"
                alt="Online Quran Classes in Singapore"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>
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

export default OnlineQuranSingapore;
