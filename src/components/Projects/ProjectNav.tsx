import React, { useState } from "react";
import Card from "./Card";
import image from "../../assets/image.png";
import image3 from "../../assets/Rectangle.png";
import image4 from "../../assets/Rectangle 28.png";
import image2 from "../../assets/image copy.png";

interface Project {
  title: string;
  tag: string;
  image: string;
}

interface Projects {
  All: Project[];
  Website: Project[];
  Video: Project[];
  "Social Media": Project[];
}

type SectionKey = keyof Projects;

const ProjectNav: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionKey>("All");

  const projects: Projects = {
    All: [
      { title: "Dr. Tanvi Desai Wadia", tag: "All", image: image },
      { title: "Project B", tag: "Social Media", image: image2 },
      { title: "Project C", tag: "Website", image: image },
      { title: "Project C", tag: "Video", image: image3 },
      { title: "Project C", tag: "Video", image: image },
    ],
    Website: [
      { title: "Website A", tag: "Website", image: image },
      { title: "Website B", tag: "Website", image: image3 },
    ],
    Video: [
      { title: "Video A", tag: "Video", image: image3 },
      { title: "Video B", tag: "Video", image: image4 },
    ],
    "Social Media": [
      { title: "Social Media A", tag: "Social Media", image: image },
      { title: "Social Media B", tag: "Social Media", image: image },
    ],
  };

  const sections: SectionKey[] = ["All", "Website", "Video", "Social Media"];
  const currentProjects = projects[currentSection] || [];

  return (
    <div className="p-4 md:p-6">
     <div className="flex flex-col md:flex-row justify-between items-center  md:items-start h-auto mb-4 md:mx-20 border-b border-[#747474] pb-2">
  <h1
    className="text-[#26326D] text-[20px] md:text-[24px] font-light leading-[28.8px] tracking-[0.04em] text-left md:mx-6 mb-2"
    style={{ fontFamily: "Luxora Grotesk, sans-serif" }}
  >
    Projects
  </h1>

  <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mr-6 md:mr-20 overflow-x-auto whitespace-nowrap">
    {sections.map((section) => (
      <button
        key={section}
        className={`text-[#26326D] text-[14px] md:text-[16px] font-medium cursor-pointer transition-all duration-300 hover:opacity-80 ${
          currentSection === section ? "font-bold" : ""
        }`}
        onClick={() => setCurrentSection(section)}
      >
        {section}
      </button>
    ))}
  </div>
      </div>

      <div className="mt-4 mx-0 md:mx-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => (
              <Card
                key={`${project.title}-${index}`}
                title={project.title}
                tag={project.tag}
                image={project.image}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              No projects available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;
