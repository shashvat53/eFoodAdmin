import React from 'react'
import SystemAddon from '../../components/ui/SystemAddon'

const BulkImport = () => {
  return (
    <div
      className="py-4 px-4 sm:px-6 lg:px-8
            "
    >
      <div className="flex flex-wrap gap-2 items-center ">
        <h2 className="text-xl mb-0 flex items-center gap-1">
          <img
            width="20"
            className="avatar-img"
            src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/bulk_import.png"
            alt=""
          />
          <span className="page-header-title font-semibold">Bulk Import</span>
        </h2>
        {/* <span className="inline-block py-1 px-2 text-sm font-semibold text-white bg-gray-500 rounded-full shadow-md">
          6
        </span> */}
      </div>
      <div className='border rounded-md p-3 flex flex-col gap-2 my-3'>
        <h1 className='text-lg font-semibold'>Instructions :</h1>
        <ol className='pl-4 text-gray-600'>
            <li>1. Download the format file and fill it with proper data.</li>
            <li>2. You can download the example file to understand how the data must be filled.</li>
            <li>3. Once you have downloaded and filled the format file, upload it in the form below and submit.</li>
            <li>4. After uploading products you need to edit them and set product s images and choices.</li>
            <li>5. You can get category and sub-category id from their list, please input the right ids.</li>
        </ol>
      </div>
      <div className='border shadow-md rounded-md p-3'>
        <h1 className='text-lg font-semibold text-center '>Do not have the template? <a href='https://efood-admin.6amtech.com/public/assets/product_bulk_format.xlsx' className='text-blue-500'>Download Here</a></h1>
        <SystemAddon/>
      </div>
      <div className=' w-full flex flex-wrap gap-3 items-end justify-end my-3'>
                <button className='px-5  md:px-6 sm:w-fit w-full lg:w-fit h-fit md:py-3 py-2 text-white bg-red-400 rounded-md'>Submit</button>
            </div>
    </div>
  )
}

export default BulkImport