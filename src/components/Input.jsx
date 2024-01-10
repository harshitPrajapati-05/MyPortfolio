import React from 'react'

const Input = React.forwardRef( function Input(
    {
      label="Label" ,
      type="",
      max="99",
      ...props
    },ref
    )
    {
        const id = React.useId()
        const placeholder=string=>{ return `Enter The `+string.charAt(0).toUpperCase() + string.slice(1)} 
    return (
        <>
        <div className='flex'>
        {label && <label className='mx-3 text-lg  font-mono font-bold animate-[bounce_1s_ease-in-out_infinite] shadow-[-7px_7px_6px_2px] shadow-black focus-within:animate-none'  htmlFor={id}>{`>>${label}.:`}</label>}
        <input type={type} maxLength={max}  onClick="" placeholder={placeholder(`${label}`)} id={id}  ref={ref}
         className='font-mono text-center font-bold w-auto rounded-lg border-2 border-black focus-within:bg-black focus-within:text-[#F5AC0E] focus-within:border-transparent
         hover:bg-black hover:text-[#F5AC0E] hover:border-transparent transition-all  focus-within:shadow-inner focus-within:shadow-[#F5AC0E] focus-within:animate-none animate-[bounce_1.5s_ease-in-out_infinite] shadow-[-6px_6px_10px_2px]'
         {...props}
        />
        </div>
        </>
    )
})

export default Input