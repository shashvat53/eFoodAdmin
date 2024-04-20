import React, { useState } from 'react';
import Toggle from '../../components/layouts/Toggle'

const Mail = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full min-hfit mt-5">
      <div
        className={`w-full max-w-full border shadow-md rounded-md p-5 overflow-hidden ${expanded ? 'h-auto' : 'h-20'} transition-height duration-500`}
        style={{ maxHeight: expanded ? 'none' : '20rem' }}
      >
        <div className="flex items-center justify-between mb-8">
          <button
            className="px-2 py-2 bg-gray-300 rounded flex items-center space-x-1"
            onClick={toggleHeight}
          >
            <i className="ri-mail-line"></i>
            <span>Test your email integration</span>
          </button>
          <i className="ri-send-plane-fill text-2xl"></i>
        </div>
        <div>
          <form action="" className='flex gap-20 w-full'>
            <input className='w-full px-5 py-2 outline-none border rounded-md' type="email" placeholder='Ex: jhon@gmail.com' />
            <button className='whitespace-nowrap bg-[#E35F4E] px-3 rounded-md text-white'> <i className="ri-send-plane-fill "></i> Send Mail</button>
          </form>
        </div>
      </div>
      <form >
          <div className='w-full min-h-fit py-5 p-5 mt-10 rounded-lg shadow-lg border mb-12'>
            <div className='border-b mb-4 pb-3 font-semibold flex gap-20'>
              <h1 className='text-xl'> Mail Configuration Status</h1>
              <Toggle/>
             </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">Mailer Name</label>
                  <input type="text" id="MailerName" name="MailerName" placeholder='Ex: Alex' className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Host</label>
                  <input type="text" id="Host" name="Host"  className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">Driver</label>
                  <input type="text" id="Driver" name="Driver"  className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Port</label>
                  <input type="text" id="Port" name="Port"  className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">Username</label>
                  <input type="text" id="Username" name="Username" placeholder='Ex: ex@yahoo.com' className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Email Id</label>
                  <input type="email" id="email" name="email" placeholder='Ex: ex@yahoo.com' className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">Encryption</label>
                  <input type="text" id="Encryption" name="Encryption" placeholder='Ex: tls' className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Password</label>
                  <input type="password" id="Password" name="Password"  className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                </div>
              </div>

            </div>
            <div className='flex items-end justify-end mt-5'>
            <button type="submit" className="bg-gray-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-600 ">Reset</button>
            <button type="submit" className="bg-orange-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-700 ml-5">Submit</button>
          </div>
        
          </div>
      </form>
    </div>

  );
};

export default Mail;
