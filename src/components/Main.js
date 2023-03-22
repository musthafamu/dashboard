import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoIosNotifications,IoIosArrowForward } from "react-icons/io";
import Transition from './transition';
import Graph from './Graph';
import History from './History';
import Profile from './Profile';
import Balance from './Balance';
import BarChart from './Bar';
import Progress from './Progress';

function Main() {
  return (
    <div className='flex gap-3 mt-4'>
    <div className='flex flex-col '>

   
    <div className='flex mt-4 lg:ml-[3rem] gap-3  md:flex-row flex-col'>
        <div className='flex bg-white shadow-2xl flex-col md:w-[180px] w-[400px] lg:w-[277px] p-4 rounded-2xl'>

            <div className='flex justify-between'>
                <h1 className='font-bold '>Balance</h1>
                <i className='text-sky-400 flex items-center'>Wallet <IoIosArrowForward size={23}/></i>
            </div>
            <div className='flex mt-2 justify-between'>
                <div >
                <h1 className='font-bold'>$14760.78</h1>
                <p>6 April 4pm</p>
                </div>
                <div className='w-[60px] '>
                <Sparklines data={[5, 10,8,8,7,8,9, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
          <SparklinesLine color='teal' />
        </Sparklines>
                </div>
               
            </div>
                <span className='border-b-[1px] border-gray-900 w-full p-2'></span>
                 <div className='flex justify-between'>
                    <i className='flex items-center'> <HiArrowTrendingUp color='blue' /> 43.12%</i>
                    <i>+$5566.25</i>
                 </div>
       
        </div>
        <div className='flex bg-white shadow-2xl flex-col  w-[400px] md:w-[177px] lg:w-[277px] p-4 rounded-2xl'>

            <div className='flex justify-between'>
                <h1 className=' font-bold'>Saved money</h1>
                <i className='text-sky-400 flex items-center'>Savings <IoIosArrowForward size={23}/></i>
            </div>
            <div className='flex mt-2 justify-between'>
                <div >
                <h1 className='font-bold'>$14760.78</h1>
                <p>6 April 4pm</p>
                </div>
                <div className='w-[60px] '>
                <Sparklines data={[5, 10,8,8,7,8,9, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
          <SparklinesLine color='teal' />
        </Sparklines>
                </div>
               
            </div>
                <span className='border-b-[1px] border-gray-900 w-full p-2'></span>
                 <div className='flex justify-between'>
                    <i className='flex items-center'> <HiArrowTrendingUp color='blue' /> 43.12%</i>
                    <i>+$5566.25</i>
                 </div>
       
        </div>
        <div className='flex bg-white shadow-2xl flex-col  w-[400px] md:w-[180px] lg:w-[277px] p-4 rounded-2xl'>

            <div className='flex justify-between'>
                <h1 className='font-bold '>Arrearages</h1>
                <i className='text-sky-400 flex items-center'>Loans <IoIosArrowForward size={23}/></i>
            </div>
            <div className='flex mt-2 justify-between'>
                <div >
                <h1 className='font-bold'>$14760.78</h1>
                <p>6 April 4pm</p>
                </div>
                <div className='w-[60px] '>
                <Sparklines data={[5, 10,8,8,7,8,9, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
          <SparklinesLine color='teal' />
        </Sparklines>
                </div>
               
            </div>
                <span className='border-b-[1px] border-gray-900 w-full p-2'></span>
                 <div className='flex justify-between'>
                    <i className='flex items-center'> <HiArrowTrendingUp color='blue' /> 43.12%</i>
                    <i>+$5566.25</i>
                 </div>
       
        </div>
    </div>
    <div className='flex flex-col lg:flex-row lg:ml-[3rem] mt-4 gap-3 lg:gap-4 '>
       <Transition/>
       <Graph/>
       <div className='lg:hidden hidden md:flex flex-col absolute md:top-[350px] md:right-3'>
      <Profile/>
      <Balance/>

    </div>
    </div>
    <div className=' flex lg:flex-row flex-col items-center relative '>
   <History/>
   <BarChart/>

   <div className=' lg:hidden flex'>
      <Progress/>

      </div>
   
    </div>
    </div>
    <div className=' hidden lg:flex   md:flex-col'>
      <Profile/>
      <Balance/>
      <div className='hidden lg:flex'>
      <Progress/>

      </div>
      
    </div>
    </div>
  )
}

export default Main