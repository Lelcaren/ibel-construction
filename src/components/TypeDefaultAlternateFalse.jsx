import PropTypes from "prop-types";

const TypeDefaultAlternateFalse = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 border-border-primary border-solid border-[1px] flex flex-row items-center justify-start p-3 ${className}`}
    >
      <input
        className="w-full [border:none] [outline:none] font-text-small-normal text-base bg-[transparent] flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block"
        placeholder="Your email here"
        type="text"
      />
    </div>
  );
};

TypeDefaultAlternateFalse.propTypes = {
  className: PropTypes.string,
};

export default TypeDefaultAlternateFalse;
