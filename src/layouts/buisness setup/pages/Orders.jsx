import React from 'react'

const Orders = () => {
  return (
    <div>
        <form action="">
            {/* Order Settings */}
        <h1 className="ml-5 font-bold mt-5">Order Settings</h1>
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Min Order Value ( $ ){" "}
              <span className="text-red-500"> </span>
            </label>
            <input
              type="text"
              defaultValue={1}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Food Preparation Time{" "}
              <span className="text-red-500"> 
( In Minute )</span>
            </label>
            <input
              type="number"
              defaultValue={10}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
            Schedule Order Slot Duration Minute{" "}
              <span className="text-red-500"> </span>
            </label>
            <input
              type="number"
              defaultValue={2}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
        </div>
        
        
        <div className="my-10  w-full flex items-center justify-center">
          <button className="px-10 border-none rounded py-3 bg-gray-300">
            Reset
          </button>
          <button className="px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white">
            Submit
          </button>
        </div>
        </form>
    </div>
  )
}

export default Orders