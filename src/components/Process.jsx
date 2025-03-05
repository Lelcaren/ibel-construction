import React from 'react';
import Column1 from "./Column1"; // Assuming this component exists
import PropTypes from "prop-types";

const Process = ({ className = "" }) => {
  return (
    <section
      className={`
        max-w-screen-xl 
        w-full 
        bg-whitesmoke-200 
        overflow-hidden 
        flex 
        flex-col 
        items-center 
        justify-start 
        py-28 
        px-4 
        md:px-16 
        box-border 
        gap-20 
        text-center 
        text-29xl 
        text-darkslateblue 
        font-text 
        sm:gap-10 
        sm:py-[47px] 
        sm:px-8 
        sm:box-border 
        xs:gap-5 
        lg:pt-[73px] 
        lg:pb-[73px] 
        lg:box-border 
        ${className}
      `}
    >
      <h1 
        className="
          m-0 
          w-full 
          max-w-[1200px] 
          relative 
          text-inherit 
          font-bold 
          font-[inherit] 
          inline-block 
          sm:text-10xl 
          lg:text-19xl 
          xs:text-5xl
        "
      >
        Our Comprehensive Process: From Consultation to Successful Project Completion
      </h1>
      
      <div 
        className="
          self-stretch 
          flex 
          flex-col 
          items-start 
          justify-start 
          text-5xl 
          font-text-small-normal 
          sm:gap-8 
          xs:gap-4
        "
      >
        <div 
          className="
            self-stretch 
            flex 
            flex-row 
            items-start 
            justify-center 
            flex-wrap 
            content-start 
            gap-12 
            sm:gap-6
          "
        >
          <Column1
            placeholderImage="/placeholder-image-3@2x.png"
            heading="Step 1: Initial Consultation to Understand Your Unique Project Needs"
            text="We begin with a detailed discussion to capture your vision and requirements."
          />
          <Column1
            placeholderImage="/placeholder-image-4@2x.png"
            heading="Step 2: Tailored Proposal and Project Planning for Your Approval"
            text="Our team crafts a customized proposal outlining the project scope and timeline."
          />
          <Column1
            placeholderImage="/placeholder-image-5@2x.png"
            heading="Step 3: Execution with Regular Updates and Quality Assurance Checks"
            text="We ensure transparency and quality through consistent communication and oversight."
          />
        </div>
      </div>
    </section>
  );
};

Process.propTypes = {
  className: PropTypes.string,
};

export default Process;