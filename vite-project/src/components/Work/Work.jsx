import React, { useState } from "react";
import { projects } from "../../constants.js";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="border border-gray-700 bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300"
          >

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Content */}
            <div className="p-6">

              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs text-purple-400 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">

          <div className="bg-gray-900 rounded-xl max-w-3xl w-full relative shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-white text-3xl hover:text-purple-500"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-contain p-4"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs text-purple-400 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-4">
                {/* Github Button */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
                >
                  View Code
                </a>

                {/* Live Button */}
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
                >
                  Live 
                </a>
              </div>

            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default Work;
