import React, { useState } from "react";
import SearchBox from "../components/ui/SearchBox";
import CustomerListJson from "../components/json/CustomerListJson";
import CustomerListTable from "../components/ui/table/CustomerListTable";

const CustomerList = () => {
  const [Data, setData] = useState(CustomerListJson())
  // console.log(Data);
  return (
    <div className="flex flex-col overflow-x-hidden py-5 px-3">
      <h1 className="text-2xl font-semibold pl-3">
        <i className="ri-user-line text-red-400 font-semibold"></i>{" "}
        Customers
      </h1>
      <div className='flex gap-2 justify-between items-center p-3 flex-wrap border-[1px] border-[#ddd] shadow-md my-5 rounded-md'>
      <SearchBox/>
      <button className='border-red-400 hover:bg-red-400 hover:text-white border-2 px-4 py-2 rounded-md text-red-400 flex items-center justify-center gap-2'>
      <i className="ri-download-2-line"></i>
        Export
        <i className="ri-arrow-drop-down-line"></i>
        </button>
    </div>
    <div>
      <CustomerListTable data={Data}/>
    </div>
    </div>
  );
};

export default CustomerList;
