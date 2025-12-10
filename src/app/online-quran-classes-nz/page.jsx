import ChooseUs from "@/components/landingPage/ChooseUs";
import LandingRegister from "@/components/landingPage/landingRegister";
import CoursesComp from "@/components/landingPage/OnlineCourses";
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Steps from "@/components/landingPage/Steps";
import Script from "next/script";
import LogoPortion from "@/components/landingPage/LogoPortion";
import {
  regularCourses,
  shortCourses,
  chooseUs,
  stepsData,
} from "@/lib/Data";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';



export default function OnlineQuranClasses() {
  return (
    <>
     <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  

  <title>Online Quran Classes in New Zealand | 1-on-1 Tajweed & Hifz</title>
  <meta
    name="description"
    content="Best online Quran academy for New Zealand Muslims: Learn Noorani Qaida, Tajweed rules, Quran memorization & Islamic studies with native Arab tutors. Flexible timings for all ages. Start free trial!"
  />
  <meta
    name="keywords"
    content="Quran classes Auckland, Quran learning Wellington, Online Tajweed Christchurch, Hifz program New Zealand, Islamic studies for kids NZ, Female Quran teacher NZ, Noorani Qaida lessons, Quran tafsir course NZ"
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://ilmulquran.com/online-quran-classes-nz"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Certified Quran Teachers for New Zealand Students | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Personalized online Quran learning experience for NZ residents with daily schedule flexibility. Course options include Tajweed mastery, Quran memorization, and Islamic fundamentals."
  />
  <meta
    property="og:url"
    content="https://ilmulquran.com/online-quran-classes-nz"
  />
  <meta property="og:site_name" content="ilmulQuran" />
 
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="NZ family learning Quran online with Arabic teacher"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Flexible Quran Learning for New Zealand - Book Free Trial"
  />
  <meta
    name="twitter:description"
    content="1-on-1 online Quran classes tailored for NZ time zones. Learn proper Arabic pronunciation, Tajweed rules & Quranic wisdom from certified teachers."
  />
 

  {/* Structured Data */}
  <Script
    id="jsonld-quran-nz"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        name: "Comprehensive Quran Program for New Zealand Residents",
        description: "Online Islamic education program covering Quran recitation, Tajweed rules, memorization techniques and Islamic values with NZ-friendly scheduling.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulquran.com",
          areaServed: ["NZ"],
          description: "Premier online Quran academy serving New Zealand with certified Arabic tutors"
        },
        educationalLevel: "Beginner to Advanced",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          geographicArea: {
            "@type": "Country",
            name: "New Zealand"
          }
        },
        offers: {
          "@type": "Offer",
          category: "free trial class",
          url: "https://ilmulquran.com/get-register"
        }
      })
    }}
  />
</head>

      <div className="flex flex-col mt-8 lg:flex-row mx-4 xl:mx-32 2xl:mx-56" >
        <div className="w-full lg:w-1/2 bg-opacity-5 px-5 rounded-[8px] flex flex-col border-2 mr-8 justify-center">
          <LogoPortion heading="Special Classes for Kids & Adults in New Zealand" />
        </div>
        <div className="w-full lg:w-1/2 bg-opacity-5 px-6 md:px-9 lg:px-[56px] rounded-xl border-2 py-2 lg:py-12">
          <LandingRegister />
        </div>
      </div>
      <section className="pt-5">
        <div className="font-bold text-center text-[24px] lg:text-[40px] text-black px-1 mt-7">
          Online Quran Classes in New Zealand
        </div>
        <div className="font-medium text-center text-[16px] xl:text-[18px] text-black px-4 md:px-20 xl:px-40 mt-2 ">
          At ilmulQuran, we are committed to providing one-on-one online Quran classes for students across New Zealand, offering flexible schedules, qualified male and female teachers, and a variety of Quranic and Islamic courses tailored to all age groups.
        </div>
      </section>

      {/* choose us starts here */}
      <div className="mt-1">
        <ChooseUs chooseUs={chooseUs} />
      </div>

      {/* regular classes starts here */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-500 mb-4">
            Our Regular Quran Courses in New Zealand
          </h2>
          <div className="font-medium text-gray-700 text-[16px] md:text-[16px] xl:text-[17px] max-w-4xl mx-auto">
            We offer comprehensive regular courses that cover essential aspects of Quranic recitation and Islamic education, designed to progress students from beginner to advanced levels.
          </div>
        </div>
        <div className="flex flex-wrap gap-6 lg:gap-4 xl:gap-8 2xl:gap-3 justify-center">
          <CoursesComp courses={regularCourses} />
        </div>
      </div>

      {/* short classes */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-4">
            Our Short Quran Courses in New Zealand
          </h2>
          <div className="font-medium text-gray-700 text-[16px] md:text-[16px] xl:text-[17px] max-w-4xl mx-auto">
            For students looking for focused learning, our short courses provide an in-depth study of various aspects of Quran and Islamic knowledge.
          </div>
        </div>
        <div className="flex flex-wrap gap-6 lg:gap-4 xl:gap-8 2xl:gap-3 justify-center">
          <CoursesComp courses={shortCourses} />
        </div>
      </div>

      <div className="py-5 mt-5">
        <Steps stepsData={stepsData} />
      </div>

      <section className="mt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-4">
              Meet Our Teachers
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
              Learn from Qualified and Experienced Tutors
            </h3>
            <p className="font-medium mb-10 text-center text-[16px] xl:text-[18px] text-black px-4 md:px-20 xl:px-40 mt-2">
              Our team of dedicated male and female Quran teachers is committed to providing the best education to our students. They bring a wealth of knowledge and experience, ensuring personalized and effective teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800">
                Our Online Quran Teachers
              </h4>
            </div>

            <a
              href="/male-quran-teacher"
              className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <h4 className="text-lg font-semibold text-gray-800">
                Our Online Male Quran Teachers
              </h4>
            </a>

            <a
              href="/female-quran-teacher"
              className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <h4 className="text-lg font-semibold text-gray-800">
                Our Online Female Quran Teachers
              </h4>
            </a>
          </div>
        </div>
      </section>

                                         <BonusIslamicLearning />
      <div className="pt-5 px-2 md:px-6 lg:px-12 xl:px-16 2xl:px-56">
       
        <TestimonialComponent testimonialsData={testimonialsData} />
      </div>
    </>
  );
}
