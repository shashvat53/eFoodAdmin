import React, { useState } from 'react'
import SearchBox from '../../components/ui/SearchBox'
import TableListTableJson from '../../components/json/TableListTableJson'
import TableListTable from '../../components/ui/table/TableListTable'

const TableList = () => {
    const [tableData, setTableData] = useState(TableListTableJson())
  return (
    <div>
        <div className='  sm:p-5 p-3 rounded-md shadow-md flex flex-col gap-5 justify-between'>
        <h5 className='text-base font-semibold sm:text-lg'>Add New Table</h5>
        <div className=' flex w-full flex-wrap gap-5 justify-between'>
           
            <div className='lg:w-[24%] md:w-[30%]  w-full flex flex-col gap-2'>
                <h6>Table Number</h6>
                <input type='text' placeholder='Ex. 2' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>
            </div>
            <div className='lg:w-[24%] md:w-[30%]  w-full flex flex-col gap-2'>
                <h6>Table Capacity</h6>
                <input type='text' placeholder='Ex. 5' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>

            </div>
            <div className='lg:w-[24%] md:w-[30%] w-full flex flex-col gap-2'>
                <h6>Select Branch</h6>
                <select name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'>
                    <option value="" disabled={true}>Select option</option>
                    <option value="All Branch" >All Branch</option>
                    <option value="Main Branch" >Main Branch</option>
                </select>
            </div>
            <div className=' w-full flex flex-wrap gap-3 items-end justify-end '>
                <button className='px-5 md:px-6 w-[48%] lg:w-fit h-fit md:py-3 py-2 bg-gray-200 rounded-md'>Clear</button>
                <button className='px-5 md:px-6 w-[48%] lg:w-fit h-fit md:py-3 py-2 text-white bg-red-400 rounded-md'>Submit</button>
            </div>
        </div>
    </div>

    <div className='flex gap-2 justify-between items-center p-3 flex-wrap border   mt-5 rounded-md'>
        <p>Table List</p>
      <SearchBox/>
      
    </div>
    <div className='overflow-auto'>
        <TableListTable data={tableData}/>
      </div>
    </div>
  )
}

export default TableList