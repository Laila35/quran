"use client";

import Banner from "@/components/Banner";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaUserShield, FaBook } from "react-icons/fa";
import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { useCountry } from "@/app/context/CountryContext";
import { PhoneIcon } from "lucide-react";



const TermsOfService = () => {
  const breadcrumbData = {
    id: 1,
    name: "Terms of Service | ilmulQuran Online Academy",
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
    href="/Images/OG/terms-of-service.webp"
    fetchPriority="high"
  />

  <title>ilmulQuran | Terms of Service – Know Your Rights & Responsibilities</title>
  <meta
    name="description"
    content="Read the detailed terms of service for ilmulQuran Online Academy. Learn about user rights, policies, disclaimers, and your responsibilities while using our online Quran learning platform."
  />
  <meta
    name="keywords"
    content="Terms of Service, ilmulQuran Guidelines, Platform Policies, Online Quran Academy Terms, ilmulQuran Terms and Conditions"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://ilmulquran.com/terms-of-service"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="ilmulQuran | Terms of Service & Platform Policies"
  />
  <meta
    property="og:description"
    content="Review ilmulQuran's terms of service to understand how we safeguard your data and ensure a respectful, effective Quran learning experience."
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/terms-of-service"
  />
  <meta property="og:site_name" content="ilmulQuran" />
 
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Terms of Service document illustration for ilmulQuran"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Terms of Service – ilmulQuran Online Quran Academy"
  />
  <meta
    name="twitter:description"
    content="Explore the full terms and conditions of ilmulQuran. Know what to expect and how we protect your rights as an online Quran student."
  />
 
</head>


      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-md rounded-lg border border-teal-600 p-8">
          <h2 className="text-4xl font-extrabold text-center text-[#003366] mb-6">
            <FaUserShield className="inline-block mb-1 text-teal-500" /> Guidelines and Policies for Using Our Platform
          </h2>
          <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
            Welcome to <span className="text-[#1a73e8]">ilmulQuran Online Academy</span>. By using our website and services, you agree to comply with our terms of service. These guidelines and policies are designed to ensure a positive and safe learning environment for all our students.
          </p>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] flex items-center justify-center gap-2">
              <FaBook className="text-teal-500" /> User Responsibilities
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              As a user of our platform, you are expected to:
            </p>
            <ul className="mt-4 list-disc text-gray-700 text-left space-y-3 mx-auto max-w-md">
              <li>
                <span className="font-semibold text-[#1a73e8]">Provide Accurate Information:</span> Ensure that all personal and contact information provided is accurate.
              </li>
              <li>
                <span className="font-semibold text-[#1a73e8]">Respectful Conduct:</span> Maintain respectful behavior towards instructors and fellow students.
              </li>
              <li>
                <span className="font-semibold text-[#1a73e8]">Compliance with Policies:</span> Adhere to our privacy policy and other guidelines.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] flex items-center justify-center gap-2">
              <FaUserShield className="text-teal-500" /> Platform Usage
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              Our platform is intended for educational purposes. Any misuse or inappropriate behavior will result in the termination of access.
            </p>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] flex items-center justify-center gap-2">
              <FaPhone className="text-teal-500" /> Contact Information
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              For any questions or concerns regarding our terms of service, please contact us:
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

export default TermsOfService;
