"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon";
import Link from "next/link"
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
    tag: ["All", "Web"],
    demo: "https://www.youtube.com/embed/3ma1kaWPtUU?si=QlKLmeqpveUyY0Gc",
    skills: ["Node.js", "Next.js", "AWS Amplify", "REST APIs"],
    liveUrl: "",
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
    tag: ["All", "Web"],
    demo: "",
    skills: ["Node.js", "Next.js", "AWS Amplify", "APIs"],
    liveUrl: "",
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
    tag: ["All", "Web"],
    demo: "",
    skills: ["Node.js", "React.js", "APIs"],
    liveUrl: "",
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
    tag: ["All", "Web"],
    demo: "",
    skills: ["Node.js", "Next.js", "AWS Amplify", "APIs"],
    liveUrl: "",
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
    tag: ["All", "CL"],
    demo: "",
    skills: ["Java", "OOP", "System Designing"],
    liveUrl: "",
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
    tag: ["All", "CL"],
    demo: "",
    skills: ["Java", "OOP", "System Designing"],
    liveUrl: "",
    styles: { backgroundSize: "cover" },
  },
];
const ProjectSection = () => {
  return (
    <section className="mt-10 lg:mt-24 min-h-screen">
      <div className=" sticky border font-bold text-base md:text-xl text-center">
        Projects
      </div>

      <div className="lg:hidden border border-b-black" />
      <div className="w-full">
        <ul className="flex flex-col w-full">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-8 rounded-md">
        <Link href="/projects/" target="_blank">
          <div className="w-fit flex flex-row  p-4 items-center bg-gray-100 rounded-md">
            <p on hover>
              View more of my projects
            </p>{" "}
            <ArrowUpRightIcon className="h-10" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
