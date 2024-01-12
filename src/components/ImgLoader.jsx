import { useEffect, useState } from 'react';


const ImgLoader = ({ src, alt, className ,name, descp }) => {
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

  const imageDiv = document.getElementById("profileImg");
  const popUp = document.createElement("span");
  popUp.innerHTML='<i class="ri-arrow-up-circle-line"></i><h3>Click  for Social Media </h3>'
  popUp.id = "popUp";

  imageDiv?.addEventListener("mouseenter", () => {
    if (!document.body.contains(popUp)) {
      document.body.append(popUp);
      for(let i =2 ;i< 5 ;i++){
      const spans=  document.querySelectorAll("span")

      i<spans.length?spans[i].remove():null;
      }
      setTimeout(() => {
        popUp.remove();
      }, 10000);
    }
  });
  


  return isOnline ? (
    <>
    <div className='mt-1 animate-pulse  flex  flex-focus:animate-none transition-all hover: text-[#F5AC0E] ' id='profileImg'>
    <img src={src}  alt={alt} className={className} />
    <span className='flex flex-col justify-center'>
    <h2 >{name}</h2>
    <h3>{descp}</h3>
    </span>
    </div>
    </>
  ) : (
    <img src="offline-image.jpg" alt="You're offline" className='m-6 animate-ping transition-all' />
  );
};

export default ImgLoader;
