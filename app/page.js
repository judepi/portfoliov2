import Image from "next/image";
import NavBar from "./components/Navbar";
import HeroParallax from "./components/HeroParallax";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import MiscSection from "./components/MiscSection";
export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-between bg-gray-800">
        <NavBar />

        <HeroParallax />
        <div className="flex flex-col min-h-screen min-w-full px-20 md:px-36 mt-10 overflow-hidden">
          <AboutSection />
          <EducationSection />
          <ProjectSection />
          <ExperienceSection />
          <MiscSection />
        </div>
      </main>
    </>
  );
}
