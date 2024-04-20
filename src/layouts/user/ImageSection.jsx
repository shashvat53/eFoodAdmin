import React from 'react';
import image from '../../assets/login-bg.png'
import logo from '../../assets/logo.png'
const ImageSection = () => {
  return (
    <div className="relative w-[58vw] hidden overflow-hidden bg-white sm:block">
        <img className='w-full h-full object-cover -ml-20' src={image} alt="" />
        <div className='absolute top-[28%] md:left-[20%] sm:left-[8%] w-[400px] h-[350px]'>
        <img className='w-[280px]' src={logo} alt="" />
        <h1 className="text-[3.5rem] leading-[2.8rem] font-normal mt-6">Your</h1>
        <h1 className="text-[3.5rem]  leading-[2.8rem] font-normal mt-6">All Fresh Food</h1>
        <h1 className="text-[3.5rem] font-bold leading-[2.8rem] text-[#FF6767] mt-6">In One Place....</h1>
        </div>
    </div>
  );
};

export default ImageSection;
