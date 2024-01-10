import React from 'react'
import { NavLink } from 'react-router-dom';
import ImgLoader from './ImgLoader';

const Header = (
  {
    name=" Harshit A Prajapati",
    descp=" Web Developer",
    contexts=["ABOUT","EXPERIENCE","PROJECTS","LIVE"]
  }
  ) => {
    const toMaker = to => { return `/${to.toString().toLowerCase()}` } ;
    const path = `${window.location.pathname}` 
    React.useEffect(()=>{console.log(window.location.pathname)},[path])
  return (   
    <>
    <div className={`flex flex-wrap  justify-between h-min mt-0 w-auto  font-mono bg-black text-white`}>
    <div className='flex flex-wrap`'  id='imgg'>
    <ImgLoader src="../public/hars.jpg" alt="nice facing some trouble" name={name} descp={descp} className={`h-[4.5rem] rounded-full m-[0.75rem]
      focus-within:animate-none  animate-pulse`}/>
    
    </div>
    <ul className={`flex flex-wrap gap-[1.75rem]`}>
    {contexts.map((context ,index)=>(
     <li   key={index} className='mt-[1.25rem] mx-[1.25rem] text-lg font-bold '>
      <NavLink to={toMaker(`${context}`)}
      className={({isActive})=>`${isActive? "text-black bg-[#F5AC0E] shadow-black shadow-inner   ":"bg-black text-[#F5AC0E] hover:transition-all shadow-[3px_3px_1px_0px_rgba(245,172,14,1)]"}   hover:text-black hover:bg-[#F5AC0E] hover:transition-shadow  hover:shadow-black hover:shadow-inner flex rounded-lg p-[0.25rem] my-[0.5rem]`}
      >@{context}</NavLink>
     </li>
    ))}
    </ul>
    </div> 
    </>
  )
}

export default Header
