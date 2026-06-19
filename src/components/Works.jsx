import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { externalLink, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import useIsMobile from "../hooks/useIsMobile";

const ProjectCard = ({
  index,
  name,
  type,
  description,
  tags,
  image,
  live_link,
  source_code_link,
}) => {
  const isMobile = useIsMobile();

  const CardContent = () => (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
          {type !== "console" ? (
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="bg-white black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={externalLink}
                alt="live preview"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          ) : (
            <div className="w-10 h-10 invisible" />
          )}

          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  // Mobile: subtle touch tilt without animation
  if (isMobile) {
    return (
      <Tilt
        className="w-full"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.01}
        transitionSpeed={400}
        glareEnable={false}
      >
        <CardContent />
      </Tilt>
    );
  }

  // Desktop: animated + tilt
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <Tilt
        className="w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <CardContent />
      </Tilt>
    </motion.div>
  );
};





const Works = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Header */}
      {isMobile ? (
        <div>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
      )}

      {/* Description */}
      <div className="w-full flex">
        {isMobile ? (
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects
            my ability to solve complex problems, work with different
            technologies, and manage projects effectively.
          </p>
        ) : (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects
            my ability to solve complex problems, work with different
            technologies, and manage projects effectively.
          </motion.p>
        )}
      </div>

      {/* Project Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
