import React from 'react'
import About from "./About"
import Education from "./Education"

const Body = () => {
  return (
    <section className="lg:w-3/4 lg:min-h-screen  flex flex-col ">
      <About />
      <Education />
    </section>
  );
}

export default Body