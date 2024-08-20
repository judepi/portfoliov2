import React from 'react'
import Image from "next/image"
const About = () => {
  return (
    <section className="flex flex-col mt-10 lg:mt-0" id="about">
      <div className=" sticky font-bold text-base md:text-xl mb-4">About</div>
      <div className="">
        <p className="">
          I have a strong passion for learning new technologies and
          understanding the design of various software systems. Currently, I am
          focusing on the Internet of Things (IoT) and full-stack development.
          While I am proficient in front-end technologies, I also have
          experience with back-end systems, AI models, and APIs.
        </p>
        <br />
        <p>
          In my free time, I enjoy streaming tech videos on YouTube, staying
          updated on the latest technology trends, and spending quality time
          with friends and family. Occasionally, I unwind by playing Monster
          Hunter.
        </p>
      </div>
    </section>
  );
}

export default About