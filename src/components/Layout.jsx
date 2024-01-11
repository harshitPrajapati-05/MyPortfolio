import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import {Header,Footer ,} from './'
import { useSelector } from 'react-redux'
import Form from './Form'

const Layout = () => {
  const [isOnline, setIsOnline] = React.useState(true)
  const navigate = useNavigate();
  const name= useSelector(s=>s.user.name)


  const isEmpty = React.useCallback(() => name === '', [name])
  


  React.useEffect(()=>{
    const handleOnlineStatusChange =()=> setIsOnline(navigator.onLine);

    window.addEventListener('online',handleOnlineStatusChange);
    window.addEventListener('offline',handleOnlineStatusChange);

    handleOnlineStatusChange();


    return ()=>{
      window.removeEventListener('online',handleOnlineStatusChange);
      window.removeEventListener('offline',handleOnlineStatusChange);
    };
  },[]);

  

  return (
    
    
    isOnline? 
    <>
    <Header/><div className='h-screen flex '>
      {isEmpty()?<Form isOn={true}/>:<Outlet/>}
      </div><Footer/> 
    </>
      :
    <>
    <Header/>
    <div className='bg-black  flex w-min mt-10 text-[#F5AC0E]'>Error 404 </div>
    <Footer/>
    </>
  )
}

export default Layout