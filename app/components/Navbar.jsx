import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <section className="flex flex-col lg:min-h-screen mb-16 lg:mb-0 border p-10 lg:py-20 lg:px-28  border-red-300">
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col mb-4">
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold">Jude Pierre</p>
          <p className="text-base md:text-xl font-extrabold">
            Computer Science Student, & Aspiring Engineer
          </p>
        </div>

        <p>Passionate about software engineering, and technology.</p>
      </div>
    </section>
  );
}

export default Navbar