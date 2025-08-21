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
  git,
  figma,
  blogzaan,
  bakeryweb,
  todoweb,
  ccfj,
  techzone,
  ubit,
  java,
  cProg,
  firebase,
  msoffice,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "UI Design Enthusiast",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java OOP",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
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

const skills = [
  {
    skill: "Building beautiful, responsive, and modern websites using semantic HTML for structured layouts.",
    name: "HTML",
    proficiency: "Expert",
    image: html,
  },
  {
    skill: "Crafting stylish, responsive designs and smooth UI experiences using CSS & Tailwind.",
    name: "CSS & Tailwind",
    proficiency: "Expert",
    image: css,
  },
  {
    skill: "Creating dynamic, interactive, and efficient web apps with modern JavaScript practices.",
    name: "JavaScript",
    proficiency: "Advanced",
    image: javascript,
  },
  {
    skill: "Developing scalable and reusable components with React and state management techniques.",
    name: "React.js",
    proficiency: "Advanced",
    image: reactjs,
  },
  {
    skill: "Implementing secure authentication, real-time data, and backend services using Firebase.",
    name: "Firebase",
    proficiency: "Intermediate",
    image: firebase,
  },
  {
    skill: "Applying OOP principles and strong problem-solving to create efficient Java applications.",
    name: "Java OOP",
    proficiency: "Intermediate",
    image: java,
  },
  {
    skill: "Developing logical programs and mastering problem-solving with C++ fundamentals.",
    name: "C++",
    proficiency: "Intermediate",
    image: cProg,
  },
  {
    skill: "Designing UI prototypes and wireframes to visualize project ideas with Figma.",
    name: "Figma",
    proficiency: "Beginner",
    image: figma,
  },
  {
    skill: "Efficient document management, spreadsheet operations, and presentation designs using MS Office.",
    name: "MS Office",
    proficiency: "Advanced",
    image: msoffice,
  },
];


const projects = [
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
    source_code_link: "https://github.com/AzaanK-dev/Blogs-Website-with-React-and-Firebase.git",
  },
  {
    name: "Bakery website UI",
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
    source_code_link: "https://github.com/AzaanK-dev/Modern-Todo-list.git",
  },
];

export { services, technologies, qualifications, skills, projects };
