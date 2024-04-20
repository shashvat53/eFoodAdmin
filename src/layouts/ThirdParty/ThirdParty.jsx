import React, { useState } from 'react';
import Payment from './Payment';
import Mail from './Mail';
import Sms from './Sms';
import Recaptcha from './Recaptcha';
import SocialLogin from './SocialLogin';
import Chat from './Chat';
import FirebaseOTPVerification from './FirebaseOTPVerification';
import Map from './Map';

const ThirdPartyNav = () => {
    const Page1 = () => {
        return <Payment/>;
      };
      
      const Page2 = () => {
        return <Mail/>;
      };

      const Page3 = () => {
        return <Sms/>;
      };

      const Page4 = () => {
        return <Recaptcha/>;
      };

      const Page5 = ()=>{
        return <SocialLogin/>
      }

      const Page6 = ()=>{
        return <Chat/>
      }

      const Page7 = ()=>{
        return <FirebaseOTPVerification/>
      }
      
      const Page8 = ()=>{
        return <Map/>
      }

      const [currentPage, setCurrentPage] = useState(1);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

  return (
    <div className='p-5'>
      <div className='flex gap-2'>
        <img src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/third-party.png" alt="" />
        <h1 className='font-semibold text-2xl'>Third Party</h1>
      </div>
      <div className='flex gap-2 md:gap-4 sm:gap-2 lg:gap-5 flex-wrap font-semibold w-full leading-3'>
        <p onClick={() => handlePageChange(1)} className={`cursor-pointer ${ currentPage === 1 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>Payment Methods</p>
        <p onClick={() => handlePageChange(2)} className={`cursor-pointer ${ currentPage === 2 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>Mail Config</p>
        <p onClick={() => handlePageChange(3)} className={`cursor-pointer ${ currentPage === 3 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>SMS Config</p>
        <p onClick={() => handlePageChange(8)} className={`cursor-pointer ${ currentPage === 8 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>Google Map APIs</p>
        <p onClick={() => handlePageChange(4)} className={`cursor-pointer ${ currentPage === 4 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>Recaptcha</p>
        <p onClick={() => handlePageChange(5)} className={`cursor-pointer ${ currentPage === 5 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>Social Login</p>
        <p onClick={() => handlePageChange(6)} className={`cursor-pointer ${ currentPage === 6 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>Chat</p>
        <p onClick={() => handlePageChange(7)} className={`cursor-pointer ${ currentPage === 7 ? ' text-red-500 border-b-2 py-5 border-red-400' : ' text-gray-900 py-5'}`}>Firebase OTP verification</p>
      </div>
      <div className="content">
        {currentPage === 1 ? <Page1 /> : null}
        {currentPage === 2 ? <Page2 /> : null}
        {currentPage === 3 ? <Page3 /> : null}
        {currentPage === 4 ? <Page4 /> : null}
        {currentPage === 5 ? <Page5 /> : null}
        {currentPage === 6 ? <Page6 /> : null}
        {currentPage === 7 ? <Page7 /> : null}
        {currentPage === 8 ? <Page8 /> : null}
      </div>
    </div>
  );
};

export default ThirdPartyNav;
