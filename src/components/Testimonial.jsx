import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonial = ({ className = "" }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Their attention to detail and commitment to quality made our project a success!",
      name: "John Doe",
      title: "Project Manager, ABC Corp",
      avatar: "/avatar-image@2x.png",
      logo: null
    },
    {
      quote: "Working with them was a seamless experience from start to finish!",
      name: "Jane Smith", 
      title: "CEO, XYZ Inc",
      avatar: "/avatar-image-1@2x.png",
      logo: "/logo2-colordark.svg"
    }
  ];

  const renderStars = () => (
    <div className="flex justify-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className="text-yellow-500 fill-current" 
          size={24} 
        />
      ))}
    </div>
  );

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section 
      className={`
        w-full max-w-7xl mx-auto 
        py-16 px-4 
        bg-white 
        flex flex-col items-center 
        space-y-8
        ${className}
      `}
    >
      <div className="max-w-2xl w-full text-center">
        {renderStars()}

        <blockquote 
          className="
            text-2xl md:text-3xl 
            font-bold 
            text-gray-800 
            italic 
            mb-8 
            min-h-[120px] 
            flex items-center justify-center
          "
        >
          "{currentTest.quote}"
        </blockquote>

        <div className="flex items-center justify-center space-x-6">
          <img 
            src={currentTest.avatar} 
            alt={currentTest.name}
            className="
              w-16 h-16 
              rounded-full 
              object-cover 
              border-2 border-gray-200
            "
          />
          <div className="text-left">
            <div className="font-semibold text-lg text-gray-900">
              {currentTest.name}
            </div>
            <div className="text-gray-600">
              {currentTest.title}
            </div>
          </div>

          {currentTest.logo && (
            <div className="hidden md:block border-l pl-6">
              <img 
                src={currentTest.logo} 
                alt="Company Logo"
                className="h-12 max-w-[140px] grayscale hover:grayscale-0 transition-all"
              />
            </div>
          )}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`
                w-2 h-2 rounded-full 
                ${currentTestimonial === index 
                  ? 'bg-blue-500' 
                  : 'bg-gray-300'
                }
              `}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button 
            onClick={handlePrevTestimonial}
            className="
              rounded-full 
              border 
              p-2 
              hover:bg-gray-100 
              transition-colors
            "
          >
            <ArrowLeft className="text-gray-600" />
          </button>
          <button 
            onClick={handleNextTestimonial}
            className="
              rounded-full 
              border 
              p-2 
              hover:bg-gray-100 
              transition-colors
            "
          >
            <ArrowRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;