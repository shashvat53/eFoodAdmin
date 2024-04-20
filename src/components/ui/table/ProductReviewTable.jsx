import React, { Fragment, useEffect } from "react";

const ProductReviewTable = ({ data }) => {
  const listArr = [
'SL',	'Product Name',	'Customer Info',	'Review',	'Rating',
  ];

  useEffect(() => {
    // console.log(filter)
  }, []);

  const Item = (elem, ind) => {
    return (
      <>
        <span >{ind + 1}</span>
        
        <span className="flex flex-col">
             <span>{elem.productName}</span>
        </span>
        <span className="bg-yellow-50" >
          {elem.customerInfo.name}
        </span>
       
        
        <span className="bg-sky-50" >
          {elem.customerInfo.rating}
        </span>
        <span  className="flex gap-1 ">
          <i
         
            className="ri-star-fill text-green-500 hover:bg-green-200 p-1 rounded-full cursor-pointer"
          ></i>
          {elem.reviewRating}
        </span>
      </>
    );
  };

  return (
    <div>
      <div className="grid grid-flow-row grid-cols-5 gap-2 bg-blue-100 px-3 py-2 min-w-[980px]">
        {listArr.map((elem, index) => {
          return <span key={index}>{elem}</span>;
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-5 gap-2  px-3 py-2 min-w-[980px] border-[1px] shadow-md rounded-b-md hover:shadow-md">
        {data ? (
          data.map((elem, ind) => {
            // console.log(elem.orderStatus.replaceAll(' ',''));
           
              return <Fragment key={ind}>
              {Item(elem, ind)}
            </Fragment>;
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default ProductReviewTable;
