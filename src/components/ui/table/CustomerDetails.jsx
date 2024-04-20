import React from 'react'

function CustomerDetails() {
  return (
    <div>
      <div className=' border-b gray-black'>
        <p className='text-xl m-2'><i class="fa-solid fa-users m-1 "></i> Customer Details</p>
      </div>
      <div className='flex flex-wrap justify-between '>
        <div>
        <p className='text-xl m-2'>Customer ID </p>
        <p className='text-sm text-gray-500 m-2'> <i className="fa-solid fa-calendar-days m-1"></i> Joined at : 07 Nov 2023 17:56:23</p>
        </div>
raect query

        <div className='flex flex-wrap'>
          <a href="#" class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 m-1 h-max   rounded inline-flex items-center">
            Point History
          </a>

          <a href="#" class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 m-1 h-max rounded inline-flex items-center">
          <i class="fa-solid fa-house m-1"></i> Dashboard
          </a>


        </div>
      </div>
      </div>
    
  )
}

export default CustomerDetails
