import React from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Crafting responsive, accessible, and interactive user interfaces using modern frameworks like React, ensuring seamless user experiences.",
    icon: <FaCode className="text-4xl text-green-400" />,
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Designing robust, scalable, and secure server-side logic with REST APIs, databases, and authentication systems.",
    icon: <FaServer className="text-4xl text-blue-400" />,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Delivering complete web applications by combining frontend and backend expertise to build end-to-end solutions.",
    icon: <FaLaptopCode className="text-4xl text-purple-400" />,
  },
];

const Services = () => {
  return (
    <section className="bg-slate-900 text-white py-20 mb-12 mt-8" id="services">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 mt-2 text-white">
          My Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-b from-gray-900 to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-green-500/20 hover:scale-105 transform transition-all duration-300 flex flex-col justify-between"
            >
              {/* Icon */}
              <div className="mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Gradient Button */}
              <a href="#contact" className="mt-6 px-6 py-2 w-fit text-sm font-medium rounded-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
