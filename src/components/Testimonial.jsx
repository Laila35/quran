"use client";
import React from "react";import BonusIslamicLearning from '@/components/BonusIslamicLearning';
import { testimonialsData } from "@/lib/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  return (
    <div className="relative py-12 md:py-10 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-full opacity-20 blur-xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-teal-600 bg-clip-text text-transparent mb-4 md:mb-6">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
            Discover why thousands of families trust us with their success stories
          </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-14 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <div className="w-14 h-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full"></div>
          </div>
        </div>
        
        <Swiper
          spaceBetween={20}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial?.id} className="flex justify-center px-2 py-2">
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-5 h-[240px] md:h-[220px] flex flex-col transition-all duration-500 border overflow-hidden hover:-translate-y-2">
                {/* Gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Title */}
                <div className="relative z-10 text-center mb-3">
                  <h4 className="font-semibold text-lg md:text-base text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                    {testimonial?.title}
                  </h4>
                </div>

                {/* Description */}
                <div className="relative z-10 flex-grow flex items-center">
                  <p className="text-gray-600 text-center leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    "{testimonial?.description}"
                  </p>
                </div>

                {/* Dots */}
                {/* <div className="relative z-10 mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:bg-teal-500 transition-colors duration-300"></div>
                    <div className="w-2 h-2 bg-teal-300 rounded-full group-hover:bg-teal-400 transition-colors duration-300"></div>
                    <div className="w-2 h-2 bg-teal-200 rounded-full group-hover:bg-teal-300 transition-colors duration-300"></div>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
