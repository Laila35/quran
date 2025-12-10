import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranDubai = () => {
  const breadcrumbData = {
    id: 11,
    name: "Online Quran Classes in Dubai – Personalized One-on-One Learning from Home",
    link: "/online-quran-classes-dubai",
  };

  return (
    <>
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/Courses/online-quran-classes-dubai.png"
      fetchPriority="high"
    />

    <title>Online Quran Classes in Dubai 1-on-1 Zoom Sessions with Certified Tutors</title>
    <meta
      name="description"
      content="Premium online Quran classes in Dubai & UAE: Learn Tajweed, Hifz, Qaida & Islamic studies via Zoom. Certified Arab teachers, flexible scheduling, free trial. Start learning today!"
    />
    <meta
      name="keywords"
      content="Quran Classes Dubai, Online Tajweed UAE, Hifz Program Dubai, Islamic Studies Abu Dhabi, Quran for Kids Sharjah, Arabic Classes Dubai, Female Quran Teacher UAE, Zoom Quran Lessons"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-dubai" />

    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Online Quran Classes in Dubai – 1-on-1 Zoom Sessions with Certified Tutors"
    />
    <meta
      property="og:description"
      content="Premium Quran education for Dubai residents: Learn Tajweed, Hifz & Islamic studies via Zoom with certified Arab teachers. Free trial class available."
    />
    <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-dubai" />
    <meta property="og:site_name" content="ilmulQuran" />
    <meta
      property="og:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-dubai.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Dubai family learning Quran online via Zoom with Arab teacher"
    />
    <meta property="og:image:type" content="image/webp" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Online Quran Classes Dubai – Certified Arab Teachers via Zoom"
    />
    <meta
      name="twitter:description"
      content="1-on-1 Quran learning for Dubai residents: Tajweed, Hifz & Islamic studies with native Arabic tutors. Start free trial today!"
    />
    <meta
      name="twitter:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-dubai.png"
    />

    {/* Enhanced Schema Markup */}
    <Script
      id="jsonld-quran-dubai"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Dubai Online Quran Learning Program",
          description: "Comprehensive Quran education for UAE residents featuring Tajweed mastery, Hifz program, and Islamic studies with certified Arab teachers via Zoom.",
          provider: {
            "@type": "EducationalOrganization",
            name: "ilmulQuran",
            sameAs: "https://ilmulquran.com",
            description: "Premium online Quran education platform serving UAE residents since 2015"
          },
          url: "https://ilmulquran.com/online-quran-classes-dubai",
          image: "https://ilmulquran.com/Images/Courses/online-quran-classes-dubai.png",
          educationalLevel: "Beginner to Advanced",
          typicalAgeRange: "5-65",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: ["online", "one-on-one"],
            duration: "P12M",
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
          coursePrerequisites: "Basic Arabic reading skills",
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
          <h1 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
            Online Quran Classes in Dubai – Personalized One-on-One Learning from Home
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Need reliable Quran classes in Dubai with a flexible schedule?  
                ilmulQuran.com offers live one-on-one Quran learning online for families and individuals living in Dubai and across the UAE.  
                We provide lessons for children, adults, and new Muslims with certified male and female teachers, fully aligned with Islamic adab and professional standards.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 What You’ll Learn:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ Noorani Qaida – Beginners & kids aged 4+</li>
                <li>✅ Quran with Tajweed – Kids, teens, adults</li>
                <li>✅ Hifz-ul-Quran – Full or partial memorization</li>
                <li>✅ Quran Translation & Tafseer – Adults, reverts</li>
                <li>✅ Duas & Islamic Manners – Children aged 5–12</li>
                <li>✅ Revert to Islam Program – Converts in the UAE</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👨‍🏫 Our Teachers:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Certified male & female teachers</li>
                <li>Fluent in English and Urdu</li>
                <li>Experienced with Dubai-based learners</li>
                <li>Available for custom scheduling</li>
                <li>Friendly, patient, and professional</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Flexible Timings in Gulf Standard Time (GST)</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Classes available 7 days a week</li>
                <li>Morning, afternoon, and evening slots</li>
                <li>One-on-one teaching only – no groups</li>
                <li>Learn via Zoom, Skype, or Microsoft Teams</li>
                <li>Rescheduling available upon request</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Areas We Serve in Dubai:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Deira</li>
                <li>Bur Dubai</li>
                <li>Jumeirah</li>
                <li>Al Barsha</li>
                <li>Dubai Marina</li>
                <li>International City</li>
                <li>Al Nahda</li>
                <li>and all surrounding areas</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Benefits of Our Online Quran Classes:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>100% privacy and personal learning</li>
                <li>Monthly progress reports for kids</li>
                <li>Printable Qaida, Duas, flashcards & more</li>
                <li>Digital certificate on course completion</li>
                <li>Easy communication with admin & support</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 What Dubai Students Say:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“Our son finished Noorani Qaida in 3 months and is now reading Quran with proper Tajweed.” – Sister Fatima (Dubai Marina)</li>
                <li>“I work full-time and take classes at night. Very punctual and respectful teacher.” – Brother Ahmed (Bur Dubai)</li>
              </ul>

              <p className="text-base font-medium pt-6">
                📲 <strong>Book a Free Trial Class Today</strong><br />
                Discover the difference with ilmulQuran.com. Start with a free, no-obligation trial class from the comfort of your home in Dubai.<br />
                👉{" "}
                <Link href="/get-register" className="text-blue-600 underline">
                  Click Here to Book Free Trial →
                </Link>
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-dubai.png"
                alt="Online Quran Classes in Dubai"
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

export default OnlineQuranDubai;
