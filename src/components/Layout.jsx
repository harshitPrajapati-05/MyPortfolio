import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import {Header,Footer ,Button} from './'
import { useSelector } from 'react-redux'
import Form from './Form'
import {IsOnline} from '../utils'

const Layout = () => {
  const name= useSelector(s=>s.user.name)
  const isEmpty = React.useCallback(() => name === '', [name])
  const fireRun =()=> window.location.reload();  
  return (
    
    
    IsOnline()? 
    <>
    <Header/><div className='h-screen flex '>
      {isEmpty()?<Form isOn={true}/>:<Outlet/>}
      </div><Footer/> 
    </>:
    <div className='bg-black  flex  mt-48  text-white  jus font-mono justify-center  glassBox'>
    <button onClick={fireRun()}>
      <h1>YOU ARE OFFLINE </h1>
      <h2>Click ME </h2>
    </button>
    </div>
  )
}

export default Layout