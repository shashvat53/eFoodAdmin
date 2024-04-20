import React, { useState } from 'react'
import LanguageSetUp from './LanguageSetUp'
import AppSetting from './AppSetting'
import FirebaseConfig from './FirebaseConfig'
import CleanDatabase from './CleanDatabase'

const SystemSetup = () => {
  const Page1 =()=>{
    return <LanguageSetUp/>
  }
  const Page2 =()=>{
    return <AppSetting/>
  }
  const Page3 =()=>{
    return <FirebaseConfig/>
  }
  const Page4 =()=>{
    return <CleanDatabase/>
  }
  const [currentPage, setCurrentPage] = useState(2);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
   };


  return (
    <div> 
      <div className='flex gap-2'>
        <i class="ri-coreos-line text-red-500 text-2xl"></i>
        <p className='text-2xl font-semibold'> System Setup</p>
      </div>
      <div className='w-full  mt-8 flex gap-4 md:gap-8 flex-wrap mb-4'>
        <p onClick={() => handlePageChange(1)} className={`cursor-pointer hidden ${ currentPage === 1 ? ' text-red-500 border-b-2 border-red-400 font-semibold py-4 ' : ' text-gray-900 font-semibold py-4 hover:text-red-500'}`}>language Setup</p>
        <p onClick={() => handlePageChange(2)} className={`cursor-pointer ${ currentPage === 2 ? ' text-red-500 border-b-2 border-red-400 font-semibold py-4 ' : ' text-gray-900 font-semibold py-4 hover:text-red-500'}`}>App Settings</p>
        <p onClick={() => handlePageChange(3)} className={`cursor-pointer ${ currentPage === 3 ? ' text-red-500 border-b-2 border-red-400 font-semibold py-4 ' : ' text-gray-900 font-semibold py-4 hover:text-red-500'}`}>Firebase Configuration</p>
        <p onClick={() => handlePageChange(4)} className={`cursor-pointer ${ currentPage === 4 ? ' text-red-500 border-b-2 border-red-400 font-semibold py-4 ' : ' text-gray-900 font-semibold py-4 hover:text-red-500'}`}>Clean Database</p>
      </div>
      <div className="content mb-8">
        {currentPage === 1 ? <Page1 /> : null}
        {currentPage === 2 ? <Page2 /> : null}
        {currentPage === 3 ? <Page3 /> : null}
        {currentPage === 4 ? <Page4 /> : null}
      </div>
    </div>
  )
}

export default SystemSetup