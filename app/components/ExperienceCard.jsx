"use client";
import React from "react";
import Image from "next/image";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon.js";
import Link from "next/link";

const ProjectCard = ({ experience }) => {
  return (
    <div className="flex flex-col md:flex-row  bg-slate-700 hover:opacity-80 w-full p-2 rounded-lg mt-4 h-fit md:h-64">
      <p className="hidden md:flex w-fit text-nowrap">{experience.date}</p>
      <div className="ml-4 flex flex-col mr-2">
        <p className="text-base lg:text-lg font-bold ">{experience.title}</p>
        <div className="flex text-base lg:text-md mb-2 font-bold">
          {experience.subtitle}
          <p className="ml-2 md:hidden">{"| " + experience.date}</p>
        </div>
        <p className="mb-2">{experience.description}</p>
        <ul className="flex w-fit">
          {experience.skills.map((skill, index) => (
            <li
              className="text-yellow-600 block bg-black rounded-xl p-0.5 mr-2 mb-2 md:mb-0 text-nowrap"
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
