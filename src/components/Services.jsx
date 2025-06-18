import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="mb-4 text-4xl text-green-400" />,
    description: "Building modern, responsive websites using React, HTML, CSS, PHP, and Laravel.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="mb-4 text-4xl text-green-400" />,
    description: "Designing user-friendly interfaces with a focus on clarity, color, and consistency.",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="mb-4 text-4xl text-green-400" />,
    description: "Creating cross-platform mobile apps using Flutter and Firebase.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-6 py-20 text-white bg-black md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-10 text-4xl font-bold text-green-500">Services</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition bg-gray-900 rounded-lg shadow hover:shadow-xl"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
