import React from "react";
import Newsletter from "./Newsletter";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className={`max-w-7xl mx-auto flex flex-col items-start justify-start gap-8 sm:gap-16 text-left text-slate-800 font-sans px-4 sm:px-8 py-8 sm:py-12 ${className}`}
    >
      <Newsletter />
      
      <div className="self-stretch h-px bg-slate-200" />
      
      <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-10 flex-wrap">
        {/* Get in Touch Section - Full width on mobile, normal width on desktop */}
        <div className="w-full sm:w-80 flex flex-col items-start justify-start gap-4 sm:gap-6">
          <div className="self-stretch relative text-lg font-semibold text-slate-900">
            Get in Touch
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <a href="mailto:contact@company.com" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-5 h-5 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="flex-1 relative">contact@company.com</div>
            </a>
            <a href="tel:+15551234567" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-5 h-5 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="flex-1 relative">(555) 123-4567</div>
            </a>
            <a href="#location" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-5 h-5 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex-1 relative truncate">123 Business Ave, Suite 100, City, ST 12345</div>
            </a>
            <a href="#support" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-5 h-5 mr-2 text-slate-500 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div className="flex-1 relative">Support Center</div>
            </a>
          </div>
        </div>
        
        {/* Quick Links - Full width on mobile, normal width on desktop */}
        <div className="w-full sm:w-80 flex flex-col items-start justify-start gap-4 sm:gap-6">
          <div className="self-stretch relative text-lg font-semibold text-slate-900">
            Quick Links
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <a href="#about" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="flex-1 relative">About Us</div>
            </a>
            <a href="#services" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="flex-1 relative">Our Services</div>
            </a>
            <a href="#contact" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="flex-1 relative">Contact Us</div>
            </a>
            <a href="#privacy" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="flex-1 relative">Privacy Policy</div>
            </a>
            <a href="#terms" className="self-stretch flex flex-row items-center justify-start py-2 px-0 text-sm hover:text-indigo-600 transition-colors duration-300 group">
              <svg className="w-4 h-4 mr-2 text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="flex-1 relative">Terms of Use</div>
            </a>
          </div>
        </div>
        
        {/* Follow Us - Full width on mobile, normal width on desktop */}
        <div className="w-full sm:w-80 flex flex-col items-start justify-start gap-4 sm:gap-6">
          <div className="self-stretch relative text-lg font-semibold text-slate-900">
            Follow Us
          </div>
          <div className="flex flex-row items-center gap-4">
            <a href="#twitter" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#facebook" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#linkedin" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#instagram" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex flex-col items-start justify-start gap-6 sm:gap-8">
        <div className="self-stretch h-px bg-slate-200" />
        
        {/* Bottom section with logo and copyright */}
        <div className="self-stretch flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 flex-wrap">
          <div className="flex items-center justify-center sm:justify-start">
            <img
              className="h-12 sm:h-16 w-auto object-contain"
              loading="lazy"
              alt="Company Logo"
              src="/rectangle-1@2x.png"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4 sm:gap-6 text-sm text-slate-600">
            <div className="relative text-center sm:text-right">
              © {currentYear} Relume. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#cookies" className="hover:text-indigo-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;