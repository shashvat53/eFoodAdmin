import React from 'react'
import BranchListJson from '../../components/json/BranchListJson'
import BranchTable from '../../components/ui/table/BranchTable'

const BranchList = () => {
  return (
    <div>
        <div className='w-full h-[15vh]  overflow-hidden '>
                <div className='w-full h-full bg-white border rounded-t-xl flex items-center justify-between px-5'>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Branch List</p>
                        <span className='bg-gray-200 px-[8px] rounded-full font-bold'><small>6</small></span>
                    </div>
                    <div>
                        <input type="text" placeholder='Search by Title' className='px-4 border rounded ml-4  py-2 outline-none' />
                        <button className='px-8 border-none rounded ml-4  py-2 bg-[#E35F4E] text-white'>Search</button>
                    </div>
                </div>
            </div>
            <div className='overflow-y-auto '>
                <BranchTable data={BranchListJson()} />
            </div>
    </div>
  )
}

export default BranchList