import React, { Fragment, useEffect } from "react";

const CustomerListTable = ({ data }) => {
  const listArr = [
    "SL",
    "Customer Name",
    "Customer Details",
    "Total Order",
    "Total Order Amount",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span>{ind + 1}</span>
        <span>{elem.CustomerName}</span>
        <span>{elem.CustomerDetails}</span>
        <span className="bg-yellow-50 text-center">{elem.TotalOrder}</span>
        <span >{elem.TotalOrderAmount}</span>
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-5 min-w-[700px] gap-2 bg-blue-100 px-3 py-2 ">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div
      className="grid grid-flow-row grid-cols-5 gap-2  px-3 py-2 min-w-[700px] border-[1px] shadow-md rounded-b-md"
        >
      {data ? (
        data.map((elem, ind) => {
          return (
            <Fragment key={ind}>
                {Item(elem, ind)}
              </Fragment>
          );
        })
        ) : (
          <h1>No Data Available</h1>
          )}
          </div>
    </div>
  );
};

export default CustomerListTable;
