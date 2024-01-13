import { useEffect, useState } from 'react'

const IsOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{
        const handleOnlineStatusChange =()=> setIsOnline(navigator.onLine);
    
        window.addEventListener('online',handleOnlineStatusChange);
        window.addEventListener('offline',handleOnlineStatusChange);
    
        handleOnlineStatusChange();
    
    
        return ()=>{
          window.removeEventListener('online',handleOnlineStatusChange);
          window.removeEventListener('offline',handleOnlineStatusChange);
        };
      },[]);

  return isOnline
}

export default IsOnline