import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";

const MemorizeQuranOnline = () => {
  const breadcrumbData = {
    id: 1,
    name: "Memorize Quran Online: Hifz ul Quran with Expert Guidance",
    link: "/",
  };

  return (
    <>
      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      {/* Main Content */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Form Column */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <StickyForm
              courseName={breadcrumbData.name.split("–")[0].trim()}
            />
          </div>

          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-8">
              <h2 className="text-[#003366] mb-5 text-center font-bold text-4xl">
                Achieve Your Goal of Memorizing the Holy Quran
              </h2>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                  <p className="text-base font-medium">
                    Begin your journey to memorize the Holy Quran with our "Hifz ul Quran" course, designed for students of all ages. This course provides personalized and structured memorization plans through interactive online sessions with experienced tutors.
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-3">
                    Key Benefit
                  </h3>
                  <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
                    <li>
                      <span className="font-bold text-[#1a73e8]">Personalized 1 on 1 Sessions:</span> Dedicated male or female instructors to guide your memorization journey.
                    </li>
                    <li>
                      <span className="font-bold text-[#1a73e8]">24/7 Availability:</span> Flexible scheduling to fit any lifestyle and time zone.
                    </li>
                    <li>
                      <span className="font-bold text-[#1a73e8]">Experienced Instructors:</span> Learn from tutors with extensive experience in teaching Hifz ul Quran.
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 order-first lg:order-last">
                  <Image
                    width={600}
                    height={600}
                    src="/Images/Courses/memorize-quran-online.webp"
                    alt="Memorize Quran Online"
                    style={{ borderRadius: '25px' }}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                What is Hifz ul Quran?
              </h2>
              <p className="text-base font-medium pt-4">
                Hifz ul Quran is the memorization of the entire Quran. This noble and rewarding journey requires dedication, discipline, and expert guidance to ensure proper memorization and retention of the Holy Quran.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Why Memorize Quran Online?
              </h3>
              <p className="text-base font-medium pt-3">
                Our online platform offers several advantages:
              </p>
              <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
                <li>
                  <span className="font-bold text-[#1a73e8]">Convenience:</span> Access lessons from home or anywhere with an internet connection.
                </li>
                <li>
                  <span className="font-bold text-[#1a73e8]">Interactive Learning:</span> Benefit from live sessions, feedback, and continuous support.
                </li>
                <li>
                  <span className="font-bold text-[#1a73e8]">Structured Plans:</span> Follow a tailored memorization schedule that suits your pace.
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                How Our Course Works
              </h3>
              <p className="text-base font-medium pt-3">
                Our "Hifz ul Quran" course is structured to facilitate effective memorization:
              </p>
              <ul className="list-disc ml-8 space-y-2 pt-3 text-gray-700">
                <li>
                  <span className="font-bold text-[#1a73e8]">Initial Assessment:</span> Evaluate your current level to customize your learning plan.
                </li>
                <li>
                  <span className="font-bold text-[#1a73e8]">Daily Lessons:</span> Focus on small, manageable portions for daily memorization.
                </li>
                <li>
                  <span className="font-bold text-[#1a73e8]">Weekly Reviews:</span> Regular reviews to reinforce retention and ensure accuracy.
                </li>
                <li>
                  <span className="font-bold text-[#1a73e8]">Monthly Assessments:</span> Comprehensive assessments to monitor progress and address challenges.
                </li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
                Student Testimonials
              </h3>
              <div className="pt-3">
                <BonusIslamicLearning />
                <TestimonialComponent testimonialsData={testimonialsData} />
              </div>

              <h2 className="text-2xl md:text-3xl pt-6 font-bold text-[#003366]">
                Call to Action
              </h2>
              <p className="text-base font-medium pt-4">
                Ready to begin your Hifz ul Quran journey?{" "}
                <Link href="/get-register" className="text-blue-600 no-underline">
                  Enroll in our Hifz ul Quran course today!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemorizeQuranOnline;
