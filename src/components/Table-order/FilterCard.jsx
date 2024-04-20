import React from 'react'

const FilterCard = () => {
  return (
    <div className='  sm:p-5 p-3 rounded-md shadow-md flex flex-col gap-5 justify-between'>
        <h5 className='text-base font-semibold sm:text-lg'>Select date range</h5>
        <div className=' flex w-full flex-wrap gap-5 justify-between'>
            <div className='lg:w-[24%] md:w-[30%] w-full flex flex-col gap-2'>
                <h6>Select Branch</h6>
                <select name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'>
                    <option value="" disabled={true}>Select option</option>
                    <option value="All Branch" >All Branch</option>
                    <option value="Main Branch" >Main Branch</option>
                </select>
            </div>
            <div className='lg:w-[24%] md:w-[30%]  w-full flex flex-col gap-2'>
                <h6>Start Date</h6>
                <input type='date' placeholder='DD-MM-Yy' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>
            </div>
            <div className='lg:w-[24%] md:w-[30%]  w-full flex flex-col gap-2'>
                <h6>End Date</h6>
                <input type='date' placeholder='DD-MM-Yy' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>

            </div>
            <div className=' w-full flex flex-wrap gap-3 items-end justify-end '>
                <button className='px-5 md:px-6 w-[48%] lg:w-fit h-fit md:py-3 py-2 bg-gray-200 rounded-md'>Clear</button>
                <button className='px-5 md:px-6 w-[48%] lg:w-fit h-fit md:py-3 py-2 text-white bg-red-400 rounded-md'>Show Data</button>
            </div>
        </div>
    </div>
  )
}

export default FilterCard