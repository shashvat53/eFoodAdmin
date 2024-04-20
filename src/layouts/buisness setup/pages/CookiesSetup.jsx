import React, { useState } from 'react'
import ToggleSwitch from '../../../components/ui/ToggleSwitch'

const CookiesSetup = () => {
    const [isActive, setIsActive] = useState(true)
    const onChange = (value)=>{
        setIsActive(value)
    }
  return (
    <div>
        <form action="">
            <div className='mt-5  px-5 py-2 border-[1px] rounded-t-md flex justify-between'>

        <h1 className=" font-bold ">Cookie Text</h1> <ToggleSwitch value={isActive} onChange={onChange} />
            </div>
        <div className='w-full  min-h-fit rounded-b-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
                        
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title">Allow Cookies for this site <span className='text-red-500'> *</span></label>
                            <textarea disabled={!isActive} type="text" placeholder='type here.....' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div > 
                    </div>
        </form>
    </div>
  )
}

export default CookiesSetup