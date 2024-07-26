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
      <div className="flex flex-col justify-evenly bg-gradient-to-r from-blue-700 via-white to-red-800 opacity-80 rounded-md">
         <p className="opacity-100 z-20 p-10">I pursued my passion of technology at the City College of New York (CUNY) Queens College. Here I delved into all the foundational theory of computer science, and also built awesome software programs for the practical portion. I studied multiple courses such as Calculus, Discrete Mathematics, Probability, Object Oriented Programming in Java and C++, as well as advanced Python.</p>
 
      </div>
   
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
          <ul className="list-disc pl-2">
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

  const x1 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 0.9],
    ["-100%", "0%", "0%", "-80%"]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 0.9],
    ["100%", "0%", "0%", "80%"]
  );
    const x3 = useTransform(
      scrollYProgress,
      [0, 0.4, 0.7, 0.9],
      ["80%", "0%", "0%", "60%"]
    );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section ref={ref} id="education" className="min-h-screen p-16">
      <motion.p
        className="font-bold text-center text-4xl md:text-5xl mb-16"
        style={{ x: x2 }}
      >
        Education
      </motion.p>
      <motion.div className="flex w-full p-4 justify-center" style={{ x: x1 }}>
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

      <motion.div className="mt-8 md:text-xl xl:text-2xl text-text-light" style={{x: x1}}>
        {Tab_Data.find((t) => t.id == tab).content}
      </motion.div>
    </section>
  ); 
};

export default EducationSection;
