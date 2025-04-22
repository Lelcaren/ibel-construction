import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Map1 from "../components/Map1";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-normal tracking-normal">
      {/* Navbar - Full Width, White Background */}
      <div className="w-full bg-white">
        <Navbar logo="/logo@2x.png" />
      </div>
      
      {/* Main Content with Background */}
      <div className="w-full bg-whitesmoke-100">
        {/* Hero Section - Responsive with Background Image */}
        <section
          className="
            w-full 
            max-w-[1440px] 
            mx-auto 
            px-4 
            sm:px-6 
            md:px-8 
            lg:px-16 
            py-16 
            sm:py-20 
            md:py-24 
            bg-cover 
            bg-no-repeat 
            bg-[top] 
            flex 
            flex-col 
            justify-center 
            text-left 
            text-darkslateblue 
            space-y-6 
            sm:space-y-8
          "
          style={{
            backgroundImage: 'url("/header@3x.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'top'
          }}
        >
          <div className="w-full max-w-[768px] space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="text-base sm:text-lg font-medium text-gray-600">
                Connect
              </div>
              <div className="space-y-4">
                <h1 className="
                  text-3xl 
                  sm:text-4xl 
                  md:text-5xl 
                  lg:text-6xl 
                  font-bold 
                  leading-tight
                ">
                  Get in Touch
                </h1>
                <p className="
                  text-base 
                  sm:text-lg 
                  md:text-xl 
                  text-gray-700
                ">
                  Reach out to our dedicated team for inquiries, quotes, or personalized consultations today.
                </p>
              </div>
            </div>
            
            {/* Responsive Button Group */}
            <div className="
              flex 
              flex-col 
              sm:flex-row 
              space-y-4 
              sm:space-y-0 
              sm:space-x-4
            ">
              <button
                className="
                  w-full 
                  sm:w-auto 
                  py-3 
                  px-6 
                  rounded-md 
                  bg-gradient-to-b 
                  from-[#ffc03d] 
                  to-[#f2295b] 
                  text-white 
                  border 
                  border-transparent 
                  hover:opacity-90 
                  transition-all 
                  duration-300
                "
              >
                Learn More
              </button>
              <button
                className="
                  w-full 
                  sm:w-auto 
                  py-3 
                  px-6 
                  rounded-md 
                  border 
                  border-gray-300 
                  text-darkslateblue 
                  hover:bg-gray-100 
                  transition-all 
                  duration-300
                "
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
        
        {/* Contact Page Sections - Responsive Containers */}
        <div className="
          w-full 
          max-w-[1440px] 
          mx-auto 
          px-4 
          sm:px-6 
          md:px-8 
          lg:px-16 
          space-y-12 
          sm:space-y-16 
          md:space-y-20
        ">
          <Map1 />
          
        
        </div>
      </div>
      
      {/* Footer */}
      <Footer brandPlaceholder="/rectangle-11@2x.png" />
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;