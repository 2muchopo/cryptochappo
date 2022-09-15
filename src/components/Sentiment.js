import React from 'react'
import logo from '../assets/first.png'

const Sentiment = () => {
  return (
    <section className='h-max pt-10 px-5 sm:px-12 md:px-15 py-5'>
        <h2 data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true' className='text-center  text-white font-medium text-xl lg:text-2xl lg:px-[250px] py-10'>Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice </h2>

    <div className=' flex flex-col lg:flex-row items-center lg:items-start lg:gap-10'>
        <div  className=' text-white h-64 flex flex-col justify-around lg:flex-1'>
            <h3 data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true' className='text-2xl leading-tight lg:text-[40px] lg:tracking-normal '>Invest Smart</h3>
            <p data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true' className='text-sm'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore tenetur, itaque perspiciatis quos asperiores. </p>

            <div data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true'>
            <button  className='w-[100px] cursor-pointer h-8 rounded-full bg-blue-700 px-2'>learn more</button>
            </div>
            </div>

        <div className='lg:flex-1' data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='true' >
            <img src={logo} alt="Chappo Logo" className='w-full lg:w-[90%]'/>
        </div>
    </div>

    </section>
  )
}

export default Sentiment