import React from 'react'
import {Icon} from '@iconify/react'
import '../App.css'


const Hamburger = ({closeHamburger}) => {

    return (
        <nav data-aos='slide-right' data-aos-duration='1000' data-aos-mirror='true' className='back w-full flex flex-col justify-center items-center gap-5 relative h-screen'>


            <ul>
                <li className='py-2 text-2xl text-white text-center cursor-pointer'>Products</li>
                <li className='py-2 text-2xl text-white text-center cursor-pointer'>Features</li>
                <li className='py-2 text-2xl text-white text-center cursor-pointer'>About</li>
                <li className='py-2 text-2xl text-white text-center cursor-pointer'>Contact</li>
            </ul>
            <div className='flex w-[200px] pt-6 ml-5 justify-center items-center gap-5'>
                <p className='text-white text-2xl cursor-pointer'>Login</p>
                <span className='border-l-2 border-white h-3'></span>
                <button className='bg-blue-700 w-[100px] h-[35px] text-xl text-white rounded-full px-3 pt-1'>Register</button>
            </div>
            <span onClick={closeHamburger} className='flex lg:hidden text-white cursor-pointer w-[46px] h-[46px] text-3xl items-center justify-center rounded-full  absolute top-5 right-5  '><Icon icon="ant-design:close-outlined"/></span>


        </nav>
    )
}

export default Hamburger
