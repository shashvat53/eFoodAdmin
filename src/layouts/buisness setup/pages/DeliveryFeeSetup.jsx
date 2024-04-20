import React, { useState } from "react";

const DeliveryFeeSetup = () => {
    const [checkActiveFrom , setCheckActiveFrom ] = useState(true)
  return (
    <div>
      <form action="">
        <h1 className="ml-5 font-bold mt-5">Company Information</h1>
        <div className="flex flex-col md:flex-row gap-1">
          <div className=" w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
            <label htmlFor="Title">
              {" "}
              Delivery Charge By Distance{" "}
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="radio"
              id="condition"
              name="condition"
              onClick={()=>setCheckActiveFrom(true)}
              placeholder="First Name"
              checked={checkActiveFrom}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className='w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Minimum Delivery Charge <span className='text-red-500'> *</span></label>
                            <input disabled={!checkActiveFrom} type="number" placeholder='0123' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Delivery Charge / Kilometer <span className='text-red-500'> *</span></label>
                            <input disabled={!checkActiveFrom} type="number" placeholder='0123' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div > 
                    </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          <div className=" w-full h-1/2  md:h-full px-5 py-2 flex flex-col">
            <label htmlFor="Title">
              {" "}
              Default Delivery Charge{" "}
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="radio"
              id="condition"
              name="condition"
              checked={!checkActiveFrom}
              onClick={()=>setCheckActiveFrom(false)}
              placeholder="First Name"
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className='w-full grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5'>
                        <div className=' w-full h-1/2  md:h-full px-5 py-2'>
                            <label htmlFor="Title"> Delivery Charge <span className='text-red-500'> *</span></label>
                            <input disabled={checkActiveFrom} type="number" placeholder='0123' className='w-full px-2 py-2 mt-2 rounded-md border mb-4 ' />
                        </div >
                        
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
  );
};

export default DeliveryFeeSetup;
