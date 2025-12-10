import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranUAE = () => {
  const breadcrumbData = {
    id: 3,
    name: "Online Quran Classes in UAE – 1-on-1 Learning with Certified Teachers",
    link: "/online-quran-classes-uae",
  };

  return (
    <>
    <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/online-quran-classes-uae.png"
    fetchPriority="high"
  />

  <title>1-on-1 Quran Classes in UAE | Certified Arab Teachers | Dubai, Abu Dhabi, Sharjah</title>
  <meta
    name="description"
    content="Top-rated online Quran academy in UAE: Master Tajweed, Hifz & Islamic studies with native Arab tutors. Flexible GST timings for Dubai, Abu Dhabi & Sharjah residents. Free trial!"
  />
  <meta
    name="keywords"
    content="Quran classes Dubai, Tajweed course Abu Dhabi, Hifz program Sharjah, Islamic studies UAE, Quran for kids Ajman, Female Quran teacher Al Ain, Quran tafsir course, Arabic Quran recitation"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-uae" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_AE" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="UAE Quran Academy | Al-Azhar Certified Teachers | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Personalized 1-on-1 Quran learning for UAE residents with GST time zone scheduling. Courses include Ijazah preparation, Tajweed mastery, and Quran memorization for all ages."
  />
  <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-uae" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-uae.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Dubai family learning Quran online with Egyptian teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Online Quran Classes in UAE | Free Trial Available"
  />
  <meta
    name="twitter:description"
    content="1-on-1 Quran lessons for UAE residents with native Arabic teachers. Learn Tajweed rules & proper recitation from Al-Azhar graduates. Dubai, Abu Dhabi, Sharjah."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-uae.png"
  />

  {/* Structured Data */}
  <Script
    id="jsonld-quran-uae"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: "UAE Quran Learning Program",
        description: "Comprehensive Islamic education program covering Quran recitation, Tajweed rules, and Ijazah preparation with UAE-friendly scheduling.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          areaServed: ["AE"],
          description: "Premier Quran academy serving UAE with Al-Azhar certified Arabic tutors"
        },
        educationalLevel: "Beginner to Advanced",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          geographicArea: {
            "@type": "Country",
            name: "United Arab Emirates"
          }
        },
        offers: {
          "@type": "Offer",
          category: "free trial class",
          url: "https://ilmulquran.com/get-regsiter"
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
            Online Quran Classes in the UAE – Learn from Home with Certified Teachers
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                At ilmulQuran.com, we provide personalized one-on-one Quran learning to students across the United Arab Emirates. Whether you're in Dubai, Abu Dhabi, Sharjah, or Ajman, we have flexible online classes tailored to your level, age, and time.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 Courses Available:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Noorani Qaida – Young beginners & adults</li>
                <li>Quran Reading with Tajweed – All ages</li>
                <li>Quran Memorization (Hifz) – Kids & teens</li>
                <li>Tafseer & Translation – Adults & reverts</li>
                <li>Duas & Islamic Manners – Children (5–12)</li>
                <li>Revert to Islam Program – New Muslims in the UAE</li>
                <li>Taleem-ul-Islam / Islamic Studies – General learners</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👩‍🏫 Our Teachers:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Male and female teachers available</li>
                <li>Certified in Tajweed, Hifz & Islamic knowledge</li>
                <li>Fluent in English, Urdu, and Arabic (basic)</li>
                <li>Professional & friendly with kids and adults</li>
                <li>Choose your preferred teacher</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🌆 Serving All Emirates:</h3>
              <p className="pt-2">
                Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah & Umm Al Quwain.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Flexible Timings – UAE Time Zone (GST):</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>7 days a week – morning, afternoon & evening</li>
                <li>Ideal for school children & working adults</li>
                <li>1-on-1 classes via Zoom, Skype, or Teams</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Why Choose ilmulQuran.com?</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>One-on-one personalized learning</li>
                <li>100% online – learn from home</li>
                <li>Certified teachers with global experience</li>
                <li>Structured curriculum + monthly reports</li>
                <li>Free printable books, charts & certificates</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 What Our UAE Students Say:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“We were searching for a female teacher in Sharjah – Alhamdulillah found the best through ilmulQuran.” – Sister Fatima (Sharjah)</li>
                <li>“The Hifz course is structured and well-planned. My son memorized Surah Yaseen perfectly.” – Brother Hammad (Dubai)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📜 Certificate & Progress Tracking:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Certificate issued after each course</li>
                <li>Monthly progress reports for kids</li>
                <li>Tajweed accuracy evaluation included</li>
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
                src="/Images/Courses/online-quran-classes-uae.png"
                alt="Online Quran Classes in UAE"
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

export default OnlineQuranUAE;
