import React, { useEffect, useState } from 'react'

const Projects = () => {
  const [isReact, setIsReact] = useState(false)
  const [isPython, setIsPython] = useState(false)
  const [isCPP, setIsCPP] = useState(false)
  const megaFolder =()=>{
    setTimeout(() => {
      setIsReact(false);
      setIsPython(false);
      setIsCPP(false);
    }, 500);
  }

  
  useEffect(()=>{
    if(isReact==true){
      setIsPython(false)
      setIsCPP(false)
    }
    if(isPython==true){
      setIsReact(false)
      setIsCPP(false)
    }
    if(isCPP==true){
      setIsPython(false)
      setIsReact(false)
    }
  },[isReact, isPython , isCPP])

  return (
    <div className='text-white flex w-max mx-auto my-24   '>
      <ul  className=' flex flex-col w-[55rem] h-min  glassBox p-4  text-center font-mono '>
      <h1 className='text-center mt-1 font-mono'> P R O J E C T S  </h1> 
      <li
      onClick={()=>setIsReact(true)}

      className=' glassBox ccc p-2 m-3 '>
        <h1 onDoubleClick={()=>setIsReact(false)}>React</h1>
        {isReact && <div className='reactSF p-4 glassBox'>
        <ul>
        <li >
          <div>
            <h1 className=' capitalize'>this is based on ReactJS </h1>
            <div className='flex justify-between'>
              <p>lorem</p>
              <img src='../pre2.PNG' className='h-28' alt='hler'/>
            </div>
          </div>
        </li>
        </ul>
        </div>}
      </li>
      <li 
      onClick={()=>setIsPython(true)}
      
      className='glassBox ccc  p-2 m-3'>
        <h1 onDoubleClick={()=>setIsPython(false)}>Python</h1>
        {isPython && <div className='pythonSF glassBox'></div>}
      </li>
      <li
      onClick={()=>setIsCPP(true)}
      className='glassBox ccc  p-2 m-3'>
        <h1 onDoubleClick={()=>setIsCPP(false)}>C++</h1>
        {isCPP && <div className='cppSF glassBox'></div>}
      </li>
      </ul>
    </div>
  )
}

export default Projects