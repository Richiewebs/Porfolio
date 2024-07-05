import React from 'react'
import hands from '../assets/hands.png'
import time from '../assets/time.png'
import colla from '../assets/colla.png'
const Tab = () => {
  return (
    <div className='w-full p-24 pt-10'>
    <div className='w-full rounded px-10 bg-tabcol flex place-content-between space-x-36'>
      <div className='flex p-5 space-x-10 '>
        <div className='relative w-16 p-3 rounded-md bg-btn2 flex'>
            <img src={hands} alt="" srcset="" className='bg-white rounded-full' />
        </div>
        <p className='text-btn2 text-lg pt-6 font-bold'>Innovative</p>
      </div>

      <div className='flex p-5 space-x-10 '>
        <div className='relative w-16 p-3 rounded-md bg-btn2 flex'>
            <img src={time} alt="" srcset="" className='bg-white rounded-full' />
        </div>
        <p className='text-btn2 text-lg pt-6 font-bold'>Time Conscious</p>
      </div>

      <div className='flex p-5 space-x-10 '>
        <div className='relative w-16 p-3 rounded-md bg-btn2 flex'>
            <img src={colla} alt="" srcset="" className='bg-white rounded-full' />
        </div>
        <p className='text-btn2 text-lg pt-6 font-bold'>Collaborative</p>
      </div>
    </div>
    </div>
  )
}

export default Tab
