import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const Table = ({ data, filter }) => {
  const listArr = [
    "SL",
    "Order ID",
    "Order Date",
    "Branch",
    "Total Amount",
    "Order Status",
    "Order Type",
    "Actions",
  ];
  useEffect(() => {
    // console.log(filter)\
    // console.log(data, "aaa gya data");
  }, []);
  const Item = (elem, ind) => {
    return (
      <>
        <span>{ind + 1}</span>
        <span>{elem.orderCode}</span>
        <span>{elem.createdAt}</span>
        <span className="bg-yellow-50 flex items-center justify-center">{elem.branchId.branchName}</span>
        <span className="flex flex-col">
          <span>{elem.totalOrderPrice}</span>
          {<span className={`text-sm ${elem.paid ?'text-red-400 ':'text-green-500'}`}>
                {elem.paid? 'Unpaid':'Paid'}
              </span> }
        </span>
        <span
          className={`font-semibold ${
            elem?.status?.replaceAll(" ", "") === "Confirmed"
              ? "text-green-500"
              : elem?.status?.replaceAll(" ", "") === "Cooking"
              ? "text-yellow-500"
              : elem?.status?.replaceAll(" ", "") === "ReadyForServe"
              ? "text-green-500"
              : elem?.status?.replaceAll(" ", "") === "Completed"
              ? "text-blue-500"
              : elem?.status?.replaceAll(" ", "") === "Canceled"
              ? "text-red-500"
              : elem?.status?.replaceAll(" ", "") === "OnTable"
              ? "text-green-500"
              : elem?.status?.replaceAll(" ", "") === "Confirmed"
              ? "text-green-500"
              : ""
          }`}
        >{elem.orderStatus}</span>
        <span className="bg-sky-100 rounded flex items-center justify-center ">{elem.orderType}</span>
        <span className="flex gap-1 justify-evenly">
          <Link to={"/order/details/view"}>
            <i className="ri-eye-line text-green-500 hover:bg-green-200 p-1 rounded-full cursor-pointer"></i>
          </Link>
          <Link to={"/order/details/print"}>
            <i className="ri-printer-line text-blue-500 rounded-full p-1 hover:bg-blue-100 cursor-pointer"></i>
          </Link>
        </span>
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-8 gap-2 bg-blue-100 px-3 py-2 min-w-[980px]">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-8 gap-2  px-3 py-2 min-w-[980px] border-[1px] shadow-md rounded-b-md">
        {data ? (
          data?.map((elem, ind) => {
            // console.log(elem.orderStatus.replaceAll(' ',''));
            if (
              elem?.status?.replaceAll(" ", "") === filter ||
              filter === "All"
            ) {
              return <Fragment key={ind}>{Item(elem, ind)}</Fragment>;
            }
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default Table;
