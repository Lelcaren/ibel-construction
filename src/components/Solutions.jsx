import PropTypes from "prop-types";

const Solutions = ({ className = "" }) => {
  return (
    <section
      className={`w-full min-h-screen bg-white flex flex-col items-center justify-start py-20 px-16 box-border gap-16 text-center text-darkslateblue font-text lg:pt-[60px] lg:pb-[60px] lg:box-border mq750:gap-8 mq750:py-[40px] mq750:px-8 mq750:box-border mq450:gap-5 ${className}`}
    >
      {/* Title Section */}
      <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4">
        <div className="flex flex-row items-center justify-start">
          <div className="relative font-medium text-xl mq450:text-lg">Services</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-4 text-4xl">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] text-3xl mq450:text-2xl mq1050:text-[2.25rem]">
            Comprehensive Solutions for Your Construction Needs
          </h1>
          <div className="self-stretch relative text-base font-medium text-gray-700">
            We offer a range of services tailored to meet your project requirements. Our expertise ensures quality and efficiency in every phase of construction.
          </div>
        </div>
      </div>

      {/* Services Section with Dark Background */}
      <div className="w-full bg-darkslateblue py-12 px-8 rounded-lg">
        <div className="self-stretch flex flex-col items-start justify-start text-white lg:h-auto mq750:gap-8 mq450:gap-4">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-8 lg:h-auto mq750:gap-6">
            {[
              {
                title: "General Contracting That Delivers Results",
                description: "Our general contracting services streamline the construction process from start to finish.",
              },
              {
                title: "Expert Project Management for Seamless Execution",
                description: "We manage every detail to ensure your project stays on track and within budget.",
              },
              {
                title: "Innovative Design & Build Solutions Tailored for You",
                description: "Our design and build services create cohesive and functional spaces that reflect your vision.",
              },
            ].map((service, index) => (
              <div key={index} className="flex-1 flex flex-col items-center justify-start gap-4 min-w-[304px]">
                <img className="w-12 relative max-h-full overflow-hidden" loading="lazy" alt="Icon" src="/icon--relume.svg" />
                <div className="self-stretch flex flex-col items-center justify-start gap-4">
                  <h2 className="m-0 self-stretch relative text-2xl font-bold mq450:text-xl mq1050:text-[1.625rem]">{service.title}</h2>
                  <div className="self-stretch relative text-base font-medium text-gray-300">{service.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-row items-center justify-start gap-6 top-[0] z-[99] sticky text-left text-base text-border-primary font-text-small-normal">
        <button className="cursor-pointer border-buttons1 border-solid border-[1px] py-3 px-6 bg-[transparent] rounded-3xs [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] flex flex-row items-center justify-center">
          <div className="relative text-base leading-[150%] font-text-small-normal text-white text-left">Learn More</div>
        </button>
        <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
          <div className="relative leading-[150%]">Contact</div>
          <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="Arrow Icon" src="/icon--chevronright.svg" />
        </div>
      </div>
    </section>
  );
};

Solutions.propTypes = {
  className: PropTypes.string,
};

export default Solutions;
