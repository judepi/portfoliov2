"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { value: "About", link: "#about" },
  { value: "Education", link: "#education" },
  { value: "Projects", link: "#projects" },
  { value: "Experience", link: "#work" },
  { value: "Misc", link: "#misc" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav className="fixed top-0 m-0 p-0 bg-gray-800 w-full z-50 opacity-90 flex ">
      <Image
        src="/images/logo.png"
        width={90}
        height={90}
        alt={"logo"}
        className="p-2 rounded-full"
        id="nav"
      />
      <div className="w-full flex justify-end mx-4">
        <ul className="flex justify-evenly items-center text-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`inline-block text-white text-center border border-red-200 hover:text-red-200 font-bold hover:bg-green-200 text-xl p-2 ${
                activeSection === item.link.substring(1)
                  ? "bg-green-200 text-red-200"
                  : "text-white bg-inherit"
              }`}
            >
              <a href={item.link}>{item.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
