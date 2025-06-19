import React from "react";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaBrain,
  FaChartBar,
} from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="px-6 py-20 text-white bg-black md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-green-500">
          Education
        </h2>

        <div className="p-6 mb-12 bg-gray-900 border border-gray-700 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-green-400">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-400">University of Malawi • 2021 – 2025</p>
          <p className="mt-4 text-gray-300">
            My academic journey has equipped me with both foundational and
            applied computing knowledge, preparing me to solve real-world
            problems using modern technologies and development practices.
          </p>
        </div>

        {/* Programming & Software */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <FaLaptopCode className="text-xl text-green-400" />
            <h4 className="text-xl font-semibold text-green-400">
              Programming & Software
            </h4>
          </div>
          <ul className="ml-6 space-y-1 text-gray-300 list-disc list-inside">
            <li>
              <strong>Object-Oriented Programming (OOP):</strong> Built strong
              coding habits through encapsulation, abstraction, and
              inheritance, which are core to maintainable systems.
            </li>
            <li>
              <strong>Data Structures and Algorithms:</strong> Developed
              efficient problem-solving skills using arrays, trees, graphs, and
              sorting/searching algorithms.
            </li>
            <li>
              <strong>Software Engineering:</strong> Learned design patterns,
              documentation, testing, and Agile workflows for building
              production-ready applications.
            </li>
            <li>
              <strong>Web Development:</strong> Gained hands-on skills in
              frontend/backend development with HTML, CSS, JS, React, PHP, and
              Laravel.
            </li>
            <li>
              <strong>Mobile Development (Flutter, Android):</strong> Built
              responsive mobile apps that solve real-world challenges.
            </li>
            <li>
              <strong>Game Development:</strong> Covered game loops, input
              handling, and skeletal animation to build 2D/3D games using C#,
              OpenGL, and OpenTK.
            </li>
          </ul>
        </div>

        {/* Systems & Networking */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <FaNetworkWired className="text-xl text-green-400" />
            <h4 className="text-xl font-semibold text-green-400">
              Systems & Networking
            </h4>
          </div>
          <ul className="ml-6 space-y-1 text-gray-300 list-disc list-inside">
            <li>
              <strong>Computer Networks:</strong> Understood data transmission,
              protocols, and architecture essential for web and cloud systems.
            </li>
            <li>
              <strong>Operating Systems:</strong> Learned resource management,
              memory, and processes-key for low-level understanding.
            </li>
            <li>
              <strong>Cloud Computing:</strong> Applied knowledge in platforms
              like Firebase, AWS, and Netlify for deploying scalable apps.
            </li>
          </ul>
        </div>

        {/* Intelligence & Theory */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <FaBrain className="text-xl text-green-400" />
            <h4 className="text-xl font-semibold text-green-400">
              Intelligence & Theory
            </h4>
          </div>
          <ul className="ml-6 space-y-1 text-gray-300 list-disc list-inside">
            <li>
              <strong>Machine Learning:</strong> Explored predictive modeling
              and data-driven decisions using Python tools.
            </li>
            <li>
              <strong>Artificial Intelligence (AI):</strong> Learned intelligent
              system design, search strategies, and knowledge representation.
            </li>
            <li>
              <strong>Automata Theory:</strong> Built a foundation in formal
              languages, computation models, and parsing techniques.
            </li>
            <li>
              <strong>Computer Graphics & Multimedia:</strong> Developed basic
              3D graphics and animation logic using OpenGL and multimedia tools.
            </li>
          </ul>
        </div>

        {/* Other Courses */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaChartBar className="text-xl text-green-400" />
            <h4 className="text-xl font-semibold text-green-400">
              Other Useful Courses
            </h4>
          </div>
          <ul className="ml-6 space-y-1 text-gray-300 list-disc list-inside">
            <li>
              <strong>Database Systems:</strong> Learned to design, query, and
              manage relational databases (SQL, MySQL).
            </li>
            <li>
              <strong>Research Methods in Computing:</strong> Built academic
              research and technical writing skills applicable in IT
              innovations.
            </li>
            <li>
              <strong>Human-Computer Interaction (HCI):</strong> Focused on
              usability, interface design, and user feedback loops.
            </li>
            <li>
              <strong>Internet Governance:</strong> Studied digital policy,
              cyberlaw, and internet control systems important for ethical
              computing.
            </li>
            <li>
              <strong>Business Management for CS:</strong> Learned
              entrepreneurship, project management, and strategic thinking in
              tech environments.
            </li>
            <li>
              <strong>Project Management:</strong> Applied project lifecycle
              planning, Agile tools, and collaboration techniques to academic
              software initiatives.
            </li>
            <li>
              <strong>Information Technology Practice & Consultancy:</strong>{" "}
              Practiced IT service delivery, client engagement, and
              problem-solving approaches during real-world fieldwork and
              presentations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
