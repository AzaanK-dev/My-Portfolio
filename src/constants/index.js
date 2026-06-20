import { three } from "maath";
import {
  mobile,
  backend,
  creator,
  web,

  javascript,
  html,
  css,
  reactjs,
  tailwind,
  figma,

  django,
  sqlite,
  python,

  skillnest,
  echoplay,
  blogzaan,
  bakeryweb,
  todoweb,
  aerocasta,
  shophub,
  bankingSystem,

  naxasware,
  flyrank,

  ccfj,
  techzone,
  ubit,

  java,
  cProg,
  firebase,
  msoffice,
  facebook,
  github,
  instagram,
  linkedin,
  expressjs,
  dsa,
  mongodb,
  nodejs,
  nextjs,
  threejs,
  git
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "MERN Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const skills = [
  {
    skill: "Building modern, scalable, and responsive web applications using React and Next.js with component-driven architecture.",
    name: "React & Next.js",
    proficiency: "Advanced",
    percent: 85,
    image: reactjs,
  },
  {
    skill: "Developing RESTful APIs, server-side logic, authentication systems, database integrations, and scalable backend services.",
    name: "Node.js & Express",
    proficiency: "Intermediate",
    percent: 75,
    image: nodejs,
  },
  {
    skill: "Designing and managing databases, handling queries, and structuring data with MongoDB and SQLite.",
    name: "MongoDB & SQLite",
    proficiency: "Intermediate",
    percent: 70,
    image: mongodb,
  },
  {
    skill: "Creating robust web applications, streamlining processes through automation, and building maintainable backend solutions.",
    name: "Python & Django",
    proficiency: "Intermediate",
    percent: 65,
    image: python,
  },
  {
    skill: "Crafting scalable user interfaces, smooth interactions, and mobile-friendly designs using JavaScript and Tailwind CSS.",
    name: "JavaScript & Tailwind",
    proficiency: "Advanced",
    percent: 85,
    image: javascript,
  },
  {
    skill: "Implementing secure authentication, cloud databases, and data management with Auth and Firestore.",
    name: "Firebase",
    proficiency: "Intermediate",
    percent: 60,
    image: firebase,
  },
  {
    skill: "Building well-structured, accessible, and responsive websites using semantic HTML and CSS while ensuring clean layouts.",
    name: "HTML & CSS",
    proficiency: "Expert",
    percent: 90,
    image: html,
  },
  {
    skill: "Solving algorithmic problems using efficient data structures, and strengthening problem-solving skills through C++ and DSA concepts.",
    name: "C++ (DSA)",
    proficiency: "Intermediate",
    percent: 75,
    image: cProg,
  },
  {
    skill: "Applying object-oriented programming principles and developing robust console-applications with Java.",
    name: "Java (OOP)",
    proficiency: "Intermediate",
    percent: 75,
    image: java,
  },
  {
    skill: "Managing documents, spreadsheets, reports, and presentations efficiently using Microsoft Office tools.",
    name: "MS Office",
    proficiency: "Advanced",
    percent: 90,
    image: msoffice,
  },


];

const techStack = {
  frontend: [
    { name: "JavaScript", icon: javascript },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "React", icon: reactjs },
    { name: "Next.js", icon: nextjs },
  ],

  backend: [
    { name: "Express.js", icon: expressjs },
    { name: "Node.js", icon: nodejs },
    { name: "Django", icon: django },
  ],

  databases: [
    { name: "MongoDB", icon: mongodb },
    { name: "Firebase", icon: firebase },
    { name: "SQlite", icon: sqlite },
  ],

  // tools: [
  //   { name: "Python", icon: python },
  //   { name: "Java (OOP)", icon: java },
  //   { name: "C++", icon: cProg },
  // ],
};

const learningTechs = [
  { name: "DSA", icon: dsa },
  { name: "Next.js", icon: nextjs },
  { name: "Three.js", icon: threejs },
  { name: "GitHub Actions", icon: git },
  { name: "Figma Advanced", icon: figma },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Naxasware",
    type: "Part-time",
    period: "2026 – Present",
    location: "Hybrid",
    accentClass: "text-[#a855f7]",
    accentHex: "#a855f7",
    glowHex: "rgba(168,85,247,0.30)",
    borderHex: "rgba(168,85,247,0.45)",
    pillBg: "rgba(168,85,247,0.15)",
    logo: naxasware,
    description:
      "Developed and delivered frontend solutions for end-to-end digital projects, transforming requirements and designs into production-ready user interfaces. ",
    highlights: [
      "Built a reusable design system adopted across 3 products",
      "Utilized Git for version control, enabling efficient collaboration and streamlined development workflows.",
    ],
    skills: ["Next.js", "React", "Javascript", "Tailwind CSS"],
  },
  {
    role: "Backend AI Intern",
    company: "Flyrank AI",
    type: "Internship",
    period: "2026 – Present",
    location: "Remote",
    accentClass: "text-[#06b6d4]",
    accentHex: "#06b6d4",
    glowHex: "rgba(6,182,212,0.30)",
    borderHex: "rgba(6,182,212,0.45)",
    pillBg: "rgba(6,182,212,0.15)",
    logo: flyrank,
    description:
      "Selected as a Backend AI Engineer Intern at Flyrank AI, with the internship scheduled to commence in July 2026.",
    highlights: [
      "Will work with international engineering teams on development workflows and code reviews.",
      "Expected to gain hands-on experience in backend architecture, AI integrations, and modern engineering best practices."
    ],
    skills: ["Upcoming ..."],
  },
];


