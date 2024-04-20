import React from "react";

function SearchExportForm() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-4 my-6">
      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
        <form
          action="https://efood-admin.6amtech.com/admin/orders/list/all"
          method="GET"
          className="relative"
        >
          <input
            id="datatableSearch_"
            type="search"
            name="search"
            className="form-input w-full py-3 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search by Order ID, Order Status or Transaction Reference"
            aria-label="Search"
            value=""
            required
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 px-6 py-3 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
      </div>
      <div className="relative">
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white transition duration-300 ease-in-out"
        >
          <i className="tio-download-to mr-2"></i>
          Export
          <i className="tio-chevron-down ml-2"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-right absolute right-0 hidden bg-white border border-gray-200 rounded-lg shadow-md py-2">
          <li>
            <a
              type="submit"
              className="dropdown-item flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              href="https://efood-admin.6amtech.com/admin/orders/export-excel?status=all"
            >
              <img
                width="14"
                src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/excel.png"
                alt=""
              />
              Excel
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchExportForm;
