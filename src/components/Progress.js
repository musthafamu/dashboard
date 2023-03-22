import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

function Progress() {
  return (
    <div className='mt-[100px] p-4 bg-white shadow-2xl rounded-lg'>
        <div>
            <div className='flex my-2 items-center justify-between'>
                <h1 className='font-bold' >Goals</h1>
                <h1 className='text-blue-600 flex items-center'>Add goal <p className='text-3xl text-blue-700 ml-2'>+</p></h1>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between my-2'>
                    <h1>Trip</h1>
                    <h1 className='flex items-center'><p className='text-blue-600'>$1152/</p>$2500 <i className='ml-2'><BsThreeDotsVertical color='blue'/></i></h1>
                </div>
            
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
  <div class="bg-blue-600 h-2.5 rounded-full w-[50%]" ></div>
</div>


            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between my-2'>
                    <h1>AirPods Max</h1>
                    <h1 className='flex items-center'><p className='text-blue-600'>$1152/</p>$2500 <i className='ml-2'><BsThreeDotsVertical color='blue'/></i></h1>
                </div>
            
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
  <div class="bg-blue-600 h-2.5 rounded-full w-[80%]" ></div>
</div>


            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between my-2'>
                    <h1>Car</h1>
                    <h1 className='flex items-center'><p className='text-blue-600'>$1152/</p>$2500 <i className='ml-2'><BsThreeDotsVertical color='blue'/></i></h1>
                </div>
            
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
  <div class="bg-blue-600 h-2.5 rounded-full w-[40%]" ></div>
</div>


            </div>
        </div>
    </div>
  )
}

export default Progress