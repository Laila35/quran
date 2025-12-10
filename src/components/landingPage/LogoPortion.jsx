"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { useCountry } from "@/app/context/CountryContext";

const LogoPortion = ({ heading }) => {
  const { country } = useCountry();
  const pathname = usePathname();

  return (
    <div className="p-6 md:p-6 rounded-lg text-center text-black">
      {(pathname === "/online-quran-classes-nz" ||
        pathname === "/online-quran-classes-au") && (
         <Image
              width={180}
              height={180}
              src="/Images/Logo/ilmulquran.webp"
              alt="ilmulQuran Logo"
              className="mx-auto mb-4 w-[100px] sm:w-[180px]"
            />
      )}

      <div className="font-bold text-[20px] md:text-[24px] mb-2">{heading}</div>
      <div className="text-[16px] mb-2">(Male & Female)</div>
      <hr className="mb-4 border-gray-400" />
      <div className="text-[16px] mb-6 text-black">
        Qualified Male & Female Teachers
      </div>
      <hr className="mb-4 border-gray-400" />
      <div className="text-[16px] mb-6 text-black">
        24/7 Flexible Scheduling
      </div>
      {/* test */}
      <hr className="mb-4 border-gray-400" />
      {country === "United States of America" || country === "Canada" ? (
        <Link href="https://wa.me/19142791693" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-4 cursor-pointer"
          >
           <Image
                       src="/Images/Icons/whats-app.webp"
                       alt="WhatsApp Icon"
                       width={24} // Tailwind w-6 = 24px
                       height={24}
                       className="w-6 mr-2 h-auto"/>
            <span>+19142791693</span>
        </Link>
      ) : country === "Australia" || country === "New Zealand" ? (
        <Link href="https://wa.me/61480050048" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-4 cursor-pointer"
          >
         <Image
                      src="/Images/Icons/whats-app.webp"
                      alt="WhatsApp Icon"
                      width={24} // Tailwind w-6 = 24px
                      height={24}
                      className="w-6 mr-2 h-auto"
                    />
            <span>+61480050048</span>
        </Link>
      ) : (
        <Link href="https://wa.me/447862067920" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-4 cursor-pointer"
          >
             <Image
                       src="/Images/Icons/whats-app.webp"
                       alt="WhatsApp Icon"
                       width={24} // Tailwind w-6 = 24px
                       height={24}
                       className="w-6 mr-2 h-auto"
                     />
            <span>+447862067920</span>
        </Link>
      )}
    </div>
  );
};

export default LogoPortion;
