import React from 'react'
import SearchBox from '../../components/ui/SearchBox'
import BonusTable from '../../components/ui/table/BonusTable'

const WalletBonusSetup = () => {
  return (
    <div> 
        <h1 className='text-2xl font-semibold pl-3 my-3'><i className="ri-wallet-line text-red-400 font-semibold"></i> Wallet Bonus Setup</h1>
        <form action="">
    <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
      <div className=" w-full h-1/2  md:h-full px-5 py-2">
        <label htmlFor="Title">
        Bonus Title <span className="text-red-500"> </span>
        </label>
        <input
          type="text"
          placeholder=""
          className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
        />
      </div>
      <div className=" w-full h-1/2  md:h-full px-5 py-2">
        <label htmlFor="Title">
        Short Description <span className="text-red-500"> </span>
        </label>
        <input
          type="text"
          placeholder=""
          className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
        />
      </div>
      <div className=" w-full h-1/2  md:h-full px-5 py-2">
        <label htmlFor="Title">
        Bonus Amount
<span className="text-red-500"> </span>
        </label>
        <input
          type="text"
          placeholder=""
          className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
        />
      </div>
      <div className=" w-full h-1/2  md:h-full px-5 py-2">
        <label htmlFor="Title">
        Minimum Add Money Amount  <span className="text-red-500"></span>
        </label>
        <input
          type="number"
          placeholder=""
          className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
        />
      </div>
      <div className=" w-full h-1/2  md:h-full px-5 py-2">
        <label htmlFor="Title">
        Maximum Bonus
<span className="text-red-500"> </span>
        </label>
        <input
          type="number"
          placeholder=""
          className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
        />
      </div>
      <div className=" w-full h-1/2  md:h-full px-5 py-2">
        <label htmlFor="Title">
        Start Date
<span className="text-red-500"> </span>
        </label>
        <input
          type="date"
          placeholder=""
          className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
        />
      </div>
      <div className=" w-full h-1/2  md:h-full px-5 py-2">
        <label htmlFor="Title">
        Expire Date
<span className="text-red-500"> </span>
        </label>
        <input
          type="date"
          placeholder=""
          className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
        />
      </div>
      
    </div>
    <div className="my-10  w-full flex items-center justify-end">
      <button className="px-10 border-none rounded py-3 bg-gray-300">
        Reset
      </button>
      <button className="px-10 border-none rounded ml-4  py-3 bg-[#E35F4E] text-white">
        Submit
      </button>
    </div>
  </form>
  <div className='flex justify-end items-end my-3 flex-col gap-3 shadow-md border py-5 px-3 rounded-md'>
    <SearchBox/>
    <div className='w-full overflow-x-auto'>
        <BonusTable/>
    </div>
  </div>
  </div>
  )
}

export default WalletBonusSetup