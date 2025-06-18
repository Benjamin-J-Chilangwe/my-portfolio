import React from "react";
import MyImage from "../../public/images/MyImage.jpg";

const About = () => {
  return (
    <div>
      <h2 className="mb-6 text-4xl font-bold text-center text-green-500">About Me</h2>
      <section
        id="about"
        className="flex justify-center px-6 py-20 text-white bg-black md:px-12"
      >
        <div className="grid items-center w-full max-w-6xl gap-10 md:grid-cols-2">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={MyImage}
              alt="Ben's image"
              className="object-cover border-4 border-green-500 rounded-lg shadow-lg w-85 h-85"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="mb-2 text-sm tracking-widest text-gray-400 uppercase">
              Biography
            </h3>
            <h2 className="mb-4 text-4xl font-bold">
              Who am I?<span className="text-green-500">?</span>
            </h2>
            <h3 className="mb-3 text-2xl font-bold"> a Briefy of My Details</h3>
            <p className="leading-relaxed text-gray-400">
              I am a dedicated Computer Science graduate from the University of
              Malawi with a strong passion for technology and problem-solving.
              Throughout my studies and practical experiences, I have developed
              skills in web and mobile app development, UI/UX design, and
              graphic design. I’ve led projects, collaborated with teams, and
              participated in various community and professional roles. I am
              eager to apply my knowledge and continue growing as a software
              developer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
