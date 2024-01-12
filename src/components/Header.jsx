import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ImgLoader from './ImgLoader'
const Header = (
  {
    name=" Harshit A Prajapati",
    descp=" Web Developer",
    contexts=["ABOUT","EXPERIENCE","PROJECTS","LIVE"]
  }
  ) => {
    const toMaker = to => { return `/${to.toString().toLowerCase()}` } ;

  return (   
    <>
    <div className={`flex flex-wrap  justify-between h-min mt-0 w-full font-mono bg-black text-white`}>
    <div className='flex  font-mono text-[#F5AC0C]  m-2'  id='imgg'>
    <ImgLoader src={`../hars.jpg`} className={`h-20 rounded-full`}/>
    <div className='flex items-center'>
    <Link to="https://www.instagram.com/harshit_prajapati04/">
    <h1 >{name}</h1>
    <h1>{descp}</h1>
    </Link>
    </div>
    </div>
    <ul className={`flex flex-wrap gap-[1.75rem]`}>
    {contexts.map((context ,index)=>(
     <li   key={index} className='mt-1 mx-[1.25rem] text-lg font-bold '>
      <NavLink to={toMaker(`${context}`)}
      className={({isActive})=>`${isActive? "text-black bg-[#F5AC0E] shadow-black shadow-inner   ":"bg-black text-[#F5AC0E] hover:transition-all shadow-[3px_3px_1px_0px_rgba(245,172,14,1)]"}   hover:text-black hover:bg-[#F5AC0E] hover:transition-shadow  hover:shadow-black hover:shadow-inner flex rounded-lg p-[0.25rem] my-2`}
      >@{context}</NavLink>
     </li>
    ))}
    </ul>
    </div> 
    </>
  )
}

export default Header
