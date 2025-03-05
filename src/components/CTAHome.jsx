import PropTypes from "prop-types";

const CTAHome = ({ 
  className = "",
  title = "Get Your Free Consultation Today",
  description = "Reach out now to discuss your project needs and receive a personalized quote.",
  primaryButtonText = "Contact",
  secondaryButtonText = "Learn More",
  image = "/placeholder-image-21@2x.png"
}) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-white overflow-hidden py-16 md:py-24 px-4 md:px-16 ${className}`}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content Column */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gradient-to-b from-amber-400 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              {primaryButtonText}
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              {secondaryButtonText}
            </button>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
            <img
              src={image}
              alt="Construction consultation visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CTAHome.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  image: PropTypes.string
};

export default CTAHome;