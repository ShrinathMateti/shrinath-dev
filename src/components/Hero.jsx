import { useState, useEffect } from "react";
import HeroImage from "../assets/shrinath_avatar.webp";
import { Typewriter } from "react-simple-typewriter";

const roles = [
  "MCA Graduate",
  "Full-Stack Developer",
  "React Developer",
  "Java Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-slate-900 text-white text-center py-20 overflow-hidden">
      {/* Avatar */}
      <div className="animate-fadeUp" style={{ animationDelay: "0.1s" }}>
        <img
          src={HeroImage}
          alt="Shrinath"
          className="mx-auto mb-8 w-44 h-44 md:w-52 md:h-52 rounded-full object-cover shadow-lg animate-float mt-3"
        />
      </div>

      {/* Name */}
      <h1
        className="text-4xl md:text-5xl font-bold animate-fadeUp"
        style={{ animationDelay: "0.2s" }}
      >
        &nbsp;Hi, I'm{" "}
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-green-500 bg-[length:200%] bg-clip-text text-transparent animate-gradient">
          <Typewriter
            words={["Shrinath Mateti"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      {/* Role */}
      <div
        className="mt-4 h-10 overflow-hidden animate-fadeUp"
        style={{ animationDelay: "0.3s" }}
      >
        <div
          key={index}
          className="text-2xl md:text-3xl font-semibold text-gray-300 animate-slideFade"
        >
          {roles[index]}
        </div>
      </div>

      {/* Description */}
      <p
        className="mt-6 text-lg text-gray-400 px-6 md:px-32 animate-fadeUp"
        style={{ animationDelay: "0.4s" }}
      >
        I build scalable, modern, and responsive web applications using React
        and Spring Boot.
      </p>

      {/* Buttons */}
      <div
        className="mt-10 space-x-4 animate-fadeUp"
        style={{ animationDelay: "0.5s" }}
      >
        <button
          onClick={() => handleScroll("contact")}
          className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-5 text-sm font-medium leading-none transition hover:scale-105"
        >
          Contact Me
        </button>

        <button
          onClick={() => handleScroll("projects")}
          className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 px-5 text-sm font-medium leading-none transition hover:scale-105"
        >
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
