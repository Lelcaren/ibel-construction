import Navbar from "../components/Navbar";
import Celebrating from "../components/Celebrating";
import YourVision from "../components/YourVision";
import Advantages from "../components/Advantages";
import CTAHome from "../components/CTAHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar logo="/logo@2x.png" />
      
      <section 
        className="
          w-full 
          max-w-[1440px] 
          mx-auto 
          h-auto 
          md:h-[730px] 
          overflow-hidden 
          flex 
          flex-row 
          items-center 
          justify-start 
          py-16 
          sm:py-20 
          md:py-28 
          px-4 
          sm:px-6 
          md:px-16 
          box-border 
          bg-[url('/public/hero@3x.png')] 
          bg-cover 
          bg-no-repeat 
          bg-[top] 
          text-left 
          text-darkslateblue 
          font-text
        "
      >
        <div className="w-full md:w-[836px] flex flex-col items-start justify-start gap-8 sm:gap-6">
          <div className="w-full md:w-[862px] flex flex-col items-start justify-start gap-6">
            <h1 
              className="
                m-0 
                w-full 
                md:w-[823px] 
                relative 
                text-inherit 
                font-bold 
                font-[inherit] 
                inline-block 
                text-3xl 
                sm:text-4xl 
                md:text-5xl 
                lg:text-6xl
              "
            >
              Building a Strong Future Through Government Contracts
            </h1>
            <h3 
              className="
                m-0 
                w-full 
                md:w-[839px] 
                relative 
                text-base 
                sm:text-lg 
                md:text-xl 
                font-medium 
                font-[inherit] 
                inline-block
              "
            >
              At Ibel Construction, we specialize in delivering exceptional 
              construction services tailored to government projects. Our 
              commitment to quality and compliance ensures that every project 
              meets the highest standards.
            </h3>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
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
                [background:linear-gradient(180deg,_#ffc03d,_#f2295b)] 
                flex 
                flex-row 
                items-center 
                justify-center
              "
            >
              <div 
                className="
                  relative 
                  text-base 
                  leading-[150%] 
                  font-text-small-normal 
                  text-color-neutral-white 
                  text-left
                "
              >
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
              <div 
                className="
                  relative 
                  text-base 
                  leading-[150%] 
                  font-text-small-normal 
                  text-darkslateblue 
                  text-left
                "
              >
                Contact Us
              </div>
            </button>
          </div>
        </div>
      </section>
      
      <Celebrating />
      <YourVision />
      <Advantages />
      <CTAHome />
      <Footer brandPlaceholder="/rectangle-11@2x.png" />
    </div>
  );
};

export default Home;