"use client";
import React from "react";
import Image from "next/image";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon.js";
import Link from "next/link";

const ProjectCard = ({ experience }) => {
  return (
    <div className="flex flex-col md:flex-row  bg-[#2B2C30]  w-full p-2 rounded-lg mt-4 h-full">
      <p className="hidden md:flex w-fit text-nowrap text-xs">
        {experience.date}
      </p>
      <div className="ml-4 flex flex-col mr-2">
        <p className="text-base lg:text-lg font-bold ">{experience.title}</p>
        <div className="flex text-base lg:text-md mb-2 font-bold">
          {experience.subtitle}
          <p className="ml-2 md:hidden">{"| " + experience.date}</p>
        </div>
        <p className="mb-2 w-fit text-sm">{experience.description}</p>
        <ul className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <li
              className="text-primary-first block bg-primary-second bg-opacity-30 rounded-xl p-2 text-nowrap px-2 py-1 text-xs font-medium"
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
