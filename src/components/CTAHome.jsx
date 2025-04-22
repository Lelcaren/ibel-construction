import PropTypes from "prop-types";

const CTAHome = ({
  className = "",
  title = "Get Your Free Consultation Today",
  description = "Reach out now to discuss your project needs and receive a personalized quote.",
  primaryButtonText = "Contact",
  secondaryButtonText = "Learn More",
  image = "/placeholder-image-21@2x.png",
}) => {
  return (
    <section
      className={`w-full max-w-[1200px] mx-auto bg-white overflow-hidden 
                 py-8 sm:py-12 md:py-16 px-4 sm:px-5 md:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        {/* Content Column */}
        <div className="space-y-4 sm:space-y-6 w-full max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="
              text-lg 
              sm:text-2xl 
              md:text-3xl 
              lg:text-4xl 
              xl:text-5xl 
              font-bold 
              text-gray-900 
              leading-snug
              mq450:text-base
            ">
              {title}
            </h2>

            <p className="
  text-xs 
  sm:text-sm 
  md:text-base 
  lg:text-lg 
  text-gray-600 
  leading-relaxed 
  max-w-full 
  sm:max-w-md 
  md:max-w-lg 
  lg:max-w-xl 
  mx-auto lg:mx-0
">
  {description}
</p>

          </div>

          <div className="
  flex flex-col sm:flex-row 
  justify-center lg:justify-start 
  space-y-3 sm:space-y-0 sm:space-x-4 
  mq450:items-center
">
  <button className="
    px-4 py-2 
    bg-gradient-to-b 
    from-buttons1 to-pink-500 
    text-white 
    font-semibold 
    rounded-md 
    text-sm sm:text-base 
    shadow-md 
    hover:shadow-lg 
    transition-all 
    duration-300 
    transform 
    hover:scale-105
    w-auto 
    min-w-[140px] 
    max-w-[220px] 
    mx-auto sm:mx-0
  ">
    {primaryButtonText}
  </button>

  <button className="
    px-4 py-2 
    border border-gray-300 
    text-gray-800 
    font-semibold 
    rounded-md 
    text-sm sm:text-base 
    hover:bg-gray-50 
    transition-all 
    duration-300 
    transform 
    hover:scale-105
    w-auto 
    min-w-[140px] 
    max-w-[220px] 
    mx-auto sm:mx-0
  ">
    {secondaryButtonText}
  </button>
</div>

        </div>

        {/* Image Column */}
        <div className="
          w-full 
          max-w-[300px] 
          sm:max-w-[400px] 
          md:max-w-[500px] 
          lg:max-w-full 
          mx-auto 
          mt-6 lg:mt-0
        ">
          <div className="
            rounded-lg 
            sm:rounded-xl 
            md:rounded-2xl 
            overflow-hidden 
            shadow-lg 
            sm:shadow-xl 
            transform 
            transition-all 
            duration-500 
            hover:scale-105
          ">
            <img
              src={image}
              alt="Construction consultation visual"
              className="w-full h-auto object-cover"
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
  image: PropTypes.string,
};

export default CTAHome;
