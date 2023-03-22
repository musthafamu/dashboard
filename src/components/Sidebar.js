import React from 'react'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BiHomeAlt2 } from "react-icons/bi";
import { BsWallet2,BsClipboardCheck } from "react-icons/bs";
import { AiOutlineBarChart,AiOutlineDashboard,AiOutlineDownload,AiOutlineMail,AiFillSetting } from "react-icons/ai";
function Sidebar ({children}) {
  return (
    <div className='flex  '>
    <div className='absolute w-20   border-r-[1px] flex flex-col justify-between  rounded-[150px] p-4 bg-blue-700  '>
      <div className='flex flex-col items-center '>
       
       <img className=' rounded-full w-[40px]' src='https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?size=338&ext=jpg&ga=GA1.2.632691005.1664692622&semt=ais'/>
        {/* <span className='border-b-[1px] border-gray-200 w-full p-2'></span> */}
    
          <div className=' hover:bg-blue-300 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
      <BiHomeAlt2 size={30}/>
          </div>
       
       
          <div className='hover:bg-blue-300 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
           <AiOutlineBarChart  size={30}/>
          </div>
   
       
          <div className='hover:bg-blue-300 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
         <BsWallet2 size={30}/>
          </div>
      
       
          <div className='hover:bg-blue-300 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
      <BsClipboardCheck size={30}/>
          </div>
          <div className='hover:bg-blue-300 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
      <AiOutlineBarChart size={30}/>
          </div>
          <div className='hover:bg-blue-300 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
      <AiOutlineDownload size={30}/>
          </div>
          <div className='hover:bg-blue-300 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
  <AiOutlineMail size={30}/>
          </div>
          <div className='hover:bg-blue-300  text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
       <AiFillSetting size={30}/>
          </div>

         
        
      </div>
    </div>
    <main className='ml-20 w-full'>{children}</main>
  </div>
  )
}

export default  Sidebar