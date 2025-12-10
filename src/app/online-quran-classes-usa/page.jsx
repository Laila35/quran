import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



export default function OnlineQuranClassesUSA() {
    const breadcrumbData = {
    id: 1,
    name: "1-on-1 Quran Classes in USA | Certified Arab Teachers | New York, Chicago, Houstons",
    link: "/",
  };
  return (
    <>
    <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/usa-quran-classes.png"
    fetchPriority="high"
  />

  <title>1-on-1 Quran Classes in USA | Certified Arab Teachers | New York, Chicago, Houston</title>
  <meta
    name="description"
    content="Top-rated online Quran academy in USA: Master Tajweed, Hifz & Islamic studies with native Arab tutors. Flexible ET/CT/PT timings for all states. Free trial for NYC, Chicago & Houston residents!"
  />
  <meta
    name="keywords"
    content="Quran classes New York, Tajweed course Chicago, Hifz program Houston, Islamic studies USA, Quran for kids California, Female Quran teacher Texas, Quran tafsir course, Arabic Quran recitation"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-usa" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="USA Quran Academy | Al-Azhar Certified Teachers | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Personalized 1-on-1 Quran learning for American Muslims with flexible time zones. Courses include Ijazah preparation, Tajweed mastery, and Quran memorization for all ages."
  />
  <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-usa" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/usa-quran-classes.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="American Muslim family learning Quran online with Egyptian teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Best Online Quran Classes in USA | Free Trial Available"
  />
  <meta
    name="twitter:description"
    content="1-on-1 Quran lessons for US Muslims with native Arabic teachers. Learn proper Tajweed & recitation from Al-Azhar graduates. New York, Chicago, Los Angeles."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/usa-quran-classes.png"
  />

  {/* Structured Data */}
  <Script
    id="jsonld-quran-us"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: "USA Quran Learning Program",
        description: "Comprehensive Islamic education program covering Quran recitation, Tajweed rules, and Ijazah preparation with US time zone scheduling.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          areaServed: ["US"],
          description: "Premier Quran academy serving USA with Al-Azhar certified Arabic tutors"
        },
        educationalLevel: "Beginner to Advanced",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          geographicArea: {
            "@type": "Country",
            name: "United States"
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Online Quran Classes in the USA – Learn Quran at Home with Certified Teachers
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-6">
            <p>
              Looking for trusted online Quran classes in the United States for your kids or yourself?
              At ilmulQuran.com, we offer one-on-one Quran classes online, designed for learners of all ages and backgrounds.
              Whether you live in New York, California, Texas, Illinois, or any US state, our qualified teachers are ready to guide you.
            </p>

            {/* Courses */}
            <div>
              <h2 className="text-xl font-semibold mb-2">📘 Our Courses Include:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Noorani Qaida:</strong> Beginners (Kids & Adults)</li>
                <li><strong>Quran Reading with Tajweed:</strong> All age groups</li>
                <li><strong>Hifz-ul-Quran:</strong> Age 6+</li>
                <li><strong>Quran Translation & Tafseer:</strong> Teens & adults</li>
                <li><strong>Duas & Hadith for Kids:</strong> Ages 5–12</li>
                <li><strong>Revert to Islam Course:</strong> New Muslims in the USA</li>
                <li><strong>Islamic Studies & Salah Training:</strong> Ages 4–16</li>
              </ul>
            </div>

            {/* Teachers */}
            <div>
              <h2 className="text-xl font-semibold mb-2">👨‍🏫 Male & Female Teachers Available</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Fluent in English</li>
                <li>US time zone friendly</li>
                <li>Certified in Tajweed, Hifz, and Islamic Studies</li>
                <li>Professional, friendly, and adab-focused</li>
                <li>You choose your preferred teacher gender</li>
              </ul>
            </div>

            {/* States */}
            <div>
              <h2 className="text-xl font-semibold mb-2">🌍 Cities & States We Serve</h2>
              <p>
                We teach students across the United States:
                New York, California, Texas, Florida, Illinois, New Jersey, Virginia — and all 50 states.
              </p>
            </div>

            {/* Timing */}
            <div>
              <h2 className="text-xl font-semibold mb-2">🕒 Flexible Class Timings – USA Time Zones</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Morning and evening slots available</li>
                <li>Compatible with EST, PST, CST, MST</li>
                <li>Weekdays or weekends – you decide!</li>
                <li>No fixed calendar – adjust anytime</li>
              </ul>
            </div>

            {/* Why Us */}
            <div>
              <h2 className="text-xl font-semibold mb-2">🎓 Why ilmulQuran.com?</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>1-on-1 live online classes</li>
                <li>1000+ students globally</li>
                <li>Privacy-focused: No group sharing</li>
                <li>Easy rescheduling via WhatsApp</li>
                <li>Free PDF books and progress reports</li>
              </ul>
            </div>

            {/* Certificate */}
            <div>
              <h2 className="text-xl font-semibold mb-2">📜 Certificate Included</h2>
              <p>
                Upon course completion, students receive a digital certificate and a full progress evaluation.
              </p>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-xl font-semibold mb-2">💬 Testimonials from USA Students:</h2>
              <blockquote className="border-l-4 border-green-500 pl-4 italic">
                “Our kids love the classes and are now praying daily Alhamdulillah!”
                <br />
                <span className="font-semibold">– Sister Amira (New Jersey)</span>
              </blockquote>
              <blockquote className="border-l-4 border-green-500 pl-4 italic mt-4">
                “I found their Hifz program much better than local options. Very dedicated teachers.”
                <br />
                <span className="font-semibold">– Brother Kareem (Texas)</span>
              </blockquote>
            </div>

        
          </div>

          {/* Right Image */}
          <div className="w-full h-full flex items-start justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/Images/Courses/usa-quran-classes.png"
                alt="Online Quran Classes USA"
                width={500}
                height={500}
                className="rounded-lg shadow-md object-cover"
              />
            </div>

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
}
