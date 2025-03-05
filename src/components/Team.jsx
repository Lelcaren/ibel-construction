import React from "react";
import PropTypes from "prop-types";

const TeamMemberCard = ({ image, name, title, description }) => {
  return (
    <div className="group w-full max-w-[400px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] mx-auto hover:scale-105 transition-all duration-300 ease-in-out transform">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex justify-center items-center p-4 bg-gray-100">
          <img 
            src={image} 
            alt={`${name} - ${title}`} 
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
          />
        </div>
        <div className="p-4 md:p-6 text-center bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">{name}</h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 md:mb-3">{title}</p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = ({ 
  className = "",
  sectionTitle = "Meet",
  sectionSubtitle = "Our Team",
  sectionDescription = "Dedicated professionals committed to excellence in contracting."
}) => {
  const teamMembers = [
    {
      image: "/okello.jpg",
      name: "Nichollas Okello",
      title: "Team Leader",
      description: "Okello, an MBA holder in Strategic Management, brings over 20 years of expertise in construction management, business development, and strategic planning. He oversees the company's strategic direction, project delivery, and stakeholder relationships, driving growth and ensuring projects are completed on time, within budget, and to the highest quality and safety standards."
    },
    {
      image: "/okwiri.jpg",
      name: "Edgar Otieno Okwiri",
      title: "Lead Engineer",
      description: "Eng. Edgar Otieno Okwiri, registered professional (EBK) Corporate Member institute of engineers of kenya (IEK). 15 years experience in conception, planning, feasibility, engineering design, construction, contract administration and management, appraisal, monitoring, and evaluation across transportation infrastructure, civil works, commercial and residential structures."
    },
    {
      image: "/ochi.jpg",
      name: "Ochieng Ochoro",
      title: "Site Administration Manager",
      description: "Ochieng Ochoro leverages his extensive experience in construction management to oversee daily administrative operations on the company's construction sites. His role includes managing project documentation, coordinating stakeholders, ensuring compliance, and supporting smooth project execution. With a strong background in project management, he has successfully overseen numerous projects nationwide."
    },
    {
      image: "/alphonce.jpg",
      name: "Alhonce JUMA",
      title: "Head of finance",
      description: "Alphonce oversees the company's financial operations, ensuring efficient resource allocation and compliance with industry regulations. With expertise in finance and accounting, he manages budgeting, financial reporting, cost analysis, and procurement processes, contributing to the company's financial health and stakeholder satisfaction."
    },
    {
      image: "/ochoro.jpg",
      name: "Timothy Omondi Ochoro",
      title: "Site Administrator",
      description: "Timothy Omondi Ochoro is a communication expert with over 13 years of experience. Having worked for several organizations mainly in the media and communication industry, he brings a wealth of experience in the construction industry fostering flawless communication and administrative duties. His contribution to the Ibel family since 2021 has impacted administration to a higher level."
    },
    {
      image: "/agufa.png",
      name: "Kennedy Agufa",
      title: "Civil Egineer",
      description: "Kennedy Agufa is a highly skilled Civil Engineering Technician with over 22 years of hands-on experience. He has played a pivotal role in the successful execution of diverse projects, including building construction, road development, and water infrastructure. His expertise ensures quality, efficiency, and adherence to industry standards in every project he undertakes."
    },
    {
      image: "/diana.jpg",
      name: "Diana Ochieng",
      title: "Site Administrator",
      description: "Diana Ochieng is a dedicated administrative professional with extensive experience in office management and organizational coordination. Her expertise lies in streamlining workflows, enhancing communication, and ensuring efficient administrative operations within the construction industry. Since becoming part of the Ibel team, Diana has played a pivotal role in maintaining operational excellence and fostering a collaborative work environment."
    },
    {
      image: "/diana.jpg",
      name: "Robert Green",
      title: "Senior Architect",
      description: "Innovative design expert bringing creative solutions to complex architectural challenges, blending aesthetics with functional excellence."
    }
  ];

  return (
    <section 
      className={`w-full mx-auto bg-white py-8 sm:py-12 md:py-20 px-2 sm:px-6 md:px-8 lg:px-10 ${className}`}
    >
      {/* Header Section */}
      <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] mx-auto text-center mb-6 sm:mb-8 md:mb-12">
        <span className="block text-sm sm:text-base md:text-xl text-gray-600 mb-1 sm:mb-2 md:mb-4 uppercase tracking-wide">
          {sectionTitle}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
          {sectionSubtitle}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2 sm:px-4">
          {sectionDescription}
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionSubtitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

TeamMemberCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Team;