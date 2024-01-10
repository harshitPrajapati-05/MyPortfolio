import { useEffect, useState } from 'react';


const ImgLoader = ({ src="../../hars.jpg", alt, className ,name, descp }) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatusChange = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    handleOnlineStatusChange();

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);


  return isOnline ? (
    <>
    <img src={src}  id='hey' alt={alt} className={className} />
    <div className='mt-[1.5rem] animate-pulse focus:animate-none transition-all hover: text-[#F5AC0E] '>
    <h2 >{name}</h2>
    <h3>{descp}</h3>
    </div>
    </>
  ) : (
    <img src="offline-image.jpg" alt="You're offline" className='m-6 animate-ping transition-all' />
  );
};

export default ImgLoader;
