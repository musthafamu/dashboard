import React from 'react'
import {BsSearch,BsFillWalletFill} from "react-icons/bs";
import { IoIosNotifications,IoIosArrowForward } from "react-icons/io";

function Header() {
  return (
    <div className='flex lg:flex-row flex-col w-full justify-evenly mt-4  '>
        <div className='lg:mr-[12rem]'>
            <h4 className='text-3xl md:text-4xl'>welcome</h4>
            <h1 className='text-blue-600 text-4xl md:text-5xl'>Dashboard</h1>
        </div>
        <div className='  relative flex items-center '>
            <input className='shadow-lg rounded-lg h-[30px] md:w-[300px]' />
             <button className='absolute md:left-[250px] left-[150px]'><BsSearch/></button>
        <div  className='flex lg:ml-[150px] ml-10 md:ml-[150px] gap-5 items-center'>
            <div className='border-blue-500 border-2    px-2 py-2 rounded-[150px] md:rounded-[150px]'>
                <div className='flex items-center'>
                    <i className='text-blue-500 mr-2'><BsFillWalletFill /></i>
                    <p className=''>Wallet</p>
                </div>
            </div>
            <div className='border-blue-500 border-2 flex justify-center items-center h-[50px] w-[50px] rounded-[450px]'>
                <div className='relative  '>
                <i className='relative top-3'><IoIosNotifications size={24}/></i> 
                <div className='bg-red-700 relative  bottom-8 left-4 rounded-full flex justify-center'>
                  <p className='text-white'>2</p>
                </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header