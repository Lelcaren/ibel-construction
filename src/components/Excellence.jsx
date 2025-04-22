import React from 'react'; 
import PropTypes from "prop-types"; 
import { Check, ArrowRight } from 'lucide-react'; 

const Excellence = ({ className = "" }) => { 
  return ( 
    <section 
      className={`
        w-full mx-auto bg-whitesmoke-200
        py-[25px] sm:py-[35px] md:py-[50px] lg:py-[70px]
        px-[15px] sm:px-[25px] md:px-[40px] lg:px-[60px]
        overflow-hidden
        ${className}
      `}
    > 
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-[30px] md:gap-[40px] lg:gap-[60px]"> 
          {/* Content Column */} 
          <div className="flex flex-col w-full md:w-1/2 md:pr-[20px]"> 
            {/* Section Label */} 
            <div className="text-buttons1 font-semibold text-base sm:text-lg uppercase tracking-wide mb-[10px] sm:mb-[14px] md:mb-[18px]"> 
              Excellence 
            </div> 
            
            {/* Main Heading */} 
            <h1 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[1.2] text-darkslateblue mb-[20px] sm:mb-[24px] md:mb-[30px]"> 
              Comprehensive General Contracting Solutions for You 
            </h1> 
            
            {/* Description */} 
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-color-neutral-neutral leading-relaxed mb-[25px] sm:mb-[30px] md:mb-[35px]"> 
              Our General Contracting services are tailored to meet the unique needs of government projects. 
              With a proven track record of successful completions, we ensure quality and efficiency in every endeavor. 
            </p> 
            
            {/* Key Features */} 
            <div className="mb-[25px] sm:mb-[30px] md:mb-[35px]"> 
              {[
                "Expertise in project management and execution", 
                "Commitment to safety and regulatory compliance", 
                "Innovative solutions for complex construction challenges"
              ].map((feature, index) => ( 
                <div 
                  key={index} 
                  className="flex items-center gap-[12px] mb-[15px] last:mb-0"
                > 
                  <div className="flex-shrink-0 bg-buttons1 rounded-full p-[5px] flex items-center justify-center">
                    <Check className="text-white" size={16} /> 
                  </div>
                  <span className="text-[15px] sm:text-[16px] text-darkslateblue">{feature}</span> 
                </div> 
              ))} 
            </div> 
            
            {/* Action Buttons */} 
            <div className="flex flex-wrap gap-[15px] sm:gap-[20px]"> 
              <button 
                className="
                  cursor-pointer 
                  py-[12px] px-[24px] sm:py-[14px] sm:px-[28px]
                  bg-[transparent] rounded-3xs 
                  [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] 
                  hover:opacity-90 transition-all
                  shadow-md
                "
              > 
                <div className="text-[15px] sm:text-[16px] font-medium text-white flex items-center gap-[8px]"> 
                  Learn More 
                  <ArrowRight size={18} /> 
                </div> 
              </button> 
              
              <div className="
                flex items-center gap-[8px] 
                text-darkslateblue hover:text-buttons1 cursor-pointer transition-colors
                py-[12px] px-[10px]
              "> 
                <div className="text-[15px] sm:text-[16px] font-medium">Sign Up</div> 
                <img 
                  className="h-5 w-5" 
                  alt="" 
                  src="/icon--chevronright.svg" 
                /> 
              </div> 
            </div> 
          </div> 
          
          {/* Image Column */} 
          <div className="
            relative w-full md:w-1/2 
            h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]
            rounded-[15px] overflow-hidden shadow-lg 
            mt-[20px] md:mt-0
          "> 
            <div className="absolute inset-[-2px] bg-gradient-to-r from-buttons1 to-pink-500 rounded-[17px] p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-[13px] group">
                <img 
                  src="/public/comprehensive.jpg" 
                  alt="Construction Project" 
                  className="
                    w-full h-full object-cover 
                    transform group-hover:scale-105 transition-transform duration-500
                  " 
                  loading="lazy" 
                />
                <div className="
                  absolute inset-0 bg-gradient-to-br from-buttons1/10 to-pink-500/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                "></div>
              </div>
            </div>
          </div> 
        </div> 
      </div>
    </section> 
  ); 
}; 

Excellence.propTypes = { 
  className: PropTypes.string, 
}; 

export default Excellence;