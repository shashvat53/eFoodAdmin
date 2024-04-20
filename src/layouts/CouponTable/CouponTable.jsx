import React from "react";
import On_Off from "../On_Off/On_Off";

const CouponTable = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="md:flex justify-between items-center px-8 ">
        <h1>Coupon Table</h1>
        <div className="inline-flex border mt-4 ml-2 rounded md:ml-20">
          <input
            className="text-lg border-0 min-w-[50%] rounded-s-lg outline-none px-2"
            type="text"
            placeholder="Search by Title"
          />

          <p className=" py-2 px-4 text-lg bg-orange-600  rounded-r-lg border-0 text-white">
            Search
          </p>
        </div>
      </div>
      <div></div>
      <div className="w-full m-auto px-1 lg:px-4 overflow-x-auto my-8">
        <table className="border border-grey-300 w-full min-w-[930px]">
          <thead>
            <tr>
              <th className="px-4 text-center py-3 border-b-2 border-gray-200 bg-gray-100  text-xl font-medium text-gray-600  tracking-wider">
                SL
              </th>
              <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100  text-xl font-medium text-gray-600  tracking-wider">
                Coupon
              </th>
              <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100  text-xl font-medium text-gray-600  tracking-wider">
                Amount
              </th>
              <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100  text-xl font-medium text-gray-600  tracking-wider">
                Coupon Type
              </th>
              <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100  text-xl font-medium text-gray-600  tracking-wider">
                Duration
              </th>
              <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100  text-xl font-medium text-gray-600  tracking-wider">
                Status
              </th>
              <th className="px-5 text-center py-3 border-b-2 border-gray-200 bg-gray-100  text-xl font-medium text-gray-600  tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" hover:bg-blue-50">
              <td className="text-center text-sm py-4">1</td>
              <td className="text-center text-sm py-4">
                <span className="font-bold">Code: OFF30</span> <br /> Discount
                an amount
              </td>
              <td className="text-center text-sm py-4">30.00$</td>
              <td className="text-center text-sm py-4">Amount</td>
              <td className="text-center text-sm py-4 text-gray-400">
                04 Jan,2023 - 29 Jun, 2024
              </td>
              <td className="text-center text-sm py-4">
                <button className="text-sm text-center rounded-lg p-2">
                  <On_Off />
                </button>
              </td>
              <td className="text-center py-4">
                <div className="flex gap-4">
                  <i className="ri-eye-line px-2 py-1 cursor-pointer hover:bg-orange-500 hover:text-white rounded border border-orange-500 text-orange-500 "></i>
                  <i className="ri-pencil-fill px-2 py-1 cursor-pointer hover:bg-blue-500  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                  <i className="ri-delete-bin-6-line px-2 py-1 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                </div>
              </td>
            </tr>
            <tr className=" hover:bg-blue-50">
              <td className="text-center text-sm py-4">2</td>
              <td className="text-center text-sm py-4">
                <span className="font-bold">Code: AZA0pG9xIS</span> <br /> 20%
                Discount
              </td>
              <td className="text-center text-sm py-4">20%</td>
              <td className="text-center text-sm py-4">Percent</td>
              <td className="text-center text-sm py-4 text-gray-400">
                04 Jan,2023 - 31 Aug, 2024
              </td>
              <td className="text-center text-sm py-4">
                <button className="text-sm text-center rounded-lg p-2">
                  <On_Off />
                </button>
              </td>
              <td className="text-center py-4">
                <div className="flex gap-4">
                  <i className="ri-eye-line px-2 py-1 cursor-pointer hover:bg-orange-500 hover:text-white rounded border border-orange-500 text-orange-500 "></i>
                  <i className="ri-pencil-fill px-2 py-1 cursor-pointer hover:bg-blue-500  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                  <i className="ri-delete-bin-6-line px-2 py-1 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                </div>
              </td>
            </tr>
            <tr className=" hover:bg-blue-50">
              <td className="text-center text-sm py-4">3</td>
              <td className="text-center text-sm py-4">
                <span className="font-bold">Code: 522000</span> <br /> 100
              </td>
              <td className="text-center text-sm py-4">10%</td>
              <td className="text-center text-sm py-4">Percent</td>
              <td className="text-center text-sm py-4 text-gray-400">
                09 Feb,2021 - 18 Feb, 2021
              </td>
              <td className="text-center text-sm py-4">
                <button className="text-sm text-center rounded-lg p-2">
                  <On_Off />
                </button>
              </td>
              <td className="text-center py-4">
                <div className="flex gap-4">
                  <i className="ri-eye-line px-2 py-1 cursor-pointer hover:bg-orange-500 hover:text-white rounded border border-orange-500 text-orange-500 "></i>
                  <i className="ri-pencil-fill px-2 py-1 cursor-pointer hover:bg-blue-500  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                  <i className="ri-delete-bin-6-line px-2 py-1 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                </div>
              </td>
            </tr>
            <tr className=" hover:bg-blue-50">
              <td className="text-center text-sm py-4">4</td>
              <td className="text-center text-sm py-4">
                <span className="font-bold"> Code: FLASH15 </span> <br />
                Flash Deal 15%
              </td>
              <td className="text-center text-sm py-4">15%</td>
              <td className="text-center text-sm py-4">Percent</td>
              <td className="text-center text-sm py-4 text-gray-400">
                01 Feb,2021 - 01 Dec, 2022
              </td>
              <td className="text-center text-sm py-4">
                <button className="text-sm text-center rounded-lg p-2">
                  <On_Off />
                </button>
              </td>
              <td className="text-center py-4">
                <div className="flex gap-4">
                  <i className="ri-eye-line px-2 py-1 cursor-pointer hover:bg-orange-500 hover:text-white rounded border border-orange-500 text-orange-500 "></i>
                  <i className="ri-pencil-fill px-2 py-1 cursor-pointer hover:bg-blue-500  hover:text-white border rounded border-blue-500 text-blue-500"></i>
                  <i className="ri-delete-bin-6-line px-2 py-1 cursor-pointer hover:bg-red-500 text-red-500 hover:text-white font-bold border rounded border-red-500"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponTable;
