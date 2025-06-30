import React from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGithub,
} from "react-icons/fa";
import ProjectSlider from "./ProjectSlider";

const experiences = [
  {
    title: "FoodExpiry",
    company: "Food Expiry Tracker System",
    location: "Remote",
    duration: "2025",
    type: "Personal Project",
    description:
      "Developed a full-stack application to help users reduce food waste by tracking the expiry dates of their stored food items. Built with MERN stack and Firebase Auth, featuring protected routes, countdowns, search/filtering, and personalized dashboards.",
    achievements: [
      "Implemented secure JWT-based API with user-specific access control",
      "Built custom expiry countdown logic and dynamic badge system",
      "Integrated Firebase authentication (email/password & Google)",
      "Designed responsive UI with Tailwind, Framer Motion & SweetAlert2",
      "Created modular CRUD system with notes and comment features",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    links: {
      live: "https://assignment11-d0983.web.app/",
      github: "https://github.com/rkzahidhassandipu/Food-Expiry-Tracker-A-11",
    },
    images: [
      "https://i.postimg.cc/nVyCsz3x/Screenshot-40.png",
      "https://i.postimg.cc/rsxyG1fk/Screenshot-41.png",
      "https://i.postimg.cc/76pYTsM9/Screenshot-42.png",
    ],
  },
  {
    title: "GardenHub",
    company: "Gardening Community & Resource Hub",
    location: "Remote",
    duration: "2025",
    type: "Personal Project",
    description:
      "Built a full-stack community platform for gardening enthusiasts to share tips, ask questions, join events, and connect with others. Implemented advanced UI, real-time like systems, and both public/private route access.",
    achievements: [
      "Developed full CRUD and like functionality for 'Shartips' using MERN stack",
      "Integrated Firebase authentication with both email/password and Google login",
      "Built a responsive, dark/light theme interface using Tailwind and Swiper.js",
      "Deployed frontend (Firebase) and backend (Vercel) with secured environment configs",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
    links: {
      live: "https://gardeners-a1082.web.app/",
      github: "https://github.com/rkzahidhassandipu/GardenHub-A-10",
    },
    images: [
      "https://i.postimg.cc/kG9ZR7Sc/Screenshot-35.png",
      "https://i.postimg.cc/L4BGKZd0/Screenshot-36.png",
      "https://i.postimg.cc/D0gNqRdK/Screenshot-37.png",
      "https://i.postimg.cc/zDks924g/Screenshot-38.png",
      "https://i.postimg.cc/9fG8yrh7/Screenshot-39.png",
    ],
  },
  {
    title: "Boxify",
    company: "Boxify – Subscription Box Service Platform",
    location: "Remote",
    duration: "2025",
    type: "Personal Project",
    description:
      "Built a modern, responsive subscription box platform using React and Firebase Authentication. Boxify enables users to explore and subscribe to curated service boxes with protected user experiences and dynamic content.",
    achievements: [
      "Implemented email/password & Google sign-in with Firebase Auth",
      "Created protected routes and role-based navigation UI",
      "Designed profile system with update capabilities for name and photo",
      "Developed subscription cards with dynamic detail pages",
      "Integrated SwiperJS for responsive hero sliders and smooth UX",
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "React Router"],
    links: {
      live: "https://subscriptionbox-34c8e.web.app/",
      github: "https://github.com/rkzahidhassandipu/Boxify_Authentication_A_9",
    },
    images: [
      "https://i.postimg.cc/YqXYygkH/Screenshot-43.png",
      "https://i.postimg.cc/3xVp3Tdf/Screenshot-44.png",
      "https://i.postimg.cc/rmLrtNGS/Screenshot-45.png",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-300 mb-2">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-8 rounded-full" />
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 text-center">
          Explore a selection of projects highlighting my capabilities in full-stack development, scalable UI/UX design, and secure system integration.
        </p>

        {/* Timeline border */}
        <div className="relative space-y-16 border-l-2 border-white/30 pl-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-white/10 border border-white/20 p-6 sm:p-8 rounded-xl backdrop-blur-md shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-duration="1000"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-9 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-2 border-white" />

              {/* Left-Right Layout */}
              <div className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Slider */}
                <div className="md:w-1/2">
                  <ProjectSlider images={exp.images} />
                  <div className="mt-4">
                    <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-700/60 px-3 py-1 rounded-full text-sm text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-pink-200">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-purple-100">
                    <span className="flex items-center gap-1">
                      <FaBuilding /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                    <span className="bg-purple-500/30 px-2 py-0.5 rounded text-xs text-white">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-purple-100 text-sm sm:text-base">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside text-purple-200 space-y-1 text-sm sm:text-base">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2 text-base sm:text-lg">
                      Related Links
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {exp.links &&
                        Object.entries(exp.links).map(([key, url]) => (
                          <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-200 hover:underline flex items-center gap-1"
                          >
                            🔗 {key.charAt(0).toUpperCase() + key.slice(1)}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Box */}
        <div
          className="mt-16 max-w-3xl mx-auto bg-white/10 border border-white/20 p-6 sm:p-8 rounded-xl backdrop-blur-md text-center shadow-md"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
        >
          <h4 className="text-pink-300 font-semibold mb-2 text-lg sm:text-xl">
            More Projects Coming Soon
          </h4>
          <p className="text-purple-100 text-sm sm:text-base mb-4">
            I'm constantly working on new projects and exploring emerging
            technologies. Check back regularly to see my latest work, or connect
            with me to discuss potential collaborations.
          </p>
          <a
            href="https://github.com/rkzahidhassandipu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-300 px-5 py-2 border text-sm sm:text-base hover:opacity-90 transition"
          >
            <div className="flex items-center gap-2">
              <FaGithub /> <span>View All Projects on GitHub</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
