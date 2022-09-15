import React from 'react'
import '../App.css'

const NewsLetter = () => {
  return (
    <div className='h-max pt-20 px-5 sm:px-12 md:px-15 py-5'>
    <div className= 'background h-64 lg:h-48 p-5 pr-0 rounded-l-2xl rounded-r-md flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col flex-1 justify-evenly lg:justify-center lg:gap-4 lg:-mt-6'>
        <h2 className='font-bold text-white text-xl'>Start Mining Now</h2>

        <div>
        <p className='text-white text-[11px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, provident.</p>
        <p className='text-white text-[11px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, provident.</p>
        
        </div>

        </div>

        <div className='flex flex-col lg:flex-row pr-5 lg:pr-10 justify-evenly lg:justify-between lg:items-center lg:gap-7 flex-1'>
        <input type="text" placeholder='enter message' className='border-b-[1px] border-white outline-0 text-md bg-transparent placeholder-white pb-1 lg:flex-[70%]' />

            
            <div className='text-center'>
            <button className='w-[100px]  bg-white h-[45px] rounded-2xl cursor-pointer'>Subscribe</button>
            </div>
        </div>
    
        </div>    
    </div>
  )
}

export default NewsLetter