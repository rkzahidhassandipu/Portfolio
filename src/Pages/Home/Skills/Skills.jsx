import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "JWT", level: 78 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 92 },
      { name: "Github", level: 70 },
      { name: "Photoshop", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Ai Illustrator", level: 78 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm text-purple-100 mb-1">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-purple-300/30 rounded-full h-2">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-300 mb-2">
          Skills & Expertise
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-12 rounded-full" />

        {/* Skill Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {skills.map((group, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-pink-300 mb-4 text-center">
                {group.category}
              </h3>
              {group.items.map((skill, i) => (
                <SkillBar key={i} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>

        {/* Continuous Learning */}
        <div
          className="bg-white/10 border border-white/20 max-w-3xl mx-auto rounded-xl p-6 text-center backdrop-blur-md"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <h4 className="text-pink-300 font-semibold mb-2 text-base sm:text-lg">
            Continuous Learning
          </h4>
          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            Technology evolves rapidly, and I'm committed to staying current
            with the latest trends and best practices. I regularly explore new
            frameworks, attend tech conferences, and contribute to open-source
            projects to expand my skill set and give back to the developer
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
