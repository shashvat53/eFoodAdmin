import React from 'react'
import ToggleSwitch from '../../../components/ui/ToggleSwitch'
import CustomDropdown from '../../../components/ui/CustumerSelect'
import CountryNameJson from '../../../components/json/CountryNameJson'
import TimeZoneJson from '../../../components/json/TimeZoneJson'
import CurrencyJson from '../../../components/json/CurrencyJson'

const MainBranchSetup = () => {

  const onSelect =(value)=>{
    console.log(value)
  }
  return (
    <>
   
    <div>
    <form action="">
      <h1 className='ml-5 font-bold mt-5'>Branch Information</h1>
                    <div className='w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Branch Name <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='xyz Name' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Email <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='exmaple@mail.com' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >

                        {/* <div className=' w-full h-1/2  md:h-full px-5 py-2 flex flex-col'>
                            <label htmlFor="Title"> Identity Type <span className='text-red-500'> *</span></label>
                            <select className='w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400' name="" id="">
                                <option value="" >Passport</option>
                                <option value="" >Driving License</option>
                                <option value="" >Other Gov ID</option>
                            </select>
                        </div > */}
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Phone <span className='text-red-500'> *</span></label>
                            <input type="number" placeholder='987*****' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Address<span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='Address' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Password<span className='text-red-500'> *</span></label>
                            <input type="password" placeholder='*****' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        
                        {/* <div className=' w-full h-1/2  md:h-full px-5 py-2 flex flex-col'>
                            <label htmlFor="Title">Branch<span className='text-red-500'> *</span></label>
                            <select className='w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400' name="" id="">
                                <option value="" >Main Branch</option>
                                <option value="" >Branch 2</option>
                                <option value="" >Bhopal</option>
                                <option value="" >Delhi</option>
                            </select>
                        </div > */}

                        {/* <div className=' w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1'> */}
                        <div className=' w-full h-1/2  md:h-full px-5 py-2 flex flex-col items-center justify-center'>
                            <p className='text-center'>Branch Image <span className='text-red-500'> *  ( Ratio 3:1 )</span> </p>
                            <label htmlFor="ProfileImage">
                                <div>
                                    <input type="file" id='ProfileImage' accept='image/*' className='hidden' />
                                    <img className='mt-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png" alt="" />
                                </div>
                            </label>

                        </div>
                        
                        
                        {/* </div> */}
                        
                       
                    </div>
      <h1 className='ml-5 font-bold mt-5'>Store Location</h1>

                    <div className='w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
                    
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Latitude <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='Latitude' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Longitude <span className='text-red-500'> *</span></label>
                            <input type="number" placeholder='Longitude' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Coverage (Km) <span className='text-red-500'> *</span></label>
                            <input type="number" placeholder='Coverage (Km)' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        
                    
                    </div>
                    <div className='my-10  w-full flex items-center justify-center'>
                                <button className='px-10 border-none rounded py-3 bg-gray-300'>Reset</button>
                                <button className='px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white'>Submit</button>
                            </div>
                </form>
    </div>
    </>
  )
}

export default MainBranchSetup