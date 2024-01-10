import React from 'react'

const Button = React.forwardRef(function Button(
  {
   name="Button " ,
   type='form'
  }
  ,ref)
  { return(
    <>
    <button type={type} ref={ref} className='  font-mono  font-bold border-2-transparent w-min mx-32  rounded-xl px-2 hover:bg-black hover:text-[#F5AC0E]  hover:shadow-inner animate-[bounce_2s_ease-in-out_infinite] hover:shadow-[#F5AC0C] py-1 shadow-[-2px_3px_10px_3.9px]'>{name}</button>
    </>
  )
  }
  )

export default Button