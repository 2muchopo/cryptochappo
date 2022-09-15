import React from 'react'
import { Icon } from '@iconify/react';

const Footers = () => {
  return (
    <footer className=' px-5 sm:px-12 md:px-15  pt-5 pb-10 flex flex-col gap-5 lg:flex-row lg:justify-between'>
        <h2 className='text-center text-white'>© 2022 CRAPPO. All rights reserved.</h2>
        <div className=' flex justify-center gap-8'>
            <span className='text-xl text-[lightgray] cursor-pointer hover:text-blue-500'><Icon icon="fontisto:youtube-play" /></span>
            <span className='text-xl text-[lightgray] cursor-pointer hover:text-blue-500'><Icon icon="dashicons:whatsapp" /></span>
            <span className='text-xl text-[lightgray] cursor-pointer hover:text-blue-500'><Icon icon="ant-design:instagram-outlined" /></span>
            <span className='text-xl text-[lightgray] cursor-pointer hover:text-blue-500'><Icon icon="ci:twitter" /></span>
            <span className='text-xl text-[white] cursor-pointer hover:text-blue-500'><Icon icon="akar-icons:linkedin-box-fill" /></span>
        </div>
    </footer>
  )
}

export default Footers