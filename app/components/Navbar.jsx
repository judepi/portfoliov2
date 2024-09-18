"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion"

const MotionLink = motion(Link);
const navItems = [
  { value: "About", link: "#about" },
  { value: "Education", link: "#education" },
  { value: "Projects", link: "#projects" },
  { value: "Experience", link: "#work" },
  { value: "Misc", link: "#misc" },
];

const socials = [
  {
    alt: "Github",
    link: "/images/socials/github-1.png",
    href: "https://github.com/jpntc",
  },
  {
    alt: "LinkedIn",
    link: "/images/socials/linkedin.png",
    href: "https://www.linkedin.com/in/jude-pierre",
  },
  {
    alt: "Youtube",
    link: "/images/socials/youtube.png",
    href: "https://www.youtube.com/channel/UCEEc1WDQhT0AMrJtjvr96ZA",
  },
];

const Navbar = () => {
  const [isSelected, setIsSelected] = useState(null);

  // useEffect to handle smooth scrolling when isSelected changes
  useEffect(() => {
    if (isSelected !== null) {
      console.log(isSelected)
      const targetId = navItems[isSelected].link;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [isSelected]);

  return (
    <div className="h-fit lg:fixed">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col mb-4">
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold">
            Jude Pierre
          </p>
          <p className="text-base md:text-xl font-extrabold mt-4">
            Computer Science Student
          </p>
          <p className="text-base md:text-xl font-extrabold">
            Aspiring Engineer
          </p>
        </div>
        <div className="flex flex-row w-full text-pretty justify-center items-center mb-4">
          <p>
            Interested in software engineering, system designing, and the latest
            tech trends.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex mt-4 mb-28">
        <ul className="flex flex-col">
          {navItems.map((item, index) => (
            <li key={index} onClick={() => setIsSelected(index)}>
              <Link
                href={item.link}
                className={`text-lg font-bold hover:text-primary-first ${
                  isSelected === index ? "text-primary-first" : ""
                }`}
              >
                <p>{item.value}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex justify-start">
          {socials.map((item, index) => (
            <MotionLink
              key={index}
              href={item.href}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0 }}
            >
              <Image
                src={item.link}
                alt={item.alt}
                width={40}
                height={40}
                className="mr-2 bg-primary-first rounded-full"
              />
            </MotionLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
