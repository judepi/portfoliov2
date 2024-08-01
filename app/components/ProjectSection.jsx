"use client";
import React, { useRef, useState, useTransition } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { TabButton } from "./TabButton";
import ProjectCard from "./ProjectCard";
import ProjectPopUp from "./ProjectPopUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projectsData = [
  {
    id: 1,
    title: "Connect-Tags",
    description:
      "A WIP full-stack app developed with React-Native, Flask, and FireBase.",
    detailedDescription:
      "Connect-Tags is a group project done by myself and two other members (Casey Mak, and Mohammed Areefin). during the 2024 Wafflehacks hackathon. The project is still WIP. We used react-native to create the front-end so that we can have one simple code-base for all 3 platforms (web, apple, android). We are currently working on the backend with Flask and FireBase, and other features.",
    image: "/images/projects/Connect-Tags.jpeg",
    gitUrl: "https://github.com/jpntc/wafflehacks-2024-Connect-Tags",
    tag: ["All", "cp"],
    demo: "https://www.youtube.com/embed/3ma1kaWPtUU?si=QlKLmeqpveUyY0Gc",
    styles: { backgroundSize: "cover", width: "100%", overflow: "hidden" },
  },
  {
    id: 2,
    title: "Image Generator",
    description:
      "A web app that integrates the DALL-E 3 API to generate images from user input, along with interactive components to adjust the images created to match what is desired in mind.",
    detailedDescription: "Detailed description here",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "",
    tag: ["All", "web"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 3,
    title: "Game Hub",
    description:
      "A game browsing web app that uses RAWG's API and filters that gives power to browse hundreds of games.",
    detailedDescription: "Detailed description here",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "https://github.com/jpntc/Game-Hub",
    tag: ["All", "web"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A portfolio to show the track record of my journey in programming and software engineering. ",
    detailedDescription:
      "A portfolio web application developed with Next.js and Tailwind CSS to share information about myself and my journey. The project leverages the strengths of React and the component-based software engineering approach it offers which is popular in today's web development industry. I Created 6 components for the 6 different page sections, from the Navbar to the Footer and other children components for important functionalities. The libraries I used for the animations are React's Framer Motion, Type-Animation, and Animated Numbers. I attempted a dynamic code approach when necessary for generating site information, to make the codebase small and readable. RESEND was used for sending emails. AWS was used for deployment.",
    image: "/images/projects/portfolio.png",
    gitUrl: "https://github.com/jpntc/Portfolio",
    tag: ["All", "web"],
    demo: "",
    styles: {
      backgroundSize: "cover",
    },
  },
  {
    id: 5,
    title: "Inventory Management System",
    description:
      "An inventory system that offers CRUD operations to simulate a real-world system used by commerce businesses.",
    detailedDescription:
      "A command-line project for my software engineering class. The project was developed with Java, and uses OOP design principles. For modularity I used an item class to instantiate item objects for various items stored in the database, a storage class that is used to load the system with a data file of items into a hashmap data structure, and abstract away the data structure with CRUD methods. Finally there is a main program which takes in CRUD requests from the terminal, processes them, and logs all the transactions processed.",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl:
      "https://github.com/jpntc/CSCI-370-Projects/tree/main/Inventory%20Management%20Simulation",
    tag: ["All", "cli"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
  {
    id: 6,
    title: "URL Parser",
    description:
      "A URL parsing program that takes in URLs that point to different web pages and extracts the information they contain.",
    detailedDescription:
      "A command-line project for my software engineering class. The project was created in Java from a UML system diagram. It uses OOP principles such as modularization and abstraction, with 3 classes for handling plain html pages, image URLs, and URLs that point to pdf/docx files. It uses a WebReader class to handle branching and functionality for each type of URL. Finally it uses a WebReaderApplication class which is used to handle flags passed from the command-line. The content extracted from the URLs are stored in a separate folder. The information regarding the content such as file size and type are stored in an output file. Major packages used were Java's Abstract Window Toolkit, and .net package",
    image: "/images/projects/demo_coming_soon.png",
    gitUrl: "https://github.com/jpntc/CSCI-370-Projects/tree/main/URL_Parser",
    tag: ["All", "cli"],
    demo: "",
    styles: { backgroundSize: "cover" },
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const [tab, setTab] = useState("Web");
  const [isPending, startTransition] = useTransition();
  const isInView = useInView(ref, { once: true });

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <motion.section
      ref={ref}
      id="projects"
      className="min-h-screen flex-col"
      style={{ scale }}
    >
      <p className="font-bold text-center text-4xl md:text-5xl mb-16">
        Projects
      </p>
      <div className="flex flex-col w-full justify-center items-center content-center">
          <div className="bg-black opacity-60 text-center p-2 rounded-md">
            <TabButton
              selectTab={() => handleTabChange("web")}
              active={tab === "web"}
            >
              Web Apps
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cp")}
              active={tab === "cp"}
            >
              Cross-Platform
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cli")}
              active={tab === "cli"}
            >
              Command Line Programs
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("mob")}
              active={tab === "mob"}
            >
              Mobile Apps
            </TabButton>
        </div>
        <ul className="hidden md:visible md:flex flex-col mt-10 border w-ffull">
          {projectsData.map(
            (project, index) =>
              project.tag.includes(tab) && (
                <li key={index} className="h-fit p-8 w-fit">
                  <ProjectCard
                    imgUrl={project.image}
                    title={project.title}
                    description={project.description}
                    onClick={() => console.log("clicked")}
                    styles={project.styles}
                  />
                </li>
              )
          )}
        </ul>
        <div className="md:hidden">
          <Slider className="">
            {projectsData.map(
              (project, index) =>
                project.tag.includes(tab) && (
                  <div key={index} className="w-96  h-fit">
                    <ProjectCard
                      imgUrl={project.image}
                      title={project.title}
                      description={project.description}
                      onClick={() => console.log("clicked")}
                      styles={project.styles}
                    />
                  </div>
                )
            )}
          </Slider>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
