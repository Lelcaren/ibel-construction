import React from 'react';
import PropTypes from "prop-types";
import { Check, ArrowRight } from 'lucide-react';

const Visions = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full 
        max-w-[1440px] 
        min-w-[400px] 
        mx-auto 
        bg-whitesmoke-200 
        py-28 
        px-16 
        flex 
        flex-col 
        items-start 
        justify-start 
        text-left 
        text-darkslateblue 
        font-sans 
        ${className}
      `}
    >
      <div className="
        grid 
        md:grid-cols-2 
        gap-12 
        items-center 
        w-full
      ">
        {/* Content Column */}
        <div className="
          flex 
          flex-col 
          items-start 
          justify-start 
          space-y-8
        ">
          {/* Section Label */}
          <div className="
            text-amber-600 
            font-semibold 
            text-lg 
            tracking-wide 
            uppercase
          ">
            Design & Build
          </div>

          {/* Main Heading */}
          <h1 className="
            text-4xl 
            md:text-5xl 
            font-bold 
            leading-tight 
            text-gray-900
          ">
            Transforming Visions into Reality: Our Comprehensive Design & Build Services
          </h1>

          {/* Description */}
          <p className="
            text-lg 
            text-gray-700 
            leading-relaxed
          ">
            Our Design & Build services seamlessly integrate innovative design with efficient construction processes. We prioritize your vision, ensuring that every project is tailored to meet your specific needs.
          </p>

          {/* Key Features */}
          <div className="space-y-4">
            {[
              "Innovative designs that inspire and elevate your space",
              "Streamlined processes for timely and cost-effective project delivery",
              "Collaborative approach ensuring client satisfaction at every stage"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="
                  flex 
                  items-center 
                  space-x-3 
                  text-gray-800
                "
              >
                <Check 
                  className="
                    text-amber-600 
                    flex-shrink-0
                  " 
                  size={24} 
                />
                <span className="text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="
            flex 
            items-center 
            space-x-6 
            mt-6
          ">
            <button className="
              cursor-pointer 
              border-buttons1 
              border-solid 
              border-[1px] 
              py-3 
              px-6 
              bg-[transparent] 
              rounded-3xs 
              [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] 
              flex 
              flex-row 
              items-center 
              justify-center
              hover:opacity-90 
              transition-all
            ">
              <div className="
                relative 
                text-base 
                leading-[150%] 
                font-text-small-normal 
                text-white 
                text-left
                flex 
                items-center 
                gap-2
              ">
                Learn More <ArrowRight size={20} />
              </div>
            </button>
            <div className="
              overflow-hidden 
              flex 
              flex-row 
              items-center 
              justify-center 
              gap-2
              text-darkslateblue
              hover:text-amber-600
              cursor-pointer
              transition-colors
            ">
              <div className="relative leading-[150%]">Sign Up</div>
              <img
                className="
                  h-6 
                  w-6 
                  relative 
                  overflow-hidden 
                  shrink-0
                "
                alt=""
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="
          relative 
          group 
          overflow-hidden 
          rounded-lg 
          shadow-lg
        ">
          <img
            src="/placeholder-image-2@2x.png"
            alt="Design & Build Services"
            className="
              w-full 
              h-full 
              object-cover 
              transform 
              group-hover:scale-105 
              transition-transform 
              duration-300
            "
            loading="lazy"
          />
          <div className="
            absolute 
            inset-0 
            bg-gradient-to-r 
            from-amber-500/20 
            to-pink-500/20 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-300
          "></div>
        </div>
      </div>
    </section>
  );
};

Visions.propTypes = {
  className: PropTypes.string,
};

export default Visions;