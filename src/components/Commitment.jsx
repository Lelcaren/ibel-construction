import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const Commitment = ({ className = "" }) => {
  return (
    <section 
      className={`
        w-full max-w-7xl 
        mx-auto 
        py-16 px-4 
        bg-gray-50 
        flex flex-col 
        md:flex-row 
        items-center 
        gap-12 
        ${className}
      `}
    >
      <div className="flex-1 space-y-6 md:pr-12">
        <div className="text-lg font-medium text-blue-600">
          Integrity
        </div>
        <h1 
          className="
            text-4xl md:text-5xl 
            font-bold 
            text-gray-900 
            leading-tight
          "
        >
          Our Commitment to Excellence in Contracting
        </h1>
      </div>
      
      <div className="flex-1 space-y-8">
        <p 
          className="
            text-lg 
            text-gray-700 
            leading-relaxed
          "
        >
          With years of experience in government contracting, we pride ourselves on delivering high-quality services that meet the unique needs of our clients. Our vision is to lead the industry through innovation, reliability, and a steadfast commitment to integrity.
        </p>
        
        <div className="flex items-center space-x-6">
          <button 
            className="
              px-6 py-3 
              bg-gradient-to-b 
              from-amber-400 
              to-pink-500 
              text-white 
              rounded-md 
              hover:opacity-90 
              transition-opacity 
              font-semibold
            "
          >
            Learn More
          </button>
          
          <a 
            href="#contact" 
            className="
              flex 
              items-center 
              text-gray-800 
              hover:text-blue-600 
              transition-colors 
              group
            "
          >
            <span className="mr-2">Contact</span>
            <ChevronRight 
              className="
                group-hover:translate-x-1 
                transition-transform
              " 
            />
          </a>
        </div>
      </div>
    </section>
  );
};

Commitment.propTypes = {
  className: PropTypes.string,
};

export default Commitment;
