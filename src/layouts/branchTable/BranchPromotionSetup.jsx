import React from 'react'
import SearchBox from '../../components/ui/SearchBox'
import BranchPromotionTable from '../../components/ui/table/BranchPromotionTable'
import BranchPromotionJson from '../../components/json/BranchPromotionJson'

const BranchPromotionSetup = () => {
  return (
    <div>
         <div className='  sm:p-5 p-3 rounded-md shadow-md flex flex-col gap-5 justify-between'>
        <h5 className='text-base font-semibold sm:text-lg'>Add New Table</h5>
        <div className='  w-full gap-5 grid grid-flow-row md:grid-cols-2 grid-cols-1 sm:grid-cols-1'>
           
           
            <div className=' w-full flex flex-col gap-2'>
                <h6>Select Branch</h6>
                <select name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'>
                    <option value="" disabled={true}>Select option</option>
                    <option value="All Branch" >All Branch</option>
                    <option value="Main Branch" >Main Branch</option>
                </select>
            </div>
            <div className=' w-full flex flex-col gap-2'>
                <h6>Select Banner Type</h6>
                <select name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'>
                    <option value="" disabled={true}>Select Banner</option>
                    <option value="All Branch" >Banner 1</option>
                    <option value="Main Branch" >Banner 2</option>
                </select>
            </div>
           
        </div>
        <div className=' w-full flex flex-wrap gap-3 items-end justify-end col-span-2'>
                <button className='px-5 md:px-6 w-[48%] lg:w-fit h-fit md:py-3 py-2 bg-gray-200 rounded-md'>Clear</button>
                <button className='px-5 md:px-6 w-[48%] lg:w-fit h-fit md:py-3 py-2 text-white bg-red-400 rounded-md'>Submit</button>
            </div>
    </div>

    <div className='flex gap-2 justify-between items-center p-3 flex-wrap border   mt-5 rounded-md'>
        <p>Promotion Table</p>
      <SearchBox/>
      
    </div>
    <div className='overflow-hidden'>
        <BranchPromotionTable data={BranchPromotionJson()}/>
    </div>
    </div>
  )
}

export default BranchPromotionSetup