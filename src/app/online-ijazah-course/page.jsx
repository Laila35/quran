import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import TestimonialComponent from "@/components/Testimonial"
import { testimonialsData } from "@/lib/Data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import StickyForm from "@/components/StickyForm";
const OnlineIjazahCourse = () => {
  const breadcrumbData = {
    id: 1,
    name: "Online Ijazah Course - Earn Your Ijazah Certificate",
    link: "/",
  };
  return (
    <>

<head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="preload"
    as="image"
    href="/Images/Courses/Online-ijazah-course.webp"
    fetchPriority="high"
  />
  <title>ilmulQuran | Online Ijazah Course</title>
  <meta
    name="description"
    content="Join our Online Ijazah Course at ilmulQuran to receive certification in Quranic recitation and Islamic studies. Expert male and female scholars from Arab countries. Enroll now!"
  />
  <meta
    name="keywords"
    content="Ijazah Course, Quranic Recitation Certification, Online Quran Classes, Hifz ul Quran, Memorize Quran Online"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://ilmulQuran.com/online-ijazah-course" />

  {/* Open Graph Meta Tags */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Online Ijazah Course with Certified Scholars | ilmulQuran"
  />
  <meta
    property="og:description"
    content="Get certified in Quranic recitation and Islamic sciences through our Ijazah Course taught by qualified Arab scholars. One-on-one online learning for kids and adults."
  />
  <meta property="og:url" content="https://ilmulQuran.com/online-ijazah-course" />
  <meta property="og:site_name" content="ilmulQuran" />
  <meta
    property="og:image"
    content="https://ilmulQuran.com/Images/Courses/Online-ijazah-course.webp"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="Ijazah certificate and Quran teacher on video call"
  />
  <meta property="og:image:type" content="image/webp" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Online Ijazah Course – Get Certified in Quran Recitation | ilmulQuran"
  />
  <meta
    name="twitter:description"
    content="Enroll in the Online Ijazah Program with verified scholars from the Arab world. Get officially certified in Tajweed and Quran memorization. One-on-one classes with male & female tutors."
  />
  <meta
    name="twitter:image"
    content="https://ilmulQuran.com/Images/Courses/Online-ijazah-course.webp"
  />

  {/* Enhanced Schema Markup */}
  <Script
    id="jsonld-ijazah-course"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Online Ijazah Course – Quran Certification Program",
        description:
          "Get Ijazah in Quran recitation and Islamic sciences through one-on-one online classes with certified male and female scholars from the Arab world. Flexible scheduling, expert guidance, and official certification.",
        provider: {
          "@type": "EducationalOrganization",
          name: "ilmulQuran",
          sameAs: "https://ilmulQuran.com",
          description:
            "Online Islamic learning platform offering certified Quran courses including Hifz, Tajweed, Ijazah, and Tafsir with expert teachers from the Arab world.",
        },
        url: "https://ilmulQuran.com/online-ijazah-course",
        image: "https://ilmulQuran.com/Images/Courses/Online-ijazah-course.webp",
        educationalLevel: "advanced",
        typicalAgeRange: "10+",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "one-on-one"],
          duration: "P6M",
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            ageRange: "10-60",
          },
          offers: {
            "@type": "Offer",
            category: "free trial",
            url: "https://ilmulQuran.com/get-register",
          },
        },
        coursePrerequisites: "Strong foundation in Tajweed and Quran reading",
        educationalCredentialAwarded: "Ijazah Certificate in Quranic Recitation",
      }),
    }}
  />
