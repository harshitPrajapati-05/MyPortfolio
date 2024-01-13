import React from 'react'

const Input = React.forwardRef( function Input(
    {
      label="Label" ,
      isLabel=true,
      type="",
      max="99",
      className="",
      ...props
    },ref
    )
    {
        const id = React.useId()
        const placeholder=string=>{ return `Enter The `+string.charAt(0).toUpperCase() + string.slice(1)} 
    return (
        <>
        <div  className='flex'>
        {isLabel? (label && <label id='labelForForm' className='mx-3 text-lg  font-mono font-bold animate-[bounce_1s_ease-in-out_infinite] shadow-[-7px_7px_6px_2px] shadow-white bg-white focus-within:animate-none'  htmlFor={id}>{`>>${label}.:`}</label>):null}
        <input  type={type} maxLength={max}  onClick="" placeholder={placeholder(`${label}`)} id={id}  ref={ref}
         className={`font-mono glassBox text-center bg-transparent font-bold w-auto rounded-lg border-2 text-white   focus-within:text-white
           transition-all   focus-within:shadow-[0px_2px_10px_1px_#fff] focus-within:animate-none animate-[bounce_1.5s_ease-in-out_infinite]  ${className}`}
         {...props}
        />
        </div>
        </>
    )
})

export default Input