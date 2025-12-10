"use client";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";
import { useCountry } from "@/app/context/CountryContext";
import { PhoneIcon } from "@heroicons/react/solid";


const IqraBookNewZealand = () => {
  
  const { country } = useCountry();
    const getPhoneNumber = () => {
    if (country === 'United States of America' || country === 'Canada') {
      return { number: '+19142791693', url: 'https://wa.me/19142791693' };
    } else if (country === 'Australia' || country === 'New Zealand') {
      return { number: '+61480050048', url: 'https://wa.me/61480050048' };
    }
    return { number: '+447862067920', url: 'https://wa.me/447862067920' };
  };

  const phoneInfo = getPhoneNumber();

  const breadcrumbData = {
    id: 4,
    name: "Learn Iqra Book Online in New Zealand – Full Series 1 to 6",
    link: "/iqra-book-course-new-zealand",
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          as="image"
          href="/Images/courses/iqra-nz.png"
          fetchPriority="high"
        />

        <title>Learn Iqra Book Online in New Zealand – Full Series 1 to 6</title>
        <meta
          name="description"
          content="Start Iqra Book Course online in New Zealand. Learn Arabic reading and Tajweed through the structured Iqra Book Series (1 to 6). Ideal for kids and beginners."
        />
        <meta
          name="keywords"
          content="Iqra Book Online New Zealand, Learn Iqra Book NZ, Iqra Book 1 to 6 Online, Iqra Course for Kids New Zealand"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ilmulquran.com/iqra-book-course-new-zealand"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Learn Iqra Book Online in New Zealand | Books 1 to 6"
        />
        <meta
          property="og:description"
          content="Join our Iqra Book Online Course in New Zealand. Step-by-step Quran reading with Tajweed from Iqra Book 1 to 6."
        />
        <meta
          property="og:url"
          content="https://ilmulquran.com/iqra-book-course-new-zealand"
        />
        <meta property="og:site_name" content="ilmulQuran" />
        <meta
          property="og:image"
          content="https://ilmulquran.com/Images/courses/iqra-nz.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Iqra Book set with New Zealand elements"
        />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Iqra Book Course NZ | Learn Quran Reading Online"
        />
        <meta
          name="twitter:description"
          content="Structured Iqra Book program for New Zealand students with certified teachers. Flexible NZ time zone scheduling."
        />
        <meta
          name="twitter:image"
          content="https://ilmulquran.com/Images/OG/iqra-nz.webp"
        />

        {/* Schema Markup */}
        <Script
          id="jsonld-iqra-nz"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Iqra Book Course for New Zealand Students",
              description: "Complete Quran reading program using Iqra Book series (1-6) with teachers available for New Zealand time zones.",
              provider: {
                "@type": "EducationalOrganization",
                name: "ilmulQuran",
                sameAs: "https://ilmulquran.com"
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                location: {
                  "@type": "Country",
                  name: "New Zealand"
                }
              }
            }),
          }}
        />
      </head>

      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm 
              courseName={breadcrumbData.name.split("–")[0].trim()} 
              countryFlag="/Images/flags/new-zealand.png"
            />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
              <h1 className="text-center mb-8 text-[#003366] font-bold text-xl md:text-2xl lg:text-3xl">
                Learn Iqra Book Online in New Zealand (Books 1 to 6)
              </h1>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full">
                  <p className="text-base font-medium mb-4">
                    IlmulQuran.com presents a full Iqra Book Online Course tailored for students in New Zealand, designed to build a solid foundation in Quran reading.
                  </p>
                  <p className="text-base font-medium mb-4">
                    Using the well-known Iqra Book Series (1–6), this course develops Arabic recognition, pronunciation, and Tajweed—step by step—making it perfect for kids, adults, and reverts.
                  </p>

                  <h2 id="what-you-learn" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                    📚 What You'll Learn
                  </h2>
                  <div className="overflow-x-auto pt-4">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-[#003366] text-white">
                          <th className="py-2 px-4 border-b">Iqra Book</th>
                          <th className="py-2 px-4 border-b">Learning Focus</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Book 1", "Basic Arabic letters (Hijaiyah) with Fathah sound"],
                          ["Book 2", "Introduction to Kasrah and Dammah vowels"],
                          ["Book 3", "Sukoon and Tanween concepts"],
                          ["Book 4", "Madd (long vowels) and Shaddah (doubling)"],
                          ["Book 5", "Letter positioning, Tajweed: Ikhfa, Iqlab"],
                          ["Book 6", "Practice with Waqf rules and Quranic fluency patterns"]
                        ].map(([book, focus], index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b font-medium">{book}</td>
                            <td className="py-2 px-4 border-b">{focus}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={400}
                    src="/Images/Courses/iqra-nz.png"
                    alt="Iqra Book Course for New Zealand Students"
                    className="rounded-xl shadow-lg w-full"
                    priority
                  />
                </div>
              </div>

              <h2 id="who-can-join" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                👨‍👩‍👧 Who Can Join?
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Children aged 4+</li>
                <li>Adults with no prior Arabic background</li>
                <li>Reverts learning to read Quran</li>
                <li>Families seeking structured Islamic learning</li>
              </ul>

              <h2 id="class-features" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                💻 Class Features
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Live one-on-one sessions over Zoom or Skype</li>
                <li>Available across all New Zealand time zones</li>
                <li>Taught by qualified male and female teachers</li>
                <li>Customized scheduling: 1–5 days/week</li>
                <li>Learning at your child's or your own pace</li>
              </ul>

              <h2 id="why-choose-us" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                ✅ Why Choose IlmulQuran for New Zealand?
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>5000+ students enrolled from 50+ countries</li>
                <li>Transparent pricing in NZD</li>
                <li>Progress tracking & flexible teaching style</li>
                <li>Free trial class before enrolling</li>
                <li>100% online – learn from home with ease</li>
              </ul>

              <h2 id="duration" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                ⏱ Course Duration
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Each book: 4–6 weeks</li>
                <li>Full course (Books 1–6): 6–9 months</li>
                <li>Accelerated or relaxed pace available</li>
              </ul>

              <div className="bg-[#f0f8ff] p-6 rounded-lg mt-6">
                <h2 className="text-xl font-bold text-[#003366]">
                  📲 Get Started Now
                </h2>
                <ul className="list-disc ml-6 space-y-2 pt-3">
                  <li>✅ Book Your Free Trial Class</li>
                  <li>✅ Choose your schedule and teacher</li>
                  <li>✅ Start from Book 1 – Build your Quran journey step-by-step</li>
                </ul>
                <div className="flex flex-wrap gap-4 mt-4">
                 
                

                        <Link 
                href={phoneInfo.url} 
                aria-label="Contact via WhatsApp"
                className="hover:bg-teal-100 transition-colors duration-200 text-teal-600 flex items-center gap-2 p-2 rounded-full"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <PhoneIcon className="h-4 w-4 text-teal-600" />
                <span className="text-teal-600">{phoneInfo.number}</span>
              </Link>
                 
                </div>
              </div>

              <h2 id="testimonials" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                Student Testimonials
              </h2>
              <div className="pt-3">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IqraBookNewZealand;