import PropTypes from "prop-types";

const Card = ({ className = "", placeholderImage, name1, jobTitle, text }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start gap-6 min-w-[304px] text-center text-5xl text-color-neutral-white font-text ${className}`}
    >
      <img
        className="w-20 relative max-h-full object-cover"
        loading="lazy"
        alt=""
        src={placeholderImage}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-4">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative font-medium mq450:text-lgi">
            {name1}
          </div>
          <div className="self-stretch relative font-medium mq450:text-lgi">
            {jobTitle}
          </div>
        </div>
        <div className="self-stretch relative font-medium mq450:text-lgi">
          {text}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string,
  name1: PropTypes.string,
  jobTitle: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
