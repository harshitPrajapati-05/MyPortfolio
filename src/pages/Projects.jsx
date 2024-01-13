import React, { useState } from 'react';


const Projects = ({ projects = ["redux", "react"] }) => {
  const [isMouseOver, setIsMouseOver] = useState(null);
  

  return (
    <>
      <div className='font-mono capitalize w-[60rem] projectList glassBox h-min mx-auto my-36 '>
        <ul onMouseLeave={()=>(setIsMouseOver(null))} className='flex h-min gap-4 p-6 text-white flex-col'>
          <h1 className='mx-auto mt-0 font-mono'>P R O J E C T S</h1>
          {projects.map((project, id) => (
            <li

              key={id}
              className={`glassBox ccc p-2 flex  transition-all flex-col`}
              id={`${project}`}
              onClick={()=>setIsMouseOver(project)}
            >
              <h1 className='flex justify-between'>
              {project}
              <i
               onClick={()=>setIsMouseOver(project)}
               onDoubleClick={()=>(setIsMouseOver(null))}
               className="ri-arrow-left-circle-line  focus-within:rotate-[270deg] text-xl">
               </i>
              </h1>
              {isMouseOver === project && (
                <div id={`${project}subFolder`} className={`glassBox flex  flex-col justify-center  mt-1`}>

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
