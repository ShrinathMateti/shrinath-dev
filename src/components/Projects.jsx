import { useState, useEffect } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const frontendProjects = [
  {
    id: 1,
    name: "AI Assistant Site",
    technologies: ["React", "Tailwind CSS", "Firebase", "Grok LLM"],
    image: "ai.png",
    description:
      "A conversational AI assistant with multi-session chat history, Google auth, and real-time responses powered by Grok LLM.",
    liveDemo: "https://edith-ai-assistant.vercel.app/",
    tag: "AI",
  },
  {
    id: 2,
    name: "Tourism Site",
    technologies: ["React", "Tailwind CSS"],
    image: "tourism-site.png",
    description:
      "Travel booking platform with destination discovery, tour packages, car rentals, and an inquiry contact flow.",
    liveDemo: "https://makemyjourney.vercel.app/",
    tag: "Travel",
  },
  {
    id: 3,
    name: "Movies Site",
    technologies: ["React", "Bootstrap", "OMDB API"],
    image: "movies-website.png",
    description:
      "Browse trending films, search by genre, and explore cast details, all powered by the OMDB public API.",
    liveDemo: "https://mymovieshub.vercel.app/",
    tag: "Entertainment",
  },
  {
    id: 4,
    name: "Face Detector Site",
    technologies: ["React", "Tailwind CSS", "BlazeFace"],
    image: "face-detector.png",
    description:
      "The site detects faces in real-time using the blazeface face-detection model.",
    liveDemo: "https://jocasta-face-detector.vercel.app/",
    tag: "AI",
  },
  {
    id: 5,
    name: "Cafe Site",
    technologies: ["React", "Tailwind CSS"],
    image: "coffee.png",
    description:
      "Cafe landing page with an interactive menu gallery, and warm branded experience.",
    liveDemo: "https://cafe-brewhaven.vercel.app/",
    tag: "Retail",
  },
  {
    id: 6,
    name: "Hotel Booking Site",
    technologies: ["React", "Tailwind CSS"],
    image: "hotel.png",
    description:
      "Hotel showcase with room listings, amenities gallery, availability calendar, and a booking form.",
    liveDemo: "https://hotelurbanstay.netlify.app/",
    tag: "Hospitality",
  },
  {
    id: 7,
    name: "Music Player Site",
    technologies: ["React", "Tailwind CSS", "Jamendo"],
    image: "music-player.png",
    description:
      "A modern music streaming application with featured songs, playlist management and an integrated audio player powered by the Jamendo API.",
    liveDemo: "https://arc-audio-player.vercel.app/",
    tag: "Entertainment",
  },
  {
    id: 8,
    name: "Luxury Car Rental Site",
    technologies: ["React", "Tailwind CSS"],
    image: "car-rental.png",
    description:
      "A modern car rental experience built around a luxury showroom feel rather than a typical rental-counter interface. Features a curated fleet showcase and a streamlined booking flow.",
    liveDemo: "https://lux-drive-rental.vercel.app/",
    tag: "Transportation",
  },
  {
    id: 9,
    name: "Trekking Site",
    technologies: ["React", "Tailwind CSS"],
    image: "trekking.png",
    description:
      "An adventure-focused trekking website featuring destination guides, trekking packages, scenic galleries, and an easy booking interface for outdoor enthusiasts.",
    liveDemo: "https://himavan-expeditions.vercel.app/",
    tag: "Travel",
  },
];

const fullstackProjects = [
  {
    id: 7,
    name: "Full-Stack Blog Site",
    technologies: ["React", "Bootstrap", "Spring Boot", "PostgreSQL"],
    image: "blogsite.png",
    description:
      "End-to-end blog platform with Google auth, rich text editing, category filtering, and a REST API backend.",
    github: "https://github.com/ShrinathMateti/journeytales-frontend",
    tag: "Full-Stack",
  },
  {
    id: 8,
    name: "Library Management System",
    technologies: ["React", "Bootstrap", "Spring Boot", "PostgreSQL"],
    image: "librarymanager.png",
    description:
      "Role-based LMS with book inventory, member management, issue and return tracking.",
    github: "https://github.com/ShrinathMateti/librarymanagementsystemfrontend",
    tag: "Full-Stack",
  },
  {
    id: 9,
    name: "E-Commerce Site",
    technologies: ["React", "Tailwind", "Spring Boot", "PostgreSQL"],
    image: "shophaven.png",
    description:
      "Full-stack e-commerce site with product catalogue, cart management, order tracking payment gateway and admin dashboard.",
    github: "https://github.com/ShrinathMateti/ShopHaven-Ecommerce",
    tag: "Full-Stack",
  },
];

/* ── Card ── */
const ProjectCard = ({ project, onImageClick }) => {
  const isFullStack = !!project.github;

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-slate-800/40 border border-white/[0.07] transition-all duration-300 md:hover:-translate-y-1.5 md:hover:border-white/[0.14] md:hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
      {/* Responsive Image Container */}
      <div
        className="relative overflow-hidden cursor-pointer shrink-0 h-48 sm:h-52 md:h-auto md:aspect-video bg-gray-950"
        onClick={() => {
          if (window.innerWidth >= 768) {
            onImageClick(project.image);
          }
        }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-fill transition-transform duration-500 md:group-hover:scale-103"
          style={{ objectPosition: "top center" }}
        />

        <div className="absolute inset-0 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center bg-black/45">
          <span className="text-[0.72rem] tracking-[0.14em] uppercase text-white bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Preview
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Name + Gradient Tag */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[1.05rem] font-bold text-slate-100 leading-snug">
            {project.name}
          </h3>
          <span className="text-[0.62rem] tracking-wider uppercase font-bold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 bg-gradient-to-r from-green-400/10 to-blue-500/10 text-emerald-400 border border-emerald-500/20">
            {project.tag}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 my-1">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[0.65rem] tracking-wide px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Dynamic Navigation Button */}
        <a
          href={isFullStack ? project.github : project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-1 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-green-400 to-blue-500 transition-opacity duration-200 active:scale-[0.99] md:hover:opacity-90"
        >
          {isFullStack ? (
            <>
              <FiGithub size={15} /> View on GitHub
            </>
          ) : (
            <>
              <FiExternalLink size={15} /> Live Demo
            </>
          )}
        </a>
      </div>
    </div>
  );
};

/* ── Section ── */
const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Frontend", "Full-Stack"];
  const filtered =
    filter === "Frontend"
      ? frontendProjects
      : filter === "Full-Stack"
        ? fullstackProjects
        : [...frontendProjects, ...fullstackProjects];

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Perfectly Centered Header Block */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-white font-bold"
          >
            My Projects
          </motion.h2>
          <p className="text-[0.75rem] text-slate-500 tracking-wide mt-1.5 mb-5">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Clean Centered Segmented Tab Control */}
          <div className="flex gap-1 bg-slate-900/60 p-1 rounded-xl border border-white/[0.05]">
            {filters.map((f) => (
              <button
                key={f}
                type="button" // 1. Prevents default form submit behavior
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer touch-manipulation select-none transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full text-white bg-white/10 border border-white/15 active:scale-95 transition-transform"
          >
            <FiX size={18} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-xl shadow-2xl max-h-[82vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
