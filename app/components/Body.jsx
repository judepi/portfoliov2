import React from 'react'
import AboutSection from "./AboutSection"
import EducationSection from "./EducationSection"
import ProjectSection from './ProjectSection'
import ExperienceSection from "./ExperienceSection";
import MiscSection from "./MiscSection"
const Body = () => {
  return (
    <section className=" min-h-screen  flex flex-col lg:pl-16 lg:pr-10">
      <AboutSection />
      <EducationSection />
      <ProjectSection/>
      <ExperienceSection/>
      <MiscSection/>
    </section>
  );
}

export default Body