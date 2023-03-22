import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdKeyboardArrowDown} from "react-icons/md";
function Transition() {
  return (
    <div className='md:w-[500px] w-[400px] lg:w-[380px] h-[340px] bg-white shadow-2xl rounded-lg'>
      <div className='p-9'>
        <div className='flex items-center justify-between'>
            <h1 className='flex items-center font-bold'>Transition <i><MdKeyboardArrowDown size={24}/></i> </h1>
            <i> <BsThreeDotsVertical color='blue'/></i>
        </div>
        <div>
           <div className='flex '>
            <h1 className='flex items-center font-bold'>Visa <i><MdKeyboardArrowDown size={24}/></i></h1>
            <div className='flex list-none gap-2 text-black/40 '>
            <li className=' hover:bg-blue-600 px-3 py-2  rounded-full duration-200'>Day</li>
            <li className=' hover:bg-blue-600 px-3 py-2  rounded-full duration-200 '>Weeks</li>
            <li className=' hover:bg-blue-600 px-3 py-2  rounded-full duration-200'>Months</li>
            <li className='hover:bg-blue-600 px-3 py-2 mr-4 rounded-full duration-200'>All</li>
            </div>
            </div> 
            <div className=''>
                <div className='flex gap-4'>
                <div class="circular-progress" data-inner-circle-color="lightgrey" data-percentage="80" data-progress-color="crimson" data-bg-color="black">
  <div class="inner-circle"></div>

  <p class="percentage text-[12px]">$1776</p>
 
</div>
<div>
    <h1 className='text-blue-500 font-bold'>53.4%</h1>
    <p className='text-black/40'>Spent from the total balance</p>
    <h1 className='text-blue-500 font-bold'>53.4%</h1>
    <p className='text-black/40'>Spent from the total balance</p>
</div>      
 </div>
            </div>

        <div className='flex gap-5 mt-2'>
          <div>
         <div className='flex items-center'>
          <div className='bg-red-400 w-[10px] h-[10px] mr-2 rounded-lg'></div>
           <p>Entertainment</p>
         </div>
         <div className='flex items-center'>
          <div className='bg-red-400 w-[10px] h-[10px] mr-2 rounded-lg'></div>
           <p>Entertainment</p>
         </div>
         <div className='flex items-center'>
          <div className='bg-red-400 w-[10px] h-[10px] mr-2 rounded-lg'></div>
           <p>Entertainment</p>
         </div>
         </div>
         <div>
         <div className='flex items-center'>
          <div className='bg-red-400 w-[10px] h-[10px] mr-2 rounded-lg'></div>
           <p>Entertainment</p>
         </div>
         <div className='flex items-center'>
          <div className='bg-red-400 w-[10px] h-[10px] mr-2 rounded-lg'></div>
           <p>Entertainment</p>
         </div>

         </div>
       
        </div>
            </div>

        </div>

      </div>
 
  )
}

export default Transition