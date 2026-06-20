// import React, { useRef } from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { skills } from "../constants";
// import useIsMobile from "../hooks/useIsMobile";

// const SkillCard = ({ index, skill, name, proficiency, percent, image }) => {
//   const isMobile = useIsMobile();

//   return isMobile ? (
//     // Mobile: only ui
//     <div className="bg-black-200 p-6 rounded-3xl xs:w-[300px] w-full">
//       <div className="flex items-center gap-4">
//         <img
//           src={image}
//           alt={name}
//           className="w-12 h-12 rounded-full object-cover border-2 border-white"
//         />
//         <div>
//           <p className="text-white font-semibold text-[18px]">{name}</p>
//           <p className="text-secondary text-[13px]">Proficiency: {proficiency}</p>
//           <div className="w-full bg-[snow] h-2 rounded-full mt-2">
//             <div
//               className="bg-purple-500 h-2 rounded-full transition-all duration-500"
//               style={{ width: `${percent}%` }}
//             />
//           </div>
//         </div>
//       </div>
//       <p className="mt-5 text-white tracking-wider text-[16px]">{skill}</p>
//     </div>
//   ) : (
//     // Desktop ui with animations
//     <motion.div
//       variants={fadeIn("", "spring", index * 0.5, 0.75)}
//       className="bg-black-200 p-8 rounded-3xl xs:w-[300px] w-full"
//     >
//       <div className="flex items-center gap-4">
//         <img
//           src={image}
//           alt={name}
//           className="w-12 h-12 rounded-full object-cover border-2 border-white"
//         />

//         <div className="flex-1">
//           <p className="text-white font-semibold text-[18px]">{name}</p>
//           <p className="text-secondary text-[13px]">{proficiency}</p>

//           <div className="w-full bg-[snow] h-2 rounded-full mt-2">
//             <div
//               className="bg-purple-500 h-2 rounded-full transition-all duration-500"
//               style={{ width: `${percent}%` }}
//             />
//           </div>
//         </div>
//       </div>

//       <p className="mt-5 text-white tracking-wider text-[16px]">{skill}</p>
//     </motion.div>

//   );
// };

// // const Skills = () => {
// //   const isMobile = useIsMobile();

// //   return (
// //     <div className="md:mt-12 bg-black-100 rounded-[20px]">
// //       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}>
// //         {isMobile ? (
// //           <div>
// //             <p className={styles.sectionSubText}>What I Do Best</p>
// //             <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
// //           </div>
// //         ) : (
// //           <motion.div variants={textVariant()}>
// //             <p className={styles.sectionSubText}>What I Do Best</p>
// //             <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
// //           </motion.div>
// //         )}
// //       </div>

// //       {/* <div
// //         className={`-mt-16 md:-mt-8 pb-14 ${styles.paddingX} flex flex-wrap gap-[14px] sm:gap-4 md:gap-14`}
// //       >
// //         {skills.map((skill, index) => (
// //           <SkillCard key={skill.name} index={index} {...skill} />
// //         ))}
// //       </div> */}
// //       <div
// //         className={`
// //     -mt-16 md:-mt-8 pb-14 ${styles.paddingX}
// //     flex gap-5 overflow-x-auto
// //     snap-x snap-mandatory
// //     scrollbar-hide
// //   `}
// //       >
// //         {skills.map((skill, index) => (
// //           <div
// //             key={skill.name}
// //             className="min-w-[300px] snap-center"
// //           >
// //             <SkillCard index={index} {...skill} />
// //           </div>
// //         ))}
// //       </div>

// //     </div>
// //   );
// // };

// const Skills = () => {
//   const isMobile = useIsMobile();
//   const sliderRef = useRef(null);

//   const moveSlider = (direction) => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({
//         left: direction === "left" ? -1140 : 1140,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="md:mt-12 bg-black-100 rounded-[20px]">

//       <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}>
//         {isMobile ? (
//           <div>
//             <p className={styles.sectionSubText}>What I Do Best</p>
//             <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
//           </div>
//         ) : (
//           <motion.div variants={textVariant()}>
//             <p className={styles.sectionSubText}>What I Do Best</p>
//             <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
//           </motion.div>
//         )}
//       </div>


//       {/* Slider */}
//       <div className="relative -mt-16 md:-mt-8 pb-14">

//         {/* Left Button */}
//         <button
//           onClick={() => moveSlider("left")}
//           className="
//             absolute left-2 top-1/2 -translate-y-1/2 z-20
//             w-10 h-10 rounded-full
//             bg-purple-600 text-white
//             text-2xl
//             flex items-center justify-center
//             hover:bg-purple-500
//           "
//         >
//           ‹
//         </button>


