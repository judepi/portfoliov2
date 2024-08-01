"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
const navItems = [
  { value: "About", link: "#about" },
  { value: "Education", link: "#education" },
  { value: "Projects", link: "#projects" },
  { value: "Experience", link: "#work" },
  { value: "Misc", link: "#misc" },
];





const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");

  const [menuOpen, setMenuOpen] = useState(false)
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
    <Navbar
      className="fixed bottom-50 bg-gray-800 w-full  z-30 opacity-90 border border-b"
      position={"static"}
      isBlurred={true}
      isMenuOpen={menuOpen}
      onMenuOpenChange={() => {
        setMenuOpen(!menuOpen);
      }}
  
    >
      <NavbarContent className=" pr-3" justify="start">
        <NavbarBrand className="mr-4">
          <Image
            src="/images/logo.png"
            width={90}
            height={90}
            alt={"logo"}
            className="p-2 rounded-full"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          className=""
          srOnlyText=" "
          icon={
            menuOpen ? (
              <XMarkIcon className="h-10 " />
            ) : (
              <Bars3Icon className="h-10 " />
            )
          }
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={`w-full  ${
                activeSection === item.link.substring(1)
                  ? "bg-green-200 text-red-200"
                  : ""
              } `}
              href={item.link}
              size="lg"
            >
              {item.value}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="fixed top-20 right-0 bg-gray-600 max-h-64 w-64  flex items-end"
      >
        {menuOpen ? (navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="text-green-500 text-2xl font-bold m-3" href={item.link} size="lg">
              {item.value}
            </Link>
          </NavbarMenuItem>
        ))) : <></>}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;


