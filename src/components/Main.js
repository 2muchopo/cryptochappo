import React from 'react'
import logo from '../assets/why-img.png'

const Main = () => {
  return (
    <main className='px-5 sm:px-12 md:px-15 py-5 pt-3 flex flex-col lg:flex-row-reverse items-center'>
        <div className=' text-white h-64 flex flex-col justify-around lg:flex-1'
        data-aos='fade-up' data-aos-duration='3000' data-aos-mirror='true'>
            <h3 className='text-[34px] leading-tight lg:text-[40px] lg:tracking-normal '>why you should choose CHAPPO</h3>
            <p className='text-sm'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam veniam accusantium dolorum cumque laborum! Adipisci eos aliquam iste voluptatem? Nisi? </p>

            <button className='w-[100px] cursor-pointer h-8 rounded-full bg-blue-700 px-2'>learn more</button>
        </div>

        <div className='lg:flex-1' 
        data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true' >
            <img src={logo} alt="Chappo Logo" />
        </div>
    </main>
  )
}

export default Main