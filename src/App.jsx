import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Hom from './Pages/Hom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import telegram_icon from './assets/telegram.svg'
import instagram_icon from './assets/instagram.svg'
import logo from './assets/logo.png'


const App = () => {
  return (
  <BrowserRouter>
    <div className='max-w-[1440px] m-auto mt-[100px] rounded-[20px] mb-[100px]'>
      <h1  className='text-[24px] font-extrabold flex items-center gap-3  '  >1-ish</h1>
      <div className=" w-[100%] h-[100px] bg-gradient-to-r from-gray-500 to-gray-300 flex justify-evenly items-center  rounded-tl-[20px] rounded-tr-[20px] ">
        <h1 className='text-[24px] font-extrabold flex items-center gap-3 ' > <img src={logo} alt="" /></h1>

        <ul className='flex justify-center items-center gap-[40px] text-[20px] font-bold' >
          <li> <Link to= "/" > Home</Link>   </li>
          <li> <Link to= "/about" > About</Link>   </li>
          <li> <Link to= "/contact" > Contact</Link>   </li>
        </ul>

        <div className=" flex justify-evenly items-center gap-[40px] ">
          <p>
          <span className='text-[10px]'>Director number: <br /> </span>  
          <a href="tel:+9985710515">+998775710515</a>
          </p>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-info w-[100px] h-[35px] hover:scale-95" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">welcome</h3>
    <p className="py-4"> to tell information </p>
    <div className="modal-action">
      <form className=' flex flex-col relative  ' method="dialog">
        {/* if there is a button in form, it will close the modal */}

        <input className=' w-[400px] ml-[40px] ' type="number" placeholder='product price' /> <br />

        <input className=' w-[400px] ml-[40px] ' type="text" placeholder=' product color' /> <br />

        <input  className=' w-[400px] ml-[40px] ' type="text" placeholder='product size' /> 

        <button className="btn w-[100px] ml-[400px] mt-2 position-[right]">Close</button>
      </form>
    </div>
  </div>
</dialog>

          <div className=" flex justify-around items-center bg-gray-400 w-[60px] h-[35px]  rounded ">
            <a target='blank' href="https://t.me"> <img src={telegram_icon} alt="" /> </a>
            <a target='blank' href="https://instagram.com"> <img src={instagram_icon} alt="" /> </a>
          </div>

          <div className="">
            <select className='w-[30px] h-[30px]' name="" id="">
             <i class='fi fi-ru'></i>
            </select>
          </div>


        </div>

      </div>
    <Routes>

      <Route path='/' element={<Hom />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />


      
    </Routes>
    </div>

  </BrowserRouter>
  )
}

export default App