import React from 'react'
import ToggleSwitch from '../../components/ui/ToggleSwitch'
const AppSetting = () => {
    const arr = [
        {
            name:"Android",
        },
        {
            name:"IOS"
        }
    ]
  return (
    <div className='w-full'>
         <div className='w-full grid gap-8 grid-flow-row grid-cols-1 md:grid-cols-2 h-fit mt-8'>
            {arr.map((item, index)=>(
                <div key={index} className='w-full h-fit rounded-md border shadow-md'>
                <div className='py-4 border-b p-5'>
                        <p className='font-semibold text-center text-lg'>{item.name}</p>
                </div>
                <div className='p-5'>
                    <form action="">
                    <div className='py-4 flex justify-between'>
                        <p className='font-semibold'> Enable Download Link for Web Footer</p>
                        <ToggleSwitch/>
                    </div>
                        <div className='w-full mt-5'>
                                <input type="text" className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-5'>
                                <label htmlFor="API Key" className="block mb-2">Minimum Version For Force Update *</label>
                                <input type="text" placeholder='Ex: 40' className="border border-gray-300 rounded-md px-3 py-2 w-full outline-none" />
                        </div>
                        <div className='w-full mt-8 gap-5 flex items-center justify-end'>
                               <button className='px-6 py-2 bg-gray-300 text-black rounded font-semibold'>Reset</button>
                               <button className='px-6 py-2 bg-[#E35F4E] text-white rounded font-semibold'>Save</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            ))}
           
            </div>
    </div>
  )
}

export default AppSetting