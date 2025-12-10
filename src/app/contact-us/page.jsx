"use client";
import Banner from "@/components/Banner";
import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import Register from "@/components/landingPage/Register";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";



const ContactUs = () => {
  const breadcrumbData = {
    id: 1,
    name: "Contact us",
    link: "/",
  };

  
  return (

    <>
    <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
  <title>Contact Us - Get in Touch | ilmulQuran Online Academy</title>

  {/* Canonical URL */}
  <link rel="canonical" href="https://ilmulQuran.com/contact-us" />



  {/* Meta Description */}
  <meta
    name="description"
    content="Have questions? Contact ilmulQuran Online Academy for inquiries about courses, schedules, or support. We’re here to assist you!"
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Contact ilmulQuran, Quran Classes Support, Islamic Education Help, Get in Touch, Online Quran Academy Contact"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ilmulQuran.com/contact-us" />
  <meta property="og:title" content="Contact Us - Get in Touch | ilmulQuran Online Academy" />
  <meta property="og:description" content="Reach out to ilmulQuran for help with Islamic courses, schedules, or general queries. Our support team is ready to assist." />
  <meta property="og:image" content="/Images/contact-us-hero.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Contact ilmulQuran Support" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Us - ilmulQuran Online Academy" />
  <meta name="twitter:description" content="Got questions or need help? Contact ilmulQuran Online Academy for support and assistance today." />

  {/* JSON-LD Schema */}
  <Script
    id="contact-us-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ilmulQuran Online Academy",
        url: "https://ilmulQuran.com",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-234-567-8901",
          contactType: "Customer Service",
          areaServed: ["US", "UK", "Canada", "Australia", "Worldwide"],
          availableLanguage: ["English", "Urdu", "Arabic"]
        }
      })
    }}
  />

  {/* Additional Meta */}
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="ilmulQuran Team" />
  <meta name="theme-color" content="#2A593F" />
  <meta name="apple-mobile-web-app-title" content="ilmulQuran Academy" />
</head>



      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="text-lg p-2 mx-auto max-w-4xl font-semibold py-3 text-left">
        Contact Us for any question or queries and fill out the form bellow to
        request a free trial . We are available 24/7 for the support and
        services we offer.
      </div>

      <div className="mb-8 w-full  max-w-6xl mx-auto mt-3 rounded-[8px] px-6 md:px-9 lg:px-[56px] bg-[#E6F2EE] py-6 lg:py-12">
        <Register />

                 <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
      Student Testimonials
    </h3>
    <div className="pt-3">
      <TestimonialComponent testimonialsData={testimonialsData} />
    </div>
      </div>
    </>
  );
};

export default ContactUs;
