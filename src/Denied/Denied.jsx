 import React from "react";

const Denied = () => {
  return (
    <div className="w-full min-w-[900px] m-auto px-1 lg:px-4 overflow-x-scroll">
      <table className="border border-grey-300 w-full mt-8">
        <thead>
          <tr>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              SL
            </th>

            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Delivery Date
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Customer Info
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Total Amount
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Payment Method
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Verification Status
            </th>
            <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100 whitespace-nowrap text-sm font-bold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-50">
            <td className="text-center text-sm">1</td>
            <td className="text-center text-sm">100106</td>
            <td className="text-center text-sm">
              07 Nov 2023 <br /> 07:01 PM
            </td>
            <td className="text-center text-sm">
              <span>Anika Tahosin</span> <br />
              +8************
            </td>
            <td className="text-center text-sm">353.00$</td>
            <td className="text-center text-sm">Bank Payment</td>
            <td className="text-center text-sm">
              <button className="text-sm text-center bg-red-200 text-red-900 rounded-lg p-2">
                Denied
              </button>
            </td>
            <td className="text-center text-sm">
              <button className=" py-3 px-8 text-sm whitespace-nowrap bg-red-500 rounded-lg m-2 text-white text-center">
                Verify Payment
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Denied;
