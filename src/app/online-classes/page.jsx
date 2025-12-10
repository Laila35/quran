"use client";
import Link from "next/link";
import { testimonialsData } from "@/lib/Data";
import LandingRegister from "@/components/landingPage/landingRegister";
import TestimonialComponent from "@/components/Testimonial";


import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import SpecialClasses from "@/components/landingPage/SpecialClasses";
import CoursesComp from "@/components/landingPage/LandingCourses";
import ChooseUs from "@/components/landingPage/ChooseUs";
import Steps from "@/components/landingPage/Steps";
import { regularCourses, shortCourses, chooseUs, stepsData } from "@/lib/Data";
import MeetOurTeachers from "@/components/MeetOurTeachers";
import ServiceHighlights from "@/components/review";
import WhoWeAre from "@/components/WhoWeAre";
import CompactIslamicServices from "@/components/IslamicServices";
import Script from "next/script";

export default function OnlineClasses() {
  return (
    <>
   <head>
  <title>Online Quran Classes | Learn Quran & Islamic Studies - ilmulQuran Online Academy</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <meta
    name="description"
    content="Welcome to ilmulQuran Online Academy. Learn Quran and Islamic studies online with expert tutors. Explore our courses and start your journey today."
  />
  <meta
    name="keywords"
    content="Online Quran Classes, Learn Quran Online, Islamic Studies, Quran Tutoring, Quran Reading, Quran Recitation, Islamic Education, ilmulQuran"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulquran.com/online-classes" />

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Quran Classes | Learn Quran & Islamic Studies - ilmulQuran Online Academy"
  />
  <meta
    property="og:description"
    content="Join ilmulQuran Online Academy to learn Quran and Islamic studies with expert tutors from the comfort of your home. Flexible schedules and personalized lessons."
  />
  <meta property="og:url" content="https://ilmulquran.com/online-classes" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulquran.com/Images/online-quran-classes-banner.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Students learning Quran online with teacher"
  />
  <meta property="og:image:type" content="image/png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Online Quran Classes | Learn Quran & Islamic Studies - ilmulQuran Online Academy"
  />
  <meta
    name="twitter:description"
    content="Learn Quran and Islamic studies online with expert tutors at ilmulQuran. Personalized classes with flexible timing. Enroll today!"
  />
  <meta
    name="twitter:image"
    content="https://ilmulquran.com/Images/OG/online-quran-classes-twitter.png"
  />
<Script
  id="jsonld-online-quran-classes"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Online Quran Classes",
      description:
        "Learn Quran and Islamic studies online with expert tutors at ilmulQuran Online Academy. Personalized classes and flexible scheduling.",
      provider: {
        "@type": "EducationalOrganization",
        name: "ilmulQuran",
        sameAs: "https://ilmulquran.com",
        description: "Online Islamic education platform specializing in Quran and Islamic studies.",
      },
      url: "https://ilmulquran.com/online-classes",
      educationalLevel: "all",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: ["online", "one-on-one"],
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
      },
    }),
  }}
/>
</head>



        <div>
          <div className="flex flex-col mt-8 lg:flex-row mx-4  xl:mx-32 2xl:mx-56">
            <div className="w-full lg:w-1/2 bg-opacity-5 px-5 rounded-[8px] flex flex-col mb-4  border-teal-600 mr-8 justify-center">
              <SpecialClasses />
            </div>
            <div className="w-full lg:w-1/2  bg-opacity-5 rounded-[8px] px-6 md:px-9 lg:px-[56px]  border-teal-600 mb-4 py-2 lg:py-12">
              <LandingRegister />
            </div>

          </div>
                     
      {/* Service Highlights */}
        <ServiceHighlights />
        

    {/* Services Section */}
  <CompactIslamicServices/>


          <div className=" font-bold text-center text-[24px] lg:text-[40px] text-black px-1 mt-4">
            Our Regular Online Courses
          </div>
          <div className="font-medium text-center text-[16px] xl:text-[18px] text-black px-4 md:px-20 xl:px-40 mt-2 mb-6">
            Explore our comprehensive regular courses designed to provide a deep
            understanding of Quranic studies and Islamic education. Each course
            is structured to build your knowledge and skills progressively.
          </div>
          <div className="flex flex-wrap gap-6 lg:gap-4 xl:gap-8 2xl:gap-3 justify-center">
            <CoursesComp courses={regularCourses} />
          </div>
          <div className="font-bold text-center text-[24px] lg:text-[40px] text-black px-1 mt-4">
            Our Short Courses
          </div>
          <div className="font-medium text-center text-[16px] xl:text-[18px] text-black px-4 md:px-20 xl:px-40 mt-2 mb-5">
            Our short courses are designed for quick and focused learning on
            specific aspects of Quran and Islamic teachings, perfect for
            students with limited time.
          </div>
          <div className="flex flex-wrap mb-5 gap-6 lg:gap-4 xl:gap-8 2xl:gap-3 justify-center">
            <CoursesComp courses={shortCourses} />
          </div>
        <WhoWeAre />

 
          <ChooseUs chooseUs={chooseUs} />

            {/* Meet Our Teachers Section */}
      <section>
        <MeetOurTeachers />
      </section>


          <Steps stepsData={stepsData} />
        </div>

          {/* CTA Section */}
          <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Quranic Journey Today</h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of students worldwide who are learning the Quran and Islamic studies from expert teachers in a supportive online environment.
              </p>
              <Link 
                href="/get-register" 
                className="inline-flex items-center bg-white text-teal-600 font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-white/30 transition duration-300 transform hover:-translate-y-1"
              >
                <span>Start Free Trial</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
          </div>
          <div className="pt-5 px-2 md:px-6 lg:px-12 xl:px-16 2xl:px-56 ">
            <BonusIslamicLearning />
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>
        </section>
    </>
  );
}