//         {/* Cards */}
//         <div
//           ref={sliderRef}
//           className={`
//             ${styles.paddingX}
//             flex gap-6
//             overflow-x-auto
//             scroll-smooth
//             scrollbar-hide
//           `}
//         >
//           {skills.map((skill, index) => (
//             <div
//               key={skill.name}
//               className="
//                 flex-shrink-0
//                 w-[300px]
//                 sm:w-[320px]
//                 md:w-[350px]
//               "
//             >
//               <SkillCard
//                 index={index}
//                 {...skill}
//               />
//             </div>
//           ))}
//         </div>


//         {/* Right Button */}
//         <button
//           onClick={() => moveSlider("right")}
//           className="
//             absolute right-2 top-1/2 -translate-y-1/2 z-20
//             w-10 h-10 rounded-full
//             bg-purple-600 text-white
//             text-2xl
//             flex items-center justify-center
//             hover:bg-purple-500
//           "
//         >
//           ›
//         </button>

//       </div>

//     </div>
//   );
// };

// export default SectionWrapper(Skills, "skills");













import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

const SkillCard = ({ index, skill, name, proficiency, percent, image }) => {
  const isMobile = useIsMobile();

  const content = (
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-white/30 flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-[17px] truncate">{name}</p>
        <p className="text-secondary text-[12px] mb-2">{proficiency}</p>
        <div className="w-full bg-white/10 h-1.5 rounded-full">
          <div
            className="bg-gradient-to-r from-purple-900 to-violet-400 h-1.5 rounded-full transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );

  return isMobile ? (
    <div className="skill-card p-6 rounded-2xl w-full">
      {content}
      <p className="mt-4 text-white/70 tracking-wide text-[14px] leading-relaxed">{skill}</p>
    </div>
  ) : (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="skill-card  p-6 rounded-2xl w-full"
    >
      {content}
      <p className="mt-4 text-white/70 tracking-wide text-[14px] leading-relaxed">{skill}</p>
    </motion.div>
  );
};

const Skills = () => {
  const isMobile = useIsMobile();
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const slide = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    // scroll by ~1 card width + gap
    const card = el.querySelector(".skill-card-wrap");
    const amount = card ? card.offsetWidth + 24 : 340;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .skill-card {
          background: #0d0723;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .skill-card:hover {
          background: #161032;
          border-color: rgba(145,94,255,0.3);
          transform: translateY(-3px);
        }

        /* fade edges */
        .slider-track::before,
        .slider-track::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 10;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .slider-track::before {
          left: 0;
          background: linear-gradient(to right, #050816, transparent);
          opacity: var(--fade-left, 0);
        }
        .slider-track::after {
          right: 0;
          background: linear-gradient(to left, #050816, transparent);
          opacity: var(--fade-right, 1);
        }

        /* nav buttons */
        .slider-btn {
          font-size: 4rem;
          position: absolute;
          top: 50%;
          transform: translateY(-100%);
          z-index: 20;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid rgba(145,94,255,0.4);
          background: rgba(145,94,255,0.15);
          backdrop-filter: blur(8px);
          color: #fff;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, opacity 0.3s, transform 0.2s;
        }
        .slider-btn:hover {
          background: rgba(145,94,255,0.4);
          border-color: rgba(145,94,255,0.8);
          transform: translateY(-100%) scale(1.1);
        }
        .slider-btn:disabled {
          opacity: 0.25;
          pointer-events: none;
        }

        /* hide scrollbar */
        .slider-inner::-webkit-scrollbar { display: none; }
        .slider-inner { -ms-overflow-style: none; scrollbar-width: none; }

        @media (max-width: 640px) {
          .slider-track::before,
          .slider-track::after { width: 40px; }
          .slider-btn { width: 32px; height: 32px; font-size: 32px; }
        }
      `}</style>

      <div className="md:mt-12 bg-black-100 rounded-[20px]">

        {/* Header */}
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}>
          {isMobile ? (
            <div>
              <p className={styles.sectionSubText}>What I Do Best</p>
              <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
            </div>
          ) : (
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>What I Do Best</p>
              <h2 className={styles.sectionHeadText}>Skills & Expertise.</h2>
            </motion.div>
          )}
        </div>

        {/* Slider */}
        <div
          className="slider-track relative -mt-16 md:-mt-8 pb-14"
          style={{
            "--fade-left": canScrollLeft ? 1 : 0,
            "--fade-right": canScrollRight ? 1 : 0,
          }}
        >
          {/* Left btn */}
          <button
            className="slider-btn"
            style={{ left: "10px" }}
            onClick={() => slide("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            ‹
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className={`slider-inner ${styles.paddingX} flex gap-6 overflow-x-auto scroll-smooth`}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card-wrap flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]"
              >
                <SkillCard index={index} {...skill} />
              </div>
            ))}
          </div>

          {/* Right btn */}
          <button
            className="slider-btn"
            style={{ right: "10px" }}
            onClick={() => slide("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            ›
          </button>

          <div className="flex justify-center mt-6">
            <p className="text-xs text-secondary flex items-center gap-2">
              ← Swipe • Use Arrows • Explore →
            </p>
          </div>

        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
