import PropTypes from "prop-types";

const Column1 = ({ className = "", placeholderImage, heading, text }) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start justify-start gap-8 min-w-[304px] text-center text-5xl text-darkslateblue font-text-small-normal mq450:gap-4 ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={placeholderImage}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-8 mq450:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <b className="self-stretch relative leading-[140%] mq450:text-lgi mq450:leading-[27px]">
            {heading}
          </b>
          <div className="self-stretch relative text-base leading-[150%]">
            {text}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start text-left text-base">
          <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
            <div className="relative leading-[150%]">Learn More</div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Column1.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default Column1;
