import { useMemo } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({
  className = "",
  question,
  questionMinWidth,
  answerDetails,
}) => {
  const questionStyle = useMemo(() => {
    return {
      minWidth: questionMinWidth,
    };
  }, [questionMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-29xl text-darkslateblue font-text ${className}`}
    >
      <div className="self-stretch border-border-primary border-solid border-t-[1px] overflow-hidden flex flex-row items-center justify-start flex-wrap content-center pt-[18px] px-0 pb-5 gap-6">
        <h1
          className="m-0 flex-1 relative text-inherit font-bold font-[inherit] inline-block min-w-[541px] mq750:min-w-full mq450:text-10xl mq1050:text-19xl"
          style={questionStyle}
        >
          {question}
        </h1>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 text-5xl">
        <div className="w-[768px] relative font-medium inline-block shrink-0 mq450:text-lgi">
          {answerDetails}
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  className: PropTypes.string,
  question: PropTypes.string,
  answerDetails: PropTypes.string,

  /** Style props */
  questionMinWidth: PropTypes.string,
};

export default AccordionItem;
