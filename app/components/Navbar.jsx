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
    link: "/socials/github-1.png",
    href: "https://github.com/jpntc",
  },
  {
    alt: "linkedin",
    link: "/socials/linkedin.png",
    href: "https://www.linkedin.com/in/jude-pierre ",
  },
  {
    alt: "Youtube",
    link: "/socials/Youtube.png",
    href: "https://www.youtube.com/channel/UCEEc1WDQhT0AMrJtjvr96ZA",
  },
];

const Navbar = () => {
  return (
    <section className="sticky top-0 left-0 lg:min-h-screen lg:w-3/4 mb-16 lg:mb-0 lg:ml-10">
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
      <div className="w-fit h-fit flex flex-col border border-orange-800 ">
        <ul className="flex justify-evenly">
          {socials.map((item, index) => (
            <Link key={index} href={item.href} target="_blank">
              <Image
                src={`${item.link}`}
                alt={`${item.alt}`}
                width={40}
                height={40}
                className="mr-2"
              />
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Navbar