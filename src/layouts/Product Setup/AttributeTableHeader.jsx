import React, { useState } from "react";
import AddonModalPopup from "./AddonModalPopup";

const AttributeTableHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <div className="py-3 my-5  bg-white  rounded-lg">
        <div className="flex flex-col sm:flex-row flex-wrap gap-3  sm:justify-between items-start sm:items-center">
          <h5 className="flex items-center gap-2 mb-0 text- font-medium text-gray-900">
            Addon Table
            <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-full">
              1
            </span>
          </h5>
          <div className="flex flex-wrap justify-start sm:justify-end gap-3">
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <div className="relative flex items-stretch flex-grow">
                <input
                  type="search"
                  name="search"
                  id="datatableSearch_"
                  className="py-[6px] sm:py-[0px] form-input block w-full pr-[80px] border pl-[10px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  placeholder="Search by addon name"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#fc6a57] border border-transparent rounded-r-md active:bg-blue-600 hover:bg-[#fc6a57] focus:outline-none focus:shadow-outline-blue"
                >
                  Search
                </button>
              </div>
            </form>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#fc6a57] border border-transparent rounded-md shadow-sm hover:bg-[#fc6a57] focus:outline-none focus:shadow-outline-blue"
            >
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              Add Attribute
            </button>
          </div>
        </div>
      </div>
      <AddonModalPopup isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default AttributeTableHeader;
