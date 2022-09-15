import React from 'react'
import logo from '../assets/second (1).png'

const Profit = () => {
  return (
    <section className='h-max pt-10 px-5 sm:px-12 md:px-15 py-5'>
        
    <div className=' flex flex-col lg:flex-row items-center lg:items-center lg:gap-10'>
        <div className=' text-white h-60 flex flex-col justify-around lg:flex-1'>
            <h3 data-aos='fade-in' data-aos-duration='3000' data-aos-mirror='true' className='text-2xl leading-tight lg:tracking-normal '>Grow Your Profit And Track Your Investments</h3>
            <p data-aos='fade-in' data-aos-duration='3000' data-aos-mirror='true' className='text-sm'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore tenetur, itaque perspiciatis quos asperiores. </p>

            <button data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true' className='w-[100px] cursor-pointer h-8 rounded-full bg-blue-700 px-2'>learn more</button>
        </div>

        <div className='lg:flex-[1.3]' data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true' >
            <img src={logo} alt="Chappo Logo"/>
        </div>
    </div>

    </section>
  
  )
}

export default Profit