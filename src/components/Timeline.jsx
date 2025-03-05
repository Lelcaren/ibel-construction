import Content from "./Content";
import PropTypes from "prop-types";

const Timeline = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-whitesmoke overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full text-left text-5xl text-darkslateblue font-text mq800:gap-10 mq800:py-[31px] mq800:px-8 mq800:box-border mq450:gap-5 mq1125:pt-[47px] mq1125:pb-[47px] mq1125:box-border mq1350:pt-[73px] mq1350:pb-[73px] mq1350:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-4 max-w-full mq1350:flex-wrap">
        <div className="w-[576px] flex flex-col items-start justify-center gap-8 max-w-full mq800:gap-4 mq800:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row items-center justify-start">
              <div className="relative font-medium mq450:text-lgi">
                Milestones
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq800:text-19xl mq450:text-10xl">
                Our Journey: Key Milestones and Achievements
              </h1>
              <div className="self-stretch relative text-5xl font-medium mq450:text-lgi">
                Explore the significant milestones that have shaped our company.
                Each achievement reflects our commitment to excellence in
                government contracting.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-6 text-base font-text-small-normal">
            <button className="cursor-pointer border-buttons1 border-solid border-[1px] py-3 px-6 bg-[transparent] rounded-3xs [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] flex flex-row items-center justify-center">
              <div className="relative text-base leading-[150%] font-text-small-normal text-color-neutral-white text-left">
                Learn More
              </div>
            </button>
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="relative leading-[150%]">Details</div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[468px] text-29xl mq800:min-w-full">
          <Content
            date="2015"
            heading="Company Established"
            description="In 2015, we laid the foundation of our company. Our mission was to provide exceptional contracting services to government entities."
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-4 text-21xl font-text-small-normal mq800:flex-wrap">
            <div className="self-stretch w-32 flex flex-col items-center justify-start">
              <div className="flex-1 flex flex-col items-center justify-start gap-2">
                <div className="h-[42px] relative bg-color-system-error-red border-color-system-error-red border-solid border-[1px] box-border" />
                <div className="w-[15px] relative rounded-[50%] bg-color-system-error-red h-[15px]" />
                <div className="flex-1 relative bg-color-system-error-red border-color-system-error-red border-solid border-[1px]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-4 px-0 box-border min-w-[374px] mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-8 mq800:gap-4">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <b className="self-stretch relative leading-[120%] mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                    2018
                  </b>
                  <h1 className="m-0 self-stretch relative text-29xl font-bold font-text mq800:text-19xl mq450:text-10xl">
                    First Major Contract
                  </h1>
                </div>
                <div className="self-stretch relative text-5xl font-medium font-text text-border-primary mq450:text-lgi">
                  In 2018, we secured our first major government contract. This
                  milestone marked a turning point in our growth and reputation.
                </div>
                <div className="flex flex-row items-center justify-start gap-6 text-base">
                  <button className="cursor-pointer border-buttons1 border-solid border-[1px] py-3 px-6 bg-[transparent] rounded-3xs [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] flex flex-row items-center justify-center">
                    <div className="relative text-base leading-[150%] font-text-small-normal text-color-neutral-white text-left">
                      Learn More
                    </div>
                  </button>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <div className="relative leading-[150%]">Details</div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon--chevronright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Content
            dividerHeight="42px"
            timelineDateMinWidth="unset"
            timelineDatePadding="16px 0px"
            date="2020"
            heading="Expanded Services Offered"
            description="By 2020, we expanded our service offerings to meet diverse client needs. This strategic move enhanced our market presence."
          />
          <Content
            dividerHeight="42px"
            timelineDateMinWidth="unset"
            timelineDatePadding="16px 0px 0px"
            date="2023"
            heading="Recognized Industry Leader"
            description="In 2023, we were recognized as an industry leader in government contracting. Our commitment to quality and service excellence continues to drive our success."
          />
        </div>
      </div>
    </section>
  );
};

Timeline.propTypes = {
  className: PropTypes.string,
};

export default Timeline;
