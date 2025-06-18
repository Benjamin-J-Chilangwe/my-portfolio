import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-gray-400 bg-black">
      <div className="max-w-6xl mx-auto space-y-4 text-center">
        <h3 className="text-lg font-semibold text-white">Benjamin Chilangwe © 2025 | All Rights Reserved.</h3>
        <p>Designed & built by me with ❤️ using React & TailwindCSS</p>

        <div className="flex justify-center space-x-6 text-xl text-white">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-green-400" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-green-400" />
          </a>
          <a href="mailto:your@email.com">
            <FaInstagram className="hover:text-green-400" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-green-400" />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-green-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
