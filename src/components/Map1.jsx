import PropTypes from "prop-types";

const Map1 = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1200px] mx-auto 
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
      py-12 sm:py-16 md:py-20 lg:py-24
      flex flex-col items-center justify-center
      text-left text-darkslateblue font-text
      space-y-8 sm:space-y-10 md:space-y-12
      ${className}`}
    >
      <div className="w-full flex flex-col md:flex-row 
      gap-8 md:gap-12 lg:gap-16
      max-w-full">
        {/* Left Column - Connect Section */}
        <div className="w-full md:w-1/2 flex flex-col 
        space-y-4 sm:space-y-6">
          <div className="text-base sm:text-lg md:text-xl">
            Connect
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold text-black">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl 
            text-gray-600">
              We're here to assist you with any inquiries or support you may need.
            </p>
          </div>
        </div>
        
        {/* Right Column - Contact Details */}
        <div className="w-full md:w-1/2 
        space-y-4 sm:space-y-6 md:space-y-8">
          {/* Email */}
          <div className="flex items-center 
          space-x-4 sm:space-x-6">
            <img
              className="w-6 h-6 sm:w-8 sm:h-8"
              src="/icon--envelope.svg"
              alt="Email icon"
            />
            <div>
              <div className="text-base sm:text-lg font-medium">
                Email
              </div>
              <div className="text-base sm:text-lg text-blue-600">
                info@ibelconstruction.co.ke
              </div>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-center 
          space-x-4 sm:space-x-6">
            <img
              className="w-6 h-6 sm:w-8 sm:h-8"
              src="/icon--phone.svg"
              alt="Phone icon"
            />
            <div>
              <div className="text-base sm:text-lg font-medium">
                Phone
              </div>
              <div className="text-base sm:text-lg text-blue-600">
              +254721121437
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Maps Embed for Nairobi, Kenya */}
      <div className="w-full mt-8 sm:mt-10 md:mt-12">
        <iframe
          className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] 
          max-w-[1200px] min-w-[400px] rounded-lg shadow-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.16418401063!2d36.7513281!3d-1.3031934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1650456857893!5m2!1sen!2sus"
        ></iframe>
      </div>
    </section>
  );
};

Map1.propTypes = {
  className: PropTypes.string,
};

export default Map1;