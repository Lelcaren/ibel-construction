import React from 'react';
import Navbar from "../components/Navbar";
import HeroAbout from "../components/HeroAbout";
import Commitment from "../components/Commitment";
import Team from "../components/Team";


import Footer from "../components/Footer";
import { ChevronRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section
      className="
        w-full 
        bg-blue-900 
        text-white 
        py-16 
        md:py-20 
        lg:py-28 
        px-4 
        sm:px-8 
        md:px-12 
        lg:px-16
      "
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 mb-8">
          <h2
            className="
              text-3xl 
              md:text-4xl 
              lg:text-5xl 
              font-bold 
              leading-tight
            "
          >
            Partner with Us Today
          </h2>
          <p
            className="
              text-base 
              md:text-lg 
              text-gray-200 
              leading-relaxed
            "
          >
            Discover how we can collaborate to achieve exceptional results in government contracting projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            className="
              w-full 
              sm:w-auto 
              px-6 
              py-3 
              bg-gradient-to-b 
              from-amber-400 
              to-pink-500 
              text-white 
              rounded-md 
              hover:opacity-90 
              transition-all 
              flex 
              items-center 
              justify-center 
              gap-2
            "
          >
            Learn More
            <ChevronRight size={20} />
          </button>

          <button
            className="
              w-full 
              sm:w-auto 
              px-6 
              py-3 
              border 
              border-white 
              rounded-md 
              hover:bg-white/20 
              transition-all 
              flex 
              items-center 
              justify-center 
              gap-2
            "
          >
            Contact
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div
      className="
        w-full 
        bg-gray-50 
        overflow-x-hidden
      "
    >
      <Navbar logo="/logo@2x.png" />
      <HeroAbout />
      <Commitment />
      <Team />
     
    
      <CallToAction />
      <Footer brandPlaceholder="/rectangle-1@2x.png" />
    </div>
  );
};

export default About;