import React, { Fragment, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch";
import { Link } from "react-router-dom";

const CustomerListTable = ({ data }) => {
  console.log(data, "69");
  const listArr = [
    "SL",
    "Customer Name",
    "Customer Email",
    "Customer Order ID",
    "Total Order",
    "Total Order Amount",
    "Available Points",
    "Status",
    "Actions",
  ];

  console.log(data);

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        {data.map((product, index) => (
          <span key={index}>
            <span>{index}</span>
            <span>
              {product.firstName} {product.lastName}
            </span>
            <span>{product.emailAddress}</span>
            <span>{product.orderId[0].orderCode}</span>
            <span>{product.totalOrder}</span>
            <span>{product.totalOrderAmount}</span>
            <span>
              <ToggleSwitch value={product?.is_active} />
            </span>
            <span className="flex gap-1 justify-evenly">
              <Link
                to={`/Table/CustomerDetails/${product.orderId[0].orderCode}`}
              >
                <i className="ri-eye-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"></i>
              </Link>
              <i className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"></i>
            </span>
          </span>
        ))}

        {/* <span>
          {data[0].firstName} {data[0].lastName}
        </span>
        <span>{data[0].emailAddress}</span>
        <span>{data[0].orderId[0].orderCode}</span>
        <span>{data[0].totalOrder}</span>
        <span>{data[0].totalOrderAmount}</span>
        <span>
          <ToggleSwitch value={data[0]?.is_active} />
        </span>
        <span className="flex gap-1 justify-evenly">
          <Link to={`/Table/CustomerDetails/${data[0].orderId[0].orderCode}`}>
            <i className="ri-eye-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"></i>
          </Link> 
          <i className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"></i>
        </span> */}
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-8 min-w-[800px] gap-2 bg-blue-100 px-3 py-2 ">
        {listArr.map((data, index) => {
          return <span key={index}>{data}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-8 gap-2  px-3 py-2 min-w-[700px] border-[1px] shadow-md rounded-b-md">
        {data ? (
          data.map((data, ind) => {
            return <Fragment key={ind}>{Item(data, ind)}</Fragment>;
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default CustomerListTable;
