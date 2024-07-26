"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0,  0.4, 0.7, 0.8],
    ["-100%", "0%", "0%", "0%"]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 0.9],
    ["100%", "0%", "0%", "80%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="grid grid-cols-1 sm:grid-cols-4 min-h-screen" ref={ref}>
      <motion.div
        className="w-full col-span-2 p-40"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          x: x1,
          opacity,
        }}
      >
        <Image
          className="rounded-full overflow-hidden"
          src="/images/myAvatar1TP.png"
          alt="profile picture"
          width={300}
          height={300}
        />
      </motion.div>

      <motion.div
        className="m-10 h-fit text-xl md:text-2xl bg-slate-400 opacity-0.8 mx-10 col-span-2 p-6 rounded-xl"
        style={{ x: x2, opacity }}
      >
        <p className="text-3xl md:text-4xl font-bold text-center mb-16">
          About Myself
        </p>
        <p className="">
          Hello, my name is Jude Pierre, a computer science student who loves
          everything about software engineering. I have a passion and curiosity
          for learning new technologies, and understanding how different
          software systems are designed. I am currently focusing on the Internet
          of Things and learning full-stack development. I am proficient in
          front-end technologies, but also dabble in the backend side as well.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