const projects = [

  {
    name: "SkillNest",
    description:
      "SkillNest is a GitHub-powered developer profile builder that analyzes coding activity, repositories, and contribution history to automatically generate structured, ATS-friendly resumes for recruitment purposes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "github API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: skillnest,
    live_link: "https://skillnest-web.netlify.app/",
    source_code_link: "https://github.com/AzaanK-dev/SkillNest-Project",
  },

  {
    name: "Shophub",
    description:
      "Shophub is a modern React e-commerce web app demonstrating real-world frontend architecture, global state management, Firebase authentication, and a complete shopping flow with smooth UI animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shophub,
    live_link: "https://akshophub.netlify.app/",
    source_code_link: "https://github.com/AzaanK-dev/Shophub-Ecommerce-Website-with-React-and-Firebase.git",
  },

  {
    name: "Echoplay - Backend",
    type: "console",
    description:
      "Echoplay is a YouTube-like backend system, featuring RESTful APIs for video uploads, authentication, likes, comments, tweets and user interactions with a scalable and modular backend architecture.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: echoplay,
    live_link: "",
    source_code_link: "https://github.com/AzaanK-dev/Backend-Project",
  },

  {
    name: "Aerocasta",
    description:
      "A cutting-edge, responsive weather dashboard providing real-time updates and 7-day forecasts with a sleek glassmorphic design, detailed atmospheric data, global city search, and geolocation support.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "openmetio",
        color: "pink-text-gradient",
      },
    ],
    image: aerocasta,
    live_link: "https://aerocasta.netlify.app/",
    source_code_link: "https://github.com/AzaanK-dev/Aerocasta-Weather-Dashboard-with-TailwindCSS-and-JS",
  },

  {
    name: "Blogzaan",
    description:
      "A dynamic blog web application built with React, Firebase, Tailwind CSS, and AOS animations, allowing users to create, read, edit, and delete blog posts with a modern and responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blogzaan,
    live_link: "https://blogzaan.netlify.app/",
    source_code_link: "https://github.com/AzaanK-dev/Blogs-Website-with-React-and-Firebase.git",
  },

  {
    name: "BakersnBlessed - UI",
    description:
      "A simple and elegant Bakery website user interface built using HTML and CSS.It features a modern layout with a homepage banner, product showcase, and a clean, responsive design to highlight bakery items attractively.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: bakeryweb,
    live_link: "https://bakersnblessed.netlify.app/",
    source_code_link: "https://github.com/AzaanK-dev/Bakery-Website-UI-with-html-css.git",
  },

  {
    name: "Modern todo-list",
    description:
      "A stylish and responsive To-Do List web app built using HTML, CSS, and JavaScript, featuring a clean UI, smooth interactions, and efficient task management for better productivity.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: todoweb,
    live_link: "https://moderntodolistweb.netlify.app/",
    source_code_link: "https://github.com/AzaanK-dev/Modern-Todo-list.git",
  },

  {
    name: "Java Banking Console",
    type: "console",
    description:
      "A Console-based OOP banking system in Java, simulating real-world operations with savings and current accounts, loans, admin and user menus, transaction tracking, and file-based data persistence.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
    ],
    image: bankingSystem,
    live_link: "",
    source_code_link: "https://github.com/AzaanK-dev/OOP-Bank-Management-System",
  },

];

const qualifications = [
  {
    title: "UBIT, University of Karachi",
    company_name: "Gulshan-e-Iqbal, Karachi",
    icon: ubit,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Pursuing a Bachelor's degree in Software Engineering from University of Karachi.",
      "Developing a solid understanding of both theoretical and practical aspects of software engineering.",
      "Actively enhancing technical and teamwork skills through academic projects, assignments, and collaborative learning.",
    ],
  },
  {
    title: "Techzone Learning Institute",
    company_name: "Sharah-e-Faisal, Karachi",
    icon: techzone,
    iconBg: "#E6DEDD",
    date: "October 2024 - May 2025",
    points: [
      "Completed a Frontend Development course from TechZone Learning, focusing on modern web technologies and real-world project building.",
      "Built interactive and responsive web pages using HTML, CSS, JavaScript, React, and Tailwind CSS.",
      "Strengthened understanding of responsiveness, reusable components, and clean layout structures",
    ],
  },
  {
    title: "Cadet College Fateh Jang",
    company_name: "Fateh Jang, Rawalpindi",
    icon: ccfj,
    iconBg: "#383E56",
    date: "August 2022 - July 2024",
    points: [
      "Completed Pre-Engineering from Cadet College Fateh Jang, a reputed residential institution known for academic excellence and discipline.",
      "Secured 86% marks in HSSC (FSc Pre-Engineering), with a strong performance in Mathematics.",
      "Gained valuable experience in leadership, discipline, and teamwork through cadet-based educational and extracurricular activities."
    ],
  },
];

const socialLinks = [
  {
    name: "github",
    icon: github,
    url: "https://github.com/AzaanK-dev",
    bg: "bg-[#3D3D3D]",
  },
  {
    name: "linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/azaan-mehtab-khan-556a86369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bg: "bg-white",
  },
  {
    name: "facebook",
    icon: facebook,
    url: "https://www.facebook.com/share/1ALvtCkrrB/",
    bg: "bg-white",
  },
  {
    name: "instagram",
    icon: instagram,
    url: "https://www.instagram.com/azaan.k_17?igsh=MTVuYWpqM2xmZjNzbA==",
    bg: "bg-white",
  },
];


export { services, techStack, learningTechs, qualifications, skills, experiences, projects, socialLinks };
