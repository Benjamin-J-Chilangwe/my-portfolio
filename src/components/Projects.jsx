import React from "react";

const projects = [
  {
    title: "Findit App",
    description: "A lost-and-found mobile app using Flutter and Firebase.",
    image:
      "https://ypvhmhcgrbyqzlpftlzt.supabase.co/storage/v1/object/sign/assets/FindIt.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTFmY2YyNS0yMmY5LTQ4YWItOTczZS0zYzEwMGZlZWMwMjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvRmluZEl0LnBuZyIsImlhdCI6MTc1MzU4OTUxOSwiZXhwIjoxNzg1MTI1NTE5fQ.oK4f_6UBk5ckPhX0mDDQ3S7xXbg4RBD7hIaxXjcsjFs",
    link: "https://github.com/bsc-inf-08-20/findit.git",
  },
  {
    title: "Educonnect WebApp",
    description: "An online learning smart classroom platform.",
    image:
      "https://ypvhmhcgrbyqzlpftlzt.supabase.co/storage/v1/object/sign/assets/edu.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTFmY2YyNS0yMmY5LTQ4YWItOTczZS0zYzEwMGZlZWMwMjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZWR1LnBuZyIsImlhdCI6MTc1MzU4OTYwOCwiZXhwIjoxNzg1MTI1NjA4fQ.PRuO9dcl7yDji9pR3OZaLth9rtutRkZ0uKEi6ue3Mfs",
    link: "https://www.educonnecti.site/",
  },
  {
    title: "Portfolio-1",
    description: "A little description and overview of myself and my skills.",
    image:
      "https://ypvhmhcgrbyqzlpftlzt.supabase.co/storage/v1/object/sign/assets/Portfolio.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTFmY2YyNS0yMmY5LTQ4YWItOTczZS0zYzEwMGZlZWMwMjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUG9ydGZvbGlvLnBuZyIsImlhdCI6MTc1MzU5MDE4NSwiZXhwIjoxNzg1MTI2MTg1fQ.rDZ6bPJ_l3ZbG3ODuv73VbT-x1Wy2soIsFmPR9caLlQ",
    link: "https://magenta-haupia-42ba2c.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 text-white bg-black md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-green-500">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition duration-300 bg-gray-900 rounded-lg shadow-md hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
