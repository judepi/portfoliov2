"use client";
import React, { useRef, useState, useTransition } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { TabButton } from "./TabButton";

const Tab_Data = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-col justify-evenly ">
        <p className="opacity-100 p-10">
          I pursued my passion of technology at the City College of New York
          (CUNY) Queens College. Here I delved into all the foundational theory
          of computer science, and also built awesome software programs for the
          practical portion. I studied multiple courses such as Calculus,
          Discrete Mathematics, Probability, Object Oriented Programming in Java
          and C++, as well as advanced Python.
        </p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        <ul className="flex flex-col justify-evenly p-10">
          <li>GOOGLE Computer Science Summer Institute 2021</li>
          <li>Python for Data Science, AI & Development</li>
        </ul>
      </div>
    ),
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);



  return (
    <motion.section ref={ref} id="education" className="min-h-screen text-slate-200" style={{scale} } >
      <p
        className="font-bold text-center text-2xl md:text-4xl mb-8"
      >
        Education
      </p>
      <motion.div className="flex w-full p-4 justify-center" >
        <div className="w-96 bg-black opacity-60 text-center p-2 rounded-md">
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            {" "}
            Certifications{" "}
          </TabButton>
        </div>
      </motion.div>

      <motion.div className="mt-8 md:text-xl xl:text-2xl text-text-light" >
        {Tab_Data.find((t) => t.id == tab).content}
      </motion.div>
    </motion.section>
  ); 
};

export default EducationSection;
