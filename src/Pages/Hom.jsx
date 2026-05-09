import React from 'react'
import r from '../assets/react.svg'
import thermometer from '../assets/thermometer-snow.svg'
import bitcoin from '../assets/currency-bitcoin.svg'
import noise from '../assets/noise-reduction.svg'
import droplet from '../assets/droplet.svg'
import motor from '../assets/motor.png'
import asic from '../assets/asic.png'
import asic2 from '../assets/asic2.png'
import asic3 from '../assets/asic3.png'
import motor2 from '../assets/motor2.png'
import odd from '../assets/odd.png'
import motor3 from '../assets/motor3.png'
import motor4 from '../assets/motor4.png'
import motors from '../assets/motors.png'
import icon from '../assets/icon.svg'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import line from '../assets/line.png'
import rasm from '../assets/1.jpg'




const Hom = () => {
  return (
    <div className=' h-auto flex rounded-b-[20px]  flex-wrap    ' >

style={{backgroundImage:`url(${rasm})`,backgroundSize:'cover'}}
<div className=" h-auto flex rounded-b-[20px]  flex-wrap w-[100%] pb-[30px] ">

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

        <div className="flex items-center justify-between">

        <h3 className='flex flex-col text-[50px]'>
          <span>Types of</span>
          <span className=' text-[blue]'>AquaSystem</span>
        </h3>

        <span className='flex gap-[14px] mt-[80px]'>

        <button className='btn btn-success w-[150px] h-[50px] rounded-[25px]  bg-black text-white border-black flex justify-between '> <h4>Bitcoin</h4> <img className='bg-white rounded-3xl p-3 mr-[-10px] ' src={bitcoin} alt="" /> </button>
        <button className='btn btn-success w-[150px] h-[50px] rounded-[25px]  bg-white text-black border-white flex justify-between'> <h4>Bitcoin</h4> <img className='bg-[blue] rounded-3xl p-3 mr-[-10px] ' src={bitcoin} alt="" /> </button>
        
        </span>


        </div>

      <div className="flex justify-center items-center gap-[50px] mt-[40px]">

        <div className=" w-[680px] h-[408px] bg-gradient-to-tr  from-black to-blue-500 rounded-[30px] flex ">

        <div className="w-[50%] h-[100%] flex flex-col gap-[30px] p-[30px] pt-[45px] ">

          <h1 className='flex flex-col text-white text-[28px] w-[290px] h-[68px]' > 
          <span>Cooling system</span>
          <span>Antminer S19 hydro</span>
          </h1>

          <div className=" flex flex-col gap-2.5 ">
            <h4 className='flex text-white gap-2 text-xl' > <img src={asic} alt="" /> <span> Overclocing: 11 2th </span> </h4>
            <h4 className='flex text-white gap-2 text-xl' > <img src={asic2} alt="" /> <span> Heating home </span> </h4>
            <h4 className='flex text-white gap-2 text-xl' > <img src={asic3} alt="" /> <span> Noise reduction to PC level </span> </h4>
          </div>

          <div className=" flex gap-[20px] ">

            <button className='btn btn-info w-[140px] h-[50px]' > More </button>
            <p className='text-white text-2xl' > from 800$ </p>

          </div>

        </div>
        <div className="w-[50%] flex items-center "> <img className='w-[300px] h-[300px]' src={motor}alt="" /> </div>
          
        </div>   

        <div className=" w-[680px] h-[408px] bg-gradient-to-tl  from-black to-blue-500 rounded-[30px] flex ">

        <div className="w-[50%] h-[100%] flex flex-col gap-[30px] p-[30px] pt-[45px] ">

          <h1 className='flex flex-col text-white text-[28px] w-[290px] h-[68px]' > 
          <span>Cooling system</span>
          <span>Antminer S19 hydro</span>
          </h1>

          <div className=" flex flex-col gap-2.5 ">
            <h4 className='flex text-white gap-2 text-xl' > <img src={asic} alt="" /> <span> Overclocing: 11 2th </span> </h4>
            <h4 className='flex text-white gap-2 text-xl' > <img src={asic2} alt="" /> <span> Heating home </span> </h4>
            <h4 className='flex text-white gap-2 text-xl' > <img src={asic3} alt="" /> <span> Noise reduction to PC level </span> </h4>
          </div>

          <div className=" flex gap-[20px] ">

            <button className='btn btn-info w-[140px] h-[50px]' > More </button>
            <p className='text-white text-2xl' > from 800$ </p>

          </div>

        </div>
        <div className="w-[50%] flex items-center "> <img className='w-[300px] h-[300px]' src={motor}alt="" /> </div>
          
        </div>   

      </div>

      <div className=" w-[100%] h-[668px] rounded-[30px] bg-gradient-to-r from-gray-400 to-gray-200 flex mt-[150px] ">

        <div className="w-[50%] h-[100%] flex flex-col gap-[20px] p-[40px] ">

          <h1 className='flex flex-col gap-2 text-[40px]'>

            <span> What is the water </span>
            <span> cooling system </span>
            <span className='text-[blue]' > AquaSytem? </span>

          </h1>

          <p className='text-[20px]' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste natus quam, possimus blanditiis dignissimos aperiam ex quidem rerum repudiandae nihil fugiat esse impedit commodi neque, ipsum asperiores praesentium quo aspernatur mollitia.
          </p>

          <div className=" w-[530px] h-[98px] bg-gray-500 rounded-2xl flex items-center"> <img src={odd} alt="" /> <p> Medification is relly good thing, but i do not what this is </p> </div>
          <div className=" w-[530px] h-[156px] bg-gray-500 rounded-2xl flex items-center"> <img src={odd} alt="" /> <p> I should write this thats why i write what i know i dont know however i should write because words is really important exactly in english </p> </div>


        </div>
        <div className="w-[50%]"> <img src={motor2} alt="" /> </div>

      </div>

      <div className="flex justify-center items-center mt-[30px]">
         <h1 className='flex flex-col gap-[1px] text-[40px] font-bold' >
          <span className='text-[blue]' > What makes it different </span>
          <span> from fabric cooling? </span>
        </h1> 
      </div>

      <div className=" w-[100%] h-[450px] rounded-2xl flex bg-radial to-gray-400 mt-[20px]  ">

        <div className=" flex flex-col gap-[30px] w-[33%] h-[100%]  pl-[40px] ">

           <h1 className=' flex flex-col text-[24px] items-center mt-[20px] ' >

           <span className='text-white' > Water cooling system </span>
           <span className='text-[blue]'>Anminer Hydro</span>

          </h1> 
          <img className='w-[344px] h-[340px]' src={motor3} alt="" />


        </div>



        <div className=" w-[33%] h-[100%]  flex justify-center items-center ">

          <div className=" w-[420px] h-[300px] flex flex-col gap-2.5 items-center ">
            <div className=" h-[40px] flex gap-2">
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p className='text-[blue]' > 130Th </p>
              </div>
              <div className=" w-[185px] rounded-xl bg-[blue] text-white flex justify-center items-center ">
                <p>Overclocing</p>
              </div>
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p > 110Th </p>
              </div>
            </div>
            <div className=" h-[40px] flex gap-2">
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p className='text-[blue]' > 130Th </p>
              </div>
              <div className=" w-[185px] rounded-xl bg-[blue] text-white flex justify-center items-center ">
                <p>Overclocing</p>
              </div>
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p > 110Th </p>
              </div>
            </div>
            <div className=" h-[40px] flex gap-2">
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p className='text-[blue]' > 130Th </p>
              </div>
              <div className=" w-[185px] rounded-xl bg-[blue] text-white flex justify-center items-center ">
                <p>Overclocing</p>
              </div>
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p > 110Th </p>
              </div>
            </div>
            <div className=" h-[40px] flex gap-2">
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p className='text-[blue]' > 130Th </p>
              </div>
              <div className=" w-[185px] rounded-xl bg-[blue] text-white flex justify-center items-center ">
                <p>Overclocing</p>
              </div>
              <div className=" w-[110px] bg-white rounded-xl flex justify-center items-center ">
                <p > 110Th </p>
              </div>
            </div>

            <button className='btn btn-info bg-blue-700 text-white w-[223px] h-[50px] rounded-xl mt-[40px] ' > Book </button>

          </div>

        </div>



        <div className=" flex flex-col items-center gap-[30px] w-[33%] h-[100%]  ">

           <h1 className=' flex flex-col text-[24px] items-center mt-[30px] ' >

           <span> Water cooling system </span>
           <span className='text-[blue]'>Anminer Hydro</span>

          </h1> 
          <img className='w-[282px] h-[400px] mt-[-44px] ' src={motor4} alt="" />


        </div>

      </div>

      </div> 

      <div className="flex w-[100%] h-[550px] bg-gradient-to-br from-gray-500 rounded-2xl mt-[100px] ">

        <div className="w-[50%] h-[100%] flex flex-col gap-[30px] p-[50px] ">
          <span className='flex gap-[10px]' >
            <button className=' btn btn-info rounded-2xl w-[193px] h-[61px] flex justify-center items-center hover:scale-110 ' > Full complect </button>
            <button className=' btn border-b-slate-600 rounded-2xl w-[193px] h-[61px]  flex justify-center items-center ' > Chala complect </button>
          </span>
          <h1 className=' flex flex-col text-[40px]  ' >
            <span> Full complect for </span>
            <span> Bitmain Antminer </span>
          </h1>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, consequuntur quo nostrum maxime consequatur itaque voluptatibus aperiam tenetur hic delectus veritatis cum porro? Eius porro quisquam quo! </p>
          <div className="flex w-[100%] ">
            <div className="flex flex-col  w-[100%] "> 
              <span className='flex flex-col gap-[10px]' >
                <p className=' text-[blue] font-bold ' >In the complect</p>
                <p> <span className='text-[blue]' >01.</span> Radiator </p>
                <p> <span className='text-[blue]' >02.</span> Pompa </p>
                <p> <span className='text-[blue]' >03.</span> Patrupka </p>
                
              </span>
            </div>
            <div className="flex flex-col gap-[10px] justify-center w-[100%]">
                <p> <span className='text-[blue]' >04.</span> Akva blok on 3plat  </p>
                <p> <span className='text-[blue]' >05.</span> Modification something </p>

            </div>
          </div>
        </div>

        <div className=" w[50%] h-[100%] p-2 pb-2.5 ">
          <img className='w-[640px] h-[535px]  mb-2.5  ' src={motors} alt="" />
        </div>

      </div>

      <div className="w-[100%] h-[100px] flex flex-col items-center justify-center text-[40px] font-bold mt-[40px] ">
        <span>Where used system</span>
        <span className=' text-[blue] ' >AquaSystem Hydro?</span>
      </div>

      <div className="flex justify-center gap-[50px] mt-[40px] w-[100%] h-[450px] ">

        <div className="flex flex-col gap-[30px] justify-center p-[40px] bg-gradient-to-bl from-gray-200 to-gray-500 w-[420px] h-[100%] rounded-3xl ">
          <img  className='w-[50px] ' src={icon} alt="" />
          <h1 className=' text-[50px] ' > In flat </h1>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quasi necessitatibus qui maiores deleniti voluptates nulla corporis repudiandae accusamus. Amet libero quis fuga ea, suscipit deleniti at esse voluptatem harum sed cumque, dignissimos ipsa corporis nisi magni quae iste porro. </p>
        </div>
               
        <div className="flex flex-col gap-[30px] justify-center p-[40px] bg-gradient-to-b from-gray-200 to-gray-500 w-[420px] h-[100%] rounded-3xl ">
          <img  className='w-[50px] ' src={icon1} alt="" />
          <h1 className=' text-[50px] ' > In flat </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum labore aliquam atque eveniet fugiat deleniti natus voluptate dolor corrupti, veritatis, omnis sit, sunt nostrum soluta vitae. Corrupti deleniti quo ut eum reiciendis hic nesciunt, quia optio cum vitae mollitia. </p>
        </div>        
        <div className="flex flex-col gap-[30px] justify-center p-[40px]  bg-gradient-to-br from-gray-200 to-gray-500 w-[420px] h-[100%] rounded-3xl ">
          <img className='w-[50px] '  src={icon2} alt="" />
          <h1 className=' text-[50px] ' > In flat </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum labore aliquam atque eveniet fugiat deleniti natus voluptate dolor corrupti, veritatis, omnis sit, sunt nostrum soluta vitae. Corrupti deleniti quo ut eum reiciendis hic nesciunt, quia optio cum vitae mollitia. </p>
        </div>

      </div>


      <div className="flex w-[100%] rounded-3xl h-[450px] bg-gray-800 mt-[100px] ">

        <div className="flex flex-col gap-[20px] w-[50%] p-[50px] ">
          <h1 className=' flex flex-col text-[40px] text-white '>
            <span>Please something</span>
            <span>Something</span>
            <span>Something</span>
          </h1>
          <p className='text-white' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem et provident in ratione. Debitis illo incidunt sed nemo, accusantium veritatis excepturi laboriosam qui distinctio, ratione ex, placeat tenetur praesentium? Voluptatem! </p>
          <div className=" flex gap-[20px] ">
            <button className='btn btn-success  text-white '> <a href="https://t.me/Mahmudjon_Uktamov"></a> </button>
            <button className='btn bg-transparent text-white '> Book call </button>
          </div>
        </div>

        <div className=" w-[50%] flex justify-center  ">
          <img src={line} alt="" />
        </div>

      </div>
      



    </div>
  )
}

export default Hom
