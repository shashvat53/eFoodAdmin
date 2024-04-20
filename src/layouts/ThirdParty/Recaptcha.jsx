import React from 'react'
import { Link } from 'react-router-dom'
// import Footer from '../components/layouts/Footer'

const Recaptcha = () => {
  return (
    <div className='w-full min-h-fit mt-5'>
      <div className='w-full h-fit border rounded-md shadow-md p-5 mb-10'>
        <div className='w-full h-fit grid grid-flow-row md:grid-cols-2 grid-cols-1'>
          <div className='w-full h-full'>
            <p className='font-semibold text-xl'>Google Recapcha Information</p>
          </div>
          <div className='w-full h-full flex items-center md:justify-end'>
            <button className='px-4 rounded py-2 hover:text-white text-red-500 border border-red-500 hover:bg-[#FC6A57] transition-all duration-500 mt-5 '><i class="ri-information-line"></i> Credential Setup </button>
          </div>
        </div>
        <form action="">
          <div className='w-full mt-5'>
            <div className='flex'>
              <label htmlFor="active" className="mr-4 flex items-center">
                <input type="radio" id="active" name="status" value="active" className="mr-1 h-4 w-4" />
                Active
              </label>
              <label htmlFor="inactive" className='flex items-center'>
                <input type="radio" id="inactive" name="status" value="inactive" className="mr-1 h-4 w-4" />
                Inactive
              </label>
            </div>
          </div>
          <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-10'>
            <div className='w-full mt-5'>
              <label htmlFor="ClientId" className="block mb-2">Site Key</label>
              <input type="text" id="SiteKey" name="SiteKey" className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
            </div>
            <div className='w-full mt-5'>
              <label htmlFor="TeamId" className="block mb-2">Secret Key</label>
              <input type="text" id="SecretKey" name="SecretKey" className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
            </div>
          </div>
          <div className='mt-5'>
            <p className='font-semibold text-lg mb-2'>Instructions</p>
            <div className='ml-5 text-base leading-7'>
              <p>1. Go to the Credentials page <Link>(Click Here)</Link></p>
              <p>2. Add a <b>Label</b> (Ex: Test Label)</p>
              <p>3. Select reCAPTCHA v2 as <b>ReCAPTCHA Type</b> (Sub type: I m not a robot Checkbox )</p>
              <p>4. Add <b>Domain</b> (For ex: demo.6amtech.com)</p>
              <p>5. Check in <b>Accept the reCAPTCHA Terms of Service</b></p>
              <p>6. Press <b>Submit</b></p>
              <p>7. Copy <b>Site Key</b> And <b>Secret Key</b>, Paste in the input filed below and <b>Save</b>.</p>
            </div>
            <div className='w-full h-full gap-5 flex items-center justify-end'>
              <button className='px-8 rounded py-2 w-full md:w-fit  text-white font-semibold bg-[#FC6A57] mt-5 '>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Recaptcha