import React from "react";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#050014] text-gray-300 pt-10 pb-6 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex gap-10 flex-col md:flex-row md:gap-6 justify-between items-center">

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide">Azaan Mehtab Khan</h2>
          <p className="text-gray-400 text-sm mt-1">
            Frontend Developer | React & Tailwind
          </p>
        </div>


        {/* <div className="flex gap-6 text-sm font-medium">
          <div
            onClick={() => window.open("https://github.com/AzaanK-dev", "_blank")}
            className="bg-[#3D3D3D] w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:scale-[1.2] transition"
          >
            <img
              src={github}
              alt="github"
            />
          </div>
          <div
            onClick={() => window.open("https://github.com/AzaanK-dev", "_blank")}
            className="bg-white w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:scale-[1.2] transition"
          >
            <img
              src={linkedin}
              alt="linkedin"
            />
          </div>
          <div
            onClick={() => window.open("https://github.com/AzaanK-dev", "_blank")}
            className="bg-white w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:scale-[1.2] transition"
          >
            <img
              src={facebook}
              alt="facebook"
            />
          </div>
          <div
            onClick={() => window.open("https://www.instagram.com/azaan.k_17?igsh=MTVuYWpqM2xmZjNzbA==", "_blank")}
            className="bg-white w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:scale-[1.2] transition"
          >
            <img
              src={instagram}
              alt="instagram"
            />
          </div>
        </div> */}

<div className="flex gap-6 text-sm font-medium">
  {socialLinks.map(({ name, icon, url, bg }) => (
    <div
      key={name}
      onClick={() => window.open(url, "_blank")}
      className={`${bg} w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:scale-[1.2] transition`}
    >
      <img src={icon} alt={name} />
    </div>
  ))}
</div>




        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#work" className="hover:text-white transition">Projects</a>
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
