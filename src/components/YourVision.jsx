import PropTypes from "prop-types";

const YourVision = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-whitesmoke overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-5xl text-darkslateblue font-text mq450:gap-5 mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4">
        <div className="flex flex-row items-center justify-start">
          <h3 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lgi">
            Excellence
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-6 text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq450:text-10xl mq1050:text-19xl">
            Your Vision, Our Expertise
          </h1>
          <h3 className="m-0 self-stretch relative text-5xl font-medium font-[inherit] mq450:text-lgi">
            Delivering quality construction solutions tailored to your needs.
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-left text-13xl text-color-neutral-white font-text-small-normal mq750:gap-4">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-8 mq750:gap-4">
          {[
            {
              icon: "/icon--relume.svg",
              title: "General Contracting Services",
              description: "Building structures with precision and care.",
              action: "Learn More"
            },
            {
              icon: "/icon--relume.svg",
              title: "Expert Project Management",
              description: "Streamlining your project from start to finish.",
              action: "Discover"
            },
            {
              icon: "/icon--relume.svg",
              title: "Design & Build Solutions",
              description: "Transforming ideas into reality with innovative designs.",
              action: "Contact"
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="flex-1 bg-darkslateblue border-border-primary border-solid border-[1px] box-border flex flex-col items-start justify-center min-w-[313px]"
            >
              <div className="self-stretch flex flex-col items-start justify-center p-13xl gap-6">
                <div className="self-stretch flex flex-col items-start justify-start gap-6">
                  <img
                    className="w-12 relative max-h-full overflow-hidden"
                    loading="lazy"
                    alt=""
                    src={service.icon}
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-4">
                    <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
                      {service.title}
                    </h1>
                    <div className="self-stretch relative text-base leading-[150%]">
                      {service.description}
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start text-base">
                  <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
                    <div className="relative leading-[150%]">{service.action}</div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icon--chevronright1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

YourVision.propTypes = {
  className: PropTypes.string,
};

export default YourVision;