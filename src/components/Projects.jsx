import React from "react";

const projects = [
  {
    title: "Findit App",
    description: "A lost-and-found mobile app using Flutter and Firebase.",
    image:
      "https://ypvhmhcgrbyqzlpftlzt.supabase.co/storage/v1/object/sign/assets/FindIt.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mN2FiZGE5Zi0xMzIzLTQ0OTQtOWM0Ni1kYmRhNTEwZjAzYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvRmluZEl0LnBuZyIsImlhdCI6MTc1MjMzMDg1NSwiZXhwIjoxNzgzODY2ODU1fQ.7VmOqqcM6Yh2jtllke-2iusiCGNM97w8I1xRzx1D0Os",
    link: "https://github.com/bsc-inf-08-20/findit.git",
  },
  {
    title: "Educonnect WebApp",
    description: "An online learning smart classroom platform.",
    image:
      "https://ypvhmhcgrbyqzlpftlzt.supabase.co/storage/v1/object/sign/assets/edu.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mN2FiZGE5Zi0xMzIzLTQ0OTQtOWM0Ni1kYmRhNTEwZjAzYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZWR1LnBuZyIsImlhdCI6MTc1MjMzMDg5NiwiZXhwIjoxNzgzODY2ODk2fQ.1rO031gHja7Qlhd2z8BT_h1Xnvwir-vRN-IGNHc8uWA",
    link: "https://www.educonnecti.site/",
  },
  {
    title: "Portfolio-1",
    description: "A little description and overview of myself and my skills.",
    image:
      "https://ypvhmhcgrbyqzlpftlzt.supabase.co/storage/v1/object/sign/assets/Portfolio.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mN2FiZGE5Zi0xMzIzLTQ0OTQtOWM0Ni1kYmRhNTEwZjAzYWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUG9ydGZvbGlvLnBuZyIsImlhdCI6MTc1MjMzMDgwNiwiZXhwIjoxNzgzODY2ODA2fQ.DfkCj_kNCyFz38AlTVPbK83exvvT2Wz0RSKsTgvThN0",
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
