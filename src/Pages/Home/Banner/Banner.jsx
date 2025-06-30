import React, { useState } from "react";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPlay,
  FaBehance,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-700 text-white relative pt-32 px-4"
    >
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        {/* ✅ Left Side - 3/5 Columns */}
        <div
          className="md:col-span-3 space-y-6 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="text-lg">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text">
            Raihan Uddin
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React Enthusiast",
              2000,
              "Node.js Backend Builder",
              2000,
              "Graphic Designer",
              2000,
              "Printing desing and social design",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl sm:text-2xl font-semibold"
            repeat={Infinity}
          />

          <p className="max-w-xl mx-auto md:mx-0 text-gray-300 text-sm sm:text-base">
            Passionate MERN stack developer crafting innovative, functional, and
            beautifully designed web applications with React and Node.js.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <button
              onClick={openVideo}
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded text-white font-semibold text-sm sm:text-base shadow-lg"
            >
              <FaPlay /> Watch Intro
            </button>
            <a
              href="https://github.com/rkzahidhassandipu"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.behance.net/rkzahidhassandipu"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-xl"
            >
              <FaBehance />
            </a>
            <a
              href="mailto:rkrazzakhan01731@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* ✅ Right Side - 2/5 Columns */}
        <div
          className="md:col-span-2 flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="relative w-full flex items-center justify-center animate-[bounceSmall_2s_ease-in-out_infinite]">
            {/* Blob SVG background */}
            <div className="absolute inset-0 -z-10 scale-125">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient
                    id="blobGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7e22ce" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#blobGradient)"
                  d="M44.8,-56.1C56.7,-45.7,64.7,-28.6,64.2,-13.1C63.6,2.3,54.4,15.4,45.5,28.5C36.6,41.6,27.9,54.6,15.4,59.6C2.9,64.6,-13.5,61.5,-27.8,54.1C-42.1,46.8,-54.3,35.2,-58.9,21.1C-63.5,7,-60.5,-9.6,-52.6,-22.9C-44.6,-36.1,-31.8,-46.1,-17.2,-54.2C-2.6,-62.3,13.9,-68.4,29.3,-65.5C44.6,-62.6,59,-50.7,44.8,-56.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Profile Image */}
            <img
              src="https://i.postimg.cc/DfYPxnb3/IMG-334g2.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-pink-400 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white rounded-full flex items-start justify-center">
          <div className="w-1 h-1 bg-white mt-1 rounded-full"></div>
        </div>
      </div>

      {/* YouTube Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-transparent bg-opacity-80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/qzxW7iMQbKQ?autoplay=1"
              title="Intro Video"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 text-white text-xl bg-red-600 hover:bg-red-700 rounded-full px-3 py-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
