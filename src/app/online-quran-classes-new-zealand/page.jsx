import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranNewZealand = () => {
  const breadcrumbData = {
    id: 7,
    name: "Online Quran Classes in New Zealand – 1-on-1 Quran Learning at Home",
    link: "/online-quran-classes-new-zealand",
  };

  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/online-quran-classes-new-zealand.png"
    fetchPriority="high"
  />

  <title>Online Quran Classes in New Zealand | 1-on-1 Sessions</title>
  <meta
    name="description"
    content="Best online Quran learning platform for NZ Muslims: Learn Tajweed, Hifz & Islamic Studies with native Arab & NZ-based teachers. Flexible timings, female/male instructors. Start with free trial!"
  />
  <meta
    name="keywords"
    content="Quran Classes New Zealand, Online Quran Learning NZ, Tajweed Course Auckland, Islamic Studies Wellington, Quran Tutors Christchurch, Female Quran Teacher NZ, Kids Hifz Program, Muslim Education New Zealand"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-new-zealand" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Quran Academy for New Zealand Students | ilmulQuran"
  />
  <meta
    property="og:description"
    content="1-on-1 online Quran classes for all ages in New Zealand. Certified male & female teachers specializing in Tajweed, Quran memorization, and Arabic pronunciation. Book your free trial now!"
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/online-quran-classes-new-zealand"
  />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-new-zealand.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Happy student in New Zealand learning Quran online with teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Online Quran Classes in New Zealand | Certified Tutors"
  />
  <meta
    name="twitter:description"
    content="Learn Quran from home in NZ with native Arabic speakers. Flexible scheduling, progress tracking, and certificates. Free trial class available!"
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-new-zealand.png"
  />

  {/* Structured Data */}
  <Script
    id="jsonld-quran-nz"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Comprehensive Online Quran Program for New Zealand Students",
        description: "1-on-1 Quran learning covering Tajweed rules, Quranic Arabic, Hifz techniques, and Islamic values with culturally sensitive teaching for New Zealand Muslims.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          description: "Premium online Quran education platform serving New Zealand with certified Islamic teachers"
        },
        url: "https://ilmulquran.com/online-quran-classes-new-zealand",
        image: "https://ilmulquran.com/Images/Courses/online-quran-classes-new-zealand.png",
        educationalLevel: "Beginner to Advanced",
        typicalAgeRange: "5-70",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P6M",
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            geographicArea: {
              "@type": "Country",
              name: "New Zealand"
            }
          },
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulquran.com/get-register"
          }
        },
        coursePrerequisites: "No prior knowledge required",
        educationalCredentialAwarded: "Quran Learning Completion Certificate"
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
            Online Quran Classes in New Zealand – Learn the Quran with Certified Teachers
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Want to learn the Quran from home in New Zealand? ilmulQuran.com offers live online Quran classes with experienced male and female teachers. Whether you're in Auckland, Wellington, Christchurch, or Hamilton, our teachers provide structured Quran learning for kids, teens, adults, and new Muslims.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 Available Courses:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ Noorani Qaida – Kids & new learners</li>
                <li>✅ Quran Reading with Tajweed – Ages 6+</li>
                <li>✅ Hifz-ul-Quran (Memorization) – Dedicated students</li>
                <li>✅ Quran Translation & Tafseer – Teens & adults</li>
                <li>✅ Duas, Manners & Hadith – Young learners</li>
                <li>✅ Revert to Islam Program – New Muslims in NZ</li>
                <li>✅ Islamic Studies & Salah – All ages</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👩‍🏫 Teachers You Can Trust</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Certified male & female teachers</li>
                <li>Fluent in English & Urdu</li>
                <li>Polite, adab-focused instruction</li>
                <li>One-on-one personalized teaching</li>
                <li>You choose teacher type & schedule</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 New Zealand Time Zone (NZST/NZDT) Friendly</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Class times available 7 days a week</li>
                <li>Morning & evening slots</li>
                <li>Designed to fit school & work schedules</li>
                <li>Easy to reschedule on request</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Areas We Serve:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Auckland</li>
                <li>Wellington</li>
                <li>Christchurch</li>
                <li>Hamilton</li>
                <li>Dunedin & all regions</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 What Families in New Zealand Say:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“Alhamdulillah, our 2 kids have learned Surah Yasin and Salah basics in just 2 months.” – Sister Fatima (Auckland)</li>
                <li>“Perfect solution for busy professionals like me. My Quran teacher is always punctual.” – Brother Usman (Wellington)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Extras You’ll Get:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Progress tracking for each student</li>
                <li>Completion certificate (digital)</li>
                <li>Free printable Duas & Surah sheets</li>
                <li>WhatsApp parent updates weekly</li>
              </ul>

              <p className="text-base font-medium pt-6">
                🎁 <strong>Book Your Free Class Now</strong><br />
                👉{" "}
                <Link href="/get-register" className="text-blue-600 underline">
                  Book Free Trial →
                </Link>
              </p>
            </div>

            {/* Right Column Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-new-zealand.png"
                alt="Online Quran Classes in New Zealand"
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

export default OnlineQuranNewZealand;
