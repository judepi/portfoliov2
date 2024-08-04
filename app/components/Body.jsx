import React from 'react'
import AboutSection from "./AboutSection"
import EducationSection from "./EducationSection"
import ProjectSection from './ProjectSection'
const Body = () => {
  return (
    <section className="lg:w-3/4 min-h-screen  flex flex-col ">
      <AboutSection />
      <EducationSection />
      <ProjectSection/>
    </section>
  );
}

export default Body