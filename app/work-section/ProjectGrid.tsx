import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  // const [filter, setFilter] = useState(true);

  return (
    <>
      {/* <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          Development
        </h4>{" "}
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>
      </div> */}

      {/* {filter ? ( */}
        <div className="flex w-[90%] flex-col gap-8 lg:max-w-[1200px]">
          {devProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
          
          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center pt-8"
          >
            <Link
              href="https://github.com/aaftab007"
              target="_blank"
              className="group flex items-center gap-2 rounded-lg border-2 border-[#e4ded7] px-6 py-3 text-base font-bold text-[#e4ded7] transition-all duration-300 hover:bg-[#e4ded7] hover:text-[#0E1016] hover:scale-105"
            >
              <span>View All Projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      {/* ) : (
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-6 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {designProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              bgColor={project.bgColor}
              available={project.available}
            />
          ))}
        </div>
      )} */}
    </>
  );
};

export default ProjectGrid;
