import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OnlineQuranClasses = () => {
  const breadcrumbData = {
    id: 1,
    name: "Online Quran Classes",
    link: "/online-quran-classes",
  };

  return (
    <>
   <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/onlinequranclasses.png"
    fetchPriority="high"
  />

  <title>Online Quran Classes | Learn Quran Online with Tajweed</title>
  <meta
    name="description"
    content="Join our online Quran classes for kids and adults with expert male and female teachers. Learn with Tajweed, Translation, and Hifz from the comfort of your home."
  />
  <meta
    name="keywords"
    content="Online Quran Classes, Learn Quran Online, Tajweed Classes, Hifz Quran, Female Quran Teachers, Quran for Kids"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-quran-classes" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Quran Classes for Kids and Adults | Learn with Tajweed"
  />
  <meta
    property="og:description"
    content="Trusted one-on-one Quran classes with certified male and female teachers. Tajweed, Translation & Hifz included. Try a free class today!"
  />
  <meta property="og:url" content="https://ilmulquran.com/online-quran-classes" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/Courses/onlinequranclasses.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Student learning Quran online via video session"
  />
  <meta property="og:image:type" content="image/png" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Learn Quran Online with Tajweed – Online Classes for All Ages"
  />
  <meta
    name="twitter:description"
    content="Join our one-on-one Quran classes with expert male & female teachers. Learn Tajweed, Hifz & Translation. Flexible scheduling. Free trial available."
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/Courses/onlinequranclasses.png"
  />

  {/* JSON-LD Schema Markup */}
  <Script
    id="jsonld-online-quran-classes"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Online Quran Classes with Tajweed",
        description:
          "Comprehensive Quran learning classes online with Tajweed, Translation, and Hifz options. Certified male and female tutors, flexible scheduling, and interactive sessions.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          description:
            "ilmulQuran offers personalized online Quran education for kids and adults globally with professional Islamic scholars.",
        },
        url: "https://ilmulquran.com/online-quran-classes",
        image: "https://ilmulquran.com/Images/Courses/onlinequranclasses.png",
        courseMode: ["online", "one-on-one"],
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          category: "free trial",
          url: "https://ilmulquran.com/get-register",
        },
        educationalCredentialAwarded: "Certificate of Completion"
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

          {/* Hero Section with Image */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <div className="w-full lg:w-1/2 order-last lg:order-first">
              <h1 className="text-4xl font-bold text-teal-800 mb-4">
                Online Quran Classes for Kids and Adults
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Start Learning the Quran Online – From Your Home, With Islamic Adab. <br />
                At IlmulQuran.com, we offer online Quran classes designed for all ages – children, teenagers, and adults. Whether you're a complete beginner or looking to improve your recitation, we provide one-on-one Quran learning with expert male and female teachers.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/Images/Courses/onlinequranclasses.png"
                alt="Online Quran Class Hero"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover"
              />
            </div>
          </div>

          {/* What We Offer */}
          <h2 className="text-2xl font-bold text-teal-800 mt-6 mb-4">🌟 What We Offer</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>✅ Tajweed classes for beginners and advanced</li>
            <li>✅ Quran memorization (Hifz ul Quran)</li>
            <li>✅ Quran with Translation and Tafseer</li>
            <li>✅ Flexible timings for your daily schedule</li>
            <li>✅ Male and female teachers available</li>
            <li>✅ Special classes for kids and reverts</li>
          </ul>

          {/* For Sisters and Children */}
          <h2 className="text-2xl font-bold text-teal-800 mt-10 mb-4">🧕 For Sisters and Children</h2>
          <p className="text-gray-700">
            We have female Quran teachers to maintain Islamic values and comfort for sisters and daughters.
          </p>

          {/* Why Learn Quran Online */}
          <h2 className="text-2xl font-bold text-teal-800 mt-10 mb-4">💻 Why Learn Quran Online?</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Study from home – No travel needed</li>
            <li>Save time and money</li>
            <li>Recorded lessons available</li>
            <li>Supervised sessions for kids</li>
          </ul>

          {/* Who Can Join */}
          <h2 className="text-2xl font-bold text-teal-800 mt-10 mb-4">🎯 Who Can Join?</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Children aged 4+</li>
            <li>Adults of all levels</li>
            <li>New Muslims (Reverts)</li>
            <li>Working professionals and parents</li>
          </ul>

          {/* Related Courses (Internal Links) */}
          <h2 className="text-2xl font-bold text-teal-800 mt-10 mb-4">🔗 Related Courses</h2>
          <ul className="list-disc ml-6 text-blue-700 space-y-2 underline">
            <li><Link href="/quran-reading-with-tajweed">Quran Reading with Tajweed</Link></li>
            <li><Link href="/memorize-quran-online">Memorize Quran Online</Link></li>
            <li><Link href="/learn-tafsir-online">Learn Tafsir Online</Link></li>
            <li><Link href="/taleem-ul-islam">Taleem ul Islam</Link></li>
          </ul>

          {/* CTA */}
          <h2 className="text-2xl font-bold text-teal-800 mt-10 mb-4">✅ Start Your Free Trial Class Today!</h2>
          <p className="text-gray-700 text-lg mb-4">
            👉 Fill out the form below or <Link href="/contact-us" className="text-teal-600 underline">WhatsApp us directly</Link> to get started.
          </p>

          {/* Testimonials */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-teal-800 mb-4 text-center">💬 What Our Students Say</h2>
                   <BonusIslamicLearning/>                                                               
            
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default OnlineQuranClasses;
