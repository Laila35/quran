import React from "react";
import Head from "next/head";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
import { stepsData, testimonialsData } from "@/lib/Data";
import Steps from "@/components/landingPage/Steps";
import TestimonialComponent from "@/components/Testimonial";
import BonusIslamicLearning from "@/components/BonusIslamicLearning";

const OurServices = () => {
  const breadcrumbData = {
    id: 1,
    name: "Our Services - ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>
      <head>
        <title>ilmulQuran | Our Services</title>
        <meta
          name="description"
          content="Discover our comprehensive Islamic education services, including Quran Recitation, Memorization, Tafsir, Islamic Studies, Arabic Language, and Ten Qirat. Learn with expert guidance at ilmulQuran."
        />
        <meta
          name="keywords"
          content="Quran Recitation, Quran Memorization, Tafsir and Translation, Islamic Studies, Arabic Language, Ten Qirat, online Islamic courses, ilmulQuran"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ilmulQuran.com/our-services/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ilmulQuran | Our Services" />
        <meta
          property="og:description"
          content="Discover our comprehensive Islamic education services, including Quran Recitation, Memorization, Tafsir, Islamic Studies, Arabic Language, and Ten Qirat. Learn with expert guidance at ilmulQuran."
        />
        <meta property="og:url" content="https://ilmulQuran.com/our-services/" />
        <meta property="og:site_name" content="ilmulQuran" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ilmulQuran | Our Services" />
        <meta
          name="twitter:description"
          content="Discover our comprehensive Islamic education services, including Quran Recitation, Memorization, Tafsir, Islamic Studies, Arabic Language, and Ten Qirat. Learn with expert guidance at ilmulQuran."
        />
      </head>

      <Script
        id="jsonld-our-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "ilmulQuran Services",
            description:
              "Explore the diverse range of online Islamic education services provided by ilmulQuran, including Quran Recitation, Memorization, Tafsir, Arabic Language, and more.",
            url: "https://ilmulquran.com/our-services/",
            itemListElement: [
              {
                "@type": "Service",
                name: "Quran Recitation",
                description:
                  "Learn to recite the Quran with proper Tajweed from expert tutors.",
                provider: {
                  "@type": "EducationalOrganization",
                  name: "ilmulQuran",
                  sameAs: "https://ilmulquran.com",
                },
              },
              {
                "@type": "Service",
                name: "Quran Memorization",
                description:
                  "Step-by-step Hifz program with daily revision and personal coaching.",
                provider: { "@type": "EducationalOrganization", name: "ilmulQuran" },
              },
              {
                "@type": "Service",
                name: "Tafsir and Translation",
                description:
                  "Understand the meanings and context of Quranic verses with detailed Tafsir.",
                provider: { "@type": "EducationalOrganization", name: "ilmulQuran" },
              },
              {
                "@type": "Service",
                name: "Islamic Studies",
                description:
                  "Comprehensive lessons in Aqeedah, Fiqh, Seerah, and daily Islamic practices.",
                provider: { "@type": "EducationalOrganization", name: "ilmulQuran" },
              },
              {
                "@type": "Service",
                name: "Arabic Language",
                description:
                  "Master Arabic reading, writing, and conversation for Islamic understanding.",
                provider: { "@type": "EducationalOrganization", name: "ilmulQuran" },
              },
              {
                "@type": "Service",
                name: "Ten Qirat",
                description:
                  "Advanced course in the Ten Qirat styles of Quranic recitation.",
                provider: { "@type": "EducationalOrganization", name: "ilmulQuran" },
              },
            ],
          }),
        }}
      />

      <div className="w-full">
        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm courseName="Our Services" />
          </div>

          {/* Content Column */}  
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <h2 className="text-[#003366] mb-8 text-center font-bold text-4xl">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              At ilmulQuran, we are committed to offering a rich array of services tailored
              to meet your Islamic learning needs. Whether you're just beginning your
              journey or deepening your knowledge, our expertly crafted courses are
              designed to provide a profound understanding of the Quran and Islamic
              teachings. Guided by experienced instructors, we ensure that every step of
              your learning journey is both fulfilling and transformative.
            </p>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Quran Recitation Classes",
                  desc: "Perfect Your Recitation: Our Quran Recitation classes empower you to recite the Quran with precision, mastering Tajweed rules for eloquence and accuracy in every verse.",
                },
                {
                  title: "Quran Memorization",
                  desc: "Memorize with Confidence: Our tailored memorization program supports you in memorizing the Quran at your pace, with expert guidance ensuring every verse is firmly retained.",
                },
                {
                  title: "Tafsir and Translation",
                  desc: "Unlock Quranic Insights: Delve into the deeper meanings of the Quran through our Tafsir and Translation courses, connecting divine messages to your everyday life.",
                },
                {
                  title: "Islamic Studies",
                  desc: "Expand Your Knowledge: Explore key Islamic sciences such as Fiqh, Aqeedah, and Seerah, building a solid foundation for your faith and spiritual growth.",
                },
                {
                  title: "Arabic Language",
                  desc: "Master Quranic Arabic: Learn the language of the Quran, deepening your connection with its teachings through comprehensive and engaging lessons in Arabic.",
                },
                {
                  title: "Learn Ten Qirat Online",
                  desc: "Master Diverse Recitations: Explore the ten recognized Quranic recitations, enhancing your recitation skills and broadening your understanding of Quranic phonetics.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="transition-transform transform hover:scale-105 bg-white p-8 rounded-xl shadow-xl text-center"
                >
                  <h3 className="text-xl font-semibold text-[#003366] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#1a73e8]">
                      {service.desc.split(":")[0]}:
                    </span>{" "}
                    {service.desc.split(":")[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-16">
          <Steps stepsData={stepsData} />
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 container mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#003366] text-center mb-6">
            Student Testimonials
          </h3>
          <BonusIslamicLearning />
          <TestimonialComponent testimonialsData={testimonialsData} />
        </div>
      </div>
    </>
  );
};

export default OurServices;
