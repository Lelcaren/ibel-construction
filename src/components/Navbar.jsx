import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ 
  className = "", 
  logo = "/logo-placeholder.svg",
  logoAlt = "Company Logo"
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`relative w-full bg-whitesmoke overflow-hidden flex flex-col items-center justify-start text-left text-5xl text-border-primary font-text ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto h-[72px] border-border-primary border-solid border-b-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-between py-0 px-4 md:px-16">
        {/* Logo and Desktop Navigation */}
        <div className="flex flex-row items-center justify-start gap-6">
          <img
            className="h-[83px] w-[135px] object-cover"
            alt={logoAlt}
            src={logo}
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-start gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="[text-decoration:none] text-darkslateblue hover:text-blue-600 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-row items-center justify-center gap-4">
          <button className="cursor-pointer border border-border-primary py-2 px-5 bg-transparent rounded-3xs hover:bg-gray-50 transition-colors duration-300">
            <span className="text-base leading-[150%] text-darkslateblue">
              Join
            </span>
          </button>
          <button className="cursor-pointer border border-border-primary py-2 px-5 bg-gradient-to-b from-amber-400 to-pink-500 rounded-3xs hover:opacity-90 transition-opacity duration-300">
            <span className="text-base leading-[150%] text-white">
              Sign Up
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-8 h-8 text-darkslateblue"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
          
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <button 
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                aria-label="Close menu"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>

              <div className="flex flex-col space-y-4 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="text-darkslateblue hover:text-blue-600 text-lg"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <button className="w-full py-2 px-5 border border-border-primary rounded-3xs hover:bg-gray-50">
                  Join
                </button>
                <button className="w-full py-2 px-5 bg-gradient-to-b from-amber-400 to-pink-500 text-white rounded-3xs hover:opacity-90">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string
};

export default Navbar;
