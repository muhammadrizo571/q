import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Hom from './Pages/Hom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import telegram_icon from './assets/telegram.svg'
import instagram_icon from './assets/instagram.svg'



const App = () => {
  return (
  <BrowserRouter>
    <div className='max-w-[1200px] border-2 border-t-green-300 m-auto mt-[100px] rounded-tl-[32px] rounded-tr-[32px]'>
      <div className=" w-[100%] h-[100px] bg-[red] flex justify-evenly items-center  rounded-tl-[32px] rounded-tr-[32px] ">
        <h1 className='text-[24px] font-extrabold' >1-ish </h1>

        <ul className='flex justify-center items-center gap-[30px] text-[20px] font-bold' >
          <li> <Link to= "/" > Home</Link>   </li>
          <li> <Link to= "/about" > About</Link>   </li>
          <li> <Link to= "/contact" > Contact</Link>   </li>
        </ul>

        <div className=" flex justify-evenly items-center gap-[30px] ">
          <p>
          <span className='text-[10px]'>Director number: <br /> </span>  
          <a href="tel:+9985710515">+998775710515</a>
          </p>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-info w-[100px] h-[35px] hover:scale-95" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
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