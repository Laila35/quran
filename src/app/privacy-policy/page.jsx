// Privacy Policy Component
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Banner from "@/components/Banner";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";



const PrivacyPolicy = () => {
  const breadcrumbData = {
    id: 1,
    name: "Privacy Policy - ilmulQuran Online Academy",
    link: "/",
  };
  return (
    <>
    
<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <link rel="canonical" href="https://ilmulQuran.com/privacy-policy/" />



  {/* Optimized Title (60 characters) */}
  <title>Privacy Policy | ilmulQuran Online Quran Academy</title>

  {/* Enhanced Meta Description (150 characters) */}
  <meta 
    name="description" 
    content="Read ilmulQuran's privacy policy to learn how we collect, use, and safeguard your personal data across all online Quran learning services." 
  />

  {/* Expanded Keywords */}
  <meta 
    name="keywords" 
    content="ilmulQuran Privacy Policy, Online Quran Academy Data, Information Security, Quran Classes User Privacy, Data Protection Policy" 
  />

  {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/privacy-policy/" />
  <meta property="og:title" content="🔐 Privacy Policy | Your Data Matters at ilmulQuran" />
  <meta property="og:description" content="At ilmulQuran, your privacy is our top priority. Learn how we manage, store, and protect your personal and educational information." />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Secure data privacy for Quran learners at ilmulQuran" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@ilmulquran" />
  <meta name="twitter:title" content="🔒 ilmulQuran Privacy Policy – Safe & Secure Learning" />
  <meta name="twitter:description" content="Find out how we protect your information and ensure safe online Quran learning experiences." />

  {/* Structured Data */}
  <Script
    id="privacy-policy-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy – ilmulQuran",
        description: "This page explains how ilmulQuran handles user data, privacy protocols, and information security in our online Quran academy.",
        url: "https://ilmulQuran.com/privacy-policy/",
        publisher: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com"
        }
      })
    }}
  />

  {/* Additional SEO Enhancements */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Academy" />
  <meta name="geo.region" content="Global" />
  <meta name="copyright" content="ilmulQuran" />

  {/* Mobile Optimization */}
  <meta name="apple-mobile-web-app-title" content="ilmulQuran Privacy" />
  <meta name="theme-color" content="#2A593F" />
</head>


      {/* <Banner breadcrumbData={breadcrumbData} /> */}
      <div className="w-full md:w-4/5 lg:w-4/5 xl:w-full mx-auto px-3 mt-10  py-3">
      <div className="bg-gray-100 rounded-lg border border-teal-600  p-8">
    <h2 className="text-4xl font-extrabold text-center text-[#003366]">
      Committed to Protecting Your Privacy
    </h2>
    <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
      ilmulQuran Online Academy is committed to protecting your privacy and ensuring the security of your personal information. Our privacy policy outlines how we collect, use, and safeguard your data.
    </p>

    <section className="mt-12">
      <h3 className="text-2xl font-bold text-[#003366] text-center">
        Information Collection
      </h3>
      <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
        We collect personal information when you:
      </p>
      <ul className="mt-4 list-disc text-gray-700 text-left space-y-3 mx-auto max-w-md">
        <li>
          <span className="font-semibold text-[#1a73e8]">Enroll in a Course:</span> Your name, contact details, and payment information.
        </li>
        <li>
          <span className="font-semibold text-[#1a73e8]">Contact Support:</span> Any additional information you provide when seeking assistance.
        </li>
        <li>
          <span className="font-semibold text-[#1a73e8]">Visit Our Website:</span> Data collected through cookies and other tracking technologies.
        </li>
      </ul>
    </section>

    <section className="mt-12">
      <h3 className="text-2xl font-bold text-[#003366] text-center">
        Use of Information
      </h3>
      <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
        We use your personal information to:
      </p>
      <ul className="mt-4 list-disc text-gray-700 text-left space-y-3 mx-auto max-w-md">
        <li>
          <span className="font-semibold text-[#1a73e8]">Provide Services:</span> Ensure smooth delivery of our courses and support.
        </li>
        <li>
          <span className="font-semibold text-[#1a73e8]">Improve Our Platform:</span> Analyze data to enhance user experience.
        </li>
        <li>
          <span className="font-semibold text-[#1a73e8]">Communicate with You:</span> Send updates, newsletters, and responses to inquiries.
        </li>
      </ul>
    </section>

    <section className="mt-12">
      <h3 className="text-2xl font-bold text-[#003366] text-center">
        Data Protection
      </h3>
      <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
        We implement various security measures to protect your personal information from unauthorized access, alteration, or disclosure.
      </p>
    </section>

    <section className="mt-12">
      <h3 className="text-2xl font-bold text-[#003366] text-center">
        Contact Information
      </h3>
      <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
        For any questions or concerns regarding our privacy policy, please contact us:
      </p>
      <p className="mt-4 text-base text-gray-700 text-center">
        Email:{" "}
        <a  aria-label="Privacy ilmulquran" href="mailto:privacy@ilmulQuran.com" className="text-blue-600 underline">
          privacy@ilmulQuran.com
        </a>
      </p>
      <p className="mt-2 text-base text-gray-700 text-center">
        Phone:{" "}
        <a  aria-label="contact number" href="tel:+61480050048" className="text-blue-600 underline">
          +61480050048
        </a>
      </p>
    </section>

    <section className="mt-12 text-center">
      <h3 className="text-2xl font-bold text-[#003366]">
        Call to Action
      </h3>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        For more details, please read our full Privacy Policy
        
      </p>
    </section>

       <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
                      <BonusIslamicLearning />
      
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>

  </div>
</div>
    </>
  );
};

export default PrivacyPolicy;
