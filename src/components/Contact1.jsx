import React, { useState } from "react";
import PropTypes from "prop-types";

const Contact1 = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    userType: "",
    message: "",
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const topics = [
    "General Inquiry",
    "Product Support",
    "Service Request",
    "Feedback",
    "Partnership Opportunity",
    "Other"
  ];

  return (
    <section
      className={`max-w-7xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden rounded-xl shadow-lg flex flex-col items-start justify-start py-16 px-12 box-border gap-10 text-left text-slate-800 font-sans lg:py-14 md:py-10 sm:px-6 ${className}`}
    >
      <div className="w-full max-w-3xl flex flex-col items-start justify-start gap-4">
        <div className="flex flex-row items-center justify-start">
          <div className="text-indigo-600 font-medium text-lg tracking-wide uppercase">
            Get in Touch
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <h1 className="m-0 self-stretch text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900">
            Contact Us
          </h1>
          <div className="self-stretch text-xl font-medium text-slate-700">
            We're here to assist you with your inquiries. Fill out the form below and we'll get back to you shortly.
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-3xl flex flex-col items-start justify-start gap-6">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap gap-6">
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px]">
            <label htmlFor="firstName" className="self-stretch font-medium">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-slate-300 border-solid border rounded-md [outline:none] bg-white self-stretch flex flex-row items-center justify-start p-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              type="text"
              required
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px]">
            <label htmlFor="lastName" className="self-stretch font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-slate-300 border-solid border rounded-md [outline:none] bg-white self-stretch flex flex-row items-center justify-start p-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              type="text"
              required
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap gap-6">
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px]">
            <label htmlFor="email" className="self-stretch font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-slate-300 border-solid border rounded-md [outline:none] bg-white self-stretch flex flex-row items-center justify-start p-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              type="email"
              required
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px]">
            <label htmlFor="phone" className="self-stretch font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-slate-300 border-solid border rounded-md [outline:none] bg-white self-stretch flex flex-row items-center justify-start p-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              type="tel"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <label htmlFor="topic" className="self-stretch font-medium">
            Choose a Topic
          </label>
          <div className="self-stretch relative">
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="appearance-none w-full border-slate-300 border-solid border rounded-md bg-white p-3 pr-10 text-base transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              required
            >
              <option value="" disabled>Select One...</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-4 px-0 gap-4">
          <div className="font-medium">
            Which best describes you?
          </div>
          <div className="self-stretch grid grid-cols-2 md:grid-cols-1 gap-4">
            {[
              { value: "business", label: "Business Owner" },
              { value: "government", label: "Government Agency" },
              { value: "contractor", label: "Contractor Partner" },
              { value: "vendor", label: "Vendor Inquiry" },
              { value: "inquiry", label: "Other Inquiry" },
              { value: "other", label: "Other" }
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-3">
                <input
                  id={option.value}
                  name="userType"
                  value={option.value}
                  checked={formData.userType === option.value}
                  onChange={handleChange}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-full cursor-pointer"
                  type="radio"
                />
                <label htmlFor={option.value} className="cursor-pointer">{option.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <label htmlFor="message" className="self-stretch font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-slate-300 border-solid border rounded-md bg-white h-40 w-full outline-none self-stretch p-3 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            placeholder="Type your message..."
            required
          />
        </div>
        <div className="flex items-center space-x-2 py-2">
          <input
            id="terms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
            type="checkbox"
            required
          />
          <label htmlFor="terms" className="text-sm">
            I accept the <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">Terms and Conditions</a>
          </label>
        </div>
        <button 
          type="submit"
          className="cursor-pointer border-none py-3 px-8 rounded-md font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

Contact1.propTypes = {
  className: PropTypes.string,
};

export default Contact1;