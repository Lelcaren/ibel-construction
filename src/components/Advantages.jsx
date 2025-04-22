import ListItem from "./ListItem";
import PropTypes from "prop-types";

const Advantages = ({
  className = "",
  title = "Discover the unmatched advantages of partnering with our construction expertise.",
  subtitle = "When you choose us, you gain a partner committed to excellence. Our dedication to reliability, quality, and efficiency sets us apart in the industry.",
  image = "/placeholder-image-11@2x.png",
  listItems = [
    {
      subheadingOne: "Unwavering Reliability",
      itemBody: "We ensure timely project completion, keeping your goals and deadlines at the forefront."
    },
    {
      subheadingOne: "Superior Quality",
      itemBody: "Our projects reflect the highest standards, guaranteeing satisfaction and lasting results."
    }
  ]
}) => {
  return (
    <section
      className={`w-full max-w-[1200px] mx-auto bg-white overflow-hidden
                py-12 px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12
                  items-center"
      >
        {/* Content Column */}
        <div className="space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
                       font-bold text-gray-900 leading-snug"
          >
            {title}
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg
                     text-gray-600 leading-relaxed"
          >
            {subtitle}
          </p>

          <div className="space-y-4 lg:space-y-6">
            {listItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md
                           hover:shadow-lg transition-all duration-300 ease-in-out
                           transform hover:-translate-y-1"
              >
                <h3
                  className="text-base sm:text-lg md:text-xl
                             font-semibold text-gray-900 mb-2"
                >
                  {item.subheadingOne}
                </h3>
                <p
                  className="text-sm sm:text-base md:text-lg
                             text-gray-600"
                >
                  {item.itemBody}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div
          className="w-full max-w-[400px] sm:max-w-[400px] md:max-w-[500px]
                     lg:max-w-full mx-auto"
        >
          <div
            className="rounded-2xl overflow-hidden shadow-2xl
                       transform transition-all duration-500 hover:scale-105"
          >
            <img
              src={image}
              alt="Construction advantages visual"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Advantages.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      subheadingOne: PropTypes.string.isRequired,
      itemBody: PropTypes.string.isRequired
    })
  )
};

export default Advantages;
