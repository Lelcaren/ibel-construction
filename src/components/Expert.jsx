import React from 'react';
import PropTypes from "prop-types";
import { Check, ArrowRight } from 'lucide-react';

const Expert = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] min-w-[320px] mx-auto bg-whitesmoke-200 py-10 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between w-full">

        {/* Content Column */}
        <div className="flex flex-col items-start justify-start w-full lg:w-1/2 space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-1">
          {/* Section Label */}
          <div className="inline-block bg-amber-600/10 text-amber-600 font-semibold text-sm sm:text-base md:text-lg tracking-wide uppercase py-1 px-3 rounded-full">
            Project Management
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 max-w-full break-words">
            Expert Project Management for Government Contracts
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-normal break-words w-full max-w-full">
            Our Project Management services are tailored to handle large-scale government projects with precision and efficiency. With a proven track record, we ensure timely delivery and adherence to all regulatory standards.
          </p>

          {/* Key Features */}
          <div className="space-y-3 md:space-y-4 w-full max-w-full">
            {[
              "Specialized in large-scale government project management",
              "Proven track record of timely and efficient project delivery",
              "Strict adherence to regulatory standards and compliance"
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-colors">
                  <Check className="text-white" size={16} aria-hidden="true" />
                </span>
                <span className="text-sm sm:text-base text-gray-800 font-medium whitespace-normal break-words w-full max-w-full">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto cursor-pointer py-3 sm:py-4 px-6 sm:px-8 rounded-lg bg-gradient-to-r from-amber-500 to-pink-500 text-white font-medium text-base shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1 flex items-center justify-center gap-2 transition-all duration-300">
              Learn More <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto cursor-pointer py-3 px-6 rounded-lg border border-amber-600/30 bg-transparent text-darkslateblue font-medium text-base hover:bg-amber-600/5 hover:border-amber-600 flex items-center justify-center gap-2 transition-all duration-300">
              Sign Up
              <img
                className="h-5 w-5 relative overflow-hidden"
                alt=""
                src="/icon--chevronright.svg"
              />
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 relative group order-2 lg:order-2 mt-10 lg:mt-0">
          <div className="overflow-hidden rounded-xl shadow-xl relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] transform hover:scale-[1.02] transition-all duration-500 ease-out">
            <img
              src="/expert.jpg"
              alt="Project Management Illustration"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-transparent to-pink-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 blur-lg z-0 hidden sm:block"></div>
          <div className="absolute -top-6 -left-6 w-20 h-20 md:w-28 md:h-28 rounded-full bg-amber-500/10 blur-md z-0 hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

Expert.propTypes = {
  className: PropTypes.string,
};

export default Expert;
