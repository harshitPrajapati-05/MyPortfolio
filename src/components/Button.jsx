import React from 'react'

const Button = React.forwardRef(function Button(
  {
   name="Button " ,
   type='form',
   className="",
   onCLick,
  }
  ,ref)
  { return(
    <>
    <button onClick={onCLick} type={type} ref={ref} className={` font-mono  font-bold   text-white ${className}`}>{name}</button>
    </>
  )
  }
  )

export default Button