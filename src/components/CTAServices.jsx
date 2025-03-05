import React from 'react';
import PropTypes from "prop-types";
import { ArrowRight } from 'lucide-react';

const CTAServices = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full 
        max-w-[1440px] 
        mx-auto 
        bg-whitesmoke-200 
        py-16 
        md:py-28 
        px-4 
        md:px-16 
        flex 
        flex-col 
        items-center 
        justify-center 
        text-center 
        md:text-left
        ${className}
      `}
    >
      <div className="
        w-full
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-8 
        md:gap-16 
        items-center
        max-w-screen-xl
        mx-auto
      ">
        {/* Heading Column */}
        <div className="
          flex 
          flex-col 
          items-center 
          md:items-start 
          justify-center 
          space-y-4
        ">
          <h1 className="
            text-3xl 
            md:text-5xl 
            font-bold 
            leading-tight 
            text-gray-900
            max-w-[500px]
            text-center 
            md:text-left
          ">
            Get Your Custom Proposal Today
          </h1>
        </div>

        {/* Content Column */}
        <div className="
          flex 
          flex-col 
          items-center 
          md:items-start 
          justify-center 
          space-y-8
          text-center 
          md:text-left
        ">
          <p className="
            text-base 
            md:text-lg 
            text-gray-700 
            leading-relaxed
            max-w-[500px]
          ">
            Ready to take the next step? Contact us now for more information or to request a tailored proposal that meets your needs.
          </p>

          {/* Action Buttons */}
          <div className="
            flex 
            flex-col 
            md:flex-row
            items-center 
            space-y-4 
            md:space-y-0
            md:space-x-4 
            w-full
            max-w-[500px]
          ">
            <button className="
              w-full 
              md:w-auto
              cursor-pointer 
              border 
              py-3 
              px-6 
              rounded-lg 
              bg-gradient-to-r 
              from-amber-500 
              to-pink-500 
              text-white
              hover:opacity-90 
              transition-all
              flex 
              items-center 
              justify-center
              gap-2
            ">
              Learn More <ArrowRight size={20} />
            </button>
            <button className="
              w-full 
              md:w-auto
              cursor-pointer 
              border 
              border-gray-300
              py-3 
              px-6 
              rounded-lg 
              bg-white
              text-darkslateblue
              hover:bg-gray-100 
              transition-all
            ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

CTAServices.propTypes = {
  className: PropTypes.string,
};

export default CTAServices;
