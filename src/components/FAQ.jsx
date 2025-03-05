import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";

const AccordionItem = ({ question, answerDetails }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="
      w-full 
      border-b border-slate-200 
      transition-all duration-300 
      hover:bg-blue-50/50
      group
    ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full 
          flex justify-between items-center 
          py-4 px-3 md:py-5 md:px-4 
          text-base md:text-lg font-semibold 
          text-darkslateblue 
          cursor-pointer 
          focus:outline-none 
          group-hover:text-blue-700
          transition-colors duration-200
        "
      >
        <span className="flex items-center space-x-2 md:space-x-3">
          <HelpCircle 
            size={18} 
            className="
              text-slate-400 
              group-hover:text-blue-500 
              transition-colors duration-200
            "
          />
          <span>{question}</span>
        </span>
        {isOpen ? (
          <ChevronUp 
            size={18} 
            className="
              text-blue-600 
              transform transition-transform 
              group-hover:rotate-180
            "
          />
        ) : (
          <ChevronDown 
            size={18} 
            className="
              text-slate-500 
              group-hover:text-blue-600 
              transition-all duration-200
            "
          />
        )}
      </button>
      {isOpen && (
        <div 
          className="
            px-3 md:px-4 pb-4 md:pb-5 
            text-slate-700 
            text-sm md:text-base 
            transition-all 
            duration-300 
            ease-in-out 
            origin-top 
            animate-accordion-down
          "
        >
          {answerDetails}
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answerDetails: PropTypes.string.isRequired,
};

const FAQ = ({ className = "" }) => {
  return (
    <div className="
      w-full 
      bg-gray-50 
      py-16 
      px-4 
      flex 
      justify-center 
      items-center
    ">
      <section 
        className={`
          w-full 
          max-w-[350px] md:max-w-[1000px] 
          bg-white 
          border 
          border-gray-200 
          rounded-2xl 
          shadow-lg 
          overflow-hidden 
          ${className}
        `}
      >
        <div className="
          w-full 
          bg-gradient-to-br from-white via-blue-50/50 to-white 
          px-6 py-8 
          border-b 
          border-gray-200
        ">
          <h1 className="
            text-2xl md:text-3xl 
            font-bold 
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r from-darkslateblue to-blue-800 
            leading-tight
            mb-4
          ">
            Frequently Asked Questions
          </h1>
          <p className="
            text-base 
            text-slate-600 
            font-medium 
            leading-relaxed
          ">
            Find comprehensive answers to your most pressing questions about our services and processes.
          </p>
        </div>

        <div className="
          w-full 
          bg-white
        ">
          <AccordionItem
            question="What services do you offer?"
            answerDetails="We provide a comprehensive range of services including strategic project management, specialized construction solutions, and expert consulting for government contracts."
          />
          <AccordionItem
            question="How can I contact you?"
            answerDetails="We offer multiple communication channels to suit your preferences. Reach out through our online contact form, call our support line, or send an email."
          />
          <AccordionItem
            question="What is your pricing?"
            answerDetails="Our pricing is customized to your project requirements. We conduct a thorough assessment and provide detailed estimates to ensure competitive pricing."
          />
          <AccordionItem
            question="Do you offer consultations?"
            answerDetails="Absolutely! We specialize in personalized consultations to understand your unique project goals and develop tailored solutions."
          />
          <AccordionItem
            question="What is your experience?"
            answerDetails="With extensive experience in government contracting and construction projects, our team brings unparalleled industry expertise."
          />
        </div>

        <div className="
          w-full 
          bg-gray-50 
          px-6 py-8 
          border-t 
          border-gray-200 
          flex 
          items-center 
          justify-between
        ">
          <div className="flex-grow pr-6">
            <h2 className="
              text-xl md:text-2xl 
              font-bold 
              text-darkslateblue 
              mb-2
            ">
              Need More Information?
            </h2>
            <p className="
              text-sm md:text-base 
              text-slate-600
            ">
              Our dedicated support team is ready to provide comprehensive assistance for your project needs.
            </p>
          </div>
          
          <a 
            href="#contact" 
            className="
              group 
              flex 
              items-center 
              justify-center 
              w-48 
              h-14 
              bg-blue-600 
              text-white 
              rounded-lg 
              hover:bg-blue-700 
              transition-all 
              duration-300 
              shadow-md 
              hover:shadow-xl
            "
          >
            <span className="mr-2 font-semibold">Contact Us</span>
            <ArrowRight 
              className="
                group-hover:translate-x-1 
                transition-transform 
                duration-300
              " 
              size={22} 
            />
          </a>
        </div>
      </section>
    </div>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;