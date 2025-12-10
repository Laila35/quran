import Banner from "@/components/Banner";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaQuestionCircle, FaClipboardList } from "react-icons/fa";
import TestimonialComponent from "@/components/Testimonial";



import { testimonialsData } from "@/lib/Data";
import StickyForm from "@/components/StickyForm";
import Script from "next/script";

const CustomerService = () => {
  const breadcrumbData = {
    id: 1,
    name: "Customer Service | ilmulQuran Online Academy",
    link: "/",
  };

  return (
    <>

      
    <head>
   <meta charSet="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  
  
   <title>Customer Service | ilmulQuran Online Academy</title>
   <meta
     name="description"
     content="Reach out to ilmulQuran Online Academy's customer service for any queries or support. Contact us via email, phone, WhatsApp, or visit our Help & Support page for more assistance."
   />
   <meta
     name="keywords"
     content="Customer Service, Support Request, Contact ilmulQuran, Islamic Studies Support, Quran Learning Assistance, ilmulQuran Online Academy"
   />
   <meta name="robots" content="index, follow" />
   <link rel="canonical" href="https://ilmulquran.com/customer-service" />
  
   {/* Open Graph Meta Tags */}
   <meta property="og:locale" content="en_US" />
   <meta property="og:type" content="website" />
   <meta
     property="og:title"
     content="Customer Service | ilmulQuran Online Academy"
   />
   <meta
     property="og:description"
     content="Get in touch with ilmulQuran's customer service team for support and queries. Email, phone, WhatsApp contacts available for your assistance."
   />
   <meta property="og:url" content="https://ilmulquran.com/customer-service" />
   <meta property="og:site_name" content="ilmulQuran" />
  
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   <meta
     property="og:image:alt"
     content="Customer service support at ilmulQuran Online Academy"
   />
   <meta property="og:image:type" content="image/webp" />
  
   {/* Twitter Meta Tags */}
   <meta name="twitter:card" content="summary_large_image" />
   <meta
     name="twitter:title"
     content="Customer Service | ilmulQuran Online Academy"
   />
   <meta
     name="twitter:description"
     content="Contact ilmulQuran's customer service for assistance with courses, registration, and technical support. Multiple channels available."
   />
   
   {/* JSON-LD Structured Data for ContactPage */}
   <Script
     id="jsonld-customer-service"
     type="application/ld+json"
     strategy="afterInteractive"
     dangerouslySetInnerHTML={{
       __html: JSON.stringify({
         "@context": "https://schema.org",
         "@type": "ContactPage",
         "name": "Customer Service | ilmulQuran Online Academy",
         "url": "https://ilmulquran.com/customer-service",
         "description":
           "Contact ilmulQuran Online Academy's customer service for any queries or support related to Islamic courses, registration, and learning assistance.",
         "contactPoint": {
           "@type": "ContactPoint",
           "contactType": "customer support",
           "areaServed": ["US", "UK", "Canada"],
           "availableLanguage": ["English", "Urdu", "Arabic"]
         }
       }),
     }}
   />
 </head>


      {/* Mobile Form - Top of page (non-sticky) */}
      <div className="block lg:hidden">
        <StickyForm 
          courseName="Companions of Prophet Muhammad (PBUH) Course" 
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto px-3 mt-10 py-3 lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Content Area */}
        <div className="bg-gray-100 rounded-lg  p-8 lg:col-span-3">
          <h1 className="text-4xl font-extrabold text-center text-[#003366] mb-5">
            Customer Service
          </h1>
          <p className="mt-8 text-lg text-center text-gray-700 leading-relaxed">
            Welcome to the ilmulQuran Online Academy Customer Service page. We are dedicated to providing exceptional support to ensure your learning experience is smooth and hassle-free. Our team is here to assist you with any questions or concerns you may have.
          </p>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] text-center flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-teal-500" /> How to Reach Us
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              If you need help or have any questions, please contact us through the following methods:
            </p>
            <ul className="mt-4 list-disc text-gray-700 text-left space-y-3 mx-auto max-w-md">
              <li><FaEnvelope className="inline-block mr-2 text-teal-500" /> Email: <span className="text-blue-500">admin@ilmulQuran.com</span></li>
              <li>Phone/WhatsApp:
                <ul className="ml-6 list-disc space-y-2">
                  <li><FaPhoneAlt className="inline-block mr-2 text-teal-500" /> UK: +447780705840</li>
                  <li><FaPhoneAlt className="inline-block mr-2 text-teal-500" /> AUS: +61480050048</li>
                  <li><FaPhoneAlt className="inline-block mr-2 text-teal-500" /> US: +19142791693</li>
                </ul>
              </li>
              <li><FaClipboardList className="inline-block mr-2 text-teal-500" /> Student Portal:{" "}
                <a  aria-label="ilmulquran control panel" href="https://cp.ilmulQuran.com" className="text-blue-500 underline">
                  https://cp.ilmulQuran.com
                </a>
              </li>
              <li><FaQuestionCircle className="inline-block mr-2 text-teal-500" /> Live Chat: Available on our website</li>
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] text-center flex items-center justify-center gap-2">
              <FaClipboardList className="text-teal-500" /> Submit a Support Request
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              If you need further assistance, please visit our Help & Support page and fill out the support request form. Our support team will get back to you as soon as possible.
            </p>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] text-center flex items-center justify-center gap-2">
              <FaQuestionCircle className="text-teal-500" /> Frequently Asked Questions
            </h3>
            <p className="mt-6 text-base text-gray-700 text-center leading-relaxed">
              Below are some common questions we receive from our students. If your query is not listed here, please contact us directly or visit our FAQs section on the Help & Support page.
            </p>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-bold text-[#003366] text-center">
              General FAQs
            </h3>
            <ul className="mt-4 list-disc text-gray-700 text-left space-y-3 mx-auto max-w-md">
              <li>
                <span className="font-semibold text-[#1a73e8]">How do I enroll in a course?</span> You can enroll in any course by visiting our Courses page and selecting the course you wish to join. Follow the instructions to complete your enrollment.
              </li>
              <li>
                <span className="font-semibold text-[#1a73e8]">What are the payment options available?</span> We offer various payment methods. For detailed information, please visit our Quran Learning Fee page.
              </li>
              <li>
                <span className="font-semibold text-[#1a73e8]">How do I access my classes?</span> After enrolling, you can access your classes through the Student Portal. You will receive login details via email.
              </li>
              <li>
                <span className="font-semibold text-[#1a73e8]">Can I get a refund?</span> Yes, we have a refund policy in place. For more information, please visit our Refund Policy page.
              </li>
              <li>
                <span className="font-semibold text-[#1a73e8]">How do I contact my tutor?</span> You can contact your tutor through the student portal, email, or during your scheduled class time.
              </li>
              <li>
                <span className="font-semibold text-[#1a73e8]">What should I do if I face technical issues?</span> For technical support, please use our live chat on the website or email us at admin@ilmulQuran.com.
              </li>
            </ul>
          </section>

          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-6">
            Student Testimonials
          </h3>
          <div className="pt-3">
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>
        </div>

        {/* Desktop Form Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-8">
            <StickyForm 
              courseName="Companions of Prophet Muhammad (PBUH) Course" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerService;