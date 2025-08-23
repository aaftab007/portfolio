import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      className="relative z-10 w-full overflow-hidden rounded-2xl bg-[#212531] p-8 shadow-lg"
      initial="initial"
      animate="animate"
    >
      {/* GitHub & Demo Links - Positioned relative to text content */}
      <div className={`absolute top-6 flex items-center gap-4 z-10 ${
        id % 2 === 0 ? "left-6" : "right-6"
      }`}>
        <Link
          href={github}
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E1016] transition-all duration-200 hover:scale-110"
          aria-label="Open GitHub Repository"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-xl"
          />
        </Link>
        {demo && (
          <Link 
            href={demo} 
            target="_blank" 
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E1016] transition-all duration-200 hover:scale-110"
            aria-label="Open Live Demo"
          >
            <FontAwesomeIcon
              icon={faLink}
              className="text-xl"
            />
          </Link>
        )}
      </div>

      <div className="flex h-full items-center gap-8 pt-20">
        {/* Content Side */}
        <div className={`flex flex-1 flex-col ${id % 2 === 0 ? "order-1" : "order-2"}`}>

          {/* Project Info */}
          <div className="flex-1">
            <AnimatedTitle
              text={name}
              className="mb-4 text-3xl font-bold text-white lg:text-4xl"
              wordSpace={"mr-[0.25em]"}
              charSpace={"-mr-[0.01em]"}
            />
            <AnimatedBody
              text={description}
              className="mb-6 text-base text-[#95979D] leading-relaxed"
            />
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <AnimatedTitle
                  key={index}
                  text={tech}
                  className="text-xs font-bold uppercase tracking-wide text-white"
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"mr-[0.01em]"}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className={`flex-1 ${id % 2 === 0 ? "order-2" : "order-1"}`}>
          <div className="relative h-80 w-full overflow-hidden rounded-3xl lg:h-96">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover scale-125"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
