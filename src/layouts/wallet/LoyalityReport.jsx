import React from "react";
import CustomDropdown from "../../components/ui/CustumerSelect";
import TransactionTable from "../../components/ui/table/TransactionTable";
import TransactionJson from "../../components/json/TransactionJson";

const LoyalityReport = () => {
  return (
    <div className="overflow-x-hidden">
      <h1 className="text-2xl font-semibold pl-3 flex gap-2 items-center">
        <i className="ri-wallet-3-line text-red-400 font-semibold"></i>  
        Customer Loyalty Report
      </h1>
      <div className="my-3 flex flex-col gap-3">
        <p className="p-3 border-[1px] rounded-t-sm">Filter Options</p>
        <div>
        <div className='  sm:p-5 p-3 rounded-md shadow-md flex flex-col gap-5 justify-between'>
        <h5 className='text-base font-semibold sm:text-lg'>Select date range</h5>
        <div className=' grid grid-flow-row grid-cols-1 sm:grid-cols-2 w-full f gap-5 justify-between'>
            
            <div className='  w-full flex flex-col gap-2'>
                <h6>Start Date</h6>
                <input type='date' placeholder='DD-MM-Yy' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>
            </div>
            <div className='  w-full flex flex-col gap-2'>
                <h6>End Date</h6>
                <input type='date' placeholder='DD-MM-Yy' name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'/>

            </div>
            <div className=' w-full flex flex-col gap-2'>
                <h6>Select Branch</h6>
                <select name="" id="" className='px-3 py-2 rounded-md border-2 border-[#ddd] bg-white w-full'>
                    <option value="All" >All</option>
                    <option value="Add fund by admin" >Add fund by admin</option>
                    <option value="Referral order placed" >Referral order placed</option>
                    <option value="Loyalty point wallet" >Loyalty point wallet</option>
                    <option value="Order Place" >Order Place</option>
                </select>
            </div>
            <div>
                <p>Select Costumer</p>
            <CustomDropdown  />
            </div>
        </div>
            <div className=' w-full flex  gap-3 items-end justify-end'>
                <button className='px-6 py-3 w-full sm:w-fit bg-gray-200 rounded-md'>Clear</button>
                <button className='px-6 py-3 w-full sm:w-fit text-white bg-red-400 rounded-md'>Show Data</button>
            </div>
    </div>
        </div>
      </div>
      <div className="my-3 overflow-y-auto">
        <TransactionTable data={TransactionJson()}/>
      </div>
    </div>
  );
};

export default LoyalityReport;
