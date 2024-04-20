import React, { useState } from 'react'
import PushNotification from './PushNotification';
import FirebaseConfiguration from './FirebaseConfiguration';

const FirebaseNotification = () => {

    const Page1 = () => {
        return <PushNotification/>;
      };
      
      const Page2 = () => {
        return <FirebaseConfiguration/>;
      };

      const [currentPage, setCurrentPage] = useState(1);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

  return (
    <div>
        <p className='font-semibold text-2xl'><i class="ri-firebase-fill text-blue-500"></i> Firebase Push Notification Setup</p>
        <div className='w-full font-semibold h-fit flex gap-10 border  mt-5 shadow-sm rounded-t-md px-5'>
        <p onClick={() => handlePageChange(1)} className={`cursor-pointer ${ currentPage === 1 ? ' text-red-500 border-b-2 border-red-400 py-3' : ' text-gray-900 py-3 '}`}><i class="ri-notification-line"></i> Push Notification</p>
        <p onClick={() => handlePageChange(2)} className={`cursor-pointer ${ currentPage === 2 ? ' text-red-500 border-b-2 border-red-400 py-3' : ' text-gray-900 py-3'}`}><i class="ri-firebase-line"></i> Firebase Configuration</p>
        </div>
        <div>
        {currentPage === 1 ? <Page1 /> : null}
        {currentPage === 2 ? <Page2 /> : null}
        </div>
    </div>
  )
}

export default FirebaseNotification