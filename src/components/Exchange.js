import React from 'react'
import { Icon } from '@iconify/react';

const Exchange = () => {
  return (
    <section className='px-5 sm:px-12 md:px-15 py-12 flex flex-col lg:flex-row lg:justify-between' data-aos='fade-up' data-aos-duration='3000' data-aos-mirror='true'>
            <div className='flex items-center justify-center gap-5 py-3'>
                <div className='w-24 h-24 md:w-14 md:h-14 rounded-full bg-gray-400 grid place-content-center'>
                    <span className='text-blue-700 text-3xl'><Icon icon="lucide:bar-chart-2" /></span>
                </div>
                <div className='flex flex-col text-white'>
                    <span className='font-bold text-2xl'>$30B</span>
                    <span className='text-[12px] text-[lightgray]'>Digital Currency Exchange</span>
                </div>

            </div>

            <div className='flex items-center justify-center gap-5 py-3'>
                <div className='w-24 h-24 md:w-14 md:h-14 rounded-full bg-gray-400 grid place-content-center'>
                    <span className='text-blue-700 text-3xl'> <Icon icon="ant-design:lock-filled" /></span>
                </div>
                <div className='flex flex-col text-white'>
                    <span className='font-bold text-2xl'>190+</span>
                    <span className='text-[12px] text-[lightgray]'>Countries Around The World</span>
                </div>

            </div>

            <div className=' flex items-center justify-center gap-5 py-3'>
                <div className='w-24 h-24 md:w-14 md:h-14 rounded-full bg-gray-400 grid place-content-center'>
                    <span className='text-blue-700 text-3xl'><Icon icon="bi:person-fill" /></span>
                </div>
                <div className='flex flex-col text-white'>
                    <span className='font-bold text-2xl'>$10M</span>
                    <span className='text-[12px] text-[lightgray]'>Trusted Wallet Investors</span>
                </div>

            </div>
    </section>
  )
}

export default Exchange