import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { externalLink, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import useIsMobile from "../hooks/useIsMobile";

const INITIAL_MOBILE  = 3;
const INITIAL_DESKTOP = 6;

const ProjectCard = ({
  index,
  name,
  type,
  description,
  tags,
  image,
  live_link,
  source_code_link,
  lastCardRef,
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
              <img src={externalLink} alt="live preview" className="w-1/2 h-1/2 object-contain" />
            </div>
          ) : (
            <div className="w-10 h-10 invisible" />
          )}

          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
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

  if (isMobile) {
    return (
      <div ref={lastCardRef}>
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
      </div>
    );
  }

  return (
    <motion.div ref={lastCardRef} variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
      <Tilt className="w-full" options={{ max: 45, scale: 1, speed: 450 }}>
        <CardContent />
      </Tilt>
    </motion.div>
  );
};

// ── Sticky floating View Less button ─────────────────────────────────────────
const StickyViewLess = ({ onClick, isMobile }) => (
  <button
    onClick={onClick}
    title="View Less"
    style={{
      position: "fixed",
      bottom: "28px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? 0 : "6px",
      width:        isMobile ? "44px" : "auto",
      height:       isMobile ? "44px" : "auto",
      padding:      isMobile ? "0"    : "10px 24px",
      borderRadius: "999px",
      background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
      color: "#fff",
      fontWeight: 600,
      fontSize: "14px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 24px rgba(124,58,237,0.45)",
      whiteSpace: "nowrap",
      letterSpacing: "0.02em",
    }}
  >
    <span style={{ fontSize: isMobile ? "20px" : "16px", lineHeight: 1 }}>↑</span>
    {!isMobile && "View Less"}
  </button>
);

const Works = () => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);
  const [isInWorkSection, setIsInWorkSection] = useState(true);

  const workRef     = useRef(null);
  const lastCardRef = useRef(null); // ← ref on the last initially-visible card

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInWorkSection(entry.isIntersecting),
      { threshold: isMobile ? 0 : 0.21 } // Adjust threshold for mobile vs desktop
    );
    if (workRef.current) observer.observe(workRef.current);
    return () => observer.disconnect();
  }, []);

  const initialCount    = isMobile ? INITIAL_MOBILE : INITIAL_DESKTOP;
  const visibleProjects = expanded ? projects : projects.slice(0, initialCount);
  const hasMore         = projects.length > initialCount;

  const handleViewMore = () => setExpanded(true);

  const handleViewLess = () => {
    setExpanded(false);
    // After state update, scroll the last initially-visible card into view
    setTimeout(() => {
      lastCardRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 50);
  };

  return (
    <div ref={workRef}>
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
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            // Attach ref only to the last card of the initial batch
            lastCardRef={index === initialCount - 1 ? lastCardRef : null}
          />
        ))}
      </div>

      {/* View More / View Less */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          {!expanded ? (
            <button
              onClick={handleViewMore}
              className="group flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-[15px] text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 6px 28px rgba(124,58,237,0.55)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,58,237,0.35)")
              }
            >
              View More
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
                style={{ fontSize: "16px" }}
              >
                ↓
              </span>
              <span className="text-purple-300 text-[13px] font-normal">
                +{projects.length - initialCount} more
              </span>
            </button>
          ) : (
            isInWorkSection && (
              <StickyViewLess onClick={handleViewLess} isMobile={isMobile} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Works, "work");

