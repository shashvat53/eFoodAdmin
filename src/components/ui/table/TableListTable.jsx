import React, { Fragment, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch";

const TableListTable = ({ data }) => {
  const listArr = [
    
    "SL",
    "Table Number",
    "Table Capacity",
    "Branch",
    "Status",
    "Action",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);
  const changeToggleValue = (value, id)=>{
    data[id].Status = value
  }

  const Item = (elem, ind) => {
    return (
      <>
        <span >{ind + 1}</span>
        <span>{elem.TableNumber}</span>
        <span>{elem.TableCapacity}</span>
        <span>{elem.Branch}</span>
        <span><ToggleSwitch value={elem.Status} onChange={changeToggleValue} id={ind}/></span>
        <span  className="flex gap-1 justify-evenly">
          <i
            className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"
          ></i>
          <i
           
            className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"
          ></i>
        </span>
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-6 gap-2 bg-blue-100 px-3 py-2 min-w-[980px]">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-6 gap-2  px-3 py-2 min-w-[980px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
        {data ? (
          data.map((elem, ind) => {
            return <Fragment key={ind}>{Item(elem, ind)}</Fragment>;
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default TableListTable;
