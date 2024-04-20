import React from 'react'
import Toggle from '../../components/layouts/Toggle'
const FirebaseOTPVerification = () => {
  return (
    <div className='w-full min-h-fit mt-5'>
     <form action="">
     <div className='w-full items-center rounded-md border shadow-md h-fit p-5 mb-40'>
                <div className='w-full h-fit grid grid-flow-row md:gap-16 gap-2 grid-cols-1 md:grid-cols-2 items-center'>
                    <div className='flex h-fit py-3 mt-9 px-5 items-center justify-between border rounded-md'>
                        <p className='font-bold'>Firebase OTP Verification Status <i class="ri-spam-2-line"></i></p>
                        <Toggle />
                    </div>
                    <div className='flex w-full  py-2 items-center justify-between'>
                    <div className='w-full'>
                                <label htmlFor="Web Api Key" className="block mb-2">Web Api Key</label>
                                <input type="text" id="Web-Api-Key" name="Web-Api-Key"  className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                    </div>
                </div>
                <div className='w-full h-full gap-5 flex items-center justify-end'>
                    <button className='px-8 rounded py-3 w-full md:w-fit  text-black font-semibold bg-gray-300 mt-5 '>Reset</button>
                    <button className='px-8 rounded py-3 w-full md:w-fit  text-white font-semibold bg-orange-700 mt-5 '>Save</button>
                </div>
      </div>
     </form>
    </div>
  )
}

export default FirebaseOTPVerification