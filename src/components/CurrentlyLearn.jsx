import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { learningTechs } from "../constants";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const LearningPill = ({ name, icon }) => (
  <motion.div
    variants={pillVariants}
    className="flex items-center gap-3 bg-gradient-to-r from-purple-700 to-purple-500 px-5 py-2 rounded-full shadow-md text-white text-sm font-medium hover:scale-105 hover:shadow-lg hover:brightness-110 transition-all cursor-default"
  >
    {icon && (
      <img
        src={icon}
        alt={name}
        className="w-6 h-6 object-contain"
      />
    )}
    <span>{name}</span>
  </motion.div>
);

const CurrentlyLearn = () => {
  return (
    <div className="md:mt-12 bg-black-100 rounded-[20px] p-8">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className={styles.sectionSubText}>Currently Exploring</p>
        <h2 className={styles.sectionHeadText}>Future Interests</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8"
      >
        {learningTechs.map((tech) => (
          <LearningPill key={tech.name} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(CurrentlyLearn, "learning");
