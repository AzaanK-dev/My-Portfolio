import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import useIsMobile from "../hooks/useIsMobile";
import { experiences } from "../constants";

// ── card ──────────────────────────────────────────────────────────────────────
const ExperienceCard = ({ index, exp }) => {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  const CardContent = () => (
    <div
      className="bg-tertiary rounded-2xl sm:w-[420px] w-full relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? exp.borderHex : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 36px ${exp.glowHex}, 0 8px 32px rgba(0,0,0,0.5)`
          : "0 4px 24px rgba(0,0,0,0.35)",
        transition: "border-color 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      {/* top accent bar */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${exp.accentHex}, transparent)`,
          width: hovered ? "100%" : "38%",
          transition: "width 0.45s ease",
        }}
      />

      <div className="p-6">
        {/* header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* logo + title */}
          <div className="flex items-center gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl"
              style={{
                background: exp.pillBg,
                border: `1px solid ${exp.borderHex}`,
                color: exp.accentHex,
                boxShadow: `0 0 18px ${exp.glowHex}`,
                fontFamily: "monospace",
              }}
            >
              {exp.logo}
            </div>

            <div>
              <h3 className="text-white font-bold text-[18px] leading-snug">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span
                  className={`font-semibold text-[13px] ${exp.accentClass}`}
                >
                  {exp.company}
                </span>
                <span className="text-secondary text-[11px]">•</span>
                <span
                  className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: exp.pillBg,
                    border: `1px solid ${exp.borderHex}`,
                    color: exp.accentHex,
                  }}
                >
                  {exp.type}
                </span>
              </div>
            </div>
          </div>

          {/* date / location */}
          <div className="text-right flex-shrink-0">
            <p className="text-secondary text-[12px] font-medium">
              {exp.period}
            </p>
            <p className="text-secondary text-[11px] mt-0.5">📍 {exp.location}</p>
          </div>
        </div>

        {/* divider */}
        <div
          className="mb-4"
          style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
        />

        {/* description */}
        <p className="text-secondary text-[13.5px] leading-[1.75]">
          {exp.description}
        </p>

        {/* highlights */}
        <ul className="mt-4 flex flex-col gap-2">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="mt-[7px] flex-shrink-0 w-[5px] h-[5px] rounded-full"
                style={{
                  background: exp.accentHex,
                  boxShadow: `0 0 6px ${exp.accentHex}`,
                }}
              />
              <span className="text-secondary text-[13px] leading-[1.6]">
                {h}
              </span>
            </li>
          ))}
        </ul>

        {/* skill pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{
                background: exp.pillBg,
                border: `1px solid ${exp.borderHex}`,
                color: exp.accentHex,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // mobile — tilt only, no framer-motion wrapper
  if (isMobile) {
    return (
        <CardContent />
    );
  }

  // desktop — animated + tilt
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)}>
        <CardContent />
    </motion.div>
  );
};

// ── section ───────────────────────────────────────────────────────────────────
const Experience = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* heading — mirrors Works pattern */}
      {isMobile ? (
        <div>
          <p className={styles.sectionSubText}>Where I've worked</p>
          <h2 className={styles.sectionHeadText}>Experience.</h2>
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Where I've worked</p>
          <h2 className={styles.sectionHeadText}>Experience.</h2>
        </motion.div>
      )}

      {/* subtitle */}
      <div className="w-full flex">
        {isMobile ? (
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Real-world roles where I shipped products, broke things (intentionally), fixed them, and learned fast. Every position sharpened a different part of the stack—from writing code and squashing bugs to collaborating across teams and turning ideas into working products.
          </p>
        ) : (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Real-world roles where I shipped products, broke things (intentionally), fixed them, and learned fast. Every position sharpened a different part of the stack—from writing code and squashing bugs to collaborating across teams and turning ideas into working products.
          </motion.p>
        )}
      </div>

      {/* cards — 1 col on mobile, 2 col on md+ (matching grid pattern) */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-7">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} index={index} exp={exp} />
        ))}
      </div>

      {/* subtle footer rule */}
      <div className="mt-16 flex items-center gap-4 opacity-40">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(168,85,247,0.6), transparent)",
          }}
        />
        <span className="text-secondary text-[11px] font-semibold tracking-widest uppercase">
          More to come
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,182,212,0.6))",
          }}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");