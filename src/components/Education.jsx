import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { qualifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const QualificationCard = ({ qualification }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={qualification.date}
      iconStyle={{ background: qualification.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full bg-white rounded-full'>
          <img
            src={qualification.icon}
            alt={qualification.company_name}
            className='w-[90%] h-[90%] object-cover object-center'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{qualification.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {qualification.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {qualification.points.map((point, index) => (
          <li
            key={`qualification-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Qualification = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where I have Studied
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Academic Qualification.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {qualifications.map((qualification, index) => (
            <QualificationCard
              key={`qualification-${index}`}
              qualification={qualification}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Qualification, "work");
