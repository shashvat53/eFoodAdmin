import React from 'react'

const Footer = () => {
    return (
        <div className='px-6 md:flex items-center justify-between mb-5 '>
            <p className='text-gray-400 text-center mb-2'>e-Food @ 2023</p>
            <div className='flex items-center gap-10  mb-4'>
                <p className='text-gray-600 font-medium'>Business Setup <i className="text-black text-lg ri-settings-2-line"></i></p>
                <p className='text-gray-600 font-medium'>Profile <i className="text-black text-lg ri-user-fill"></i></p>
                <p className='text-gray-600 font-medium'>Home <i className="text-black text-lg ri-home-4-fill"></i></p>
                <p className='text-red-500 px-1 py-1 bg-red-100 text-sm hidden md:block rounded'>Software Version : 10.2</p>
            </div>
                <span className='text-red-500 px-1 py-1 bg-red-100 text-sm md:hidden ml-28 rounded'>Software Version : 10.2</span>
        </div>
    )
}

export default Footer