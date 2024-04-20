import React, { useState } from "react";

function SelectDateRange() {
  const filterBranchOrders = (value) => {
    // Define your logic for filtering branch orders here
    console.log("Filtering branch orders with value:", value);
  };

  const formUrlChange = () => {
    // Define your logic for URL change based on form submission here
    console.log("Form URL changed");
  };

  return (
    <div className="  flex flex-col items-start justify-start my-5">
      <div className="w-full bg-white p-8 rounded-lg shadow-sm border">
        <h2 className="text-[15.74976px] font-semibold text-gray-900 mt-0 mb-4 ml-0">
          Select Date Range
        </h2>
        <form className="space-y-6" action="#" id="form-data" method="GET">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label
                htmlFor="select_branch"
                className="block text-sm font-medium text-gray-700"
              >
                Select Branch
              </label>
              <select
                id="select_branch"
                name="branch"
                className="mt-1 p-2 block w-full shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                onChange={(e) => filterBranchOrders(e.target.value)}
              >
                <option disabled="" selected="">
                  --- Select Branch ---
                </option>
                <option value="0">All Branch</option>
                <option value="1">Main Branch</option>
                <option value="2" selected="">
                  Branch 2
                </option>
                <option value="3">Farmgate</option>
                <option value="4">Dhaka</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="from_date"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                id="from_date"
                type="date"
                name="from"
                className="mt-1 p-2 block w-full shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="to_date"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                id="to_date"
                type="date"
                name="to"
                className="mt-1 p-2 block w-full shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
              />
            </div>
            <div className="mt-[26px]  ">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
              >
                Clear
              </button>
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => formUrlChange()}
              >
                Show Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectDateRange;
