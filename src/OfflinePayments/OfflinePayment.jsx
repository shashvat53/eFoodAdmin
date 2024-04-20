import React, { useState } from "react";
import Pending from "./Pending";
import Denied from "./Denied";

const OfflinePayment = () => {
  const [toggle, setToggle] = useState(1);

  // const toggleTab = (index) => {
  //   // console.log(index);
  //   // console.log(typeof index);
  //   if (index === 1) {
  //     console.log("hii");
  //   } else if (index === 2) {
  //     console.log("hello");
  //   }
  // };

  return (
    <div className="w-full p-2 lg-p-10 overflow-x-hidden">
      <h1 className="text-2xl whitespace-nowrap flex items-center py-4 px-1 md:px-8 gap-4 font-medium">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFO1Y9KH3YuElqA4unlULh4Lhao50x8ctEX-DziYqSWyTQOuIh"
          alt=""
          width="40px"
        />
        Verify Offline Payments
      </h1>
      <div className={`flex flex-wrap	 gap-4 py-4 px-8 text-lg border-b-2	`}>
        <p
          className={`cursor-pointer hover:text-red-400 ${
            toggle === 1 && "border-b-2 border-red-400 text-red-400 pb-4 cursor-pointer"
          }`}
          onClick={() => setToggle(1)}
        >
          Pending Orders
        </p>
        <p
          className={`cursor-pointer hover:text-red-400 ${
            toggle === 2 && "border-b-2 border-red-400 pb-4 text-red-400 cursor-pointer"
          }`}
          onClick={() => setToggle(2)}
        >
          Denied Orders
        </p>
      </div>
      <div className="inline-flex border mt-4  rounded ">
        <input
          className="text-sm border-0 rounded-s-lg outline-none px-2"
          type="text"
          placeholder="Search by Order ID, Order Status or Transaction Reference"
        />

        <p className=" py-4 px-8 text-sm bg-red-500 rounded-r-lg border-0 text-white">
          Search
        </p>
      </div>
      {toggle === 1 ? <Pending /> : <Denied />}
    </div>
  );
};

export default OfflinePayment;
