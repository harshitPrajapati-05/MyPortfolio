import React from 'react'

const Projects = ({projects=["redux","react"]}) => {
  return (
    <>
    <div className='  font-mono capitalize  w-[60rem] projectList glassBox h-min mx-auto my-12 '>
      <ul className='flex h-min gap-4 p-6  text-white flex-col'>
      <h1 className='mx-auto mt-0 font-mono '> P R O J E C T S</h1>
      {projects.map((project, id)=>(
        <li key={id} className={` glassBox ccc p-2  flex ${project} transition-all`}><h1>{project}</h1></li>
      ))}
      </ul>
    </div>
    </>
  )
}

export default Projects