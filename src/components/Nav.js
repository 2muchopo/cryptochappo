import React from 'react'
import {Icon} from '@iconify/react';
import logo from '../assets/logoc.png'


const Nav = ({openHamburger}) => {

    
    return (
        <div className='px-5 sm:px-12 md:px-15' data-aos='slide-down' data-aos-duration='500' >

            <div className='flex justify-between items-center h-20'>
                <img className='h-10' src={logo} alt="Chappo Logo"/>

                <ul className='hidden lg:flex justify-between items-center text-white w-1/2'>
                    <li className='cursor-pointer hover:border-b-2 hover:border-blue-500'>Products</li>
                    <li className=' cursor-pointer hover:border-b-2 hover:border-blue-500'>Features</li>
                    <li className='cursor-pointer hover:border-b-2 hover:border-blue-500'>About</li>
                    <li className='cursor-pointer hover:border-b-2 hover:border-blue-500'>Contact</li>
                    <li className='cursor-pointer '>Login</li>
                    <li><span className='w-1 border-l-[1px] border-[gray]' ></span></li>
                    <li className='cursor-pointer '>
                        <button className='bg-blue-700 w-[100px] h-[35px] rounded-full'>Register</button>
                    </li>
                </ul>

                <span onClick={openHamburger}
                    className='text-white text-4xl cursor-pointer lg:hidden'><Icon icon="charm:menu-hamburger"/></span>
            </div>

        
            
           </div>


    )
}

export default Nav
