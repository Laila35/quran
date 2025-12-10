import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranSouthAfrica = () => {
  const breadcrumbData = {
    id: 6,
    name: "Online Quran Classes in South Africa – One-on-One Flexible Classes",
    link: "/online-quran-classes-south-africa",
  };

  return (
    <>
    <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/online-quran-classes-south-africa.png"
    fetchPriority="high"
  />

  <title>1-on-1 Online Quran Classes in South Africa | Certified SA Teachers</title>
  <meta
    name="description"
    content="Best online Quran academy for South African Muslims: Master Tajweed, Hifz & Islamic studies with native Arab tutors. Flexible SA-time classes for Cape Town, Johannesburg & Durban residents. Free trial!"
  />
  <meta
    name="keywords"
    content="Quran classes Cape Town, Online Tajweed Johannesburg, Hifz program Durban, Islamic studies Pretoria, Quran for kids South Africa, Female Quran teacher SA, Quran tafsir course, Muslim reverts Quran class"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://ilmulquran.com/online-quran-classes-south-africa"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_ZA" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Certified Quran Teachers for South African Students | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Personalized 1-on-1 Quran learning for SA residents with flexible scheduling. Courses include Tajweed mastery, Quran memorization, and Islamic fundamentals for all ages."
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/online-quran-classes-south-africa"
  />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-south-africa.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="South African family learning Quran online with Arabic teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Flexible Quran Classes in South Africa - Free Trial Available"
  />
  <meta
    name="twitter:description"
    content="1-on-1 online Quran lessons tailored for SA time zones. Learn proper Arabic pronunciation & Tajweed rules from certified Egyptian teachers."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/online-quran-classes-south-africa.png"
  />

  {/* Structured Data */}
  <Script
    id="jsonld-quran-za"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: "South Africa Quran Learning Program",
        description: "Comprehensive online Islamic education covering Quran recitation, Tajweed rules, and memorization techniques with South Africa-friendly scheduling.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          areaServed: ["ZA"],
          description: "Premier online Quran academy serving South Africa with  certified tutors"
        },
        educationalLevel: "Beginner to Advanced",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          geographicArea: {
            "@type": "Country",
            name: "South Africa"
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
            Online Quran Classes in South Africa – Learn the Quran at Home
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Looking for reliable Quran classes in South Africa?  
                Join ilmulQuran.com’s live one-on-one Quran classes from anywhere in South Africa.  
                Our experienced teachers help you or your children learn the Quran with correct Tajweed, memorization, and understanding — all from home.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 Courses We Offer:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>✅ Noorani Qaida – Children & beginners</li>
                <li>✅ Quran Reading (Tajweed) – Teens & adults</li>
                <li>✅ Hifz-ul-Quran – Children & memorization students</li>
                <li>✅ Tafseer & Translation – Adults & reverts</li>
                <li>✅ Islamic Duas & Manners – Kids (5–12)</li>
                <li>✅ New Muslim Program – Converts to Islam in South Africa</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👩‍🏫 Trusted Teachers</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Qualified male and female teachers</li>
                <li>Fluent in English and Urdu</li>
                <li>Friendly, respectful & child-safe teaching methods</li>
                <li>Choose your preferred teacher (gender/focus)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 South Africa-Friendly Schedule</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Classes adjusted for SAST (GMT+2)</li>
                <li>Available morning, afternoon, evening</li>
                <li>Booked around your school or work hours</li>
                <li>Rescheduling is easy via WhatsApp</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📍 Serving Across South Africa:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Johannesburg</li>
                <li>Cape Town</li>
                <li>Durban</li>
                <li>Pretoria</li>
                <li>Port Elizabeth</li>
                <li>and beyond</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 Reviews:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“My son started Qaida and now reads the Quran fluently Alhamdulillah.” – Sister Mariam (Johannesburg)</li>
                <li>“Very easy for working adults. My class is at night after work, and my teacher is excellent.” – Brother Yaseen (Cape Town)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Completion Certificate</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Receive certificate upon finishing the course</li>
                <li>Tajweed improvement reports</li>
                <li>Hifz tracking where applicable</li>
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
                src="/Images/Courses/online-quran-classes-south-africa.png"
                alt="Online Quran Classes in South Africa"
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

export default OnlineQuranSouthAfrica;
