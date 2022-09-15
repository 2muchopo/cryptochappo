import React from 'react'
import master from '../assets/mastercard.png'
import visa from '../assets/visa.png'
import bitcoin from '../assets/bitcoin.png'
import logo from '../assets/logoc.png'

const Footer = () => {
    return (
        <footer className='h-max pt-10 px-5 sm:px-12 md:px-15 py-5 lg:flex lg:flex-row justify-between'>
            <div className='p- pb-2 lg:p-0 flex justify-center items-center lg:items-start'>
                <img className='h-10' src={logo} alt="Chappo Logo"/>
            </div>
            <div className='pt-20 lg:pt-0 '>
                <h2 className='text-xl text-white text-center lg:text-left pb-2'>Quick Links</h2>
                <ul className='flex flex-col items-center lg:items-start '>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>Home</li>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>Products</li>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>About</li>
                    <li className='cursor-pointer py-2 w-max text-white  hover:text-blue-700'>Features</li>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>Contact</li>
                </ul>
            </div>
            <div className='pt-20 lg:pt-0'>
                <h2 className='text-xl text-white text-center lg:text-left pb-2'>Resource Links</h2>
                <ul className='flex flex-col items-center lg:items-start '>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>Download Whitepaper</li>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>Smart Token</li>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>Blockchain Explore</li>
                    <li className='cursor-pointer py-2 w-max text-white  hover:text-blue-700'>Crypto API</li>
                    <li className='cursor-pointer py-2 w-max text-white hover:text-blue-700'>Interest</li>
                </ul>
            </div>
            <div className='pt-8 lg:pt-0'>
                <h2 className='text-md text-white text-center lg:text-left pb-8'>We accept following payment systems</h2>
                <ul className='flex items-center justify-center gap-5 '>
                    <li><img src={visa}
                            alt="visa logo"
                            className='w-20 lg:w-24'/></li>
                    <li><img src={master}
                            alt="mastercard logo"
                            className='w-20 lg:w-24'/></li>
                    <li>
                        <img src={bitcoin}
                            alt="bitcoin logo"
                            className='w-20 lg:w-24'/></li>
                </ul>
            </div>


        </footer>
    )
}

export default Footer
