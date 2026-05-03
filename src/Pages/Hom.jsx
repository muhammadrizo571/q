import React from 'react'
import r from '../assets/react.svg'
const Hom = () => {
  return (
    <div className=' h-[300px] header' >
      <h1 align='center' className='text-6xl text-white font-light flex flex-col gap-[20px] items-center'>HOME-PAGE
        <img className='w-[100px] ' src={r} alt="" />
      </h1>
      
    </div>
  )
}

export default Hom
