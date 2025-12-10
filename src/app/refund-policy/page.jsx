"use client"
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { FaPhone, FaEnvelope, FaInfoCircle, FaRegListAlt } from "react-icons/fa";
import Banner from "@/components/Banner";
import { useCountry } from "@/app/context/CountryContext";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";




const RefundPolicy = () => {
  const breadcrumbData = {
    id: 1,
    name: "Refund Policy | ilmulQuran Online Academy",
    link: "/",
  };


  
   const { country } = useCountry();
  
  
      // Phone number based on country
    const getPhoneNumber = () => {
      if (country === 'United States of America' || country === 'Canada') {
        return { number: '+19142791693', url: 'https://wa.me/19142791693' };
      } else if (country === 'Australia' || country === 'New Zealand') {
        return { number: '+61480050048', url: 'https://wa.me/61480050048' };
      }
      return { number: '+447862067920', url: 'https://wa.me/447862067920' };
    };
  
    const phoneInfo = getPhoneNumber();
  




  return (
    <>

  <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/policy/refund-policy-banner.webp"
    fetchPriority="high"
  />

  <title>ilmulQuran | Refund Policy – Online Course Cancellations </title>
  <meta
    name="description"
    content="Review ilmulQuran's refund policy. Understand how refunds and course cancellations are handled for our online Islamic education platform. Read before enrolling."
  />
  <meta
    name="keywords"
    content="Refund Policy, ilmulQuran Refunds, Online Course Cancellation, Course Refund Terms, Islamic Education Refund Policy"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/refund-policy" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Refund Policy | ilmulQuran Online Islamic Academy"
  />
  <meta
    property="og:description"
    content="Understand ilmulQuran's refund and cancellation policy before enrolling in online Quran and Islamic courses. Transparent guidelines and terms outlined clearly."
  />
  <meta property="og:url" content="https://ilmulquran.com/refund-policy" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="Images/Courses/refund-policy-banner.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Refund policy document icon with Islamic education background"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Refund Policy – ilmulQuran Online Course Terms & Conditions"
  />
  <meta
    name="twitter:description"
    content="Learn how ilmulQuran handles refunds and cancellations for online Quran and Islamic courses. Clear policy details provided."
  />
  <meta
    name="twitter:image"
    content="/Images/Courses/refund-policy-banner.png"
  />

  {/* JSON-LD Schema Markup */}
  <script
    id="jsonld-refund-policy"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "ilmulQuran Refund Policy",
        description:
          "Read ilmulQuran's refund and cancellation policy for online Quran and Islamic courses. Clear terms on how refunds are processed.",
        url: "https://ilmulquran.com/refund-policy",
        publisher: {
          "@type": "Organization",
          name: "ilmulQuran",
          url: "https://ilmulquran.com",
          logo: {
            "@type": "ImageObject",
            url: "https://ilmulquran.com/logo.png"
          }
        },
        image: "/Images/Courses/refund-policy-banner.png"
      }),
    }}
  />
</head>


    
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-md rounded-lg border border-teal-600 p-8">
          <h2 className="text-4xl font-extrabold text-center text-[#003366] mb-6">
            <FaInfoCircle className="inline-block mb-1 text-teal-500" /> Clear and Fair Refund Guidelines
          </h2>
          <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
            At ilmulQuran Online Academy, we strive to provide the best learning experience. Our refund policy clearly outlines the conditions under which refunds are granted for course cancellations and other related matters.
          </p>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] flex items-center justify-center gap-2">
              <FaRegListAlt className="text-teal-500" /> Refund Eligibility
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              To be eligible for a refund, the following conditions must be met:
            </p>
            <ul className="mt-6 text-lg text-gray-700 leading-relaxed list-disc list-inside mx-auto max-w-lg space-y-4">
              <li>
                <span className="font-semibold text-teal-600">Course Cancellation:</span> Cancel within the first week of enrollment.
              </li>
              <li>
                <span className="font-semibold text-teal-600">Technical Issues:</span> If technical problems prevent access to the course.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] flex items-center justify-center gap-2">
              <FaInfoCircle className="text-teal-500" /> Refund Process
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              To request a refund, contact our support team with:
            </p>
            <ul className="mt-6 text-lg text-gray-700 leading-relaxed list-disc list-inside mx-auto max-w-lg space-y-4">
              <li>
                <span className="font-semibold text-teal-600">Name:</span> Your full name.
              </li>
              <li>
                <span className="font-semibold text-teal-600">Course Enrolled:</span> The course name.
              </li>
              <li>
                <span className="font-semibold text-teal-600">Reason for Refund:</span> A brief explanation.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] flex items-center justify-center gap-2">
              <FaPhone className="text-teal-500" /> Contact Information
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              For any inquiries or to request a refund, reach us at:
            </p>
            <div className="mt-4 flex flex-col items-center space-y-2">
              <a  aria-label="admin email" href="mailto:admin@ilmulQuran.com" className="text-lg text-blue-600 underline">
                <FaEnvelope className="inline-block mr-2" /> admin@ilmulQuran.com
              </a>
               <Link 
                href={phoneInfo.url} 
                aria-label="Contact via WhatsApp"
                className=" transition-colors duration-200 text-teal-600 flex items-center gap-2 p-2 rounded-full"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <PhoneIcon className="h-4 w-4 text-blue-600" />
                <span className="text-blue-600">{phoneInfo.number}</span>
              </Link>

            </div>
          </section>

    
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
