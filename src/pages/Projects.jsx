import React, { useState } from 'react';


const Projects = ({ projects = ["redux", "react"] }) => {
  const [isMouseOver, setIsMouseOver] = useState(null);
  const reduxSubFolderRef = document.getElementById("reduxsubFolder")

  return (
    <>
      <div className='font-mono capitalize w-[60rem] projectList glassBox h-min mx-auto my-12 '>
        <ul className='flex h-min gap-4 p-6 text-white flex-col'>
          <h1 className='mx-auto mt-0 font-mono'>P R O J E C T S</h1>
          {projects.map((project, id) => (
            <li
              key={id}
              className={`glassBox ccc p-2 flex  transition-all  flex-col`}
              id={`${project}`}
              onMouseOver={() => setIsMouseOver(project)}
              onMouseOut={() => setIsMouseOver(null)}
            >
              <h1>{project}</h1>
              {isMouseOver === project && (
                <div id={`${project}subFolder`} className={`glassBox flex  flex-col justify-center `}>
                  <h1>Welcome to {project} Project</h1>
                  <h2>Coming Soon</h2>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
