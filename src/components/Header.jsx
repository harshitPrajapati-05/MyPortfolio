import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ImgLoader from './ImgLoader'
import { useSelector } from 'react-redux';
import {gsap} from 'gsap';
const Header = (
  {
    name=" Harshit A Prajapati",
    descp=" Web Developer",
    contexts=["ABOUT","EXPERIENCE","PROJECTS","LIVE"]
  }
  ) => {
    const toMaker = to => { return `/${to.toString().toLowerCase()}` } ;
    const userName = useSelector(state=>state.user.name)


  return (   
    <>
    <div id="header" className={`flex flex-wrap  justify-between h-min  w-full font-mono bg-transparent text-white`}>
    <div className='flex  font-mono text-[#F5AC0C]  m-2'>
    <Link to="https://www.instagram.com/harshit_prajapati04/">
    {userName!==""?<ImgLoader src={`../hars.jpg`} className={`h-20 rounded-full`} name={name} descp={descp}/>:null}
    </Link>
    </div>
    <ul  className={`flex flex-wrap gap-[1.75rem]`}>
    {userName!== "" && contexts.map((context ,index)=>(
     <li    key={index} className='mt-1 mx-[1.25rem] text-lg font-mono font-semibold '>
      <NavLink  to={toMaker(`${context}`)}
      className={({isActive})=>`${isActive? "text-grey glassBox bg-transparent shadow-[1px_1px_15px_1px_rgba(146,46,227,255)]   ":"  glow hover:transition-all hover:shadow-[5px_5px_1px_0px_rgba(146,46,227,255)]"}    hover:text-white hover:bg-transparent transition-shadow   glassBox flex rounded-lg p-[0.25rem] my-5`}
      >@{context}</NavLink>
     </li>
    ))}
    </ul>
    </div> 
    </>
  )
}

export default Header
