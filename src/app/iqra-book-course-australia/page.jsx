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



const IqraBookAustralia = () => {

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
    id: 3,
    name: "Learn Iqra Book Online in Australia – Full Series 1 to 6",
    link: "/iqra-book-course-australia",
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          as="image"
          href="/Images/Courses/iqra-australia.png"
          fetchPriority="high"
        />

        <title>Learn Iqra Book Online in Australia – Full Series 1 to 6</title>
        <meta
          name="description"
          content="Start Iqra Book Course online in Australia with certified teachers. Learn Arabic reading, pronunciation, and Tajweed through structured Iqra Books 1 to 6."
        />
        <meta
          name="keywords"
          content="Iqra Book Online Australia, Iqra Book Course for Kids, Learn Iqra Book Australia, Iqra Book 1 to 6 Online"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ilmulquran.com/iqra-book-course-australia"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Learn Iqra Book Online in Australia | Vol 1 to 6"
        />
        <meta
          property="og:description"
          content="Structured Iqra Book Course (1–6) for kids and beginners in Australia. Online one-on-one classes with male and female teachers."
        />
        <meta
          property="og:url"
          content="https://ilmulquran.com/iqra-book-course-australia"
        />
        <meta property="og:site_name" content="ilmulQuran" />
        <meta
          property="og:image"
          content="https://ilmulquran.com/Images/courses/iqra-australia.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Iqra Book set with Australian flag elements"
        />
        <meta property="og:image:type" content="image/webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Iqra Book Course for Australian Students | ilmulQuran"
        />
        <meta
          name="twitter:description"
          content="Complete Iqra Book series (1-6) with certified teachers. Flexible scheduling for Australian time zones. Start with a free trial!"
        />
        <meta
          name="twitter:image"
          content="https://ilmulquran.com/Images/OG/iqra-australia.webp"
        />

        {/* Schema Markup */}
        <Script
          id="jsonld-iqra-australia"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Iqra Book Course for Australian Students",
              description: "Complete online Quran reading course using the Iqra Book series (1-6) with certified teachers available for Australian time zones.",
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
                  name: "Australia"
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
              countryFlag="/Images/flags/australia.png"
            />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
              <h1 className="text-center mb-8 text-[#003366] font-bold text-xl md:text-2xl lg:text-3xl">
                Learn Iqra Book Online in Australia (Books 1 to 6)
              </h1>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full">
                  <p className="text-base font-medium mb-4">
                    IlmulQuran.com offers a complete Iqra Book Online Course for students in Australia — ideal for kids, beginners, or reverts looking to build strong Quran reading skills.
                  </p>
                  <p className="text-base font-medium mb-4">
                    We follow the globally recognized Iqra Book Series (Volumes 1 to 6), which introduces Arabic alphabets, vowel sounds, and Tajweed rules in a step-by-step manner.
                  </p>

                  <h2 id="what-you-learn" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                    🧠 What Will You Learn?
                  </h2>
                  <div className="overflow-x-auto pt-4">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-[#003366] text-white">
                          <th className="py-2 px-4 border-b">Volume</th>
                          <th className="py-2 px-4 border-b">Key Learning Areas</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Book 1", "Arabic letters (Hijaiyah) with Fathah (short 'a' sound)"],
                          ["Book 2", "Kasrah ('i' sound) and Dammah ('u' sound)"],
                          ["Book 3", "Sukoon (no vowel) and Tanween (double vowels)"],
                          ["Book 4", "Madd (long vowels) and Shaddah (doubling)"],
                          ["Book 5", "Letters in different word positions, rules like Ikhfa and Iqlab"],
                          ["Book 6", "Quranic letter patterns, Waqf rules, and fluency practice"]
                        ].map(([book, description], index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b font-medium">{book}</td>
                            <td className="py-2 px-4 border-b">{description}</td>
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
                    src="/Images/Courses/iqra-australia.png"
                    alt="Iqra Book Course for Australian Students"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>

              <h2 id="who-is-for" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                👩‍🏫 Who Is This Course For?
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Kids aged 4 and up</li>
                <li>New Muslims (reverts)</li>
                <li>Adults beginning Quran reading</li>
                <li>Families looking for structured Quran learning at home</li>
              </ul>

              <h2 id="how-it-works" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                💻 How Online Classes Work
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>One-on-one live sessions via Zoom, Skype, or Teams</li>
                <li>Flexible class timings for Australian time zones</li>
                <li>Taught by certified male and female teachers</li>
                <li>Available 5 to 7 days a week, according to your schedule</li>
                <li>Choice of slow-paced or intensive learning</li>
              </ul>

              <h2 id="why-choose-us" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                🎓 Why Choose IlmulQuran in Australia?
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Trusted by 5000+ global students</li>
                <li>Professional teaching in a friendly and respectful Islamic environment</li>
                <li>24/7 Support via WhatsApp or Email</li>
                <li>Multiple pricing plans in AUD</li>
                <li>Trial class available before enrollment</li>
              </ul>

              <h2 id="duration" className="text-xl font-bold text-[#003366] pt-6 scroll-mt-24">
                📅 Duration & Schedule
              </h2>
              <ul className="list-disc ml-6 space-y-2 pt-3">
                <li>Each book takes approx. 4–6 weeks, depending on the student's pace</li>
                <li>Full course may take 6–9 months</li>
              </ul>

              <div className="bg-[#f0f8ff] p-6 rounded-lg mt-6">
                <h2 className="text-xl font-bold text-[#003366]">
                  📲 How to Get Started?
                </h2>
                <ul className="list-disc ml-6 space-y-2 pt-3">
                  <li>✅ Book a Free Trial Class</li>
                  <li>✅ Choose your plan (1 to 5 days/week)</li>
                  <li>✅ Start your journey from Iqra Book 1 to Quran fluency</li>
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

export default IqraBookAustralia;