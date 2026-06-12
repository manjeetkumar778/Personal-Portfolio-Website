import React from "react";
import { SkillsInfo } from "../../constants.js";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#050414]"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>

        <p className="text-gray-400 mt-4 text-base sm:text-lg">
          A collection of my technical skills and expertise developed through
          various projects and experiences.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap justify-center gap-8">

        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 px-8 py-8 w-full sm:w-[45%] rounded-2xl border border-gray-700 shadow-[0_0_20px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2 border border-gray-700 rounded-xl py-3 px-3 hover:border-[#8245ec] transition duration-300 text-center flex-wrap"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />

                    <span className="text-xs sm:text-sm text-gray-300 font-medium break-words">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </Tilt>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;