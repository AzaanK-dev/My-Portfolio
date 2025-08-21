import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050014] text-gray-300 pt-10 pb-6 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide">Azaan Mehtab Khan</h2>
          <p className="text-gray-400 text-sm mt-1">
            Frontend Developer | React & Tailwind
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Azaan Mehtab Khan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
