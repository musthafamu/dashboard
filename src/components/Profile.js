import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";


function Profile() {
  return (
    <div className='w-[250px] mt-4 p-4 bg-white rounded-lg shadow-2xl'>

    <div className='flex flex-col items-center text-center '>
        <div className='flex  '>
    <img className='w-[100px] ml-2 h-[100px] rounded-[150px]' src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
    <i className='relative top-4 left-[2rem]'><BsThreeDotsVertical color='blue'/></i>

        </div>
    <h1>Emily Blunt</h1>
    <p className='text-black/40'>friday,6 april 2023</p>
    

</div>
    </div>
  )
}

export default Profile