import PropTypes from "prop-types";

const Newsletter = ({ className = "" }) => {
  return (
    <div
      className={`w-[1220px] flex flex-row items-start justify-between gap-0 text-left text-lg text-darkslateblue font-text-small-normal ${className}`}
    >
      <div className="w-[500px] flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[150%] font-semibold">
          Subscribe to updates
        </div>
        <div className="self-stretch relative text-base leading-[150%]">
          Stay informed about our latest news and offers.
        </div>
      </div>
      <div className="w-[488px] flex flex-col items-start justify-start gap-3 text-xs">
        <div className="self-stretch flex flex-row items-start justify-start gap-4">
          <div className="flex-1 border-border-primary border-solid border-[1px] flex flex-row items-center justify-start p-3">
            <input
              className="w-full [border:none] [outline:none] font-text-small-normal text-base bg-[transparent] flex-1 relative leading-[150%] text-color-neutral-neutral text-left inline-block"
              placeholder="Your email here"
              type="text"
            />
          </div>
          <button className="cursor-pointer border-border-primary border-solid border-[1px] py-3 px-6 bg-[transparent] w-[121px] [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] box-border flex flex-row items-center justify-center">
            <div className="relative text-base leading-[150%] font-text-small-normal text-darkslateblue text-left">
              Join
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-1">
          <div className="relative leading-[150%]">
            By subscribing, you accept our Privacy Policy.
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] text-border-primary">
            By subscribing, you accept our Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
