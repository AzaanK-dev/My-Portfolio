import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { techStack } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const TechCategory = ({ title, items }) => {
  if (!items.length) return null;

  return (
    <div className="w-full">
      <h3 className="text-white text-[22px] font-semibold text-center mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className={styles.sectionSubText}>Technologies I Use In Projects</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="flex flex-col gap-16">
        <TechCategory title="Frontend" items={techStack.frontend} />
        <TechCategory title="Backend" items={techStack.backend} />
        <TechCategory title="UI / UX" items={techStack.uiux} />
        <TechCategory title="Tools & Programming" items={techStack.tools} />
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "tech");

