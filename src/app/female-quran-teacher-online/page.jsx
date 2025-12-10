

import Banner from "@/components/Banner";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import StickyForm from "@/components/StickyForm"; // ✅ Import added

const FemaleQuranTeacher = () => {
  const breadcrumbData = {
    id: 1,
    name: "Female Quran Teacher Online - Learn Quran with Comfort & Modesty",
    link: "/",
  };

  return (
    <>
  <head>
  <title>ilmulQuran | Female Quran Teacher Online</title>
  <meta
    name="description"
    content="Looking for a female Quran teacher online? Learn with certified Ustadhas in one-on-one sessions – perfect for sisters and daughters with full privacy and Islamic adab."
  />
  <meta
    name="keywords"
    content="Female Quran Teacher Online, Quran Classes for Women, Female Quran Tutor, Learn Quran with Modesty, Online Quran Classes"
  />
  <link rel="canonical" href="https://ilmulquran.com/female-quran-teacher-online" />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="ilmulQuran | Female Quran Teacher Online"
  />
  <meta
    property="og:description"
    content="Learn Quran online with certified female Ustadhas in private one-on-one sessions, ensuring full privacy and Islamic adab. Perfect for sisters and daughters."
  />
  <meta property="og:url" content="https://ilmulquran.com/female-quran-teacher-online" />
  <meta property="og:site_name" content="ilmulQuran" />
  
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Female Quran teacher teaching Quran online with modesty and privacy"
  />
  <meta property="og:image:type" content="image/png" />
  
  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="ilmulQuran | Female Quran Teacher Online"
  />
  <meta
    name="twitter:description"
    content="Certified female Quran teachers providing private online classes with full privacy and Islamic etiquette. Start learning Quran today."
  />
  
  {/* JSON-LD Structured Data */}
  <Script
    id="jsonld-female-teacher-online"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "ilmulQuran",
        "url": "https://ilmulquran.com/female-quran-teacher-online",
        "logo": "https://ilmulquran.com/Images/logo.png",
        "description":
          "Looking for a female Quran teacher online? Learn with certified Ustadhas in one-on-one sessions – perfect for sisters and daughters with full privacy and Islamic adab.",
        "hasCourse": {
          "@type": "Course",
          "name": "Female Quran Teacher Online",
          "description": "Private online Quran classes with certified female teachers emphasizing privacy and Islamic manners.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "ilmulQuran",
            "sameAs": "https://ilmulquran.com"
          },
          "url": "https://ilmulquran.com/female-quran-teacher-online"
        }
      }),
    }}
  />
  </head>
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full max-w-7xl mx-auto px-3 mt-10 py-3">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            
            {/* Mobile StickyForm (on top) */}
            <div className="block lg:hidden mb-6">
              <StickyForm courseName="Female Quran Teacher Program" />
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h1 className="text-[#003366] mb-10 text-center font-bold text-4xl">
                Learn from a Female Quran Teacher Online – With Comfort, Privacy & Islamic Values
              </h1>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                  <p className="text-base text-gray-700 leading-relaxed">
                    At ilmulQuran.com, we understand the needs of sisters and young girls who feel more comfortable learning from a female Quran teacher...
                  </p>
                </div>

                <div className="w-full lg:w-1/2">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/female-quran-teacher-online.jpg"
                    alt="Female Quran Teacher"
                    style={{ borderRadius: "25px" }}
                  />
                </div>
              </div>

              {/* [Keep the rest of your content unchanged below this point...] */}

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Why Choose a Female Quran Teacher?
              </h2>
              <ul className="list-disc ml-8 text-gray-700 space-y-2 pt-3">
                <li><strong className="text-[#1a73e8]">Comfort and ease for women and girls</strong></li>
                {/* ...other list items */}
              </ul>

              {/* [All remaining sections like Our Ustadhas, Courses, etc.] */}

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>

          {/* Desktop Sidebar StickyForm */}
          <div className="w-full lg:w-1/4 order-1 lg:order-2 hidden lg:block">
            <div className="sticky top-6">
              <StickyForm courseName="Female Quran Teacher Program" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FemaleQuranTeacher;
