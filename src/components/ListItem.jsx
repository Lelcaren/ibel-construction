import PropTypes from "prop-types";

const ListItem = ({ className = "", subheadingOne, itemBody }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-4 min-w-[198px] text-left text-xl text-darkslateblue font-text-small-normal ${className}`}
    >
      <img
        className="w-12 relative max-h-full overflow-hidden"
        alt=""
        src="/icon--relume-3.svg"
      />
      <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
        {subheadingOne}
      </b>
      <h3 className="m-0 self-stretch relative text-5xl tracking-[-0.13px] font-medium font-text mq450:text-lgi">
        {itemBody}
      </h3>
    </div>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  subheadingOne: PropTypes.string,
  itemBody: PropTypes.string,
};

export default ListItem;
