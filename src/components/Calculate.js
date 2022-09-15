import React from 'react'

const Calculate = () => {
    return (
        <section className='px-5 sm:px-12 md:px-15 pt-12 relative h-[440px] lg:flex lg:flex-col items-center'>
            <h2 className='text-white text-center text-xl font-bold' data-aos='fade-up' data-aos-duration='3000' data-aos-mirror='false'>How Much Can You Earn With Us</h2>
            <br/>
            <p className='text-white text-[12px] text-center' data-aos='fade-up' data-aos-duration='3000' data-aos-mirror='false'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio ab perferendis nisi mollitia qui!
            </p>
            <br/>

            <div className='bg-white rounded-md flex flex-col justify-around p-5 lg:p-10 h-[400px] lg:h-[350px] w-[93.5%] lg:w-[70%]  absolute top-[180px] z-10' data-aos='zoom-in' data-aos-duration='3000' data-aos-mirror='false'>


                <div className='flex flex-col justify-around h-[210px] lg:h-max lg:flex-row lg:justify-between lg:gap-7'>
                    <input type="text" placeholder='Enter your hash rate' className='border-b-[1px] border-gray-800 outline-0 text-xl w-full lg:w-1/2'/>

                    <select name="Exchange" id="exchange" className='outline-0 cursor-pointer border-b-[1px] border-gray-800 lg:flex-1'>
                        <option value="TH/s">TH/s</option>
                        <option value="H/s">H/s</option>
                        <option value="MH/s">MH/s</option>
                        <option value="GH/s">GH/s</option>
                        <option value="KH/s">KH/s</option>
                    </select>

                    <button className='w-[120px] hover:bg-opacity-90 lg:flex-[.6] cursor-pointer h-10  text-white rounded-full bg-blue-700 px-2 lg:px-0'>Calculate</button>


                </div>

                <h3 className='text-blue-700 font-semibold'>ESTIMATED 24 HOUR REVENUE:</h3>

                <h3 className='font-bold text-2xl '>0.055 130 59 ETH
                    <span className='text-blue-700'>($1275)</span>
                </h3>

                <p className='text-sm text-[gray]'>Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
        </section>
    )
}

export default Calculate
