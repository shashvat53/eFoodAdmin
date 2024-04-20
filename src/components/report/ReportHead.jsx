import React from "react";
import { Link } from "react-router-dom";

const ReportHead = ({ data }) => {
  return (
    <div className="my-2 p-4 border-[1px] border-gray-100 rounded-md shadow flex justify-between items-center">
      <div className="flex gap-4">
        <img
          src={data.link}
          className="h-20"
          alt=""
        />
        <div>
          <h1>{data.page} Report Overview</h1>
          <p className="text-sm">
            <span className="text-gray-600">Admin</span> :{" "}
            <span className="text-red-400"> admin</span>
          </p>
          <p className="text-sm text-gray-500">
            Date:- ( 2024-03-01 12:00:00 AM - 2024-03-30 12:00:00 AM )
          </p>
        </div>
      </div>
      <div>
        <Link
          to="/"
          className="text-2xl text-white aspect-square w-14 h-1w-14 rounded-full bg-red-400 flex items-center justify-center hover:shadow-md"
        >
          <i className="ri-home-4-line"></i>
        </Link>
      </div>
    </div>
  );
};

export default ReportHead;
