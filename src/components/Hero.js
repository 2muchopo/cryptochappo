import React from 'react'
import {Icon} from '@iconify/react';
import image from '../assets/hero-img.png'

const Hero = () => {
    return (
        <main className='px-5 sm:px-12 md:px-15 flex flex-col lg:flex-row lg:w-[90%] items-center '>

            <div className='h-max py-3 flex flex-col gap-7 '>

                <div className='bg-gray-500 w-3/4 lg:w-[300px] rounded-full px-3 py-1 flex justify-between items-center' data-aos='slide-down' data-aos-duration='200' data-aos-mirror='true'>
                    <span data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='false' className='bg-white px-4 py-1 rounded-full text-[11px]'>70% SAVE</span>
                    <span className='text-[12px] text-white'>for the best black friday deals</span>
                </div>

                <div className=' text-white' data-aos='slide-up' data-aos-duration='3000' data-aos-mirror='false'>
                    <h1 className='text-[32px] lg:w-2/3 lg:text-3xl font-bold'>Fastest & Secure Platform To Invest In Crypto</h1>
                    <p className='text-[10px] pt-1'>buy and sell cryptocurrencies by trusted 10M wallets, in over 100m transactions</p>
                </div>

                <div className='bg-blue-500 w-[160px] h-9 rounded-full flex justify-between px-3 py-3 items-center text-white' data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true'>
                    <h3>Try For FREE</h3>
                    <span className='text-2xl' data-aos='slide-right' data-aos-duration='3000'><Icon icon="bi:play-circle-fill"/></span>
                </div>

            </div>
            <div data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true'>
                <img src={image}
                    alt="Hero Image"/>
            </div>


        </main>
    )
}

export default Hero
