import { useState, useEffect } from "react";

const frontendProjects = [
  {
    id: 1,
    name: "Tourism Site",
    technologies: "React",
    image: "tourism-site.png",
    liveDemo: "https://makemyjourney.vercel.app/",
  },
  {
    id: 2,
    name: "Movies Site",
    technologies: "React",
    image: "movies-website.png",
    liveDemo: "https://mymovieshub.vercel.app/",
  },
  {
    id: 3,
    name: "Face Detector",
    technologies: "React",
    image: "face-detector.png",
    liveDemo: "https://face-detector-brown.vercel.app/",
  },
];

const fullstackProjects = [
  {
    id: 1,
    name: "Full-Stack Blog Site",
    technologies: "React & SpringBoot",
    image: "blogsite.png",
    github: "https://github.com/ShrinathMateti/journeytales-frontend",
  },
  {
    id: 2,
    name: "Library Management System",
    technologies: "React & SpringBoot",
    image: "librarymanager.png",
    github: "https://github.com/ShrinathMateti/librarymanagementsystemfrontend",
  },
  {
    id: 3,
    name: "Ecommerce Web Application",
    technologies: "React & SpringBoot",
    image: "shophaven.png",
    github: "https://github.com/ShrinathMateti/ShopHaven-Ecommerce",
  },
];

const ProjectCard = ({ project, isFullStack, onImageClick }) => (
  <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div
      className="h-56 overflow-hidden cursor-pointer bg-gray-800"
      onClick={() => onImageClick(project.image)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="aspect-video overflow-hidden cursor-pointer"
      />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-2xl text-white font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-400 mb-4">{project.technologies}</p>

      <a
        href={isFullStack ? project.github : project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
      >
        {isFullStack ? "GitHub" : "Live Demo"}
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-white">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...frontendProjects, ...fullstackProjects].map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              isFullStack={!!project.github}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* 🔥 Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-70"
          >
            ✕
          </button>

          {/* Image Container */}
          <div
            className="max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Zoomed"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl transform transition duration-300 scale-95 animate-zoomIn"
            />
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}      
    </section>
  );
};

export default Projects;
