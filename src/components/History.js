import React from 'react'
import { MdKeyboardArrowDown} from "react-icons/md";

function History() {
  return (
    <div className='bg-white lg:ml-[3rem] w-[425px] md:w-[500px] mt-4 p-5 rounded-lg shadow-xl'>

            <div className='flex justify-between my-3'>
                <h1 className='font-bold'>Transaction History</h1>
                <h1 className='text-blue-500 flex items-center'>Fed <MdKeyboardArrowDown size={24}/> </h1>
            </div>
            <div className='flex flex-col gap-5'>   
        <div className='flex gap-3 md:gap-10'>
            <div className='flex items-center '>
                <img className='w-[20px] mx-3 h-[20px] rounded-[150px]' src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                <h1>Pena</h1>
            </div>
            <div>Visa</div>
            <div>7:30:35</div>
            <div>$566.00</div>
            <div className='flex items-center '>
                <div  className='bg-green-600 rounded-lg w-[10px] mx-3 h-[10px]'></div>
                <h1>completed</h1>
            </div>

        </div>
        <div className='flex gap-3 md:gap-10 '>
            <div className='flex items-center '>
                <img className='w-[20px] mx-3 h-[20px] rounded-[150px]' src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                <h1>Pena</h1>
            </div>
            <div>Visa</div>
            <div>7:30:35</div>
            <div>$566.00</div>
            <div className='flex items-center '>
                <div  className='bg-yellow-600 rounded-lg w-[10px] mx-3 h-[10px]'></div>
                <h1>completed</h1>
            </div>

        </div>
        <div className='flex gap-3 md:gap-10'>
            <div className='flex items-center '>
                <img className='w-[20px] mx-3 h-[20px] rounded-[150px]' src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                <h1>Pena</h1>
            </div>
            <div>Visa</div>
            <div>7:30:35</div>
            <div>$566.00</div>
            <div className='flex items-center '>
                <div  className='bg-red-600 rounded-lg w-[10px] mx-3 h-[10px]'></div>
                <h1>completed</h1>
            </div>

        </div>
        <div className='flex gap-3 md:gap-10'>
            <div className='flex items-center '>
                <img className='w-[20px] mx-3 h-[20px] rounded-[150px]' src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                <h1>Pena</h1>
            </div>
            <div>Visa</div>
            <div>7:30:35</div>
            <div>$566.00</div>
            <div className='flex items-center '>
                <div  className='bg-green-600 rounded-lg w-[10px] mx-3 h-[10px]'></div>
                <h1>completed</h1>
            </div>

        </div>
     
       
        </div>
    </div>
  )
}

export default History