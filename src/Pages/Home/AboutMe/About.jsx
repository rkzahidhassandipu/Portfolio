import React from "react";
import { FaCode, FaHeart } from "react-icons/fa";

// Interest Data
const interestsData = [
  {
    icon: <FaCode />,
    title: "Web Developer",
    desc: "Building modern full-stack applications with clean and scalable code.",
    points: [
      "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
      "Firebase authentication (Email/Password + Google)",
      "Secure routes and JWT authentication",
      "Stripe payment integration",
      "MongoDB database with Express API",
      "Responsive UI with Tailwind CSS and animations",
      "Dynamic routing and modern deployment practices",
    ],
  },
  {
    icon: <FaHeart />,
    title: "Graphic Designer",
    desc: "Creating visually appealing and user-focused designs.",
    points: [
      "Social media design",
      "Banners and print materials",
      "Branding and logo design",
      "T-shirt and motion graphics",
      "4+ years of hands-on design experience",
      "Client and personal project-based work",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="w-4/5 mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-pink-300">
          About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-10 rounded-full" />

        {/* Grid Layout */}
        <div className="grid gap-10">
          {/* My Journey */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-white/20 shadow-md xl:col-span-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-4">
              My Journey
            </h3>
            <p className="text-purple-100 mb-4 text-sm sm:text-base leading-relaxed">
              I am a professional Web Developer with a deep passion for building
              modern and responsive web applications. I've been working in the
              web development field for a long time, but my journey has not been
              easy. Despite trying multiple times and following many YouTube
              tutorials and playlists, I struggled due to the lack of proper
              guidance.
            </p>
            <p className="text-purple-100 mb-4 text-sm sm:text-base leading-relaxed">
              Recently, I completed a comprehensive course from Programming Hero,
              which completely changed my perspective. From there, I gained a
              clear understanding of how to learn new technologies, how to think
              like a developer, and how to stay motivated throughout a project.
              That experience gave me the confidence and structure I needed to
              grow professionally.
            </p>

            {/* Interest Cards */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 mt-6">
              {interestsData.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-md hover:scale-105 transition-transform text-left"
                >
                  <div className="text-3xl mb-4 text-purple-100">{item.icon}</div>
                  <h2 className="text-white font-bold text-xl mb-2">{item.title}</h2>
                  <p className="text-purple-200 mb-3">{item.desc}</p>
                  <ul className="list-disc list-inside space-y-1 text-purple-300 text-sm">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
