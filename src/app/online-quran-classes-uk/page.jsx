import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranUK = () => {
  const breadcrumbData = {
    id: 2,
    name: "Online Quran Classes in the UK – One-on-One Learning for All Ages",
    link: "/online-quran-classes-uk",
  };

  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/online-quran-classes-uk.png"
    fetchPriority="high"
  />

  <title>1-on-1 Quran Classes in UK | Certified Arab Teachers | London, Birmingham, Manchester</title>
  <meta
    name="description"
    content="Top-rated online Quran academy in UK: Master Tajweed, Hifz & Islamic studies with native Arab tutors. Flexible GMT timings for London, Birmingham & Manchester residents. Free trial!"
  />
  <meta
    name="keywords"
    content="Quran classes London, Tajweed course Birmingham, Hifz program Manchester, Islamic studies UK, Quran for kids Leeds, Female Quran teacher Glasgow, Quran tafsir course, Arabic Quran recitation"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-uk" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="UK Quran Academy | Al-Azhar Certified Teachers | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Personalized 1-on-1 Quran learning for UK residents with GMT scheduling. Courses include Ijazah preparation, Tajweed mastery, and Quran memorization for children and adults."
  />
  <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-uk" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-uk.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="British Muslim family learning Quran online with Egyptian teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Online Quran Classes in UK | Free Trial Available"
  />
  <meta
    name="twitter:description"
    content="1-on-1 Quran lessons for UK Muslims with native Arabic teachers. Learn proper Tajweed & recitation from Al-Azhar graduates. London, Birmingham, Manchester."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-uk.png"
  />

  {/* Structured Data */}
  <Script
    id="jsonld-quran-uk"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: "UK Quran Learning Programme",
        description: "Comprehensive Islamic education programme covering Quran recitation, Tajweed rules, and Ijazah preparation with UK-friendly scheduling.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          areaServed: ["GB"],
          description: "Premier Quran academy serving UK with Al-Azhar certified Arabic tutors"
        },
        educationalLevel: "Beginner to Advanced",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          geographicArea: {
            "@type": "Country",
            name: "United Kingdom"
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
            Online Quran Classes in the UK – Learn from Certified Teachers at Home
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                At ilmulQuran.com, we offer live one-on-one online Quran classes across the UK. From kids to adults and new Muslims, we provide structured learning via Zoom, Skype, or Teams.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📚 Courses We Offer:</h3>
              <ul className="list-disc ml-6 space-y-1 pt-2">
                <li>Noorani Qaida – For kids & beginners</li>
                <li>Quran Reading with Tajweed – For all ages</li>
                <li>Hifz-ul-Quran – Ages 6+</li>
                <li>Quran Translation & Tafseer – Teenagers & adults</li>
                <li>Islamic Studies & Daily Duas – Ages 5–12</li>
                <li>40 Hadiths for Kids – Ages 5–12</li>
                <li>Revert to Islam Course – For new Muslims in the UK</li>
                <li>Taleem ul Islam – Full foundation course</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🧕 Male & Female Teachers:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Fluent in English & Urdu</li>
                <li>Experienced with UK students</li>
                <li>Friendly, certified & trustworthy</li>
                <li>Choose your preferred teacher's gender</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Serving All Over the UK:</h3>
              <p className="pt-2">
                London, Birmingham, Manchester, Bradford, Leicester, Leeds, Luton, Glasgow & more.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Flexible Class Timings</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>7 days a week – morning to evening slots</li>
                <li>Perfect for busy school/work schedules</li>
                <li>1-on-1 focused learning</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Certification</h3>
              <p className="pt-2">
                Students receive a digital certificate and progress report after completing each course.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 Student Reviews</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“My son completed Noorani Qaida in 3 months!” – Fatima, London</li>
                <li>“As a revert, I finally feel confident in my Salah.” – Ayesha, Manchester</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎯 Why Choose ilmulQuran.com?</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Trusted by 1000+ families in the UK</li>
                <li>1-on-1 classes only (no groups)</li>
                <li>Free trial & affordable monthly plans</li>
                <li>Support via WhatsApp & Email</li>
                <li>Safe learning with privacy & monitoring</li>
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
                src="/Images/Courses/online-quran-classes-uk.png"
                alt="Online Quran Classes in UK"
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

export default OnlineQuranUK;
