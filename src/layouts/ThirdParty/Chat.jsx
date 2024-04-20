import React from 'react'
import Toggle from '../../components/layouts/Toggle'
const Chat = () => {
  return (
    <div className='w-full min-h-fit mt-5 '>
      <div className='w-1/2 h-fit mb-32 border rounded-md shadow-md p-5'>
        <div className='flex items-center justify-between'>
          <p>Whatsapp</p>
          <Toggle />
        </div>
        <form action="">
          <div className='w-full mt-5'>
            <label htmlFor="Number" className="block mb-2">Number <span className='text-red-500'>(Without Country Code)</span></label>
            <input type="text" id="Number" name="Number" placeholder='011xxxxxxx' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
          </div>
          <div className='w-full mt-8 flex items-center justify-end'>
            <button className='px-6 py-2 bg-[#E35F4E] text-white rounded font-semibold'>Save</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Chat