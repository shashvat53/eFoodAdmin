import React, { Fragment, useEffect } from "react";

const PendingDeliveryManTable = ({ data, filter }) => {
  const listArr = [
    "SL",
    "Name",
    "Customer Info",
    "Branch",
    "Identity Type",
    "Identity Number",
    "Identity Image",
    "Status",
    "Actions",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span key={`${elem.sl}-${ind}-${elem.sl}`}>{ind + 1}</span>
        <span key={`${elem.sl}-${ind}-${elem.orderId}`}>{elem.orderId}</span>
        <span
          className="flex flex-col"
          key={`${elem.sl}-${ind}-${elem.deliveryDate}`}
        >
          <span>{elem.deliveryDate}</span>
          <span className="text-xs text-gray-500">{elem.deliveryTime}</span>
        </span>
        <span className="flex flex-col">
             <span>{elem.Costumer?.name}</span>
             <span className="text-xs text-gray-600">{elem.Costumer?.contact}</span>
        </span>
        <span className="bg-yellow-50" key={`${elem.sl}-${ind}-${elem.branch}`}>
          {elem.branch}
        </span>
        <span
          className="flex flex-col"
          key={`${elem.sl}-${ind}-${elem.totalAmount}`}
        >
          <span>{elem.totalAmount}</span>
          <span
            className={`text-xs ${
              elem.paid ? " text-green-500" : "text-red-400"
            }`}
          >
            {elem.paid ? "Paid" : "Unpaid"}
          </span>
        </span>
        <span
          className={`font-semibold ${
            elem.orderStatus.replaceAll(" ", "") === "Confirmed"
              ? "text-green-500"
              : elem.orderStatus.replaceAll(" ", "") === "Pending" || elem.orderStatus.replaceAll(" ", "") === "Processing"
              ? "text-yellow-500"
              : elem.orderStatus.replaceAll(" ", "") === "OutForDelivery"
              ? "text-green-500"
              : elem.orderStatus.replaceAll(" ", "") === "Delivered"
              ? "text-blue-500"
              : elem.orderStatus.replaceAll(" ", "") === "Canceled" || elem.orderStatus.replaceAll(" ", "") === "Returned" ||
              elem.orderStatus.replaceAll(" ", "") === "FailedToDeliver"
              ? "text-red-500"
              : elem.orderStatus.replaceAll(" ", "") === "Scheduled"
              ? "text-blue-500"
              : elem.orderStatus.replaceAll(" ", "") === "Confirmed"
              ? "text-green-500"
              : ""
          }`}
          key={`${elem.sl}-${ind}-${elem.status}`}
        >
          {elem.orderStatus}
        </span>
        <span className="bg-sky-50" key={`${elem.sl}-${ind}-${elem.orderType}`}>
          {elem.orderType}
        </span>
        <span key={`${elem.sl} ${ind}`} className="flex gap-1 justify-evenly">
          <i
            key={`${ind}view`}
            className="ri-eye-line text-green-500 hover:bg-green-200 p-1 rounded-full cursor-pointer"
          ></i>
          <i
            key={`${ind}print`}
            className="ri-printer-line text-blue-500 rounded-full p-1 hover:bg-blue-100 cursor-pointer"
          ></i>
        </span>
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-9 gap-2 bg-blue-100 px-3 py-2 min-w-[980px]">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-9 gap-2  px-3 py-2 min-w-[980px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
        {data ? (
          data.map((elem, ind) => {
            // console.log(elem.orderStatus.replaceAll(' ',''));
            if (
              elem.orderStatus.replaceAll(" ", "") === filter ||
              filter === "All"
            ) {
              return <Fragment key={ind}>
              {Item(elem, ind)}
            </Fragment>;
            }
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default PendingDeliveryManTable;
