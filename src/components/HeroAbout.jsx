import PropTypes from "prop-types";

const HeroAbout = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full 
        max-w-[1440px] 
        mx-auto 
        h-auto 
        md:h-[730px] 
        overflow-hidden 
        flex 
        flex-col 
        items-start 
        justify-start 
        py-16 
        md:py-28 
        px-4 
        md:px-16 
        box-border 
        bg-[url('/public/heroabout@3x.png')] 
        bg-cover 
        bg-no-repeat 
        bg-[top] 
        text-left 
        text-5xl 
        text-darkslateblue 
        font-text 
        mq800:pt-[73px] 
        mq800:pb-[73px] 
        mq800:box-border 
        mq450:gap-5 
        mq1125:gap-10 
        mq1125:pl-8 
        mq1125:pr-8 
        mq1125:box-border 
        ${className}
      `}
    >
      <div className="w-full md:w-[768px] flex flex-col items-start justify-start gap-8 mq450:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <div className="flex flex-row items-center justify-start">
            <a className="[text-decoration:none] relative font-medium text-[inherit] mq450:text-lgi">
              Integrity
            </a>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] text-3xl md:text-4xl lg:text-5xl mq800:text-19xl mq450:text-10xl">
              Building Trust Together
            </h1>
            <div className="self-stretch relative text-xl md:text-5xl font-medium mq450:text-lgi">
              Dedicated to delivering excellence in government contracting
              through innovation and unwavering commitment.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-4">
          <button className="cursor-pointer border-buttons1 border-solid border-[1px] py-3 px-6 bg-[transparent] rounded-3xs [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] flex flex-row items-center justify-center">
            <div className="relative text-base leading-[150%] font-text-small-normal text-color-neutral-white text-left">
              Learn More
            </div>
          </button>
          <button className="cursor-pointer border-border-primary border-solid border-[1px] py-3 px-6 bg-[transparent] flex flex-row items-center justify-center">
            <div className="relative text-base leading-[150%] font-text-small-normal text-darkslateblue text-left">
              Contact
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

HeroAbout.propTypes = {
  className: PropTypes.string,
};

export default HeroAbout;