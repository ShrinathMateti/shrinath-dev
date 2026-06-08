import React from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Crafting responsive, accessible, and interactive user interfaces using modern frameworks like React, ensuring seamless user experiences.",
    icon: <FaCode className="text-3xl text-green-400" />,
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Designing robust, scalable, and secure server-side logic with RESTful APIs, relational databases, and secure authentication systems.",
    icon: <FaServer className="text-3xl text-blue-400" />,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Delivering complete web applications by combining frontend and backend expertise to build optimized, end-to-end solutions.",
    icon: <FaLaptopCode className="text-3xl text-purple-400" />,
  },
];

const Services = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="bg-slate-900 text-white py-24 border-t border-slate-800/60"
      id="services"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            My Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-slate-600 flex flex-col justify-between shadow-xl hover:shadow-[0_10px_30px_rgba(34,197,94,0.05)]"
            >
              <div>
                {/* Icon Wrapper with subtle background pill */}
                <div className="mb-6 inline-flex p-3 rounded-xl bg-slate-900/60 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>

              {/* Action Link (Smoothed Anchor Tag mapping to core contact link) */}
              <button
                onClick={() => handleScroll("contact")}
                className="mt-8 text-sm font-semibold inline-flex items-center gap-1 text-green-400 group-hover:text-blue-400 transition-colors w-fit group/btn"
              >
                Let's Discuss
                <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
