import React from 'react'
import r from '../assets/react.svg'
import thermometer from '../assets/thermometer-snow.svg'
import bitcoin from '../assets/currency-bitcoin.svg'
import noise from '../assets/noise-reduction.svg'
import droplet from '../assets/droplet.svg'


const Hom = () => {
  return (
    <div className=' h-auto flex rounded-b-[20px]  flex-wrap    ' >

<div className=" h-auto flex rounded-b-[20px]  flex-wrap w-[100%] pb-[30px] header">


      <div className="w-[48%] pt-[70px]">
        <div className="text-white ml-[100px]">

          <p className='text-[25px] font-light '>AquaSystem</p>

          <h1 className='flex flex-col text-[40px] '>
            <span>Water cooling</span>
            <span>system for</span>
            <span className='text-[blue]'>Antminer</span>
          </h1>

        </div>

      <div className="flex justify-evenly pl-[40px] mt-[30px] text-white">
        <div className="w-[120px] h-[120px] rounded-[17px] mk hover:scale-150"> 

          <img className='w-[30px] ml-[37px] mt-[34px] ' src={thermometer} alt="" />

          <p className='text-[15px] ml-[24px] mt-[17px]'>Cooling</p>
          
        </div>
        <div className="w-[120px] h-[120px] rounded-[17px]  md hover:scale-150">
          <img className='w-[30px] ml-[37px] mt-[34px]' src={bitcoin} alt="" />
          <p className='text-[15px] ml-[24px] mt-[17px]'>Bitcoin</p>
        </div>
        <div className="w-[120px] h-[120px] rounded-[17px]  mk has-hover:scale-150 ">
          <img  className='w-[30px] ml-[37px] mt-[34px]'  src={noise} alt="" />
          <p className='text-[15px] ml-[8px] mt-[17px]'>Noise-reduction</p>
        </div>
        <div className="w-[120px] h-[120px] rounded-[17px]  md hover:scale-150 ">
          <img  className='w-[30px] ml-[37px] mt-[34px]' src={droplet} alt="" />
          <p className='text-[15px] ml-[24px] mt-[17px]'>Economy</p>
        </div>
      </div>

      </div>

      <div className="w-[52%] pt-[130px] ">
      <h1 align='center' className='text-6xl text-white font-light flex flex-col gap-[20px] items-center'>HOME-PAGE
        <img className='w-[100px] ' src={r} alt="" />
      </h1>
      </div>

</div>

     

      <div className=" w-[100%] mt-[100px]">

        <div className="flex justify-between">

        <h3 className='flex flex-col text-[50px]'>
          <span>Types of</span>
          <span className=' text-[blue]'>AquaSystem</span>
        </h3>

        <span className='flex gap-[14px]'>

        <button className='btn btn-success rounded-[25px] gap-[15px] bg-black text-white border-black '> Bitcoin <img className='bg-white rounded-2xl p-2 mr-[-13px] ' src={bitcoin} alt="" /> </button>
        <button className='btn btn-success rounded-[25px] gap-[15px] bg-white text-black border-white'> Bitcoin <img className='bg-[blue] rounded-2xl p-2 mr-[-13px] ' src={bitcoin} alt="" /> </button>
        
        </span>


        </div>


        <div className=" w-[600px] h-[400px] bg-blue-600 "></div>     
        <div className=" w-[600px] h-[400px] bg-blue-600 "></div>

      </div> 
      



    </div>
  )
}

export default Hom
