import React from 'react'

const ReportFilterCard = () => {
  return (
    <div className='  sm:p-5 p-3 rounded-md shadow-md flex flex-col gap-5 justify-between'>
        <h5 className='text-base font-semibold sm:text-lg'>Select date range</h5>
        <div className=' w-full grid grid-cols-3 grid-flow-row gap-5 justify-between items-end'>
            
            <div className=' w-full flex flex-col gap-2'>
                <h6>Start Date</h6>
                <input type='date' placeholder='DD-MM-Yy' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>
            </div>
            <div className=' w-full flex flex-col gap-2'>
                <h6>End Date</h6>
                <input type='date' placeholder='DD-MM-Yy' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>

            </div>
                <button className='px-5 md:px-6 w-full  h-fit md:py-3 py-2 text-white bg-red-400 rounded-md'>Show Data</button>
        </div>
    </div>
  )
}

export default ReportFilterCard