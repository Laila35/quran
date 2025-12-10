import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";





const OnlineQuranLondon = () => {
  const breadcrumbData = {
    id: 7,
    name: "Online Quran Classes in London – Personalized 1-on-1 Learning for All Ages",
    link: "/online-quran-classes-london",
  };

  return (
    <>
    
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/Courses/online-quran-classes-london.png"
      fetchPriority="high"
    />

    <title>Online Quran Classes in London | 1-on-1 Zoom Lessons</title>
    <meta
      name="description"
      content="Premium online Quran classes for Londoners: Learn Tajweed, Hifz & Islamic studies with certified UK-based tutors. Flexible scheduling, free trial. Start learning today!"
    />
    <meta
      name="keywords"
      content="Quran Classes London, Online Tajweed UK, Hifz Program East London, Islamic Studies for Kids, Quran Tutor South London, Muslim Convert Classes, Arabic Lessons London, Female Quran Teacher UK"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-london" />

    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="London Quran Classes – 1-on-1 Online Learning with UK Tutors"
    />
    <meta
      property="og:description"
      content="Join London's trusted Quran learning platform: Certified male & female teachers, flexible Zoom classes for all ages. Free trial available."
    />
    <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-london" />
    <meta property="og:site_name" content="ilmulQuran" />
    <meta
      property="og:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-london.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="London family learning Quran online via Zoom with British teacher"
    />
    <meta property="og:image:type" content="image/webp" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Online Quran Classes London – UK Certified Tutors via Zoom"
    />
    <meta
      name="twitter:description"
      content="1-on-1 Quran lessons for London residents: Tajweed, Hifz & Islamic studies with local British teachers. Start free trial today!"
    />
    <meta
      name="twitter:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-london.png"
    />

    {/* Enhanced Schema Markup */}
    <Script
      id="jsonld-quran-london"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "London Online Quran Program",
          description: "Comprehensive Quran education for London residents featuring Tajweed mastery, Hifz program, and Islamic studies with UK-certified tutors.",
          provider: {
            "@type": "EducationalOrganization",
            name: "ilmulQuran",
            sameAs: "https://ilmulquran.com",
            description: "London's premier online Quran education platform since 2015"
          },
          url: "https://ilmulquran.com/online-quran-classes-london",
          image: "https://ilmulquran.com/Images/Courses/online-quran-classes-london.png",
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
          coursePrerequisites: "No prior knowledge required",
          educationalCredentialAwarded: "Certificate of Quranic Proficiency"
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
            Online Quran Classes in London – Personalized 1-on-1 Learning for All Ages
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Looking for flexible and reliable Quran classes in London?  
                ilmulQuran.com offers live one-on-one Quran classes online for students across Greater London.  
                Our certified male and female teachers are experienced in teaching children, adults, and reverts with love, patience, and Islamic adab.  
                Whether you're in East London, West London, Barking, Croydon, Ealing, Wembley, Ilford, or Stratford, we serve every area – all from the comfort of your home.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 What We Teach:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ Noorani Qaida – Kids & Beginners</li>
                <li>✅ Quran Reading with Tajweed – Children & Adults</li>
                <li>✅ Hifz-ul-Quran – Memorization for ages 6+</li>
                <li>✅ Tafseer & Translation – Teens & Reverts</li>
                <li>✅ Duas, Islamic Manners, Hadith – Ages 5–12</li>
                <li>✅ New Muslim Revert Program – Converts to Islam in London</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👨‍🏫 Male & Female Teachers Available</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Fluent in English and Urdu</li>
                <li>Certified in Tajweed, Hifz & Islamic Studies</li>
                <li>Experienced with UK-based learners</li>
                <li>Friendly, respectful, and adab-focused teaching</li>
                <li>Choose male or female teacher as preferred</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Class Timings – London Friendly</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Morning, evening, and weekend options</li>
                <li>Designed for school-going children and working adults</li>
                <li>One-on-one via Zoom, Skype, or Microsoft Teams</li>
                <li>Flexible rescheduling supported</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Areas We Serve in London:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>East London (Ilford, Barking, Newham)</li>
                <li>West London (Ealing, Acton, Hounslow)</li>
                <li>South London (Croydon, Merton, Wandsworth)</li>
                <li>North London (Wembley, Barnet, Finchley)</li>
                <li>Central London & Greater London areas</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Course Benefits</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>One-on-one attention</li>
                <li>Structured progress reports</li>
                <li>Free PDF materials (Qaida, Duas, charts)</li>
                <li>Completion certificate on course finish</li>
                <li>WhatsApp/Email support for parents</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 What Parents Say:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“My daughter enjoys her Quran classes every evening. Teacher is patient and consistent.” – Sister Sumaiyah (East London)</li>
                <li>“I’m a revert and found the Tajweed course very helpful. I can now recite with confidence.” – Brother Yusuf (West London)</li>
              </ul>

              <p className="text-base font-medium pt-6">
                📲 <strong>Book a Free Trial Class Today</strong><br />
                👉{" "}
                <Link href="/get-register" className="text-blue-600 underline">
                  Book Free Trial Now →
                </Link>
              </p>
            </div>

            {/* Right Column Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-london.png"
                alt="Online Quran Classes in London"
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

export default OnlineQuranLondon;
