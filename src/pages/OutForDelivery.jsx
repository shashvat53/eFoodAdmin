import React, { useEffect, useState } from "react";
import SelectDateRange from "../components/shashank/SelectDateRange";
import SearchExportForm from "../components/shashank/SearchExportForm";
import OrderTable from "../components/shashank/OrderTable";
import Footer from "../components/shashank/Footer";
import Pagination from "../components/shashank/Pagination";
import TableData from "../helper/TableData";

const OutForDelivery = () => {
  const [outForDeliveryData, setOutForDeliveryData] = useState();
  const fetchOutForDeliveryData = async () => {
    try {
      const response = await TableData();
      console.log(response?.order, "out for delivery");
      setOutForDeliveryData(
        response?.order?.filter((res) => res?.orderStatus === "outforDelivery" && res?.orderType === "delivery")
      );
    } catch (error) {
      console.log(error, "outfordelivery error");
    }
  };
  useEffect(() => {
    fetchOutForDeliveryData();
  }, []);
  return (
    <div
      className="py-4 px-4 sm:px-6 lg:px-8
                    "
    >
      <div className="flex flex-wrap gap-2 items-center ">
        <h2 className="text-xl mb-0 flex items-center gap-1">
          <img
            width="20"
            className="avatar-img"
            src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/all_orders.png"
            alt=""
          />
          <span className="page-header-title font-semibold">
            Out For Delivery Orders
          </span>
        </h2>
        <span className="inline-block py-1 px-2 text-sm font-semibold text-white bg-gray-500 rounded-full shadow-md">
          2
        </span>
      </div>

      <SelectDateRange />

      <SearchExportForm />
      <OrderTable tableData={outForDeliveryData} />
      <Pagination />
      <Footer />
    </div>
  );
};

export default OutForDelivery;
