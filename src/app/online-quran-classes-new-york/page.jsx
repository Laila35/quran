import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";


const OnlineQuranNewYork = () => {
  const breadcrumbData = {
    id: 8,
    name: "Online Quran Classes in New York – One-on-One Lessons for Kids & Adults",
    link: "/online-quran-classes-new-york",
  };

  return (
    <>
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/courses/quran-classes-new-york.webp"
      fetchPriority="high"
    />

    <title>Online Quran Classes in NYC | 1-on-1 Zoom Lessons</title>
    <meta
      name="description"
      content="Join New York's premier online Quran classes: Learn Tajweed, Hifz & Islamic studies with certified local tutors. Flexible scheduling, free trial. Start learning today!"
    />
    <meta
      name="keywords"
      content="Quran Classes NYC, Tajweed Lessons Manhattan, Hifz Program Brooklyn, Islamic Studies Queens, Quran Tutor Bronx, Muslim Convert Classes NYC, Arabic Lessons Staten Island, Female Quran Teacher New York"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-new-york" />

    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="NYC Quran Classes – 1-on-1 Online Learning with Local Tutors"
    />
    <meta
      property="og:description"
      content="Premium Quran education for New Yorkers: Certified teachers, flexible Zoom classes for all ages. Free trial available."
    />
    <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-new-york" />
    <meta property="og:site_name" content="ilmulQuran" />
    <meta
      property="og:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-new-york.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="New York family learning Quran online via Zoom with local teacher"
    />
    <meta property="og:image:type" content="image/webp" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Online Quran Classes NYC – Certified Local Tutors"
    />
    <meta
      name="twitter:description"
      content="1-on-1 Quran lessons for New Yorkers: Tajweed, Hifz & Islamic studies with NYC-based teachers. Start free trial today!"
    />
    <meta
      name="twitter:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-new-york.png"
    />

    {/* Enhanced Schema Markup */}
    <Script
      id="jsonld-quran-nyc"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "New York Online Quran Program",
          description: "Comprehensive Quran education for NYC residents featuring Tajweed mastery, Hifz program, and Islamic studies with locally-certified tutors.",
          provider: {
            "@type": "EducationalOrganization",
            name: "ilmulQuran",
            sameAs: "https://ilmulquran.com",
            description: "New York's trusted online Quran education platform since 2012"
          },
          url: "https://ilmulquran.com/online-quran-classes-new-york",
          image: "https://ilmulquran.com/Images/Courses/online-quran-classes-new-york.png",
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
          coursePrerequisites: "Basic English understanding",
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
          <h1 className="text-center mb-10 text-[#003366] font-bold text-lg md:text-2xl lg:text-3xl">
            Online Quran Classes in New York – One-on-One Lessons for Kids & Adults
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Looking for reliable Quran classes in New York?  
                At ilmulQuran.com, we offer personalized one-on-one online Quran classes to students across New York City and surrounding boroughs.  
                Our classes are conducted by certified male and female teachers with expertise in Tajweed, Hifz, and Islamic Studies.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 What We Teach:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ Noorani Qaida – Kids and beginners</li>
                <li>✅ Quran with Tajweed – Kids, teens, adults</li>
                <li>✅ Hifz-ul-Quran – Ages 6+</li>
                <li>✅ Quran Translation & Tafseer – Adults & new Muslims</li>
                <li>✅ Islamic Duas & Manners – Kids aged 5–12</li>
                <li>✅ New Muslim Program – Converts in NYC</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🧑‍🏫 Meet Your Teachers</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Fluent in English and Urdu</li>
                <li>Male & female Quran tutors available</li>
                <li>Understand the learning style of American children</li>
                <li>Friendly, professional, and punctual</li>
                <li>You choose your teacher gender and schedule</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 NY-Based Flexible Class Timings</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Works with EST/EDT time zone</li>
                <li>Morning, after-school, and evening options</li>
                <li>Weekend slots available</li>
                <li>All classes conducted via Zoom, Skype, or Teams</li>
                <li>Easy rescheduling via WhatsApp</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Areas We Serve in New York:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Brooklyn</li>
                <li>Queens</li>
                <li>Manhattan</li>
                <li>The Bronx</li>
                <li>Staten Island</li>
                <li>Long Island & upstate areas</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Why Families in NYC Choose ilmulQuran</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>One-on-one attention</li>
                <li>Certificates of completion</li>
                <li>Progress reports for parents</li>
                <li>Free printable Qaida, Duas & flashcards</li>
                <li>Affordable monthly plans</li>
                <li>Trial class before commitment</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 What New Yorkers Say:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“My son memorized 6 Surahs with ilmulQuran in 3 months. Very happy Alhamdulillah.” – Sister Layla (Queens, NY)</li>
                <li>“As a revert, the classes gave me confidence to pray and read Quran. May Allah reward them.” – Brother Khalid (Brooklyn, NY)</li>
              </ul>

              <p className="text-base font-medium pt-6">
                📲 <strong>Book Your Free Trial Class Today</strong><br />
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
                src="/Images/Courses/online-quran-classes-new-york.png"
                alt="Online Quran Classes in New York"
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

export default OnlineQuranNewYork;
