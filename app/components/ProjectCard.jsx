"use client"
import React from 'react'
import Image from "next/image"

const ProjectCard = ({image, title, description, skills}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row  bg-slate-700 hover:opacity-80 w-full p-4 rounded-lg mt-4 h-fit md:h-56">
      <Image
        src={image}
        width={130}
        height={100}
        alt="project image"
        className=" ml-4 md:ml-0 h-fit"
      />

      <div className="ml-4 flex flex-col">
        <div className="flex">
          <p className="text-base lg:text-lg mb-2 font-bold">{title}</p>
        </div>

        <p className="mb-2">{description}</p>
        <ul className="flex ">
          {skills.map((skill, index) => (
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
}

export default ProjectCard