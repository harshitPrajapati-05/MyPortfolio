import React from 'react'

const Container = ({children, className ,id}) => {
  return (
    <div >
    <div id={id} className={` border-4 w-min flex flex-col gap-[1.5rem] mt-[25vh] ml-[35vw] p-10 border-black ${className   } `} >
        {children}
    </div>
    </div>
  )
}

export default Container