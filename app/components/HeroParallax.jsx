"use client"
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from "framer-motion"


const HeroParallax = () => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

  const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0,1], ["0%", "300%"]);

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.div className="font-bold text-white text-6xl md:text-6xl relative z-10" style={{y: textY}} >
        <p className="relative z-10">Hello</p>
        <p className="relative z-10">I&apos;m Jude Pierre</p>
      </motion.div>
    

      <motion.div className="absolute inset-0 z-0 bg-bottom" style={{
        backgroundImage: `url(/images/parallax/image_full.png)`,

        backgroundSize: "cover",
        y: backgroundY,
      }}></motion.div>
        <div className="absolute inset-0 z-20 bg-bottom" style={{
        backgroundImage: `url(/images/parallax/image_bottom.png)`,
        backgroundPosition:"bottom",
        backgroundSize: "cover"
      }}></div>
    </div>
  );
}

export default HeroParallax