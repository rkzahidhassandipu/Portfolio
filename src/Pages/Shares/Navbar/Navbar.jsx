import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "hover:text-pink-400 cursor-pointer block py-2 md:inline md:py-0";

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Raihan_Uddin.pdf"; // Make sure this file exists in your public folder
    link.download = "Raihan-Uddin-Resume.pdf";
    link.click();
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-colors duration-500 py-4 text-white ${
        scrolled
          ? "bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-4/5 mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
          <img className="w-16" src="https://i.postimg.cc/SN7tQC8k/4918049-removebg-preview-Photoroom-1.png" alt="" />
        </h1>

        {/* Centered Menu */}
        <div className="hidden md:flex justify-center flex-1">
          <ul className="flex gap-6 text-lg">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
            >
              Contact
            </Link>
          </ul>
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded text-white font-semibold text-sm sm:text-base shadow-lg"
          >
            <FaDownload /> Download Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-[80%] mx-auto px-4 mt-2">
          <ul className="flex flex-col gap-3 text-lg bg-purple-700 rounded p-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLinkClass}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded text-white font-semibold text-sm sm:text-base shadow-lg"
            >
              <FaDownload /> Download Resume
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
