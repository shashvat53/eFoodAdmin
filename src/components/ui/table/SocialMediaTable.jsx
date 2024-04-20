import React, { Fragment, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch";

const SocialMediaTable = ({ data }) => {
  
  const listArr = [
    "SL",
    "Name",
    'Link',
    'Status',
    "Action",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span >{ind + 1}</span>
        <span>{elem.name}</span>
        <span>{elem.link}</span>
        <span><ToggleSwitch value={elem.status}/></span>
          <i
            className="ri-pencil-line text-blue-500 hover:bg-blue-500 hover:text-white w-6 h-6 border-[1px] flex items-center justify-center border-blue-500 rounded-md cursor-pointer"
          ></i>
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-5 gap-2 bg-blue-100 px-3 py-2 min-w-[400px]">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-5 gap-2  px-3 py-2 min-w-[400px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
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

export default SocialMediaTable;
