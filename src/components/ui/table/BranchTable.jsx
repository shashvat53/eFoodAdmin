import React, { Fragment, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch";

const BranchTable = ({ data }) => {
  const listArr = [
    "SL",
    "Branch Name",
    "Branch Type",
    "Contact Info",
    "Promotion Campaign",
    "Status",
    "Action",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span >{ind + 1}</span>
        <span>
          <img
            src={elem?.Image}
            alt={elem?.Image}
            className="h-10 w-10 object-fill rounded-sm"
          />
        <span>{elem.BranchName}</span>
        </span>
        <span>{elem.BranchType}</span>
        <span className="text-xs">{elem.ContactInfo}</span>
        <span><ToggleSwitch value={elem.PromotionCampaign}/></span>
        <span><ToggleSwitch value={elem.Status}/></span>
        { elem.BranchType !== 'Main' ?
        <span key={`${elem.sl} ${ind}`} className="flex gap-1 justify-evenly">
          <i
            key={`${ind}view`}
            className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"
          ></i>
          <i
            key={`${ind}print`}
            className="ri-delete-bin-line text-red-500 rounded-md hover:text-white hover:bg-red-500 w-6 h-6 border-[1px] flex items-center justify-center border-red-500 cursor-pointer"
          ></i>
        </span>
        :<span className="text-red-400 font-semibold">No Action Allow</span>}
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-7 gap-2 bg-blue-100 px-3 py-2 min-w-[980px]">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-7 gap-2  px-3 py-2 min-w-[980px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
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

export default BranchTable;
