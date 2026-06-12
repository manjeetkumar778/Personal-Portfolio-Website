import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        {/* Line */}
        <div className="absolute w-1 bg-white h-full"></div>

        {education.map((edu) => (
          <div key={edu.id} className="flex flex-col items-center mb-16">
            
            {/* Circle */}
            <div className="bg-gray-400 border-4 border-[#8245ec] w-16 h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img} 
                alt={edu.school} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div className="mt-6 w-full sm:max-w-md p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition duration-300 hover:scale-105">
              
              <div className="flex items-center space-x-6">
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;