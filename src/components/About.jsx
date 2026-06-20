import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import profilePic from "../assets/profile.jpeg";
import useIsMobile from "../hooks/useIsMobile";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Tilt
        className="xs:w-[250px] w-full"
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        transitionSpeed={400}
        scale={1.03}
        glareEnable={false}
      >
        <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </div>
      </Tilt>
    );
  }

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 h-[240px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        // Mobile version: simple div, no motion
        <div className="pt-[1rem] flex flex-col items-center gap-6">
          <div className="flex-1">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>

            <img
              src={profilePic}
              alt="profile"
              className="w-72 h-72 rounded-3xl object-cover shadow-2xl border-4 border-purple-500 my-6 mx-auto"
            />

            <p className="mt-4 text-secondary text-[17px] leading-[30px] text-justify max-w-xl mx-auto">
              Ambitious Software Engineering undergraduate, building impactful technology solutions that combine
              strong engineering practices with exceptional user experiences. Experienced in developing scalable
              applications through internships and self-driven projects, with exposure to the complete software
              development lifecycle. Open to internship, co-op, and early
              career opportunities in Software Engineering, Full-Stack Development, Frontend, Backend, 
              and AI Engineering.
            </p>
          </div>
        </div>
      ) : (
        // Desktop version: motion + tilt
        <motion.div
          className="pt-12 md:pt-0 flex flex-col md:flex-row items-center md:items-start gap-10 mt-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1"
            variants={fadeIn("left", "spring", 0.1, 1)}
          >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>

            <p className="mt-4 text-secondary text-[17px] leading-[30px] text-justify max-w-xl">
              Ambitious Software Engineering undergraduate, building impactful technology solutions that combine
              strong engineering practices with exceptional user experiences. Experienced in developing scalable
              applications through internships and self-driven projects, with exposure to the complete software
              development lifecycle. Driven by curiosity, continuous learning, and a problem-solving mindset, with a
              growing interest in modern software systems and artificial intelligence. Open to internship, co-op, and early
              career opportunities in Software Engineering, Full-Stack Development, Backend Engineering, Frontend
              Engineering, and AI Engineering.
            </p>
          </motion.div>

          <motion.img
            src={profilePic}
            alt="profile"
            className="w-72 h-80 md:w-[23rem] md:h-[27rem] rounded-3xl object-cover shadow-2xl border-4 border-purple-500"
            variants={fadeIn("right", "spring", 0.3, 1)}
          />
        </motion.div>

      )}

      <div className="mt-8 md:mt-20 flex flex-wrap gap-6 md:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

