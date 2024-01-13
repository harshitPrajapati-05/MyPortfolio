import React from "react";
import { IsOnline } from "../utils";




const ImgLoader = ({ src, alt, className ,name, descp }) => {


  const [showPopup, setShowPopup] = React.useState(false);

  const handleMouseMove = () => { setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  };


  return IsOnline() ? (
    <>
    <div  onMouseMove={handleMouseMove} className='mt-0 animate-pulse  flex focus-within:animate-none transition-all  text-[#CC6600] ' id='profileImg'>
    {showPopup && (<span className=" transition-all animate-none flex ml-[17rem] mt-[2rem] glassBox  popUp absolute jello-horizontal text-white font-mono" >{`<CLICK ME FOR SOCIAL`}</span>)}
    <img src={src}  alt={alt} className={className} />
    <span className=' font-semibold animate-none rounded-none glassBox h-min mt-3 p-1'>
    <h2 className="hover:animate-none p-[1px] ">{name}</h2>
    <h3>{descp}</h3>
    </span>
    </div>
    </>
  ) : (
    <img src="offline-image.jpg" alt="You're offline" className='m-6 animate-ping transition-all' />
  );
};

export default ImgLoader;
