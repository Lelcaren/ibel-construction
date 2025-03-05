import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mail, Phone, MapPin, HelpCircle, ArrowRight } from 'lucide-react';

const Footer = ({ className = "", brandPlaceholder }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section
      className={`
        w-full 
        bg-gradient-to-b from-gray-50 to-white 
        py-12 
        px-4 
        sm:px-6 
        lg:px-8 
        text-darkslateblue 
        ${className}
      `}
    >
      <div className="
        w-full 
        max-w-[1200px] 
        min-w-[400px] 
        mx-auto 
        px-4
      ">
        {/* Subscription Section */}
        <div className="
          grid 
          md:grid-cols-2 
          gap-8 
          items-center 
          mb-12 
          pb-12 
          border-b 
          border-gray-200
        ">
          <div>
            <h2 className="
              text-2xl 
              font-bold 
              mb-4 
              text-gray-800
            ">
              Stay Connected
            </h2>
            <p className="
              text-gray-600 
              mb-6
            ">
              Get the latest updates, news, and exclusive offers directly in your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="
            flex 
            flex-col 
            sm:flex-row 
            gap-4
          ">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="
                flex-grow 
                px-4 
                py-3 
                border 
                border-gray-300 
                rounded-md 
                focus:outline-none 
                focus:ring-2 
                focus:ring-amber-500
              "
            />
            <button 
              type="submit"
              className="
                bg-gradient-to-r 
                from-amber-500 
                to-pink-500 
                text-white 
                px-6 
                py-3 
                rounded-md 
                hover:opacity-90 
                transition-all 
                flex 
                items-center 
                justify-center 
                gap-2
              "
            >
              Subscribe <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="
          grid 
          md:grid-cols-2 
          gap-8 
          mb-12
        ">
          {/* Get in Touch Column */}
          <div>
            <h3 className="
              text-xl 
              font-semibold 
              mb-6 
              text-gray-800
            ">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "support@company.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "123 Main Street, Anytown USA" },
                { icon: HelpCircle, text: "Support Center" }
              ].map(({ icon: Icon, text }, index) => (
                <li 
                  key={index} 
                  className="
                    flex 
                    items-center 
                    text-gray-600 
                    hover:text-amber-600 
                    transition-colors 
                    cursor-pointer
                  "
                >
                  <Icon className="mr-3 text-amber-500" size={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="
              text-xl 
              font-semibold 
              mb-6 
              text-gray-800
            ">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "About Us", 
                "Our Services", 
                "Contact", 
                "Privacy Policy", 
                "Terms of Service"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="
                    text-gray-600 
                    hover:text-amber-600 
                    hover:translate-x-1 
                    transition-all 
                    cursor-pointer
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="
          border-t 
          border-gray-200 
          pt-8 
          flex 
          flex-col 
          md:flex-row 
          justify-between 
          items-center
        ">
          <img
            src={brandPlaceholder}
            alt="Brand Logo"
            className="
              h-16 
              w-auto 
              mx-auto 
              md:mx-0 
              mb-4 
              md:mb-0
            "
          />
          <p className="
            text-sm 
            text-gray-600 
            text-center 
            md:text-left
          ">
            © {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  brandPlaceholder: PropTypes.string.isRequired,
};

export default Footer;