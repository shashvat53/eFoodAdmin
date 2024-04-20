import React, { useState } from 'react'
import CustomerListJson from '../../components/json/CustomerListJson'
import CustomDropdown from '../../components/ui/CustumerSelect'

const AddFund = () => {
    const [Data, setData] = useState(CustomerListJson())
    const options = ["Ajay", "Ramu", "Lakhan", "Sunadr", "Mohan"];

    const handleSelect = option => {
      console.log("Selected option:", option);
    };
  return (
    <div>
         <h1 className="text-2xl font-semibold pl-3">
        <i className="ri-wallet-3-line text-green-400 font-semibold"></i>{" "}
        Add Fund
      </h1>
        <div className='flex flex-col p-3 shadow-md my-2 gap-3'>
      <div className=' flex flex-col md:flex-row gap-3 items-center'>
        <div className='w-full'>
          <p>Costumer</p>
        <CustomDropdown options={options} onSelect={handleSelect}/>
        </div>

        <div className="flex flex-col w-full  min-w-[300px] ">
            <label htmlFor="" className="">
              Add Amount
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2 rounded-md "
              placeholder="Amount"
              name="title"
            />
          </div>
      </div>
      <div className="flex flex-col w-full  min-w-[300px] ">
            <label htmlFor="" className="">
            Reference <span className='text-xs'>(Optional)</span>
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2 rounded-md "
              placeholder="Reference"
              name="title"
            />
          </div>
          <div className='flex justify-end items-center gap-1 w-full'>
            <button className='px-6 w-full sm:w-fit py-3 rounded-md bg-gray-200 '>Reset</button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-md bg-red-400  text-white'>Submit</button>
          </div>
        </div>

    </div>
  )
}

export default AddFund