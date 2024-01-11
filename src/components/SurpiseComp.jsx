
import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Input } from '.'

const SurpiseComp = () => {
    const { primaryClr, backgroundClr, isChanged } = useSelector((state) => state.color);

  return (
    <>
    <div className=' fixed  w-min h-min  right-0 bottom-4'>
      <form className='flex flex-col gap-4 '>
      <h1 className='font-mono font-bold text-center capitalize'>color Changer</h1>
      <Input isLabel={false} />
      <Input isLabel={false} />
      </form>
    </div>
    </>
  )
}

export default SurpiseComp