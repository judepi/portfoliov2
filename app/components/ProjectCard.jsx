"use client";
import React from "react";
import Image from "next/image";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon.js";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row  bg-slate-700 hover:opacity-80 w-full p-4 rounded-lg mt-4 h-fit md:h-56">
      <Image
        src={project.image}
        width={130}
        height={100}
        alt="project image"
        className=" ml-4 md:ml-0 h-fit"
      />

      <div className="ml-4 flex flex-col">
        <div className="flex justify-between">
          <p className="text-base lg:text-lg mb-2 mr-2 font-bold">
            {project.title}
          </p>
          <div className="flex border border-l-red-300">
            {project.gitUrl && (
              <Link href={project.gitUrl} target="_blank" className="mr-2">
                <Image
                  src="/images/projects/github.png"
                  alt="github icon on the project cards"
                  width={30}
                  height={30}
                  className="w-fit"
                />
              </Link>
            )}
            {project.gitUrl && (
              <Link href={project.liveUrl} target="_blank" className="mr-2">
                <ArrowUpRightIcon className="h-6" />
              </Link>
            )}
            {project.gitUrl && (
              <Link href={project.demo} target="_blank" className="mr-2">
                <ArrowUpRightIcon className="h-6" />
              </Link>
            )}
          </div>
        </div>

        <p className="mb-2">{project.description}</p>
        <ul className="flex ">
          {project.skills.map((skill, index) => (
            <li
              className="text-yellow-600 block bg-black rounded-xl p-0.5 mr-2 mb-2 md:mb-0"
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
