import React, { Fragment, useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch";

const CategoryTable = ({ allCategory}) => {
  console.log(allCategory,"6969")
  const listArr = [
    "SL",
    "Category Image",
    "Name",
    "Status",
    "Priority",
    "Action",
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span key={`${elem.sl}-${ind}-${elem.sl}`}>{ind + 1}</span>
        <span>
          <img
            src={elem?.Image}
            alt={elem?.Image}
            className="h-10 w-10 object-fill rounded-sm"
          />
        </span>
        <span>{elem.foodCategoryName}</span>
        <span><ToggleSwitch value={elem.is_active}/></span>
        <span>{elem.Priority}</span>
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
        {allCategory ? (
          allCategory.map((elem, ind) => {
            return <Fragment key={ind}>{Item(elem, ind)}</Fragment>;
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default CategoryTable;
