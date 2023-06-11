import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white text-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='#' />
                    <h2 className='text-2xl font-bold py-8 text-center'>Single User</h2>
                    <p className='text-4xl text-center font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User </p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className=' text-black bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent'src={Double} alt='#' />
                    <h2 className='text-2xl font-bold py-8 text-center'>Partnership</h2>
                    <p className='text-4xl text-center font-bold'>$199</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                        <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                        <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                    </div>
                    <button className=' text-[#00df9a] bg-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Triple} alt='#' />
                    <h2 className='text-2xl font-bold py-8 text-center'>Group Account</h2>
                    <p className='text-4xl text-center font-bold'>$299</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                        <p className='py-2 border-b mx-8'>10 Users Allowed </p>
                        <p className='py-2 border-b mx-8'>Send up to 1 TB</p>
                    </div>
                    <button className=' text-black bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards