import React, { useState } from 'react'
import CustomerListJson from '../../components/json/CustomerListJson'
import CustomDropdown from '../../components/ui/CustumerSelect'
import SocialMediaTable from '../../components/ui/table/SocialMediaTable'

const SocialMedia = () => {
    const [Data, setData] = useState(CustomerListJson())
    const options = ["Instagram", "Printrest", "Facebook", "Twitter", "LinkedIn"];
    let socialLink = [
        {
            name:'Instagram',
            link:'https://www.Instagram.com/',
            status:true,
        },
        {
            name:'Printrest',
            link:'https://www.pinterest.com/login/',
            status:true,
        },
        {
            name:'Facebook',
            link:'https://www.facebook.com/',
            status:true,
        },
        {
            name:'LinkedIn',
            link:'https://www.linkedin.com',
            status:true,
        },
    ]

    const handleSelect = option => {
      console.log("Selected option:", option);
    };
  return (
    <div>
         <h1 className="text-2xl font-semibold pl-3">
        <i className="ri-wallet-3-line text-green-400 font-semibold"></i>{" "}
        Social Media
      </h1>
        <div className='flex flex-col p-3 shadow-md my-2 gap-3'>
      <div className=' flex flex-col md:flex-row gap-3 items-center'>
        <div className='w-full'>
          <p>Social Media Name</p>
        <CustomDropdown options={options} onSelect={handleSelect}/>
        </div>

        <div className="flex flex-col w-full  min-w-[300px] ">
            <label htmlFor="" className="">
            Social Media Link
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2 rounded-md "
              placeholder="Social Media Link"
              name="title"
            />
          </div>
      </div>
      
          <div className='flex justify-end items-center gap-1 w-full'>
            <button className='px-6 w-full sm:w-fit py-3 rounded-md bg-gray-200 '>Reset</button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-md bg-red-400  text-white'>Submit</button>
          </div>
        </div>

        <div className="overflow-x-auto"> 
        <SocialMediaTable data={socialLink}/>
      </div>

    </div>
  )
}

export default SocialMedia