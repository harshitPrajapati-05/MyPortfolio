import React from 'react'

const Projects = () => {
  


  return (
    <div className='text-white flex w-max mx-auto my-24   '>
      <ul  className=' flex flex-col w-[50rem] h-min  glassBox  text-center font-mono '>
      <h1 className='text-center mt-2 font-mono'> P R O J E C T S  </h1> 
      <li className=' glassBox ccc p-2 m-3 '>
        <h1>React</h1>
        {true && <div className='reactSF glassBox'></div>}
      </li>
      <li className='glassBox ccc  p-2 m-3'>
        <h1>Python</h1>
        {true && <div className='reactSF glassBox'></div>}
      </li>
      <li className='glassBox ccc  p-2 m-3'>
        <h1>C++</h1>
        {true && <div className='reactSF glassBox'></div>}
      </li>
      </ul>
    </div>
  )
}

export default Projects