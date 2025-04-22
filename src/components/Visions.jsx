import React from 'react';
import PropTypes from "prop-types";
import { Check, ArrowRight } from 'lucide-react';

const Visions = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] min-w-[320px] mx-auto bg-whitesmoke-200 py-6 sm:py-10 md:py-16 lg:py-24 px-3 sm:px-6 md:px-8 lg:px-12 overflow-hidden ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start justify-between w-full">
        
        {/* Content Column */}
        <div className="flex flex-col items-start justify-start w-full lg:w-1/2 space-y-3 md:space-y-5 lg:space-y-6 order-2 lg:order-1">
          {/* Section Label */}
          <div className="inline-block text-amber-600 font-semibold text-xs sm:text-sm md:text-base tracking-wide uppercase">
            Design & Build
          </div>

          {/* Main Heading - Significantly shorter for small screens */}
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 w-full">
            <span className="sm:hidden">Design & Build Services</span>
            <span className="hidden sm:inline md:hidden">Transforming Visions: Design & Build</span>
            <span className="hidden md:inline">Transforming Visions into Reality: Our Design & Build Services</span>
          </h1>

          {/* Description - Different versions for different screen sizes */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed w-full">
            <span className="sm:hidden">We integrate design with efficient construction, tailored to your needs.</span>
            <span className="hidden sm:inline md:hidden">Our services integrate innovative design with efficient construction, prioritizing your vision.</span>
            <span className="hidden md:inline">Our Design & Build services seamlessly integrate innovative design with efficient construction processes. We prioritize your vision, ensuring every project meets your specific needs.</span>
          </p>

          {/* Key Features */}
          <div className="space-y-2 md:space-y-3 w-full max-w-full mt-1">
            {[
              "Innovative designs",
              "Streamlined processes",
              "Collaborative approach"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start sm:items-center space-x-2 md:space-x-3 group hover:translate-x-1 transition-transform duration-300"
              >
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 sm:mt-0 md:w-6 md:h-6 rounded-full bg-amber-600 flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors">
                  <Check className="text-white" size={12} aria-hidden="true" />
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
                  {feature}
                  <span className="hidden sm:inline"> that enhance your project</span>
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-4 w-full">
            <button className="w-full sm:max-w-[180px] md:max-w-none cursor-pointer py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg bg-gradient-to-r from-amber-500 to-pink-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1 flex items-center justify-center gap-2 transition-all duration-300">
              <span className="whitespace-nowrap">Learn More</span> <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
            <button className="w-full sm:max-w-[180px] md:max-w-none cursor-pointer py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg border border-amber-600/30 bg-transparent text-darkslateblue font-medium text-sm sm:text-base hover:bg-amber-600/5 hover:border-amber-600 flex items-center justify-center gap-2 transition-all duration-300">
              <span className="whitespace-nowrap">Sign Up</span>
              <img
                className="h-4 w-4 sm:h-5 sm:w-5 relative overflow-hidden flex-shrink-0"
                alt=""
                src="/icon--chevronright.svg"
              />
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-2 mb-6 lg:mb-0">
          <div className="overflow-hidden rounded-lg md:rounded-xl shadow-lg md:shadow-xl relative aspect-[4/3] transform hover:scale-[1.02] transition-all duration-500 ease-out">
            <img
              src="/transform.jpg"
              alt="Design & Build Services"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-transparent to-pink-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>

          {/* Decorative gradient circles - responsive sizes */}
          <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 blur-lg z-0 hidden sm:block"></div>
          <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-amber-500/10 blur-md z-0 hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

Visions.propTypes = {
  className: PropTypes.string,
};

export default Visions;