</head>
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
<div className="bd-gray-100 rounded-lg shadow-lg p-8 lg:w-2/3 order-2 lg:order-1">
          <h2 className="text-center text-2xl font-bold text-[#003366] mb-6">
            Comprehensive Online Ijazah Training with Qualified Scholars
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 p-6">
              <p className="text-base font-medium mb-4">
                Alhamdulillah! ilmulQuran now offers the Online Ijazah Course with
                great devotion. We have both male and female teachers from Arab
                countries like Egypt, Jordan, and Saudi Arabia who are experienced
                and provide online ijazah classes to students all over the world.
              </p>

              <h3 className="text-xl font-semibold text-[#003366] mb-4">
                Online Quran Ijazah Course
              </h3>
              <p className="text-base font-medium mb-4">
                In this Online Ijazah Course, you will have
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li className="mb-2">
                  <span className="font-bold">Personalized Instruction:</span> One-on-one sessions with experienced and qualified scholars who will guide you through the intricacies of Quranic recitation, Tajweed, and other relevant Islamic studies.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Structured Curriculum:</span> A well-organized syllabus that covers all necessary topics required for obtaining an ijazah.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Flexibility:</span> The convenience of online learning allows you to study at your own pace and schedule.
                </li>
                <li className="mb-2">
                  <span className="font-bold">Assessment and Certification:</span> Regular assessments to track your progress, culminating in the awarding of an ijazah certificate upon successful completion of the course.
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <Image
                width={600}
                height={600}
                src="/Images/Courses/Online-ijazah-course.webp"
                alt="Online Ijazah"
                className="rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">
            What is Ijazah?
          </h2>
          <p className="text-base font-medium mb-4">
            Ijazah, an Arabic term meaning “permission” or “authorization,” is a certification granted by a qualified Islamic scholar to a student, signifying that the student has gained sufficient knowledge in a specific field of Islamic study.
          </p>

          <p className="text-base font-medium mb-4">
            You can set a timetable for your online Ijazah course and recite the Quran to your teacher allocated to you by our team.
          </p>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">
            Ijazah in Multiple Qirat
          </h2>
          <p className="text-base font-medium mb-4">
            The ilmulQuran Online Academy offers ijazah in multiple Qirat (methods of Quranic recitation). There are ten recognized Qirat, but three of the most popular ones are:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <span className="font-bold">Hafs ‘an ‘Asim:</span> The most widely practiced recitation style in the Muslim world.
            </li>
            <li className="mb-2">
              <span className="font-bold">Warsh ‘an Nafi’:</span> Predominantly used in North and West Africa.
            </li>
            <li className="mb-2">
              <span className="font-bold">Qalun ‘an Nafi’:</span> Commonly recited in parts of Africa and the Maghreb region.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003366] mt-6 mb-4">
            Mashhur Qira’at
          </h3>
          <ol className="list-decimal ml-6 mb-4">
            <li className="text-gray-700 mb-2">Abu Ja’far (d. 130/747)</li>
            <li className="text-gray-700 mb-2">Ya’qub (d. 205/820)</li>
            <li className="text-gray-700 mb-2">Khalaf (d. 229/843)</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">
            Why Choose ilmulQuran Online Academy? Best Online Ijazah Course with Ijazah Certificate
          </h2>
          <p className="text-base font-medium mb-4">
            ilmulQuran Online Academy is renowned for offering the best online ijazah course, providing a robust and authentic learning experience. Our academy stands out due to:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              <span className="font-bold">Expert Instructors:</span> Our courses are taught by highly qualified scholars with extensive experience in Quranic recitation and Islamic sciences.
            </li>
            <li className="mb-2">
              <span className="font-bold">Comprehensive Curriculum:</span> We cover all essential aspects of obtaining an ijazah.
            </li>
            <li className="mb-2">
              <span className="font-bold">Flexibility and Accessibility:</span> Our online platform ensures that students from all over the world can access high-quality Islamic education.
            </li>
            <li className="mb-2">
              <span className="font-bold">Affordable Options:</span> We offer competitive pricing and various packages.
            </li>
          </ul>

          <p className="text-base font-medium mb-4">
            Join ilmulQuran Online Academy today and embark on your journey to earning an ijazah with confidence and convenience.
          </p>

          <h3 className="text-xl font-semibold text-[#003366] mt-8 mb-4">
            Student Testimonials
          </h3>
                             <BonusIslamicLearning/>                                                               
          
          <TestimonialComponent testimonialsData={testimonialsData} />

          <h2 className="text-2xl font-bold text-[#003366] mt-8 mb-4">
            Call to Action
          </h2>
          <p className="text-base font-medium mb-4">
            Ready to earn your Ijazah?{" "}
            <Link href="/get-register" className="text-blue-600 no-underline">
              Enroll in our Online Ijazah Course today!
            </Link>
          </p>
        </div>
      </div>
      </div>

    </>
  );
};

export default OnlineIjazahCourse;
