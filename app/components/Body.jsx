import React from 'react'
import AboutSection from "./AboutSection"
import EducationSection from "./EducationSection"
import ProjectSection from './ProjectSection'
import ExperienceSection from "./ExperienceSection";
import MiscSection from "./MiscSection"
const Body = () => {
  return (
    <section className="lg:w-3/4 min-h-screen  flex flex-col ">
      <AboutSection />
      <EducationSection />
      <ProjectSection/>
      <ExperienceSection/>
      <MiscSection/>
    </section>
  );
}

export default Body