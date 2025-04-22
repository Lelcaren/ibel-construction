import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const Commitment = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full 
        max-w-[1200px] 
        mx-auto 
        py-8 sm:py-10 md:py-16 lg:py-20
        px-4 sm:px-6 lg:px-8
        bg-gray-50 
        ${className}
      `}
    >
      <div className="
        flex 
        flex-col 
        lg:flex-row 
        items-start
        lg:items-center 
        gap-6 sm:gap-8 lg:gap-16
        w-full
      ">
        {/* Left Column - Title Section */}
        <div className="lg:flex-1 space-y-4 sm:space-y-6 w-full min-w-[400px]">
          <div className="text-base sm:text-lg font-medium text-blue-600">
            Integrity
          </div>
          <h1 className="
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-bold 
            text-gray-900 
            leading-tight
          ">
            Our Commitment to Excellence in Contracting
          </h1>
        </div>

        {/* Right Column - Content Section */}
        <div className="lg:flex-1 space-y-6 sm:space-y-8 w-full min-w-[400px]">
          <div className="w-full">
          <p className="
  text-base
  sm:text-lg
  md:text-xl
  lg:text-xl
  text-gray-700
  leading-relaxed
  break-words
  max-w-full
  sm:max-w-[500px]
  md:max-w-[600px]
  lg:max-w-[700px]
  xl:max-w-[750px]
  mq450:text-sm
  mq450:leading-snug
">
  With years of experience in government contracting, we pride ourselves on delivering high-quality services that meet the unique needs of our clients. Our vision is to lead the industry through innovation, reliability, and a steadfast commitment to integrity.
</p>

          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="
              px-4 
              sm:px-6 
              py-2 
              sm:py-3 
              bg-gradient-to-b 
              from-amber-400 
              to-pink-500 
              text-white 
              rounded-md 
              hover:opacity-90 
              transition-opacity 
              font-semibold 
              w-full 
              sm:w-auto 
              text-center
              shadow-md
              hover:shadow-lg
              text-sm
              sm:text-base
            ">
              Learn More
            </button>
            
            <a 
              href="#contact" 
              className="
                flex 
                items-center 
                justify-center
                sm:justify-start
                text-gray-800 
                hover:text-blue-600 
                transition-colors 
                group 
                py-2
                w-full
                sm:w-auto
                text-sm
                sm:text-base
              "
            >
              <span className="mr-2">Contact</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Commitment.propTypes = {
  className: PropTypes.string,
};

export default Commitment;

