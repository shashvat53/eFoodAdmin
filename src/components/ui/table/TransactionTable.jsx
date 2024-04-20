import React, { Fragment, useEffect } from "react";

const TransactionTable = ({ data }) => {
  const listArr = [
    "SL", 'Transaction Id', 'Customer', 'Credit', 'Debit', 'Balance', 'Transaction Type', 'Created At',
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span>{ind + 1}</span>
        <span>{elem.TransactionId}</span>
        <span className="text-red-400">{elem.Customer}</span>
        <span className="bg-yellow-50 text-center">{elem.Credit}</span>
        <span >{elem.Debit}</span>
        <span >{elem.Balance}</span>
        <span className="text-xs text-green-400 font-bold">{elem.TransactionType}</span>
        <span className="text-xs">{elem.CreatedAt}</span>
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-8 min-w-[700px] gap-2 bg-blue-100 px-3 py-2 ">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div
      className="grid grid-flow-row grid-cols-8 gap-2  px-3 py-2 min-w-[700px] border-[1px] shadow-md rounded-b-md"
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

export default TransactionTable;
