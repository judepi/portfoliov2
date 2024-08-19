"use client"
import React from 'react'
import { Button } from "@nextui-org/react";
import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline";
const techSkills=["Python", "Node", "Java", "C++", "Next.js & React", "PostgreSQL", "RDM",]
const softSkills=["Collaboration & Teamwork", "constructive criticism", "Passion to learn" ]
const MiscSection = () => {
  return (
    <section className="mt-10 lg:mt-24 min-h-screen" id="misc">
      <div className=" sticky font-bold text-base md:text-xl text-center">
        Miscellaneous
      </div>
      <div className="mt-8">
        <div className="text-lg font-bold">Hard Skills</div>
        <ul className="">
          {techSkills.map((skill, index) => (
            <li
              className="text-yellow-600  bg-black rounded-xl p-0.5   inline-block font-bold m-0.5 text-center"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 ">
        <div className="text-lg font-bold">Soft Skills</div>
        <ul className=" flex">
          {softSkills.map((skill, index) => (
            <li
              className="text-yellow-600  bg-black rounded-xl p-0.5   inline-block font-bold m-0.5 text-center items-center content-center"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 text-2xl font-bold">
        <div className="flex content-start items-end mb-2">
          <p>Connect with me by email:</p>
          <Link href="mailto:judepierre4477@gmail.com" className="ml-2">
            <EnvelopeIcon className="h-10 hover:border-yellow-600 hover:text-yellow-600" />
          </Link>
        </div>

        <Button className="flex bg-slate-700 p-2 rounded-md hover:opacity-60 text-center content-center items-center">
          <Link
            className="hover:text-yellow-600"
            href="https://drive.google.com/file/d/1gOd0jqSXTKOVg1yK7t1N9MGnOl1BgkcS/view?usp=sharing"
            target="_blank"
          >
            Download Resume{" "}
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default MiscSection