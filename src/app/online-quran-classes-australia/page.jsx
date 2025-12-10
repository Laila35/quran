import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";





const OnlineQuranAustralia = () => {
  const breadcrumbData = {
    id: 3,
    name: "Online Quran Classes in Australia – One-on-One Quran Learning for Kids & Adults",
    link: "/online-quran-classes-australia",
  };

  return (
    <>
     <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/courses/quran-classes-australia.png"
      fetchPriority="high"
    />

    <title>Online Quran Classes in Australia | Certified Teachers</title>
    <meta
      name="description"
      content="Join one-on-one online Quran classes in Australia with male & female teachers. Learn Tajweed, Hifz, Qaida, and Islamic studies for kids & adults. Book your free class now."
    />
    <meta
      name="keywords"
      content="Online Quran Classes Australia, Quran Teachers Australia, Learn Quran Online Australia, Tajweed Classes Sydney, Melbourne Quran Lessons, Islamic Studies for Kids, Quran Memorization Australia, Female Quran Tutor"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-australia" />

    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Online Quran Classes in Australia | Certified Teachers | ilmulQuran"
    />
    <meta
      property="og:description"
      content="Live Quran classes in Australia for all ages. Learn with certified tutors. One-on-one lessons, flexible schedule, free trial class available."
    />
    <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-australia" />
    <meta property="og:site_name" content="ilmulQuran" />
    <meta
      property="og:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-australia.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Australian student learning Quran online with teacher"
    />
    <meta property="og:image:type" content="image/webp" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Online Quran Classes in Australia – Flexible One-on-One Learning"
    />
    <meta
      name="twitter:description"
      content="Learn Quran from certified tutors in Australia. Online, 1-on-1, flexible classes for kids and adults. Free trial available."
    />
    <meta
      name="twitter:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-australia.png"
    />

    {/* Enhanced Schema Markup */}
    <Script
      id="jsonld-quran-course"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Online Quran Classes for Australian Students",
          description: "Comprehensive online Quran learning program covering Tajweed, Hifz, Qaida and Islamic studies with certified teachers for Australian students of all ages.",
          provider: {
            "@type": "EducationalOrganization",
            name: "ilmulQuran",
            sameAs: "https://ilmulquran.com",
            description: "Leading online Quran education platform serving Australian students since 2015"
          },
          url: "https://ilmulquran.com/online-quran-classes-australia",
          image: "https://ilmulquran.com/Images/Courses/online-quran-classes-australia.png",
          educationalLevel: "Beginner to Advanced",
          typicalAgeRange: "5-70",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: ["online", "one-on-one"],
            duration: "P6M",
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "student",
              ageRange: "5-70"
            },
            offers: {
              "@type": "Offer",
              category: "free trial",
              url: "https://ilmulquran.com/get-register"
            }
          },
          coursePrerequisites: "No prior knowledge required",
          educationalCredentialAwarded: "Certificate of Quranic Studies"
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
            Online Quran Classes in Australia – Flexible One-on-One Learning with Certified Teachers
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Want to learn Quran from home in Australia? At ilmulQuran.com, we provide live one-on-one online Quran classes to students across Australia. Whether you live in Sydney, Melbourne, Brisbane, Perth, or Adelaide, our certified teachers make Quran learning easy, effective, and engaging — for kids and adults.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 What We Teach:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Noorani Qaida – Children & new learners</li>
                <li>Quran Reading with Tajweed – Ages 6 to adult</li>
                <li>Hifz-ul-Quran – Kids & teenagers</li>
                <li>Tafseer & Translation – Adults & reverts</li>
                <li>Duas & Hadith for Kids – Age 5+</li>
                <li>Revert to Islam Course – New Muslims in Australia</li>
                <li>Islamic Character & Akhlaaq – Kids & teens</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👨‍🏫 Choose Your Teacher</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Male & female Quran teachers</li>
                <li>Fluent in English and Urdu</li>
                <li>Friendly, qualified, and punctual</li>
                <li>Trained in Australian teaching standards</li>
                <li>Learn at your pace, time & comfort</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Australian Time-Friendly Scheduling</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Morning & evening sessions</li>
                <li>Class slots for AEST, ACST, and AWST</li>
                <li>7-day class availability (including weekends)</li>
                <li>Easy rescheduling when needed</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🌏 Serving All Regions in Australia</h3>
              <p className="pt-2">
                Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Gold Coast, Hobart, Darwin & more
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Certification & Progress Reports</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Get digital completion certificates</li>
                <li>Monthly progress evaluation for kids</li>
                <li>Tajweed feedback & memory tracking</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 What Our Australian Students Say:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“My son completed Qaida in 3 months. His Tajweed is now much better than before!” – Sister Ayesha (Melbourne)</li>
                <li>“I work full-time and take evening Quran classes. Very professional team and easy to communicate.” – Brother Omar (Sydney)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">✅ Why ilmulQuran.com?</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>One-on-One learning only</li>
                <li>Experienced Quran teachers</li>
                <li>Free books and printables</li>
                <li>Trial class before enrollment</li>
                <li>Support on WhatsApp, 24/7</li>
              </ul>

              <p className="text-base font-medium pt-6">
                📲{" "}
                <Link href="/get-register" className="text-blue-600 underline">
                  Book a Free Trial Class Today →
                </Link>
              </p>
            </div>

            {/* Right Side Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-australia.png"
                alt="Online Quran Classes in Australia"
                style={{ borderRadius: "25px" }}
              />
            </div>
          </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
       <BonusIslamicLearning/>                                                               
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>


        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default OnlineQuranAustralia;
