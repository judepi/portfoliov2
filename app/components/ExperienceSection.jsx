"use client"
import ExperienceCard from "./ExperienceCard"
import React from 'react'


const experienceData = [
    {
        title: "Prompt Evaluator",
        subtitle: "Scale AI | freelance",
        description: "Assess AI model responses to programming prompts using defined criteria, and test and validate the code solutions and claims made. Assign grades to the model responses according to a rubric and offer comprehensive feedback for reviewers.",
        date: "Feb-24 - Present",
        skills: ["Programming", "problem solving", "front-end", "back-end"]
    },
] 
const ExperienceSection = () => {
  return (
    <section className="mt-10 lg:mt-24 min-h-screen" id="experience">
      <div className=" sticky font-bold text-base md:text-xl text-center">
        Experience
      </div>
      <div className="w-full">
        <ul className="flex flex-col w-full">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection