"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {Card} from "@nextui-org/react"
const AboutSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);


  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center "
      ref={ref}
      style={{ scale }}
    >
      <p className="text-2xl md:text-4xl font-bold  mb-10 text-slate-200 ml-10 text-center">
        About Myself
      </p>
      <div className=" flex flex-col md:flex-row justify-center items-center align-middle">
        <div
          className="flex ml-10 text-slate-200 h-fit"
          style={{ width: "60%" }}
        >
          <p className="text-xl md:text-2xl">
            Hello, my name is Jude Pierre, a computer science student who loves
            everything about software engineering. I have a passion and
            curiosity for learning new technologies, and understanding how
            different software systems are designed. I am currently focusing on
            the Internet of Things and learning full-stack development. I am
            proficient in front-end technologies, but also dabble in the backend
            side as well.
          </p>
        </div>
        <div
          style={{
            width: "40%",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            opacity,
          }}
        >
          <Image
            className="rounded-full  mt-10 lg:mt-0  "
            src="/images/myAvatar1TP.png"
            alt="profile picture"
            width={300}
            height={300}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
