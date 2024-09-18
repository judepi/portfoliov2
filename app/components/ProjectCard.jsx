"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon.js";
import Link from "next/link";

const MotionImage = motion(Image); 
const MotionLink = motion(Link); 

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#2B2C30] w-full p-4 rounded-lg mt-4 h-full">
      <Image
        src={project.image}
        width={130}
        height={100}
        alt="project image"
        className="ml-4 md:ml-0 max-h-40 rounded-md"
      />

      <div className="ml-4 flex flex-col justify-between ">
        <div>
          <div className="flex justify-between">
            <p className="text-base mb-2 font-bold flex flex-wrap">
              {project.title}
            </p>
            <div className="flex w-1/4 justify-end content-start items-start ml-2 h-fit">
              {project.gitUrl && (
                <MotionLink
                  href={project.gitUrl}
                  target="_blank"
                  className="rounded-full bg-primary-first p-0 m-0 w-fit h-fit"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/images/projects/github.png"
                    alt="github icon on the project cards"
                    width={30}
                    height={30}
                    className="w-full h-full"
                  />
                </MotionLink>
              )}
              {project.liveUrl && (
                <MotionLink
                  href={project.liveUrl}
                  target="_blank"
                  className="relative text-primary-first"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUpRightIcon
                    className=" flex w-full h-full"
                    width={30}
                    height={30}
                  />
                </MotionLink>
              )}
            </div>
          </div>

          <p className="mb-2 text-sm">{project.description}</p>
        </div>
        <ul className="flex flex-wrap">
          {project.skills.map((skill, index) => (
            <li
              className="text-primary-first block bg-primary-second bg-opacity-30 rounded-xl px-2 py-1 text-xs font-medium m-0.5 md:mb-0 text-nowrap"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
