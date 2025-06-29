"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";

const MotionLink = motion(Link);

const Page = () => {
  const [hover, setHover] = useState(false);
  const [updatedList, setUpdatedList] = useState([]);

  const otherProjects = [
    {
      id: 3,
      title: "Portfolio v1.0",
      year: 2024,
      description:
        "A portfolio to show the track record of my journey in programming and software engineering. ",
      detailedDescription:
        "A portfolio web application developed with Next.js and Tailwind CSS to share information about myself and my journey. The project leverages the strengths of React and the component-based software engineering approach it offers which is popular in today's web development industry. I Created 6 components for the 6 different page sections, from the Navbar to the Footer and other children components for important functionalities. The libraries I used for the animations are React's Framer Motion, Type-Animation, and Animated Numbers. I attempted a dynamic code approach when necessary for generating site information, to make the codebase small and readable. RESEND was used for sending emails. AWS was used for deployment.",
      image: "/images/projects/portfolio.png",
      madeAt: "",
      madeWith: ["Next.js", "JavaScript", "Node.js", "Resend"],
      tag: ["All", "Web"],
      links: { github: "https://github.com/jpntc/Portfolio", live: "" },
    },
    {
      id: 4,
      title: "Inventory Management System",
      year: 2024,
      description:
        "An inventory system that offers CRUD operations to simulate a real-world system used by commerce businesses.",
      detailedDescription:
        "A command-line project for my software engineering class. The project was developed with Java, and uses OOP design principles. For modularity I used an item class to instantiate item objects for various items stored in the database, a storage class that is used to load the system with a data file of items into a hashmap data structure, and abstract away the data structure with CRUD methods. Finally there is a main program which takes in CRUD requests from the terminal, processes them, and logs all the transactions processed.",
      image: "/images/projects/demo_coming_soon.png",
      madeAt: "",
      madeWith: ["Java"],
      links: {
        github:
          "https://github.com/jpntc/CSCI-370-Projects/tree/main/Inventory%20Management%20Simulation",
        live: "",
      },
    },
    {
      id: 5,
      title: "URL Parser",
      year: 2024,
      description:
        "A URL parsing program that takes in URLs that point to different web pages and extracts the information they contain.",
      detailedDescription:
        "A command-line project for my software engineering class. The project was created in Java from a UML system diagram. It uses OOP principles such as modularization and abstraction, with 3 classes for handling plain html pages, image URLs, and URLs that point to pdf/docx files. It uses a WebReader class to handle branching and functionality for each type of URL. Finally it uses a WebReaderApplication class which is used to handle flags passed from the command-line. The content extracted from the URLs are stored in a separate folder. The information regarding the content such as file size and type are stored in an output file. Major packages used were Java's Abstract Window Toolkit, and .net package",
      image: "/images/projects/demo_coming_soon.png",
      madeAt: "",
      madeWith: ["Java"],
      links: {
        github:
          "https://github.com/jpntc/CSCI-370-Projects/tree/main/URL_Parser",
        live: "",
      },
    },
    {
      id: 1,
      title: "Image Generator",
      year: 2023,
      description:
        "A web app that integrates the DALL-E 3 API to generate images from user input, along with interactive components to adjust the images created to match what is desired in mind.",
      detailedDescription: "Detailed description here",
      madeAt: "",
      madeWith: ["Next.js", "JavaScript", "OpenAI API"],
      links: { github: "", live: "" },
    },
    {
      id: 2,
      title: "Game Hub",
      year: 2023,
      description:
        "A game browsing web app that uses RAWG's API and filters that gives power to browse hundreds of games.",
      detailedDescription: "Detailed description here",
      image: "/images/projects/demo_coming_soon.png",
      links: { github: "https://github.com/jpntc/Game-Hub", live: "" },
      madeAt: "",
      madeWith: ["React", "JavaScript", "RAG API"],
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#202124] lg:px-24 lg:py-16  overflow-hidden">
      <div>
        <MotionLink
          href="/"
          target=""
          className="w-fit flex flex-row items-center bg-[#2B2C30] px-3 py-2 rounded-md hover:opacity-60 mt-8 text-primary-first"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0 }}
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
        >
          <motion.div animate={{ scale: hover ? 1.15 : 1 }} transition={{}}>
            <ArrowLeftIcon className="ml-2 h-8 " />
          </motion.div>
          <p className="font-bold md:text-2xl">Jude Pierre</p>
        </MotionLink>
        <p className="mt-4  text-xl md:text-2xl font-bold text-white">
          All Projects
        </p>
      </div>
      <div className="w-full h-full overflow-x-scroll md:overflow-hidden">
        <table className="w-full h-full mt-10 border-collapse text-left ">
          <thead className="backdrop-blur sticky top-0 z-10 px-6 py-5 border border-b">
            <tr className=" p-10 text-md font-bold lg:text-lg text-white w-full h-full ">
              <th className="py-4 pr-8">Year</th>
              <th className="py-4 pr-8">Project</th>
              <th className="py-4 pr-8">Made at</th>
              <th className="py-4 pr-8">Built with</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {otherProjects.map((project, index) => (
              <tr key={index} className="border-b">
                <td className="text-base font-bold py-2">
                  <div>{project.year}</div>
                </td>
                <td className=" text-base font-bold py-2">
                  <div>{project.title}</div>
                </td>
                <td className=" text-base font-bold py-2">
                  <div>{project.madeAt}</div>
                </td>
                <td className="text-base font-bold py-2">
                  <ul className="flex ">
                    {project.madeWith.map((tool, index) => (
                      <li
                        key={index}
                        className="text-primary-first bg-primary-second bg-opacity-30 rounded-xl px-2 py-1 text-xs font-medium m-0.5 md:mb-0 text-nowrap"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className=" text-base font-bold py-2">
                  <div className="flex flex-col">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="hover:text-primary-first"
                        target="_blank"
                      >
                        Github
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.github}
                        className="hover:text-primary-first"
                        target="_blank"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
