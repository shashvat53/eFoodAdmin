import React from 'react'
import ToggleSwitch from '../../../components/ui/ToggleSwitch'
import CustomDropdown from '../../../components/ui/CustumerSelect'
import CountryNameJson from '../../../components/json/CountryNameJson'
import TimeZoneJson from '../../../components/json/TimeZoneJson'
import CurrencyJson from '../../../components/json/CurrencyJson'

const BusinessSettings = () => {

  const onSelect =(value)=>{
    console.log(value)
  }
  return (
    <>
    <div className='p-5 border-[1px]'>
        <div className='flex justify-between border-[1px] px-5 py-2 rounded-sm'>
            <p className='font-semibold text-red-400'>Maintenance</p>
            <ToggleSwitch />
        </div>
        <span className='text-xs text-gray-600'>*By turning on maintenance mode, all your app and customer side website will be off. Only admin panel and seller panel will be functional</span>
    </div>
    <div>
    <form action="">
      <h1 className='ml-5 font-bold mt-5'>Company Information</h1>
                    <div className='w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Company Name <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='First Name' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Email <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='Last Name' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
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
                            <p className='text-center'>Logo <span className='text-red-500'> *  ( Ratio 3:1 )</span> </p>
                            <label htmlFor="ProfileImage">
                                <div>
                                    <input type="file" id='ProfileImage' accept='image/*' className='hidden' />
                                    <img className='mt-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png" alt="" />
                                </div>
                            </label>

                        </div>
                        <div className=' w-full h-1/2  md:h-full p-5 flex flex-col items-center justify-center'>
                            <p className='text-center'>Fav Icon <span className='text-red-500'> *  ( Ratio 1:1 )</span> </p>
                            <label htmlFor="ProfileImage">
                                <div>
                                    <input type="file" id='ProfileImage' accept='image/*' className='hidden' />
                                    <img className='mt-5' src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img2.png" alt="" />
                                </div>
                            </label>

                            
                        </div>
                        
                        {/* </div> */}
                        
                       
                    </div>
      <h1 className='ml-5 font-bold mt-5'>Business Information</h1>

                    <div className='w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Country <span className='text-red-500'> *</span></label>
                            <CustomDropdown options={CountryNameJson()} onSelect={onSelect}/>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Time Zone <span className='text-red-500'> *</span></label>
                            <CustomDropdown options={TimeZoneJson()} onSelect={onSelect}/>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Currency <span className='text-red-500'> *</span></label>
                            <CustomDropdown options={CurrencyJson()} onSelect={onSelect}/>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Company Copyright Text <span className='text-red-500'> *</span></label>
                            <input type="text" placeholder='XYZ Company' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Pagination <span className='text-red-500'> *</span></label>
                            <input type="number" placeholder='1***' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        <div className=' w-full h-1/2  md:h-full px-5 py-2 flex flex-col'>
                            <label htmlFor="Title">Payment Options<span className='text-red-500'> *</span></label>
                            <select className='w-full px-2 py-2 mt-2 rounded-md border mb-4 focus:outline-red-400' name="" id="">
                                <option value="" >All</option>
                                <option value="" >COD</option>
                                <option value="" >Digital Payment</option>
                                <option value="" >Offline Payment</option>
                            </select>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Self Pickup <span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={true}/>
                      </span>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Delivery <span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={true}/>
                      </span>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Veg / Non Veg Option <span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={true}/>
                      </span>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Email Verification <span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={false}/>
                      </span>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Phone Verification ( OTP ) <span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={false}/>
                      </span>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Deliveryman Self Registration <span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={true}/>
                      </span>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Guest Checkout<span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={true}/>
                      </span>
                        </div >
                    <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                      <span  className='w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3'>

                            <label htmlFor="Title">Partial Payment<span className='text-red-500'> *</span></label>
                            <ToggleSwitch value={true}/>
                      </span>
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

export default BusinessSettings