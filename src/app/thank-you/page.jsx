"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LeadsAddInfoForm from "@/components/LeadsAddInfoForm";

const ThanksPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
<>

    <head>


      <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 

  <title>Thank You – ilmulQuran | Your Free Trial Request Was Received</title>
  <meta
    name="description"
    content="Thank you for submitting your request! The ilmulQuran team will contact you shortly to help you start your Quran learning journey with a free trial class."
  />
  <meta
    name="keywords"
    content="Quran classes, Free Quran trial, Online Quran Academy, ilmulQuran, Learn Quran Online"
  />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://ilmulquran.com/thank-you" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Thank You for Submitting | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Your free trial request has been received. We look forward to guiding you on your Quran learning journey!"
  />
  <meta property="og:url" content="https://ilmulquran.com/thank-you" />
  <meta property="og:site_name" content="ilmulQuran" />
 
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Thank you confirmation image" />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Thank You – ilmulQuran Online Quran Academy"
  />
  <meta
    name="twitter:description"
    content="We’ve received your form successfully. Our team will contact you shortly for your free Quran trial class."
  />
  
</head>

    </head>


    <div className="container mx-auto px-6 py-12">
      {id ? (
        <div className="bg-white shadow-md rounded-lg border border-teal-600 p-8 text-center">
          <FaCheckCircle className="text-teal-500 text-6xl mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold text-[#003366] mb-4">
            Thank You for Submitting the Form!
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We appreciate your interest in{" "}
            <span className="text-[#1a73e8]">ilmulQuran Online Academy</span>.
            Our team will reach out to you soon with more details.
          </p>
          <LeadsAddInfoForm id={id} />
          <Link
            href="/"
            className="mt-8 inline-block text-teal-600 text-lg font-semibold"
          >
            Return to Home
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg border border-teal-600 p-8 text-center">
          <h2 className="text-4xl font-extrabold text-[#003366] mb-4">
            Thank You for Reaching Out!
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We are excited to offer you a{" "}
            <span className="text-[#1a73e8] font-bold">free trial class Our Team will contact you As Soon As Possible</span>!
          </p>
   
        </div>
      )}
    </div>
    </>
  );
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThanksPage />
    </Suspense>
  );
}
