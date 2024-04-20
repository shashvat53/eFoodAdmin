import React, { useState } from "react";
import CouponTable from "../CouponTable/CouponTable";

const Coupon = () => {
  const [val, setVal] = useState({
    title: "",
    code: "",
    limits: "",
    percentage: "",
    minimumPurchase: "0",
    maximumDiscount: "0",
    startDate: "",
    expireDate: "",
  });

  const changeHandler = (event) => {
    console.log(event.target.value);
    setVal({ ...val, [event.target.name]: [event.target.value] });
  };
  const submitHandle = () => {
    console.log(val);
    setVal({
      title: "",
      code: "",
      limits: "",
      percentage: "",
      minimumPurchase: "",
      maximumDiscount: "",
      startDate: "",
      expireDate: "",
    });
  };
  return (
    <>
      <div className=" overflow-x-hidden  px-2 py-4   text-start">
        <h1 className="text-3xl font-bold whitespace-nowrap">
          <i className="fa-solid fa-light fa-money-bill "></i>Add New Coupon
        </h1>
      </div>
      <div className="border m-4 rounded">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-2 lg:px-8 py-4 w-full gap-1 lg:gap-4 ">
          <div className="flex flex-col min-w-[300px] w-full">
            <label htmlFor="" className="py-2 ">
              Coupon Type
            </label>
            <select name="" id="" className=" border-2 py-2 px-2">
              <option value="">Default</option>
              <option value="">First Order</option>
            </select>
          </div>
          <div className="flex flex-col w-full  min-w-[300px] ">
            <label htmlFor="" className="py-2 ">
              Coupon Title
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2"
              placeholder="New Coupon"
              onChange={changeHandler}
              value={val.title}
              name="title"
            />
          </div>
          <div className="flex flex-col w-full min-w-[300px]">
            <label htmlFor="" className="py-2 ">
              Coupon Code
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2"
              placeholder="Code"
              name="code"
              onChange={changeHandler}
              value={val.code}
            />
          </div>

          <div className="flex flex-col w-full min-w-[300px]">
            <label htmlFor="" className="py-2 ">
              Limits For Same User
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2"
              placeholder="Ex:10"
              name="limits"
              onChange={changeHandler}
              value={val.limits}
            />
          </div>
          <div className="flex flex-col w-full min-w-[300px] ">
            <label htmlFor="" className="py-2 ">
              Discount Type
            </label>
            <select name="" id="" className=" border-2 py-2 px-2">
              <option value="">Percent</option>
              <option value="">Amount</option>
            </select>
          </div>
          <div className="flex flex-col w-full min-w-[300px]">
            <label htmlFor="" className="py-2 ">
              Discount Percentage
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2"
              placeholder="Ex: 50%"
              name="percentage"
              onChange={changeHandler}
              value={val.percentage}
            />
          </div>
          <div className="flex flex-col w-full min-w-[300px]">
            <label htmlFor="" className="py-2 ">
              Minimum Purchase
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2"
              value={val.minimumPurchase}
              onChange={changeHandler}
              name="minimumPurchase"
            />
          </div>
          <div className="flex flex-col w-full min-w-[300px] ">
            <label htmlFor="" className="py-2 ">
              Maximum Discount
            </label>
            <input
              type="text"
              className=" border-2 py-2 px-2"
              value={val.maximumDiscount}
              onChange={changeHandler}
              name="maximumDiscount"
            />
          </div>
          <div className="flex flex-col w-full min-w-[300px]">
            <label htmlFor="" className="py-2 ">
              Start Date
            </label>
            <input
              type="date"
              className=" border-2 py-2 px-2"
              placeholder="yyyy-mm-dd"
              value={val.startDate}
              onChange={changeHandler}
              name="startDate"
            />
          </div>
          <div className="flex flex-col w-full min-w-[300px]">
            <label htmlFor="" className="py-2 ">
              Expire Date
            </label>
            <input
              type="date"
              className=" border-2 py-2 px-2"
              placeholder="yyyy-mm-dd"
              value={val.expireDate}
              onChange={changeHandler}
              name="expireDate"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-end px-2 py-4 ">
          <button className="bg-gray-500 py-2 px-6 rounded hover:bg-gray-400">
            Reset
          </button>
          <button
            className="bg-orange-600 py-2 px-6 rounded hover:bg-orange-500 text-white"
            onClick={submitHandle}
          >
            Submit
          </button>
        </div>
      </div>
      <CouponTable />
    </>
  );
};

export default Coupon;
