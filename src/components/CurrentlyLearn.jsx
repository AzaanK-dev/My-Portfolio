import React from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { learningTechs } from "../constants";

const LearningPill = ({ name, icon }) => (
  <div className="flex items-center gap-3 bg-gradient-to-r from-purple-700 to-purple-500 px-5 py-2 rounded-full shadow-md text-white text-sm font-medium">
    {icon && (
      <img
        src={icon}
        alt={name}
        className="w-6 h-6 object-contain"
      />
    )}
    <span>{name}</span>
  </div>
);

const CurrentlyLearn = () => {
  return (
    <div className="md:mt-12 bg-black-100 rounded-[20px] p-8">
      <div className="mb-12 text-center">
        <p className={styles.sectionSubText}>Currently Exploring</p>
        <h2 className={styles.sectionHeadText}>Future Interests</h2>
      </div>

      {/* Infinite scrolling strip */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black-100 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll">
          {[...learningTechs, ...learningTechs].map((tech, i) => (
            <div key={`${tech.name}-${i}`} className="mx-4">
              <LearningPill {...tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(CurrentlyLearn, "learning");