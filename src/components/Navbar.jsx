import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed z-50 w-full text-white bg-black shadow bg-opacity-90">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">Benjamin Chilangwe</div>

        {/* Desktop Nav */}
        <ul className="hidden space-x-8 font-medium md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition duration-200 hover:text-green-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="px-6 pb-4 space-y-4 font-medium text-center bg-black md:hidden">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to="about" smooth={true} duration={500}
                onClick={() => setMenuOpen(false)}
                className="block text-white transition hover:text-green-400"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
