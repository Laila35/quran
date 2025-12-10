import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";



const OneOnOneQuranClasses = () => {
  const breadcrumbData = {
    id: 1,
    name: "One-on-One Quran Classes – Personalized Quran Learning",
    link: "/",
  };

  return (
    <>
  <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulQuran.com/one-on-one-quran-classes" />

  {/* Preload Hero Image */}
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/one-on-one-quran-classes.png"
    fetchPriority="high"
    imagesrcset="/Images/Courses/one-on-one-quran-classes.png 480w, /Images/Courses/one-on-one-quran-classes.png 800w"
    imagesizes="(max-width: 600px) 480px, 800px"
  />

  {/* Page Title */}
  <title>ilmulQuran | One-on-One Quran Classes</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Join personalized one-on-one Quran classes online with certified male & female teachers. Learn Tajweed, Hifz, Qaida, and more at your own pace with flexible timings."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="One-on-One Quran Classes, Personalized Quran Learning, Online Quran Classes, Quran Tajweed, Hifz, Quran Memorization"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/one-on-one-quran-classes" />
  <meta property="og:title" content="ilmulQuran | One-on-One Quran Classes" />
  <meta property="og:description" content="Enroll in one-on-one Quran classes with expert male and female tutors. Learn Tajweed, Qaida, Hifz, and more at your convenience." />
  <meta property="og:image" content="/Images/Courses/one-on-one-quran-classes.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="One-on-One Quran Class at ilmulQuran" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="One-on-One Quran Classes | ilmulQuran Academy" />
  <meta name="twitter:description" content="Personalized Quran learning experience online with flexible scheduling. Learn at your own pace from qualified teachers." />
  <meta name="twitter:image" content="" />

  {/* JSON-LD Schema */}
  <Script
    id="one-on-one-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "One-on-One Quran Classes",
        description: "Personalized one-on-one Quran classes for Tajweed, Hifz, Qaida and more with flexible scheduling and expert teachers.",
        provider: {
          "@type": "Organization",
          name: "ilmulQuran Online Academy",
          url: "https://ilmulQuran.com"
        }
      })
    }}
  />

  {/* Additional Meta Tags */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Team" />
  <meta name="theme-color" content="#2A593F" />
  <meta name="apple-mobile-web-app-title" content="ilmulQuran Academy" />
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
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
          {/* Text Section on Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-[#003366] mb-10 font-bold text-4xl">
              One-on-One Quran Classes – Personalized Quran Learning from Anywhere
            </h1>
            <p className="text-base text-gray-700 leading-relaxed">
              If you’re looking for personal attention, customized lessons, and a flexible schedule — our One-on-One Quran Classes are made for you.
              At ilmulQuran.com, we provide private Quran lessons with certified male and female teachers, ensuring each student learns at their own pace, comfort level, and according to their goals — whether it’s Tajweed, Hifz, Tafseer, or Islamic studies.
            </p>
          </div>

          {/* Image Placeholder on Right */}
           <div className="w-full lg:w-1/2 order-first lg:order-last">
                <Image
                  width={600}
                  height={600}
                  src="/Images/Courses/one-on-one-quran-classes.png"
                  alt="on on one quran classes"
                  style={{ borderRadius: "25px" }}
                />
              </div>
        </div>

        {/* Content Below Hero Section */}


        
        <div className="bg-white p-8 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Why Choose One-on-One Quran Learning?</h2>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><strong className="text-[#1a73e8]">Focused attention for better results</strong></li>
            <li><strong className="text-[#1a73e8]">No distractions or group pressure</strong></li>
            <li><strong className="text-[#1a73e8]">Progress as fast or slow as needed</strong></li>
            <li><strong className="text-[#1a73e8]">Personal teacher feedback every session</strong></li>
            <li><strong className="text-[#1a73e8]">Ideal for both kids and adults</strong></li>
          </ul>

          <h3 className="text-xl md:text-2xl pt-6 font-bold text-[#003366]">Who Can Benefit?</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><strong className="text-[#1a73e8]">Kids aged 4+ starting from Qaida</strong></li>
            <li><strong className="text-[#1a73e8]">Adults wanting to fix Tajweed or complete Hifz</strong></li>
            <li><strong className="text-[#1a73e8]">Sisters looking for female Quran teachers</strong></li>
            <li><strong className="text-[#1a73e8]">Reverts who need patient, private teaching</strong></li>
            <li><strong className="text-[#1a73e8]">Busy professionals who prefer flexible class slots</strong></li>
          </ul>

          <h3 className="text-xl md:text-2xl pt-6 font-bold text-[#003366]">Available Subjects</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><strong className="text-[#1a73e8]">Noorani Qaida (for beginners)</strong></li>
            <li><strong className="text-[#1a73e8]">Quran Reading with Tajweed</strong></li>
            <li><strong className="text-[#1a73e8]">Memorization (Hifz ul Quran)</strong></li>
            <li><strong className="text-[#1a73e8]">Tafseer and Translation</strong></li>
            <li><strong className="text-[#1a73e8]">Daily Duas, Salah, and Islamic Manners</strong></li>
            <li><strong className="text-[#1a73e8]">Revert Support Program</strong></li>
          </ul>

          <h3 className="text-xl md:text-2xl pt-6 font-bold text-[#003366]">Male & Female Teachers</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><strong className="text-[#1a73e8]">Certified in Tajweed and Hifz</strong></li>
            <li><strong className="text-[#1a73e8]">Fluent in English, Urdu, and Arabic</strong></li>
            <li><strong className="text-[#1a73e8]">Respectful, punctual, and supportive</strong></li>
            <li><strong className="text-[#1a73e8]">Trained to work with children and reverts</strong></li>
          </ul>

          <h3 className="text-xl md:text-2xl pt-6 font-bold text-[#003366]">Flexible Scheduling</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
            <li><strong className="text-[#1a73e8]">One-on-one live Zoom or Skype sessions</strong></li>
            <li><strong className="text-[#1a73e8]">Morning, evening, and weekend options</strong></li>
            <li><strong className="text-[#1a73e8]">Rescheduling available upon request</strong></li>
            <li><strong className="text-[#1a73e8]">Monthly attendance & progress reports</strong></li>
          </ul>

          <h3 className="text-xl md:text-2xl pt-6 font-bold text-[#003366]">Available Globally</h3>
          <p className="text-base text-gray-700 pt-3">
            We serve students in:
          </p>
          <ul className="list-inline">
            <li className="inline-block mr-4">🇬🇧 UK</li>
            <li className="inline-block mr-4">🇺🇸 USA</li>
            <li className="inline-block mr-4">🇨🇦 Canada</li>
            <li className="inline-block mr-4">🇦🇺 Australia</li>
            <li className="inline-block mr-4">🇳🇿 New Zealand</li>
            <li className="inline-block mr-4">🇦🇪 UAE</li>
            <li className="inline-block mr-4">🇸🇬 Singapore</li>
            <li className="inline-block">🇿🇦 South Africa</li>
          </ul>

          <h3 className="text-xl md:text-2xl pt-6 font-bold text-[#003366]">Completion Certificate</h3>
          <p className="text-base text-gray-700 pt-3">
            Digital certificates are awarded on course completion or memorization milestones.
          </p>

          <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">Start Your Personalized Quran Class</h2>
          <p className="text-base text-gray-700 pt-3">
            Book your free one-on-one Quran class today and connect with a dedicated teacher who understands your goals and respects your values.{" "}
            <Link href="/get-register" className="text-blue-600 no-underline">Book Now</Link>.
          </p>

          <div className="pt-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#003366]">Student Testimonials</h3>
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

export default OneOnOneQuranClasses;
