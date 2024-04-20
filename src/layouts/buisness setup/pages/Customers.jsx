import React from "react";
import ToggleSwitch from "../../../components/ui/ToggleSwitch";

const Customers = () => {
  return (
    <div>
      <form action="">
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <span className="w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3">
              <label htmlFor="Title">
                Customer Wallet <span className="text-red-500"> *</span>
              </label>
              <ToggleSwitch value={true} />
            </span>
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <span className="w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3">
              <label htmlFor="Title">
                Customer Loyalty Point <span className="text-red-500"> *</span>
              </label>
              <ToggleSwitch value={true} />
            </span>
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <span className="w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3">
              <label htmlFor="Title">
                Customer Referrer Earning{" "}
                <span className="text-red-500"> *</span>
              </label>
              <ToggleSwitch value={true} />
            </span>
          </div>
        </div>
        {/* Add Fund to Wallet */}
        <h1 className="ml-5 font-bold mt-5">Add Fund to Wallet</h1>
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <span className="w-full  py-2 mt-2 rounded-md border mb-4 flex justify-between px-3">
              <label htmlFor="Title">
                Add Fund to Wallet <span className="text-red-500"> *</span>
              </label>
              <ToggleSwitch value={true} />
            </span>
          </div>
        </div>
        {/* Customer Loyalty PointSettings */}
        <h1 className="ml-5 font-bold mt-5">Customer Loyalty PointSettings</h1>
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              1 USD Equal To How Much Loyalty Points?{" "}
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
              Percentage Of Loyalty Point On Order Amount{" "}
              <span className="text-red-500"> </span>
            </label>
            <input
              type="number"
              defaultValue={10}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              Minimum Loyalty Points To Transfer Into Wallet{" "}
              <span className="text-red-500"> </span>
            </label>
            <input
              type="number"
              defaultValue={2}
              className="w-full px-2 py-2 mt-2 rounded-md border mb-4 "
            />
          </div>
        </div>
        {/* Customer ReferrerSettings */}
        <h1 className="ml-5 font-bold mt-5">Customer ReferrerSettings</h1>
        <div className="w-full grid grid-flow-row md:grid-cols-3 sm:grid-cols-1 min-h-fit rounded-xl overflow-hidden border shadow-lg pb-4 pt-5 mb-5">
          <div className=" w-full h-1/2  md:h-full px-5 py-2">
            <label htmlFor="Title">
              One Referrer Equal To How Much (USD)
              <span className="text-red-500"> </span>
            </label>
            <input
              type="text"
              defaultValue={100}
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
  );
};

export default Customers;
