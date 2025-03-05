import { useMemo } from "react";
import PropTypes from "prop-types";

const Content = ({
  className = "",
  dividerHeight,
  timelineDateMinWidth,
  timelineDatePadding,
  date,
  heading,
  description,
}) => {
  const dividerStyle = useMemo(() => {
    return {
      height: dividerHeight,
    };
  }, [dividerHeight]);

  const timelineDateStyle = useMemo(() => {
    return {
      minWidth: timelineDateMinWidth,
      padding: timelineDatePadding,
    };
  }, [timelineDateMinWidth, timelineDatePadding]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-4 text-left text-29xl text-darkslateblue font-text mq800:flex-wrap ${className}`}
    >
      <div className="self-stretch w-32 flex flex-col items-center justify-start">
        <div className="flex-1 flex flex-col items-center justify-start gap-2">
          <div
            className="h-6 relative bg-color-system-error-red border-color-system-error-red border-solid border-[1px] box-border"
            style={dividerStyle}
          />
          <div className="w-[15px] relative rounded-[50%] bg-color-system-error-red h-[15px]" />
          <div className="flex-1 relative bg-color-system-error-red border-color-system-error-red border-solid border-[1px]" />
        </div>
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start py-4 px-0 box-border min-w-[374px] mq800:min-w-full"
        style={timelineDateStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-8 mq800:gap-4">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <b className="self-stretch relative mq800:text-19xl mq450:text-10xl">
              {date}
            </b>
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq800:text-19xl mq450:text-10xl">
              {heading}
            </h1>
          </div>
          <div className="self-stretch relative text-5xl font-medium text-border-primary mq450:text-lgi">
            {description}
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
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,

  /** Style props */
  dividerHeight: PropTypes.string,
  timelineDateMinWidth: PropTypes.string,
  timelineDatePadding: PropTypes.string,
};

export default Content;
