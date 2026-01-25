import React from "react";

const projects = [
  {
    title: "Findit App",
    description: "A lost-and-found mobile app using Flutter and Firebase.",
    image:
      "https://abgafrrufzrvvwxrcbsl.supabase.co/storage/v1/object/sign/portfolio-files/FindIt.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMDJhNjI5OS1kMzk4LTQzODctYmVjZi1lMTZlYTY2YTk2OGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tZmlsZXMvRmluZEl0LnBuZyIsImlhdCI6MTc2OTMzMjkzNywiZXhwIjoxODAwODY4OTM3fQ.Gjh_JhJuN04EfcYMdhHs9jUdPKSQc-J92iNh7g8NyD0",
    link: "https://github.com/bsc-inf-08-20/findit.git",
  },
  {
    title: "Educonnect WebApp",
    description: "An online learning smart classroom platform.",
    image:
      "https://abgafrrufzrvvwxrcbsl.supabase.co/storage/v1/object/sign/portfolio-files/edu.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMDJhNjI5OS1kMzk4LTQzODctYmVjZi1lMTZlYTY2YTk2OGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tZmlsZXMvZWR1LnBuZyIsImlhdCI6MTc2OTMzMjg1NCwiZXhwIjoxODAwODY4ODU0fQ.HxvSwzsi1bBNjLe-nAuTqZfd5zdA3rWmWEloB1eemVE",
    link: "https://www.educonnecti.site/",
  },
  {
    title: "Portfolio-1",
    description: "A little description and overview of myself and my skills.",
    image:
      "https://abgafrrufzrvvwxrcbsl.supabase.co/storage/v1/object/sign/portfolio-files/Portfolio.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMDJhNjI5OS1kMzk4LTQzODctYmVjZi1lMTZlYTY2YTk2OGYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8tZmlsZXMvUG9ydGZvbGlvLnBuZyIsImlhdCI6MTc2OTMzMjkxMCwiZXhwIjoxODAwODY4OTEwfQ.ZOI713gD6dENF2ZD_heyGXUxJm73wyZ2Dgn9ZMSsr_Y",
    link: "https://benjamin-chilangwe-portfolio-1.netlify.app/",
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
