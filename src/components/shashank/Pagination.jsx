import React from "react";

function Pagination() {
  return (
    <div className="w-full my-6  text-right ">
      <div className="flex justify-end items-center ">
        <nav>
          <ul className="pagination flex gap-10">
            <li className=" disabled" aria-disabled="true">
              <span
                className="p-[8px_20px] page-link cursor-not-allowed  bg-gray-200"
                aria-hidden="true"
              >
                ‹
              </span>
            </li>
            <li className=" active" aria-current="page">
              <span className="page-link p-[8px_20px] bg-green-500  text-white">
                1
              </span>
            </li>
            <li className="">
              <a
                className="page-link p-[8px_20px] hover:bg-green-500 bg-gray-200 hover:text-white"
                href="https://efood-admin.6amtech.com/admin/orders/list/all?page=2"
              >
                2
              </a>
            </li>
            <li className="">
              <a
                className="page-link p-[8px_20px] hover:bg-green-500 bg-gray-200 hover:text-white"
                href="https://efood-admin.6amtech.com/admin/orders/list/all?page=3"
              >
                3
              </a>
            </li>
            <li className="">
              <a
                className="page-link p-[8px_20px] hover:bg-green-500 bg-gray-200 hover:text-white"
                href="https://efood-admin.6amtech.com/admin/orders/list/all?page=4"
              >
                4
              </a>
            </li>
            <li className="">
              <a
                className="page-link p-[8px_20px] hover:bg-green-500 bg-gray-200 hover:text-white"
                href="https://efood-admin.6amtech.com/admin/orders/list/all?page=2"
                aria-label="Next"
              >
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
