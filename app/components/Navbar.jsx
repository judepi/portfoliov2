"use client"

import React from 'react'
import Link from "next/link"
import Image from "next/image"

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
  },
  {
    alt: "linkedin",
    link: "/images/socials/linkedin.png",
  },
  {
    alt: "Youtube",
    link: "/images/socials/Youtube.png",
  },
];

const Navbar = () => {
  return (
    <section className="flex flex-col justify-evenly lg:min-h-screen mb-16 lg:mb-0 border p-10  lg:px-28  border-red-300">
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col mb-4">
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold">
            Jude Pierre
          </p>
          <p className="text-base md:text-xl font-extrabold">
            Computer Science Student, & Aspiring Engineer
          </p>
        </div>
        <p>
          Passionate about software engineering, and technology. My goal is to
          become a software engineer by 2024
        </p>
      </div>
      <div className="hidden lg:flex mt-10 mb-28">
        <ul className="flex flex-col">
          {navItems.map((item, index) => (
            <Link className="text-lg font-bold" key={index} href={item.link}>
              {item.value}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-evenly">
        <ul>
          {socials.map((item, index) => (
            <Image src={`"${item.link}"`} alt={`"${item.alt}"`} key={index} width={100} height={100}/>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Navbar