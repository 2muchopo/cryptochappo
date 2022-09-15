import React, {useState} from 'react'
import {Icon} from '@iconify/react';
import bitcoin from '../assets/bitcon.png'
import litecoin from '../assets/litecoin.png'
import ethereum from '../assets/ethereum.png'

const Coins = () => {

    const [change, setChange] = useState(true)
    const [changeTwo, setChangeTwo] = useState(false)
    const [changeThree, setChangeThree] = useState(false)

    return (
        <section className='px-5 sm:px-12 md:px-15 h-max bg-[lightgrey] relative w-full pt-[150px] pb-20'>

            <h2  className='flex justify-center items-center text-center h-40 text-2xl font-semibold'>Trade Securely And Market The High Growth CryptoCurrencies.</h2>
            <div className=' flex flex-col gap-10 lg:flex-row'>
                {
                change ? (
                    <div className=' h-[350px] bg-[#1B1464] flex flex-col justify-evenly items-center rounded-2xl cursor-pointer lg:px-3 lg:w-1/3 transition duration-500 ease-in-out '>
                        <img className='h-18 w-18'
                            src={bitcoin}
                            alt="Bitcoin Logo"/>
                        <h3 className='text-3xl font-bold text-white flex gap-1'>Bitcoin
                            <span className='text-gray-500 mt-[8px] flex text-sm'>BTC</span>
                        </h3>
                        <p className='text-center text-sm text-white'>Digital currency in which a record of transactions is maintained.</p>
                        <button className='flex gap-3 w-[160px] py-3 justify-center rounded-full text-white bg-blue-600 items-center'>Start mining
                            <span className='text-md text-white cursor-pointer'><Icon icon="ic:round-greater-than"/></span>
                        </button>
                    </div>

                ) : (
                    <div onClick={
                            () => {
                                setChange(true)
                                setChangeTwo(false)
                                setChangeThree(false)
                            }
                        }
                        className=' h-[350px] bg-white flex flex-col justify-evenly items-center rounded-2xl cursor-pointer lg:px-3 lg:w-1/3'>
                        <img className='h-18 w-18'
                            src={bitcoin}
                            alt="Bitcoin Logo"/>
                        <h3 className='text-3xl font-bold flex gap-1'>Bitcoin
                            <span className='text-gray-500 mt-[8px] flex text-sm'>BTC
                            </span>
                        </h3>
                        <p className='text-center text-sm'>Digital currency in which a record of transactions is maintained.</p>
                        <div className=' border-[lightgray] border-2 w-12 h-12 rounded-full cursor-pointer grid place-content-center'>
                            <span className='text-2xl text-blue-500'><Icon icon="ic:round-greater-than"/></span>

                        </div>
                    </div>
                )
            }


                {
                changeTwo ? (
                    <div className=' h-[350px] bg-[#1B1464] flex flex-col justify-evenly items-center rounded-2xl cursor-pointer px-5 lg:w-1/3 transition duration-500 ease-in-out' >
                        <img className='h-18 w-18'
                            src={ethereum}
                            alt="Ethereum Logo"/>
                        <h3 className='text-3xl font-bold text-white flex gap-1'>Ethereum
                            <span className='text-gray-500 mt-[8px] flex text-sm'>ETH</span>
                        </h3>
                        <p className='text-center text-sm text-white'>Blockchain technology to create and run decentralized digital applications.</p>
                        <button className='flex gap-3 w-[160px] py-3 justify-center rounded-full text-white bg-blue-600 items-center'>Start mining
                            <span className='text-md text-white cursor-pointer'><Icon icon="ic:round-greater-than"/></span>
                        </button>
                    </div>

                ) : (
                    <div onClick={
                            () => {
                                setChangeTwo(true)
                                setChange(false)
                                setChangeThree(false)
                            }
                        }
                        className=' h-[350px] bg-white flex flex-col justify-evenly items-center rounded-2xl cursor-pointer px-5 lg:w-1/3'>
                        <img className='h-18 w-18'
                            src={ethereum}
                            alt="Ethereum Logo"/>
                        <h3 className='text-3xl font-bold flex gap-1'>Ethereum
                            <span className='text-gray-500 mt-[8px] flex text-sm'>ETH
                            </span>
                        </h3>
                        <p className='text-center text-sm'>Blockchain technology to create and run decentralized digital applications.</p>
                        <div className=' border-[lightgray] border-2 w-12 h-12 rounded-full cursor-pointer grid place-content-center'>
                            <span className='text-2xl text-blue-500'><Icon icon="ic:round-greater-than"/></span>

                        </div>
                    </div>
                )
            }

                {
                changeThree ? (
                    <div onClick={
                            () => setChange(true)
                        }
                        className=' h-[350px] bg-[#1B1464] flex flex-col justify-evenly items-center rounded-2xl cursor-pointer px-5 lg:w-1/3 transition duration-500 ease-in-out'>
                        <img className='h-18 w-18'
                            src={litecoin}
                            alt="Litecoin Logo"/>
                        <h3 className='text-3xl font-bold text-white flex gap-1'>Litecoin
                            <span className='text-gray-500 mt-[8px] flex text-sm'>LTC</span>
                        </h3>
                        <p className='text-center text-sm text-white'>Cryptocurrency that enables instant payments to anyone in the world.</p>
                        <button className='flex gap-3 w-[160px] py-3 justify-center rounded-full text-white bg-blue-600 items-center'>Start mining
                            <span className='text-md text-white cursor-pointer'><Icon icon="ic:round-greater-than"/></span>
                        </button>
                    </div>

                ) : (
                    <div onClick={
                            () => {
                                setChangeThree(true)
                                setChange(false)
                                setChangeTwo(false)
                            }
                        }
                        className=' h-[350px] bg-white flex flex-col justify-evenly items-center rounded-2xl cursor-pointer px-5 lg:w-1/3'>
                        <img className='h-18 w-18'
                            src={litecoin}
                            alt="Litecoin Logo"/>
                        <h3 className='text-3xl font-bold flex gap-1'>Litecoin
                            <span className='text-gray-500 mt-[8px] flex text-sm'>LTC
                            </span>
                        </h3>
                        <p className='text-center text-sm'>Cryptocurrency that enables instant payments to anyone in the world.</p>
                        <div className=' border-[lightgray] border-2 w-12 h-12 rounded-full cursor-pointer grid place-content-center'>
                            <span className='text-2xl text-blue-500'><Icon icon="ic:round-greater-than"/></span>

                        </div>
                    </div>
                )
            } </div>


        </section>
    )
}

export default Coins
