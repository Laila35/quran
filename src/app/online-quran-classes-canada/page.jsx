import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranCanada = () => {
  const breadcrumbData = {
    id: 4,
    name: "Online Quran Classes in Canada – Learn Quran with Live Certified Teachers",
    link: "/online-quran-classes-canada",
  };

  return (
    <>
      <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/Courses/online-quran-classes-canada.png"
      fetchPriority="high"
    />

    <title>Online Quran Classes in Canada One-on-One Tajweed & Hifz Learning</title>
    <meta
      name="description"
      content="Get personalized online Quran classes in Canada for kids and adults. Learn Qaida, Tajweed, Hifz, Tafseer, Duas & more. Certified teachers. Free trial class available."
    />
    <meta
      name="keywords"
      content="Quran Classes Canada, Online Tajweed Canada, Hifz Program Toronto, Quran for Kids Vancouver, Islamic Studies Montreal, Arabic Classes Calgary, Muslim Education Ottawa, Female Quran Teacher Canada"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-canada" />

    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Online Quran Classes in Canada | One-on-One Tajweed & Hifz Learning"
    />
    <meta
      property="og:description"
      content="Live one-on-one Quran classes in Canada with certified teachers. Flexible scheduling. Learn Qaida, Tajweed, Hifz & more. Free trial included."
    />
    <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-canada" />
    <meta property="og:site_name" content="ilmulQuran" />
    <meta
      property="og:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-canada.png"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Canadian family learning Quran online with teacher"
    />
    <meta property="og:image:type" content="image/webp" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Online Quran Classes in Canada – Live One-on-One Learning for All Ages"
    />
    <meta
      name="twitter:description"
      content="Personalized online Quran lessons for Canadians. Learn from home with certified male & female tutors. Book your free trial class today."
    />
    <meta
      name="twitter:image"
      content="https://ilmulquran.com/Images/Courses/online-quran-classes-canada.png"
    />

    {/* Enhanced Schema Markup */}
    <Script
      id="jsonld-quran-canada"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Canadian Online Quran Learning Program",
          description: "Comprehensive Quran education for Canadian residents featuring Tajweed mastery, Hifz program, and Islamic foundation studies with certified native tutors.",
          provider: {
            "@type": "EducationalOrganization",
            name: "ilmulQuran",
            sameAs: "https://ilmulquran.com",
            description: "Premium online Quran education platform serving Canadian Muslims since 2015"
          },
          url: "https://ilmulquran.com/online-quran-classes-canada",
          image: "https://ilmulquran.com/Images/Courses/online-quran-classes-canada.png",
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
          coursePrerequisites: "No prior experience needed",
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
            Online Quran Classes in Canada – Live One-on-One Learning for All Ages
          </h1>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <p className="text-base font-medium mb-4">
                Looking for flexible and reliable Quran classes in Canada? At ilmulQuran.com, we offer live one-on-one Quran classes online with certified male and female teachers. Whether you're in Toronto, Vancouver, Calgary, or Montreal, we’re here to help you or your children connect with the Quran with love and ease.
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-4">📘 Our Courses Include:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Noorani Qaida – Kids & beginners</li>
                <li>Quran Reading with Tajweed – Children & adults</li>
                <li>Hifz-ul-Quran (Memorization) – Ages 6+</li>
                <li>Quran Translation & Tafseer – Teens & reverts</li>
                <li>Daily Duas & Hadith – Kids 5–12</li>
                <li>Revert to Islam Program – New Muslims in Canada</li>
                <li>Islamic Studies + Akhlaaq – All ages</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">👩‍🏫 Certified Male & Female Teachers</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Fluent in English and Urdu</li>
                <li>Polite, professional, and patient</li>
                <li>Adapted to Canadian schooling mindset</li>
                <li>You choose a male or female teacher</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🌎 Areas We Serve in Canada</h3>
              <p className="pt-2">
                Ontario: Toronto, Mississauga, Ottawa<br/>
                Alberta: Calgary, Edmonton<br/>
                British Columbia: Vancouver, Surrey<br/>
                Quebec: Montreal, Laval<br/>
                And across all provinces and territories
              </p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🕒 Flexible Timings in Canadian Time Zones</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>Morning, evening & weekend classes</li>
                <li>Support for PST, MST, CST, EST</li>
                <li>Parents choose class times that suit their schedule</li>
                <li>Rescheduling is simple and flexible</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">🎓 Why Choose ilmulQuran.com?</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>1-on-1 learning experience</li>
                <li>Full privacy & custom pace</li>
                <li>Free books & learning material</li>
                <li>Weekly reviews & monthly reports</li>
                <li>Easy communication via WhatsApp</li>
              </ul>

              <h3 className="text-xl font-bold text-[#003366] pt-6">📜 Certification Provided</h3>
              <p className="pt-2">Students receive a course completion certificate along with detailed feedback on Tajweed, memorization, and behavior.</p>

              <h3 className="text-xl font-bold text-[#003366] pt-6">💬 What Canadian Families Say:</h3>
              <ul className="list-disc ml-6 pt-2 space-y-1">
                <li>“My daughter loves the teacher. The classes are interactive and gentle.” – Sister Nabila (Vancouver)</li>
                <li>“I started as a new Muslim. Their beginner course helped me learn Salah and basic Quran. Alhamdulillah!” – Brother Adam (Toronto)</li>
              </ul>

              <p className="text-base font-medium pt-6">
                ✅ Book a Free Trial Now <br/>
                📲 <Link href="/get-register" className="text-blue-600 underline">Book your free online Quran class today →</Link>
              </p>
            </div>

            {/* Right Column Image */}
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/online-quran-classes-canada.png"
                alt="Online Quran Classes in Canada"
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

export default OnlineQuranCanada;
