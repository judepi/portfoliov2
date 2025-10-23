"use client"
import ExperienceCard from "./ExperienceCard"
import React from 'react'


const experienceData = [
  {
    title: "Developer | Fellow",
    subtitle: "SCIP",
    description:
     "Lead a team of 4 to develop a mobile app using React Native and Firebase. Built out different features such as notifications, multi language, and a chat system.",
    date: "Sep-24 - Present",
    skills: ["Programming", "React Native", "Node.js", "UI/UX Design", "WIX"],
  },
  {
    title: "Fellow",
    subtitle: "CUNY Tech Prep",
    description:
      "Accepted into a competitive program taught by industry and academic experts, focused on web development. I am learning and utilizing technologies such as PostgreSQL, Express.js, React.js, and Node.js, while also applying industry best practices, including MVC design, Git/GitHub version control, and Agile/Scrum methodologies.",
    date: "Aug-16 - Present",
    skills: ["Programming", "PostgreSQL", "React.js", "Next.js", "Node.js", "Express.js"],
  },
  {
    title: "Fellow",
    subtitle: "Headstarter",
    description:
      "Accepted into a highly competitive software engineering program that provided a comprehensive introduction to the field, featuring live sessions led by industry professionals and engineers. Throughout the program, I built and deployed five projects utilizing in-demand web technologies and API services, showcasing my fullstack development skills. Additionally, I created and deployed a web application that generated significant user interest, with 50+ waitlisted users within just a few days of launch, demonstrating the impact and potential of the projects I worked on.",
    date: "Aug-9 - Sept-9",
    skills: ["Programming", "React.js", "Next.js", "Node.js", "Python", "React Native"],
  },
  {
    title: "Prompt Evaluator",
    subtitle: "Scale AI | freelance",
    description:
      "Assess AI model responses to programming prompts using defined criteria, and test and validate the code solutions and claims made. Assign grades to the model responses according to a rubric and offer comprehensive feedback for reviewers.",
    date: "Feb-24 - Nov-24",
    skills: ["Programming", "problem solving", "front-end", "back-end"],
  },
]; 
const ExperienceSection = () => {
  return (
    <section className="mt-10 lg:mt-24 min-h-screen" id="experience">
      <div className=" sticky font-bold text-base md:text-xl">
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