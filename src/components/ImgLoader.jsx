import { IsOnline } from "../utils";




const ImgLoader = ({ src, alt, className ,name, descp }) => {


  const imageDiv = document.getElementById("profileImg");
  const popUp = document.createElement("span");
  popUp.innerHTML=' <h1><</h1><h2>Click for Social Media </h2>'
  popUp.id = "popUp";
  popUp.className="jello-horizontal"
  
  imageDiv?.addEventListener("mousemove", () => {
    if (!document.body.contains(popUp)) {
      document.body.append(popUp);
      
      for (let i = 2; i < 5; i++) {
        const spans = document.querySelectorAll("span");
        i < spans.length ? spans[i].remove() : null;
      }
  
      setTimeout(() => {
        popUp.remove();
      }, 2000);
    }
  });
  
  
  


  return IsOnline() ? (
    <>
    <div className='mt-1 animate-pulse  flex  flex-focus:animate-none transition-all  text-[#CC6600] ' id='profileImg'>
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
