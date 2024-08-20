import React from 'react'
import Image from "next/image"
const About = () => {
  return (
    <section className="flex flex-col mt-10 lg:mt-0" id="about">
      <div className=" sticky font-bold text-base md:text-xl lg:text-start text-center text-primary-light mb-4">About</div>
      <div className="">
        <p className="">
          I have a passion and curiosity for learning new technologies, and
          understanding how different software systems are designed. I am
          currently focusing on the Internet of Things and learning full-stack
          development. I am proficient in front-end technologies, but also
          dabble in the backend side of systems as well. I gained my current
          technical skills from school, and learning new technologies through
          online courses.
        </p>
        <br/>
        <p>
          During my free time I stream tech videos on youtube, catch up on the latest technology 
        </p>
      </div>
    </section>
  );
}

export default About