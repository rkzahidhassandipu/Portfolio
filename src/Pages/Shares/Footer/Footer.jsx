import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-5">
        
        {/* Name & Role */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-200">
            Raihan Uddin
          </h3>
          <p className="inline-block text-white font-medium px-3 py-1 mt-1 rounded-full text-sm">
            MERN Stack Web Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-xl">
          <a
            href="https://github.com/rkzahidhassandipu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.behance.net/rkzahidhassandipu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
          >
            <FaBehance />
          </a>
          <a
            href="mailto:rkrazzakhan01731@gmail.com"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Credits */}
        <div className="text-sm text-white/80">
          <p>
            Created by <span className="font-semibold text-white">Raihan Uddin</span> &bull; © 2024 All rights reserved
          </p>
          <p className="text-xs text-white/50 mt-1">
            Built with React, Tailwind CSS & 💖
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
