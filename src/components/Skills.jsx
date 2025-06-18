import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiFirebase, SiPython } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={30} /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={30} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={30} /> },
  { name: "React", icon: <FaReact className="text-cyan-400" size={30} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={30} /> },
  { name: "PHP", icon: <FaPhp className="text-purple-400" size={30} /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" size={30} /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-300" size={30} /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={30} /> },
  { name: "Python", icon: <SiPython className="text-blue-300" size={30} /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" size={30} /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" size={30} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 text-white bg-black md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-6 text-4xl font-bold text-center text-green-500">Skills</h2>
        <p className="mb-12 text-center text-gray-400">
          Here's a quick overview of my technical skills and tools I'm familiar with.
        </p>

        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="px-4 py-6 transition bg-gray-900 border border-gray-700 rounded-lg shadow hover:shadow-lg"
            >
              <div className="flex justify-center mb-3">{skill.icon}</div>
              <span className="font-semibold text-green-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
