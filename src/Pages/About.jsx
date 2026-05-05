import React from 'react'
import {card} from './Map'
const About = () => {
  return (
     <div className=' max-[1440px] : '>
             <div >
         <h1 className='text-[30px] text-black text-center '>Welcome to Cantend page</h1>
         <div className="p-[50px] rounded-[20px]"><div className="carousel w-full">
     <div id="slide1" className="carousel-item relative w-full">
       <img
         src=""
         className="w-[100%] h-[400px] cover" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide4" className="btn btn-circle">❮</a>
         <a href="#slide2" className="btn btn-circle">❯</a>
       </div>
     </div>
     <div id="slide2" className="carousel-item relative w-full">
       
       <img
         src=""
         className="w-[100%] h-[400px] object-cover object-contain" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide1" className="btn btn-circle">❮</a>
         <a href="#slide3" className="btn btn-circle">❯</a>
       </div>
     </div>
     <div id="slide3" className="carousel-item relative w-full">
       <img
         src=""
         className="w-full" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide2" className="btn btn-circle">❮</a>
         <a href="#slide4" className="btn btn-circle">❯</a>
       </div>
     </div>
     <div id="slide4" className="carousel-item relative w-full">
       <img
         src=""
         className="w-full" />
       <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
         <a href="#slide3" className="btn btn-circle">❮</a>
         <a href="#slide1" className="btn btn-circle">❯</a>
       </div>
     </div>
   </div></div>
         <div className='p-[50px]  flex flex-wrap justify-around gap-[50px]' >
           {
   
             card && card.map((value) => {
               return (
                 <div className="w-[350px] h-[400px]  rounded-[20px] shadow-sm bg-white ">
   
   
                   <img className=' p-[20px] rounded-[30px]' src={value.rasm} alt="" />
                   <h1 className='ml-[30px] text-[30px] '>{value.name}</h1>
                   <p className='ml-[30px]'>{value.speed}</p>
                   <p className='ml-[30px]'>{value.price}</p>
                   <div className=' flex'>
                     <button className='btn h-[30px] ml-[150px] mt-[17px]'>BUY</button>
                     <button className='btn h-[30px]  mt-[17px] ml-[10px]'>contact</button>
   
   
                   </div>
   
                 </div>
               )
             })
           }
         </div>
       </div>
       </div>
  )
}

export default About
