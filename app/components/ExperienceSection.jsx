"use client";
import React from "react";
import Card from "./Card";

const experience = [
  {
    title: "Prompt Evaluator",
    subTitle: "Scale AI + Outlier | Freelance | Feb 2024-Present",
    imgSrc: "",
    description:
      "Worked on evaluating model prompts based on a specific criteria.",
  },
  {
    title: "Software Engineering Fellow",
    subTitle: "HeadStarter AI | July 2024-Present",
    imgSrc: "",
    description: "Creating 5 AI based applications from scratch.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="work" className="min-h-screen flex justify-start ml-16">
      <p className="inline-blocktext-4xl md:text-5xl font-bold text-center">Experience</p>
      <ul className="w-full mt-16">
        {experience.map((item, index) => (
          <li key={index} className="p-4 mt-10">
            <Card info={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
