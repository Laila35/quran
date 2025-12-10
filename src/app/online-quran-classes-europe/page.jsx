import ChooseUs from "@/components/landingPage/ChooseUs";
import CoursesComp from "@/components/landingPage/OnlineCourses";
import LandingRegister from "@/components/landingPage/landingRegister";
import TestimonialComponent from "@/components/Testimonial"
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { testimonialsData } from "@/lib/Data";
import Steps from "@/components/landingPage/Steps";
import Script from "next/script";
import SpecialClassesEurope from "@/components/landingPage/SpecialClassesEurope";
import {
    regularCourses,
    shortCourses,
    chooseUs,
    stepsData,
} from "@/lib/Data";



export default function OnlineQuranClasses() {
    return (
        <>

      <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="preload"
      as="image"
      href="/Images/courses/quran-classes-europe.webp"
      fetchPriority="high"
    />

    <title>Online Quran Classes in Europe | Certified Tutors | ilmulQuran</title>
    <meta
      name="description"
      content="Join one-on-one Quran classes in Europe for kids & adults. Learn Tajweed, Hifz, Qaida with certified male & female teachers. Flexible schedules, free trial. Start today!"
    />
    <meta
      name="keywords"
      content="Quran Classes Europe, Online Tajweed UK, Hifz Program Germany, Islamic Studies France, Quran for Kids Spain, Arabic Classes Italy, Muslim Education Netherlands, Quran Tutor Belgium"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://ilmulquran.com/online-quran-classes-europe" />

    {/* Open Graph Meta Tags */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Online Quran Classes in Europe | 1-on-1 Learning with Certified Tutors"
    />
    <meta
      property="og:description"
      content="Premium Quran education for European Muslims: Learn Tajweed, Hifz & Islamic studies with native Arabic tutors. Free trial class available."
    />
    <meta property="og:url" content="https://ilmulquran.com/online-quran-classes-europe" />
    <meta property="og:site_name" content="ilmulQuran" />

    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="European family learning Quran online with Arabic teacher"
    />
    <meta property="og:image:type" content="image/webp" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Online Quran Classes Europe – Certified Native Tutors"
    />
    <meta
      name="twitter:description"
      content="1-on-1 Quran learning for European residents: Tajweed, Hifz & Tafsir with Arabic-speaking teachers. Start free trial today!"
    />
 
    {/* Enhanced Schema Markup */}
    <Script
      id="jsonld-quran-europe"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "European Online Quran Program",
          description: "Comprehensive Quran education for European residents featuring Tajweed mastery, Hifz program, and Islamic studies with native Arabic instructors.",
          provider: {
            "@type": "EducationalOrganization",
            name: "ilmulQuran",
            sameAs: "https://ilmulquran.com",
            description: "Premium online Quran platform serving European countries since 2012"
          },
          url: "https://ilmulquran.com/online-quran-classes-europe",
          educationalLevel: "Beginner to Advanced",
          typicalAgeRange: "5-65",
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: ["online", "one-on-one"],
            duration: "P12M",
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "student",
              ageRange: "5-65"
            },
            offers: {
              "@type": "Offer",
              category: "free trial",
              url: "https://ilmulquran.com/get-register"
            }
          },
          coursePrerequisites: "Basic Arabic understanding",
          educationalCredentialAwarded: "Certificate of Quranic Excellence"
        })
      }}
    />
</head>
           
            <div className="flex flex-col mt-8 lg:flex-row mx-4 xl:mx-32 2xl:mx-56" >
                <div className="w-full lg:w-1/2 bg-opacity-5 px-5 rounded-[8px] flex flex-col border-2 mr-8 justify-center">
                    <SpecialClassesEurope heading="Special Online Quran Classes for Kids & Adults" />
                </div>
                <div className="w-full lg:w-1/2 bg-opacity-5 px-6 md:px-9 lg:px-[56px] rounded-xl border-2 py-2 lg:py-12">
                    <LandingRegister />
                </div>
            </div>
            <section className="pt-5">
                <div className="font-bold text-center text-[24px] lg:text-[40px] text-black px-1 mt-7">
                    Welcome to ilmulQuran Online Academy in Europe
                </div>
                <div className="font-medium text-center text-[16px] xl:text-[18px] text-black px-4 md:px-20 xl:px-40 mt-2 ">
                    At ilmulQuran Online Academy, we offer flexible and personalized online Quran learning for students across Europe. Whether you're in the UK, Germany, France, Spain, or any part of Europe, we bring Islamic education to your home with experienced teachers, interactive lessons, and customized study plans. Join us to embark on a spiritual journey through the Quran from the comfort of your home.
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
                        Our Regular Quran Courses for Students in Europe
                    </h2>
                    <div className="font-medium text-gray-700 text-[16px] md:text-[16px] xl:text-[17px] max-w-4xl mx-auto">
                        At ilmulQuran, we offer a variety of regular Quran courses designed to build a strong foundation in Quranic studies, Tajweed, and Islamic knowledge.
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
                        Short Courses for Busy Learners in Europe
                    </h2>
                    <div className="font-medium text-gray-700 text-[16px] md:text-[16px] xl:text-[17px] max-w-4xl mx-auto">
                        Our short courses are designed for students with limited time who want to focus on specific aspects of Islamic teachings.
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

            <div className="pt-5 px-2 md:px-6 lg:px-12 xl:px-16 2xl:px-56">
  <BonusIslamicLearning />

                <TestimonialComponent testimonialsData={testimonialsData} />            </div>
        </>
    );
}
