import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";





const OnlineQuranToronto = () => {
  const breadcrumbData = {
    id: 9,
    name: "Online Quran Classes in Toronto – One-on-One Learning for All Ages",
    link: "/online-quran-classes-toronto",
  };

  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/online-quran-classes-toronto.png"
    fetchPriority="high"
  />

  <title>1-on-1 Quran Classes in Toronto | Certified Tajweed & Hifz Teachers</title>
  <meta
    name="description"
    content="Best online Quran academy in GTA: Learn Tajweed, Hifz & Islamic studies with native Arab tutors. Flexible ET time slots for Toronto, Mississauga & Brampton residents. Free trial!"
  />
  <meta
    name="keywords"
    content="Quran classes Toronto, Tajweed course GTA, Hifz program Mississauga, Islamic studies Brampton, Quran for kids Toronto, Female Quran teacher Scarborough, Quran tafsir course, Arabic pronunciation classes"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://ilmulquran.com/online-quran-classes-toronto"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_CA" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Toronto Quran Academy | Certified Arab Teachers | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Personalized 1-on-1 Quran learning for Toronto students with ET time zone scheduling. Courses include Tajweed mastery, Quran memorization, and Islamic fundamentals for all ages."
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/online-quran-classes-toronto"
  />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-toronto.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Toronto family learning Quran online with Egyptian teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Flexible Quran Classes in Toronto | Free Trial Available"
  />
  <meta
    name="twitter:description"
    content="1-on-1 online Quran lessons for GTA residents. Master Arabic pronunciation & Tajweed rules with  certified teachers in Eastern Time zone."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-toronto.png"
  />

  {/* Structured Data */}
  <Script
    id="jsonld-quran-to"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: "Toronto Quran Learning Program",
        description: "Comprehensive Islamic education covering Quran recitation, Tajweed rules, and memorization techniques with Toronto-friendly scheduling.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          areaServed: ["Greater Toronto Area"],
          description: "Premier Quran academy serving Toronto with  certified tutors"
        },
        educationalLevel: "Beginner to Advanced",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          geographicArea: {
            "@type": "City",
            name: "Toronto"
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
          <h1 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
            Online Quran Classes in Toronto – One-on-One Learning for All Ages
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Looking for reliable and flexible Quran classes in Toronto?  
                At ilmulQuran.com, we provide personalized online Quran classes for students of all ages in Toronto.  
                Our certified teachers help kids, teens, adults, and new Muslims connect with the Quran through one-on-one learning on Zoom, Skype, or Microsoft Teams.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 Our Courses Include:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ Noorani Qaida – Kids & beginners</li>
                <li>✅ Quran Reading with Tajweed – All age groups</li>
                <li>✅ Hifz-ul-Quran – Ages 6+</li>
                <li>✅ Quran Translation & Tafseer – Adults & teens</li>
                <li>✅ Islamic Duas & Hadith – Children</li>
                <li>✅ Revert to Islam Program – New Muslims in Toronto</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👨‍🏫 Experienced Teachers</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Male and female teachers</li>
                <li>Fluent in English & Urdu</li>
                <li>Trained in Canadian-style education</li>
                <li>Adab-focused teaching with love and patience</li>
                <li>You choose your preferred teacher</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Toronto-Friendly Timings (EST)</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Flexible slots for school and work routines</li>
                <li>Morning, evening, and weekend classes available</li>
                <li>Class duration: 25–30 mins (1-on-1)</li>
                <li>Easy rescheduling through WhatsApp or Email</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Serving Greater Toronto Area (GTA):</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Scarborough</li>
                <li>Mississauga</li>
                <li>Brampton</li>
                <li>North York</li>
                <li>Etobicoke</li>
                <li>Markham & surrounding regions</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Course Benefits</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>1-on-1 classes for focused progress</li>
                <li>Digital completion certificate</li>
                <li>Weekly parent updates</li>
                <li>Free PDFs: Qaida, Duas, posters, and worksheets</li>
                <li>Progress reports every 4–6 weeks</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 Reviews from Toronto Families:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“Very pleased with my son’s progress. His Tajweed is improving every week.” – Sister Hafsa (Mississauga)</li>
                <li>“I take classes after work at night. The flexibility is amazing. May Allah reward the teachers.” – Brother Imran (Scarborough)</li>
              </ul>

              <p className="text-base font-medium pt-6">
                📲 <strong>Book a Free Trial Class Today</strong><br />
                👉{" "}
                <Link href="/get-register" className="text-blue-600 underline">
                  Book Free Trial Now →
                </Link>
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-toronto.png"
                alt="Online Quran Classes in Toronto"
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
      
    </>
  );
};

export default OnlineQuranToronto;
