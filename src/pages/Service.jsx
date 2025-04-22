import Navbar from "../components/Navbar";
import Solutions from "../components/Solutions";
import Excellence from "../components/Excellence";
import Expert from "../components/Expert";
import Visions from "../components/Visions";
import Process from "../components/Process";

import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* Keep Navbar White */}
      <div className="w-full bg-white">
        <Navbar logo="/logo@2x.png" />
      </div>
      
      {/* Apply Grey Background ONLY to Main Content */}
      <div className="w-full bg-color-neutral-neutral">
        <section 
          className="
            w-full 
            max-w-[1440px] 
            h-[730px] 
            md:h-auto 
            mx-auto 
            flex 
            flex-col 
            items-center 
            md:items-start 
            justify-center 
            py-16 
            sm:py-20 
            md:py-28 
            px-4 
            sm:px-6 
            md:px-16 
            box-border 
            bg-[url('/public/header@3x.png')] 
            bg-cover 
            bg-no-repeat 
            bg-center 
            text-left 
            text-5xl 
            text-darkslateblue 
            font-text
          "
        >
          <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-8">
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <div className="flex flex-row items-center justify-start">
                <div className="relative font-medium text-base sm:text-lg md:text-xl">
                  Expertise
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-6 text-6xl md:text-5xl sm:text-4xl">
                <h1 className="m-0 w-full relative font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Our Contracting Services
                </h1>
                <div className="w-full relative text-base sm:text-lg md:text-xl font-medium">
                  Discover our comprehensive government contracting services tailored to meet your project needs.
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
              <button 
                className="
                  w-full 
                  sm:w-auto 
                  cursor-pointer 
                  border-buttons1 
                  border-solid 
                  border-[1px] 
                  py-3 
                  px-6 
                  bg-[transparent] 
                  rounded-3xs 
                  [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] 
                  flex 
                  flex-row 
                  items-center 
                  justify-center
                "
              >
                <div className="relative text-base leading-[150%] font-text-small-normal text-text-alternate text-left">
                  Learn More
                </div>
              </button>
              <button 
                className="
                  w-full 
                  sm:w-auto 
                  cursor-pointer 
                  border-border-primary 
                  border-solid 
                  border-[1px] 
                  py-3 
                  px-6 
                  bg-[transparent] 
                  flex 
                  flex-row 
                  items-center 
                  justify-center
                "
              >
                <div className="relative text-base leading-[150%] font-text-small-normal text-border-primary text-left">
                  Sign Up
                </div>
              </button>
            </div>
          </div>
        </section>
        
        {/* Services Sections */}
        <Solutions />
        <Excellence />
        <Expert />
        <Visions />
        <Process />
  
      </div>
      
      {/* Footer with Same Props as Home */}
      <Footer brandPlaceholder="/rectangle-11@2x.png" />
    </div>
  );
};

export default Services;
