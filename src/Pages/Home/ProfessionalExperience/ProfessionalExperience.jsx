import React from "react";

const ProfessionalExperience = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-4/5 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-300 mb-2">
          Professional Experience
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-12 rounded-full" />

        {/* Bachelor Degree */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-md mb-8 flex flex-col lg:flex-row gap-6">
          {/* Left */}
          <div className="flex-1 space-y-3">
            <div className="text-3xl">🎓</div>
            <h3 className="text-xl font-bold text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-pink-200 text-sm">University of Technology</p>
            <p className="text-sm text-purple-100">2018 - 2022</p>
            <p className="text-sm text-purple-100 leading-relaxed">
              Graduated Magna Cum Laude with a focus on Software Engineering and Web Development.
              Completed coursework in Data Structures, Algorithms, Database Systems, and Software Architecture.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-pink-300 mb-3">🎖 Key Achievements</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-purple-100">
              <li><span className="font-semibold">GPA:</span> 3.8 / 4.0</li>
              <li><span className="font-semibold">Dean’s List:</span> 6 semesters</li>
              <li><span className="font-semibold">Leadership:</span> President of CS Club</li>
              <li><span className="font-semibold">Award:</span> Hackathon Winner 2021</li>
            </ul>
          </div>
        </div>

        {/* Bootcamp */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-md mb-8 flex flex-col lg:flex-row gap-6">
          {/* Left */}
          <div className="flex-1 space-y-3">
            <div className="text-3xl">🎓</div>
            <h3 className="text-xl font-bold text-white">
              Full Stack Web Development Bootcamp
            </h3>
            <p className="text-pink-200 text-sm">TechAcademy Pro</p>
            <p className="text-sm text-purple-100">2022</p>
            <p className="text-sm text-purple-100 leading-relaxed">
              Intensive 6-month program focused on modern web development technologies
              including React, Node.js, MongoDB, and cloud deployment strategies.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-pink-300 mb-3">🎖 Key Achievements</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-purple-100">
              <li><span className="font-semibold">Top:</span> 5% of graduating class</li>
              <li><span className="font-semibold">Projects:</span> 15+ full-stack builds</li>
              <li><span className="font-semibold">Mentorship:</span> Guided junior students</li>
              <li><span className="font-semibold">Excellence Award:</span> Recognized for performance</li>
            </ul>
          </div>
        </div>

        {/* Certifications & Continuous Learning */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-md text-center">
          <h4 className="text-pink-300 font-semibold text-lg sm:text-xl mb-4">
            Certifications & <span className="text-white">Continuous Learning</span>
          </h4>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {[
              "AWS Certified Developer Associate",
              "Google Cloud Professional Developer",
              "MongoDB Certified Developer",
              "React Developer Certification",
            ].map((cert, i) => (
              <span
                key={i}
                className="bg-purple-900/60 px-4 py-2 rounded-full text-sm text-white"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-sm text-purple-100 max-w-2xl mx-auto">
            I believe in lifelong learning and regularly pursue new certifications and courses to stay current with emerging technologies and industry best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
