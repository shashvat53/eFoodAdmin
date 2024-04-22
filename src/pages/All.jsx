import React, { useEffect, useState } from "react";
import SelectDateRange from "../components/shashank/SelectDateRange";
import OrderCard from "../components/shashank/OrderCard";
import SearchExportForm from "../components/shashank/SearchExportForm";
import OrderTable from "../components/shashank/OrderTable";
import Footer from "../components/shashank/Footer";
import Pagination from "../components/shashank/Pagination";
import TableData from "../helper/TableData";

const All = () => {
  const [tableData, setTableData] = useState();
  const fetchTableData = async () => {
    try {
      const response = await TableData();
      console.log(response.order, "all data");
      setTableData(response?.order);
    } catch (error) {
      console.log(error, "all error");
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-2 items-center ">
        <h2 className="text-xl mb-0 flex items-center gap-1">
          <img
            width="20"
            className="avatar-img"
            src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/all_orders.png"
            alt=""
          />
          <span className="page-header-title font-semibold">All Orders</span>
        </h2>
        <span className="inline-block py-1 px-2 text-sm font-semibold text-white bg-gray-500 rounded-full shadow-md">
          6
        </span>
      </div>

      <SelectDateRange />
      <div className="grid-flow-row grid md:grid-cols-2 lg:grid-cols-4 grid-col-1 gap-3">
        <OrderCard
          title={"Pendding"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/pending.png"
          }
          number={34}
        />
        <OrderCard
          title={"Confirmed"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/confirmed.png"
          }
          number={14}
        />
        <OrderCard
          title={"Processing"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/packaging.png"
          }
          number={5}
        />
        <OrderCard
          title={"Out for delivery"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/out_for_delivery.png"
          }
          number={2}
        />
        <OrderCard
          title={"Delivered"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/delivered.png"
          }
          number={22}
        />
        <OrderCard
          title={"Canceled"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/canceled.png"
          }
          number={3}
        />
        <OrderCard
          title={"Returned"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/returned.png"
          }
          number={2}
        />
        <OrderCard
          title={"Failed to deliver"}
          imgUrl={
            "https://efood-admin.6amtech.com/public/assets/admin/img/icons/failed_to_deliver.png"
          }
          number={2}
        />
      </div>
      <SearchExportForm />
      <OrderTable tableData={tableData}/>
      <Pagination />
      <Footer />
    </div>
  );
};

export default All;
