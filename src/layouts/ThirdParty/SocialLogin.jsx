import React from 'react'
import Toggle from '../../components/layouts/Toggle'
// import Footer from '../components/layouts/Footer'

const SocialLogin = () => {
  return (
    <div className='w-full min-h-fit mt-5 '>
      <div className='w-full grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-10 h-fit '>
        <div className='w-full h-full flex justify-between border p-5 rounded-md shadow-md overflow-hidden'>
          <div className='flex gap-5 items-center '>
           <div className='w-12 shadow-md rounded-full'>
           <img className='w-full h-full' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
           </div>
           <p className='font-semibold text-gray-500'>Google Login</p>
          </div>
          <Toggle/>
        </div>
         <div className='w-full h-full flex justify-between border p-5 rounded-md shadow-md overflow-hidden'>
          <div className='flex gap-5 items-center '>
           <div className='w-12 shadow-md rounded-full'>
           <img className='w-full h-full' src="https://static.vecteezy.com/system/resources/previews/023/986/613/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" alt="" />
           </div>
           <p className='font-semibold text-gray-500'>Facebook Login</p>
          </div>
          <Toggle/>
        </div>
        
      </div>
      <div className='w-full grid gap-8 grid-flow-row grid-cols-1 md:grid-cols-2 h-fit mt-8 mb-10'>
            <div className='w-full h-fit rounded-md border shadow-md'>
                <div className='py-4 border-b p-5 flex justify-between'>
                        <p className='font-semibold'><i class="ri-apple-fill"></i>  Apple Login</p>
                        <Toggle/>
                </div>
                <div className='p-5'>
                <div className='flex items-center justify-end mb-2'>
                  <p className='font-semibold text-gray-600'>Credential Setup <i class="ri-information-line"></i></p>
                </div>
                    <form action="">
                        <div className='w-full mt-5'>
                                <label htmlFor="ClientId" className="block mb-2">Client Id</label>
                                <input type="text" id="ClientId" name="ClientId" placeholder='ClientId' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="TeamId" className="block mb-2">Team Id</label>
                                <input type="text" id="TeamId" name="TeamId" placeholder='TeamId' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="KeyId" className="block mb-2">Key Id</label>
                                <input type="text" id="KeyId" name="KeyId" placeholder='Payment Gateway Title' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2"> Service File (Already Exists)</label>
                                <input type="file" id="identificationNumber" name="identificationNumber" placeholder='Payment Gateway Title' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-8 flex items-center justify-end'>
                               <button className='px-6 py-2 bg-[#E35F4E] text-white rounded font-semibold'>Save</button>
                        </div>
                        
                    </form>
                </div>
                </div>
               
      </div>
    </div>

  )
}

export default SocialLogin