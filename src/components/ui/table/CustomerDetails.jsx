import React, { Fragment, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch";
import User from "./User";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import OrderList from "./OrderList";

function CustomerDetails() {
  const listArr = [
    "SL",
    "Role Name",
    "Modules",
    "Created At",
    "Status",
    "Action",
  ];

  const params = useParams();
  const { name } = params;

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span>{ind + 1}</span>
        <span>{elem.productName}</span>
        <span>{elem.sellingPrice}</span>
        <span>{elem.totalSale}</span>
        <span>{elem.stock}</span>
        <span>
          <ToggleSwitch value={elem.status} />
        </span>
        <span className="flex  gap-3">
          <i className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"></i>
          <i className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"></i>
        </span>
      </>
    );
  };

  return (
    <div>
      <div className=" border-b gray-black">
        <p className="text-xl m-2">
          <i class="fa-solid fa-users m-1 "></i> Customer Details
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center ">
        <div>
          <p className="text-xl m-2">Customer ID </p>
          <p className="text-sm text-gray-500 m-2">
            {" "}
            <i className="fa-solid fa-calendar-days m-1"></i> Joined at : 07 Nov
            2023 17:56:23
          </p>
        </div>

        <div className="flex flex-wrap">
          <a
            href="#"
            class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 m-1 h-max   rounded inline-flex items-center"
          >
            Point History
          </a>

          <a
            href="#"
            class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 m-1 h-max rounded inline-flex items-center"
          >
            <i class="fa-solid fa-house m-1"></i> Dashboard
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center m-1">
        <div className="flex justify-between items-center w-[100%] lg:w-[48%] m-2 rounded-md bg-green-100">
          <div className="m-3">
            <p>WALLET BALANCE</p>
            <p>100.00$</p>
          </div>
          <i class="fa-solid fa-wallet m-3 text-xl"></i>
        </div>
        <div className="flex justify-between items-center w-[100%] lg:w-[48%] m-2 rounded-md bg-red-100">
          <div className="m-3">
            <p>Loyalty Point Bonus</p>
            <p>12</p>
          </div>
          <i class="fa-solid fa-hand-holding-dollar m-3 text-xl"></i>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-[100%] lg:w-[70%] border p-2">
          <div
            className="flex flex-wrap justify-between items-center
           m-3 p-1 border-b"
          >
            <div>
              <p>
                Order list{" "}
                <span className="rounded-lg p-1 bg-gray-200">10</span>
              </p>
            </div>

            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search by Order ID"
                className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 w-64"
              />
              <button className="bg-orange-500 text-white rounded-r-lg px-4 py-2 hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300">
                Search
              </button>
            </div>
          </div>

          <div>
            {/* learn */}
            {/* <Link to=
                                              "/Table/User" >User</Link> */}
            {/* <OrderList /> */}
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[30%] border p-1">
        <div className="flex items-center p-2 m-1 border-b rounded">
          <i class="fa-solid fa-user m-2"></i>
          <p>Anika Tohsin</p>
        </div>
        <div className="flex flex-wrap justify-center items-center p-2">
          <div className="bg-gray-100 rounded-full w-[100px] h-[100px] flex justify-center items-center">
            <i className="fa-solid fa-user m-2 text-5xl text-gray-500"></i>
          </div>
          <div>
            <div className="flex m-2 items-center">
              <i class="fa-solid fa-envelope m-1"></i>
              <p className="m-1">a**********@gmail.comll</p>
            </div>
            <div className="flex m-2 items-center">
              <i class="fa-solid fa-phone m-1"></i>
              <p className="m-1">+8**********</p>
            </div>
            <div className="flex m-2 items-center">
              <i class="fa-solid fa-shopping-bag m-1"></i>
              <p className="m-1">10 order</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center border-b border-t p-2">
            <i class="fa-solid fa-house text-2xl m-1"></i>
            <p className="text-xl m-2">Addresses</p>
          </div>
          <div className="flex items-center px-2">
            <i class="fa-solid fa-house-user m-1 text-gray-600"></i>
            <p className="m-1">Home</p>
          </div>
          <div className="flex items-center px-2">
            <i class="fa-solid fa-phone m-1 text-gray-600"></i>
            <p className="m-1">+8**********</p>
          </div>
          <div className="flex items-center px-2">
            <i class="fa-solid fa-money-bills m-1 text-gray-600"></i>
            <p className="m-1">
              R949+QF8, Mirpur 10 Roundabout, Dhaka 1216, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
