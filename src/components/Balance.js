import React from 'react'
import { RiVisaLine } from "react-icons/ri";
function Balance() {
  return (
    <div>

  
    <div className='p-4  text-white mt-3 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 shadow-blue-700 bg-blend-multiply rounded-lg shadow-2xl'>
        <div className='flex justify-between'>
            <div>
                <h1>Balance</h1>
                 <h1 className='font-bold'>$83,54798</h1>
                 <h1>4555 4885 4777 5556</h1>
            </div>
            <i>icon</i>
        </div>
        <div className='mt-3'>
            <h1>Valid Thru</h1>
            <div className='flex justify-between'>
                <p className='font-bold'>12/25</p>
                <i><RiVisaLine size={30}/></i>
            </div>
        </div>

        

    </div>
     <div className='bg-white p-4 mt-[13px] rounded-xl text-center '>
        <h1>Add Card <i className='text-2xl'>+</i></h1>

     </div>
    </div>
  )
}

export default Balance