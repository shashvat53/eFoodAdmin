import React from "react";
import { Link } from "react-router-dom";

function OrderCard({ title, imgUrl, number }) {
  return (
    <div className="">
      <a
        className="cursor-pointer block h-full bg-white border rounded-lg
        shadow-md hover:shadow-lg transition duration-300 ease-in-out transform
        hover:scale-105"
        to="#"
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h6 className="font-semibold text-lg text-gray-800 flex items-center">
              <img src={imgUrl} alt="dashboard" className=" w-8 h-8 mr-2" />
              {title}
            </h6>
            <span className="text-0661CB font-bold text-xl">{number}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default OrderCard;
