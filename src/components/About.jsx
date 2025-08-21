import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePic from "../assets/profile.jpg"; 

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-6">
        <motion.div
          variants={fadeIn("left", "spring", 0.1, 1)}
          className="flex-1 md:order-1 order-2"
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <motion.img
            src={profilePic}
            alt="profile"
            className="w-96 h-96 md:hidden rounded-3xl object-cover shadow-2xl border-4 border-purple-500 order-1  my-8 bg-[red]"
            variants={fadeIn("right", "spring", 0.3, 1)}
          />
          <p className="mt-4 text-secondary text-[17px] leading-[30px] text-justify max-w-xl order-3">
            I'm a Software Engineering student and frontend developer with a
            passion for crafting sleek, responsive web interfaces using React,
            Tailwind CSS, and JavaScript. I'm driven by a desire to turn
            creative ideas into smooth digital experiences. Currently seeking
            internship opportunities to apply my skills in real-world projects,
            grow as a developer, and contribute to impactful teams.
          </p>
        </motion.div>

        <motion.img
          src={profilePic}
          alt="profile"
          className="hidden md:block w-96 h-96 md:w-[23rem] md:h-[27rem] rounded-3xl object-cover shadow-2xl border-4 border-purple-500 md:order-2"
          variants={fadeIn("right", "spring", 0.3, 1)}
        />
      </motion.div>

      {/* Services Section */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
