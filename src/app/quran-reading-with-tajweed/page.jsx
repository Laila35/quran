import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";

// Move SEO Head Content Here Instead of <head>
export const metadata = {
  title: "Certified Tajweed Course: Master Quran Recitation Online",
  description:
    "Master Quran recitation with certified Tajweed scholars. 98% accuracy rate, 10,000+ students trained. Start with free assessment!",
  keywords:
    "Tajweed Certification Course, Quran Phonetics Training, Arabic Pronunciation Rules, Online Tajweed Classes, Quran Recitation Correction, Certified Tajweed Teachers, Quran Reading Mastery",
  openGraph: {
    title: "📖 Quran Tajweed Mastery Course | Certified Online Program",
    description:
      "3-Level Tajweed Certification: From basic rules to professional recitation. 97% Student Success Rate | Free Trial Lesson Available",
    url: "https://ilmulquran.com/quran-reading-with-tajweed",
    images: [
      {
        url: "/Images/Courses/Quran-reading-tajweed.webp",
        width: 1200,
        height: 630,
        alt: "Student practicing Quran recitation with tajweed teacher",
      },
    ],
  },
  alternates: {
    canonical: "https://ilmulquran.com/quran-reading-with-tajweed",
  },
};

const ReadingWithTajweed = () => {
  const breadcrumbData = {
    id: 1,
    name: "Quran Reading with Tajweed: Perfect Your Recitation Online",
    link: "/",
  };

  return (
    <>
      {/* ─── JSON-LD Structured Data (keep this) ───────────────── */}
      <Script
        id="tajweed-course-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Professional Tajweed Certification Program",
            description:
              "Comprehensive 6-month course covering articulation points, pronunciation rules, and Quranic recitation techniques",
            provider: {
              "@type": "EducationalOrganization",
              name: "ilmulQuran",
              sameAs: "https://ilmulquran.com",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: ["online", "one-on-one"],
              duration: "P6M",
              offers: {
                "@type": "Offer",
                category: "free trial",
                url: "https://ilmulquran.com/get-register",
              },
            },
            educationalCredentialAwarded: "Tajweed Mastery Certification",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.95",
              ratingCount: "2345",
              bestRating: "5",
            },
          }),
        }}
      />

      {/* ─── Page Content ────────────────────────────────────── */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm courseName={breadcrumbData.name.split("–")[0].trim()} />
          </div>

          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h2 className="text-[#003366] mb-5 text-center font-bold text-4xl">
                Master the Art of Quranic Recitation with Tajweed
              </h2>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-medium">
                    Enhance your Quranic recitation with our "Quran Reading with Tajweed" course, designed for all ages. This course focuses on perfecting your pronunciation and applying Tajweed rules accurately through interactive and flexible online sessions.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                    Key Benefit
                  </h3>

                  <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
                    <li>
                      <span className="font-bold text-[#1a73e8]">Personalized 1 on 1 Sessions:</span> Learn with dedicated male or female instructors tailored to your learning style.
                    </li>
                    <li>
                      <span className="font-bold text-[#1a73e8]">24/7 Availability:</span> Flexible scheduling to accommodate any time zone and busy lifestyle.
                    </li>
                    <li>
                      <span className="font-bold text-[#1a73e8]">Experienced Instructors:</span> Benefit from instructors who have successfully guided over 300 students.
                    </li>
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/Quran-reading-tajweed.webp"
                    alt="Quran Reading With Tajweed"
                    style={{ borderRadius: "25px" }}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                What is Tajweed?
              </h2>
              <p className="text-base font-medium pt-4">
                Tajweed refers to the set of rules governing the way in which the words of the Quran should be pronounced during recitation. Learning Tajweed ensures that the recitation of the Quran is done with proper articulation and respect.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Why Learn Quran Reading with Tajweed Online?
              </h3>

              <p className="text-base font-medium pt-3">
                Our online platform offers several advantages:
              </p>

              <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
                <li><span className="font-bold text-[#1a73e8]">Convenience:</span> Access lessons from home or on the go.</li>
                <li><span className="font-bold text-[#1a73e8]">Interactive Learning:</span> Utilize multimedia resources, live sessions, and immediate feedback.</li>
                <li><span className="font-bold text-[#1a73e8]">Cost-Effectiveness:</span> Save on travel and materials with our online resources.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                How Our Course Works
              </h3>

              <p className="text-base font-medium pt-3">
                Our "Quran Reading with Tajweed" course is structured to gradually improve your recitation skills:
              </p>

              <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
                <li><span className="font-bold text-[#1a73e8]">Weeks 1-4:</span> Introduction to basic Tajweed rules and pronunciation practice.</li>
                <li><span className="font-bold text-[#1a73e8]">Weeks 5-10:</span> Advanced Tajweed techniques and application in Quranic verses.</li>
                <li><span className="font-bold text-[#1a73e8]">Regular Reviews:</span> Oral tests and quizzes to reinforce learning and track progress.</li>
              </ul>

              <BonusIslamicLearning />

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>

              <div className="pt-3">
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadingWithTajweed;
