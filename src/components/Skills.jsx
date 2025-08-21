import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

const SkillCard = ({
  index,
  skill,
  name,
  proficiency,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-3xl xs:w-[300px] w-full"
  >
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-white"
      />
      <div>
        <p className="text-white font-semibold text-[18px]">{name}</p>
        <p className="text-secondary text-[13px]">Proficiency: {proficiency}</p>
      </div>
    </div>

    <p className="mt-5 text-white tracking-wider text-[16px]">
      {skill}
    </p>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I Do Best</p>
          <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
        </motion.div>
      </div>

      <div className={`-mt-8 pb-14 ${styles.paddingX} flex flex-wrap gap-14`}>
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "");
