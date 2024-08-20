import React from 'react'

const Skills = ({header, skills}) => {
  return (
    <div className="mb-3">
      <p className="text-sm font-sans">{header}</p>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-sm font-sans rounded-md text-primary-first bg-primary-second px-3 py-2 bg-opacity-30 m-0.5"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills