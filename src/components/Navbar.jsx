import React, { useState ,useEffect} from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav
      className="fixed w-full top-0 z-50 px-6 md:px-16 lg:px-24 bg-slate-900 shadow-lg"
    >
      <div className="container py-3 flex justify-between items-center">
        {/* Logo with React icon */}
        <div className="flex items-center space-x-2 text-2xl font-bold transition-transform animate-pulse">
          <FaCode className="text-green-400" />
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Shrinath</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300">
            Home
          </a>
          <a href="#about" className="text-gray-300">
            About Me
          </a>
          <a href="#services" className="text-gray-300">
            Services
          </a>
          <a href="#projects" className="text-gray-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-300">
            Contact 
          </a>
        </div>

        {/* Connect Me Button (Desktop only) */}
        <a
          href="https://www.linkedin.com/in/shrinath-mateti/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </a>

        {/* Hamburger Icon (Mobile only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 text-center py-6 space-y-4">
          <a
            href="#"
            className="block text-gray-300"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-300"
            onClick={toggleMenu}
          >
            About Me
          </a>
          <a
            href="#services"
            className="block text-gray-300"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#projects"
            className="block text-gray-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-gray-300"
            onClick={toggleMenu}
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/shrinath-mateti/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
          >
            Connect Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
