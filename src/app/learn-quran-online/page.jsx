import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";




const LearnQuranOnline = () => {
  const breadcrumbData = {
    id: 2,
    name: "Learn Quran Online - One-on-One Lessons",
    link: "/",
  };

  return (
    <>
    <head>
  <title>Learn Quran Online One-on-One Quran</title>
  <meta
    name="description"
    content="Learn Quran online with qualified male and female teachers. Start your journey with Tajweed, Hifz, Translation, and Islamic studies – from the comfort of your home."
  />
  <meta
    name="keywords"
    content="Learn Quran Online, Quran Classes Online, Tajweed, Hifz, Islamic Studies, Female Quran Teacher"
  />
  <link rel="canonical" href="https://ilmulQuran.com/learn-quran-online" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Learn Quran Online | One-on-One Quran Lessons with Male & Female Teachers"
  />
  <meta
    property="og:description"
    content="Learn Quran online with qualified male and female teachers. Start your journey with Tajweed, Hifz, Translation, and Islamic studies – from the comfort of your home."
  />
  <meta property="og:url" content="https://ilmulQuran.com/learn-quran-online" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="/Images/Courses/learnquranonline.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Male and female Quran teachers teaching online Quran lessons"
  />
  <meta property="og:image:type" content="image/png" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Learn Quran Online | One-on-One Quran Lessons with Male & Female Teachers"
  />
  <meta
    name="twitter:description"
    content="Learn Quran online with qualified male and female teachers. Start your journey with Tajweed, Hifz, Translation, and Islamic studies – from the comfort of your home."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/learnquranonline.png"
  />

  {/* JSON-LD Structured Data */}
  <Script
    id="jsonld-learn-quran"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Learn Quran Online - One-on-One Quran Lessons",
        "description":
          "Personalized Quran lessons with male and female qualified teachers covering Tajweed, Hifz, Quran translation, and Islamic studies from home.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "ilmulQuran",
          "sameAs": "https://ilmulquran.com",
          "description":
            "Online Islamic education platform specializing in Quran and Islamic studies."
        },
        "url": "https://ilmulQuran.com/learn-quran-online",
        "image": "https://ilmulquran.com/Images/Courses/learnquranonline.png",
        "educationalLevel": "beginner",
        "typicalAgeRange": "all",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "one-on-one"],
          "duration": "P6M",
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student",
            "ageRange": "all"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "url": "https://ilmulquran.com/get-register",
            "availability": "https://schema.org/InStock"
          }
        },
        "coursePrerequisites": "Basic reading skills recommended",
        "educationalCredentialAwarded": "Certificate of Quran Completion"
      }),
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
          <h1 className="text-[#003366] mb-10 text-center font-bold text-4xl">
            Learn Quran Online from the Comfort of Your Home
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Start Your Quran Journey – Simple, Spiritual, and Online</strong>
              </p>
              <p className="text-base text-gray-700 leading-relaxed pt-3">
                At ilmulQuran.com, we help Muslims around the world learn the Quran online with proper Tajweed and understanding. Whether you are a parent looking for a teacher for your child or an adult beginning your journey, we offer personalized Quran classes online with Islamic adab.
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <Image
                src="/Images/Courses/learnquranonline.png"
                alt="Learn Quran Online"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            🌙 What You Will Learn:
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><strong className="text-[#1a73e8]">Quran Recitation with Tajweed –</strong> Improve pronunciation and fluency</li>
            <li><strong className="text-[#1a73e8]">Quran Memorization (Hifz) –</strong> Structured weekly progress plans</li>
            <li><strong className="text-[#1a73e8]">Quran with Translation & Tafsir –</strong> Understand the message of Allah</li>
            <li><strong className="text-[#1a73e8]">Daily Islamic Duas & Salah Lessons</strong></li>
            <li><strong className="text-[#1a73e8]">Taleem ul Islam & Aqeedah Basics</strong></li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            👨‍👩‍👧‍👦 Who Can Enroll?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Kids (4+ years) – Beginner-friendly lessons</li>
            <li>Adults – From basic to advanced levels</li>
            <li>Sisters – Female teachers available</li>
            <li>New Muslims (Reverts) – Foundation-level support</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            📅 Flexible Scheduling & Easy Access
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>🕒 Choose your own class timing</li>
            <li>🌐 Available in all time zones</li>
            <li>💻 Learn via Zoom, Skype, or Google Meet</li>
            <li>🧑‍🏫 One-on-one sessions with full attention</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            🌍 Trusted by Families in 50+ Countries:
          </h2>
          <p className="text-base text-gray-700 pt-3">
            🇬🇧 UK, 🇺🇸 USA, 🇨🇦 Canada, 🇦🇺 Australia, 🇳🇿 New Zealand, 🇸🇬 Singapore and more.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            ✅ Why Choose IlmulQuran?
          </h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li>Certified & experienced Quran teachers</li>
            <li>Supervised learning system</li>
            <li>Privacy & safety for families</li>
            <li>Affordable monthly packages</li>
            <li>Satisfaction guaranteed with a free trial</li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            🔗 Explore More:
          </h2>
          <ul className="list-disc ml-8 text-blue-600 space-y-2 pt-3">
            <li><Link href="/online-quran-classes">Online Quran Classes</Link></li>
            <li><Link href="/quran-with-tajweed">Quran with Tajweed</Link></li>
            <li><Link href="/hifz-ul-quran">Hifz ul Quran</Link></li>
            <li><Link href="/revert-to-islam">Revert to Islam Course </Link></li>
          </ul>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
            ✅ Try a Free Quran Class Today!
          </h2>
          <p className="text-base text-gray-700 pt-4">
            📩 Fill the quick form below or WhatsApp us to begin your spiritual journey.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
            Student Testimonials
          </h3>
          <div className="pt-3">
                               <BonusIslamicLearning/>                                                               

            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default LearnQuranOnline;
