import Banner from "@/components/Banner";
import DiscountBanner from "@/components/DiscountBanner";
import FeePlan from "@/components/landingPage/FeePlans";
import React from "react";
import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { feePlanData } from "@/lib/Data";
import Script from "next/script";
import TestimonialComponent from "@/components/Testimonial";
import { testimonialsData } from "@/lib/Data";

const breadcrumbData = {
  id: 1,
  name: "Fee and Schedule Plan",
  link: "/",
};

const LearningFees = () => {
  return (
    <>
      <head>
        <title>ilmulQuran | Learning fee and prices</title>
        <meta
          name="description"
          content="Discover the affordable fees for our Quran learning programs at ilmulQuran Online Academy. Our courses offer high-quality education with transparent pricing. Find out more about our tuition fees and payment options today!"
        />
        <meta
          name="keywords"
          content="Fee and Schedule Plan, Quran Learning Fees, Quran Classes Pricing, Tuition Fees, ilmulQuran Payment Options"
        />
        <link
          rel="canonical"
          href="https://ilmulQuran.com/fee-and-schedule-plan"
        />
      </head>

      {/* <Banner breadcrumbData={breadcrumbData} /> */}

      <div className="w-full mx-auto px-6 py-10 mt-12">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-10 relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 to-teal-400 rounded-t-2xl"></div>

          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Start Your Quran Learning Journey
          </h2>

          <p className="text-gray-600 text-center mb-8">
            Select a schedule that works best for you, or request a custom class
            time. Whether you prefer weekday or weekend classes, we offer
            flexible options to suit your needs.
          </p>

          <p className="text-gray-600 text-center mb-8">
            We are now accepting payments in multiple currencies. If your
            currency is not listed, feel free to ask us about other available
            options.
          </p>

          <p className="font-bold text-lg text-teal-600 text-center">
            Each class lasts 30 minutes. A 1-hour session option is available
            upon request.
          </p>
        </div>
      </div>

      <DiscountBanner />

      <FeePlan feePlanData={feePlanData} />

      <div className="container mx-auto w-full px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-teal-700 mb-4 text-center">
            Quran Learning Fees Information
          </h2>

          <p className="mb-6 text-lg text-gray-800 leading-relaxed">
            The charges listed above are for a 30-minute class duration. If you
            prefer a 1-hour session, the fees will be double. If your country is
            not mentioned in the list above, please contact us for detailed fee
            information.
          </p>

          <div className="mb-6 p-4 bg-teal-50 border-l-4 border-teal-600 rounded-md">
            <p className="font-semibold text-lg text-teal-600">
              If you have a customized plan for your classes, please let us
              know, and we will make it possible for you, Insha'Allah.
            </p>
          </div>

          <p className="mb-6 text-lg text-gray-800 leading-relaxed">
            Affordable Quran learning fees are charged on a monthly basis,
            including public holidays (not weekly). Low-income families are
            offered a special 10% discount. Fees are due in advance every month.
            Available payment methods include 2Checkout, PayPal, and
            Credit/Debit card.
          </p>

          <div className="p-4 bg-teal-50 border-l-4 border-teal-600 rounded-md">
            <p className="text-lg text-teal-600">
              Eid holidays are included in the monthly fees of the students and
              are non-refundable as they occur twice a year.
            </p>
          </div>

          {/* ✅ Policies & Conditions Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#003366] mb-6 text-center">
              📜 Policies & Conditions (Shariah-Compliant)
            </h2>

            {/* Payment Policy */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              Payment Policy
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Fees are paid monthly in advance.</li>
              <li>
                Discounts may be given for multiple family members or longer
                commitments.
              </li>
              <li>
                If fee is not paid on time, classes will be paused until
                cleared.
              </li>
            </ul>

            {/* Attendance */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              Attendance & Make-up Classes
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                If a student misses class due to genuine reason (illness,
                travel), make-up class can be rescheduled with prior notice.
              </li>
              <li>
                Teacher absence will always be compensated with a make-up class.
              </li>
            </ul>

            {/* Discounts */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              Discounts
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                Need-based discounts can be offered (orphans, needy families) as
                Sadaqah Jariyah initiative.
              </li>
              <li>Bulk discounts (e.g., 3+ siblings) allowed.</li>
            </ul>

            {/* Cancellation */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              Cancellation Policy
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Students may cancel anytime before the next billing cycle.</li>
              <li>No refund for missed classes without notice.</li>
            </ul>

            {/* Quality Policy */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              Quality Policy
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                Premium track (Arabic Teachers) costs more due to higher teacher
                expertise.
              </li>
              <li>
                Non-Arabic track is affordable for those who want cost-effective
                learning.
              </li>
            </ul>

            {/* Shariah Notes */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              🕌 Shariah Notes
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                Charging different fees for different teacher expertise is Jaiz
                (permissible) because اجرت (wage) in Islam depends on skill,
                quality, and time.
              </li>
              <li>
                Transparency is wajib (mandatory) in contracts; hence fee and
                policies are clearly listed.
              </li>
              <li>
                Extra services (recorded sessions, supervisors, progress
                reports) can be included in premium packages as these are
                additional benefits.
              </li>
              <li>
                Discounts or free classes for needy students fall under khidmat
                & sadaqah jariyah.
              </li>
            </ul>

            {/* Final Notes */}
            <h3 className="text-xl font-semibold text-teal-700 mb-3">
              ⚖️ Final Notes
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                The aim is not just teaching Qur’an but making it accessible to
                every family.
              </li>
              <li>The Basic Track ensures affordability.</li>
              <li>
                The Premium Track ensures excellence with native teachers and
                advanced monitoring.
              </li>
              <li>
                Every parent/student knows exactly what they are paying for and
                what they will receive – making it 100% Shariah-compliant and
                professional.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <h3 className="text-xl md:text-2xl font-bold text-[#003366] pt-10">
            Student Testimonials
          </h3>
          <div className="pt-3">
            <TestimonialComponent testimonialsData={testimonialsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningFees;
